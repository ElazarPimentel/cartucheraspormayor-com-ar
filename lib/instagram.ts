/**
 * Instagram API Integration via Centralized Server
 * Fetches posts from boris.pensanta.com (EC2 Instagram API proxy)
 */

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
  thumbnail_url?: string;
}

export interface InstagramFeedResponse {
  data: InstagramPost[];
  error?: string;
}

// Centralized Instagram API endpoint (deployed on EC2)
const INSTAGRAM_API_URL = process.env.NEXT_PUBLIC_INSTAGRAM_API_URL || 'https://boris.pensanta.com';

/**
 * Fetch all media from centralized Instagram API server
 */
export async function fetchInstagramMedia(limit: number = 50): Promise<InstagramPost[]> {
  try {
    const url = `${INSTAGRAM_API_URL}/api/instagram?limit=${limit}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch Instagram posts');
    }

    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    return [];
  }
}

/**
 * Fetch posts filtered by hashtag from centralized API
 * The server handles filtering internally
 */
export async function fetchPostsByHashtag(hashtag: string, limit: number = 12): Promise<InstagramPost[]> {
  try {
    const normalizedHashtag = hashtag.replace('#', '');
    const url = `${INSTAGRAM_API_URL}/api/instagram/${normalizedHashtag}?limit=${limit}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch Instagram posts');
    }

    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram posts by hashtag:', error);
    return [];
  }
}
