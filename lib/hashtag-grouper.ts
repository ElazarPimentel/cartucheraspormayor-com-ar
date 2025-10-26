/**
 * Smart Hashtag Grouping Algorithm
 *
 * Goals:
 * 1. Minimize post repetition (each post appears in as few groups as possible)
 * 2. Keep groups reasonably sized (not too big, not too small)
 * 3. Create logical product categories automatically
 *
 * Strategy:
 * - Detect root product keywords (mochilas, cartucheras, botineros, etc.)
 * - Assign each post to its PRIMARY category (most specific hashtag)
 * - Apply size constraints (min 4, max 15 posts per group)
 * - Merge small groups, split large groups
 */

import type { InstagramPost } from './instagram';

export interface HashtagGroup {
  name: string;           // Display name (top 3 hashtags)
  hashtags: string[];     // All hashtags in this group with counts
  topHashtags: string[];  // Top 3 most used hashtags
  posts: InstagramPost[]; // Posts assigned to this group
  count: number;          // Number of posts
}

interface PostHashtagData {
  post: InstagramPost;
  hashtags: string[];
}

// Configuration
const MIN_GROUP_SIZE = 4;   // Minimum posts per group
const MAX_GROUP_SIZE = 15;  // Maximum posts per group (for comfortable scrolling)

// Known product category roots (can be extended)
const CATEGORY_ROOTS = [
  'mochilas',
  'cartucheras',
  'botineros',
  'riñoneras',
  'gorros',
  'cuellos',
  'camperas',
  'canoplas',
  'mates',
  'yerberas',
  'azucareras',
  'neceser',
  'bolso',
  'bandoleras',
  'kits',
];

/**
 * Extract hashtags from a post caption
 */
function extractHashtags(caption: string | undefined): string[] {
  if (!caption) return [];

  const matches = caption.match(/#[\wáéíóúüñÁÉÍÓÚÜÑ]+/g);
  if (!matches) return [];

  return matches.map(tag => tag.substring(1).toLowerCase());
}

/**
 * Find the root category for a hashtag
 * Returns the first matching root, or null if no match
 */
function findRootCategory(hashtag: string): string | null {
  for (const root of CATEGORY_ROOTS) {
    if (hashtag.startsWith(root)) {
      return root;
    }
  }
  return null;
}

/**
 * Get the priority score for a hashtag (more specific = higher score)
 */
function getHashtagPriority(hashtag: string): number {
  // Longer hashtags are usually more specific
  // Hashtags with "con" (conlogo) are more specific
  // Hashtags with "por" (pormayor) are less specific
  let score = hashtag.length;

  if (hashtag.includes('con')) score += 10;
  if (hashtag.includes('personalizado')) score += 5;
  if (hashtag.includes('por')) score -= 5;
  if (hashtag.includes('mayor')) score -= 5;

  return score;
}

/**
 * Assign each post to its PRIMARY category
 * Strategy: Use the most specific hashtag that matches a known category
 */
function assignPrimaryCategories(postsData: PostHashtagData[]): Map<string, InstagramPost[]> {
  const categoryMap = new Map<string, InstagramPost[]>();

  for (const { post, hashtags } of postsData) {
    // Find all hashtags that match known categories
    const categoryMatches = hashtags
      .map(tag => ({ tag, root: findRootCategory(tag), priority: getHashtagPriority(tag) }))
      .filter(item => item.root !== null)
      .sort((a, b) => b.priority - a.priority); // Most specific first

    if (categoryMatches.length > 0) {
      // Assign to the most specific category
      const primaryCategory = categoryMatches[0].root!;

      if (!categoryMap.has(primaryCategory)) {
        categoryMap.set(primaryCategory, []);
      }
      categoryMap.get(primaryCategory)!.push(post);
    } else {
      // No known category - put in "otros"
      if (!categoryMap.has('otros')) {
        categoryMap.set('otros', []);
      }
      categoryMap.get('otros')!.push(post);
    }
  }

  return categoryMap;
}

/**
 * Get the top N most used hashtags from a group of posts
 */
function getTopHashtags(
  posts: InstagramPost[],
  postsData: PostHashtagData[],
  categoryRoot: string,
  topN: number = 3
): string[] {
  const hashtagCounts = new Map<string, number>();

  // Count hashtags that contain the category root
  for (const post of posts) {
    const postData = postsData.find(pd => pd.post.id === post.id);
    if (!postData) continue;

    for (const hashtag of postData.hashtags) {
      if (hashtag.includes(categoryRoot)) {
        hashtagCounts.set(hashtag, (hashtagCounts.get(hashtag) || 0) + 1);
      }
    }
  }

  // If no hashtags match the category root, get all hashtags
  if (hashtagCounts.size === 0) {
    for (const post of posts) {
      const postData = postsData.find(pd => pd.post.id === post.id);
      if (!postData) continue;

      for (const hashtag of postData.hashtags) {
        hashtagCounts.set(hashtag, (hashtagCounts.get(hashtag) || 0) + 1);
      }
    }
  }

  // Sort by count and return top N
  const topTags = Array.from(hashtagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([tag]) => tag);

  // Fallback to category root if still empty
  if (topTags.length === 0) {
    return [categoryRoot];
  }

  return topTags;
}

/**
 * Split a large group into smaller sub-groups
 */
function splitLargeGroup(
  category: string,
  posts: InstagramPost[],
  postsData: PostHashtagData[]
): HashtagGroup[] {
  // Find common sub-patterns in hashtags
  const subPatterns = new Map<string, InstagramPost[]>();

  for (const post of posts) {
    const postData = postsData.find(pd => pd.post.id === post.id);
    if (!postData) continue;

    // Find hashtags that contain the category root
    const categoryTags = postData.hashtags
      .filter(tag => tag.startsWith(category))
      .sort((a, b) => getHashtagPriority(b) - getHashtagPriority(a));

    if (categoryTags.length > 0) {
      const specificTag = categoryTags[0];

      if (!subPatterns.has(specificTag)) {
        subPatterns.set(specificTag, []);
      }
      subPatterns.get(specificTag)!.push(post);
    }
  }

  // Create groups from sub-patterns
  const groups: HashtagGroup[] = [];

  for (const [pattern, groupPosts] of subPatterns.entries()) {
    if (groupPosts.length >= MIN_GROUP_SIZE) {
      const topHashtags = getTopHashtags(groupPosts, postsData, category, 3);
      const displayName = topHashtags.map(tag => `#${tag}`).join(' ');

      groups.push({
        name: displayName,
        hashtags: [pattern],
        topHashtags,
        posts: groupPosts,
        count: groupPosts.length,
      });
    }
  }

  // If splitting didn't help, return original as single group
  if (groups.length === 0 || groups.length === 1) {
    const truncatedPosts = posts.slice(0, MAX_GROUP_SIZE);
    const topHashtags = getTopHashtags(truncatedPosts, postsData, category, 3);
    const displayName = topHashtags.map(tag => `#${tag}`).join(' ');

    return [{
      name: displayName,
      hashtags: [category],
      topHashtags,
      posts: truncatedPosts,
      count: truncatedPosts.length,
    }];
  }

  return groups;
}

/**
 * Main grouping algorithm
 */
export function groupHashtags(posts: InstagramPost[]): HashtagGroup[] {
  // Step 1: Extract hashtags from all posts
  const postsData: PostHashtagData[] = posts.map(post => ({
    post,
    hashtags: extractHashtags(post.caption),
  }));

  // Step 2: Assign each post to its primary category
  const categoryMap = assignPrimaryCategories(postsData);

  // Step 3: Process categories and apply size constraints
  const groups: HashtagGroup[] = [];
  const smallGroups: { category: string; posts: InstagramPost[] }[] = [];

  for (const [category, categoryPosts] of categoryMap.entries()) {
    if (categoryPosts.length < MIN_GROUP_SIZE) {
      // Too small - save for merging later
      smallGroups.push({ category, posts: categoryPosts });
    } else if (categoryPosts.length > MAX_GROUP_SIZE) {
      // Too large - split into sub-groups
      const subGroups = splitLargeGroup(category, categoryPosts, postsData);
      groups.push(...subGroups);
    } else {
      // Just right - create group
      const topHashtags = getTopHashtags(categoryPosts, postsData, category, 3);
      const displayName = topHashtags.map(tag => `#${tag}`).join(' ');

      groups.push({
        name: displayName,
        hashtags: [category],
        topHashtags,
        posts: categoryPosts,
        count: categoryPosts.length,
      });
    }
  }

  // Step 4: Merge small groups into "Otros" or merge related categories
  if (smallGroups.length > 0) {
    const otrosPosts: InstagramPost[] = [];
    const otrosCategories: string[] = [];

    for (const { category, posts: groupPosts } of smallGroups) {
      otrosPosts.push(...groupPosts);
      otrosCategories.push(category);
    }

    if (otrosPosts.length >= MIN_GROUP_SIZE) {
      // Get top hashtags from all small groups combined
      const allOtrosHashtags = new Map<string, number>();

      for (const post of otrosPosts) {
        const postData = postsData.find(pd => pd.post.id === post.id);
        if (!postData) continue;

        for (const hashtag of postData.hashtags) {
          allOtrosHashtags.set(hashtag, (allOtrosHashtags.get(hashtag) || 0) + 1);
        }
      }

      const topHashtags = Array.from(allOtrosHashtags.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([tag]) => tag);

      const displayName = topHashtags.map(tag => `#${tag}`).join(' ');

      groups.push({
        name: displayName,
        hashtags: otrosCategories,
        topHashtags,
        posts: otrosPosts,
        count: otrosPosts.length,
      });
    }
  }

  // Step 5: Sort by count (most popular first)
  groups.sort((a, b) => b.count - a.count);

  return groups;
}
