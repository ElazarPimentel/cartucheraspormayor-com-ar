'use client';

import { useEffect, useState } from 'react';
import InstagramCarousel from './InstagramCarousel';
import { groupHashtags, type HashtagGroup } from '@/lib/hashtag-grouper';

export default function InstagramFeedSection() {
  const [groups, setGroups] = useState<HashtagGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAndGroupPosts() {
      try {
        // Fetch all posts from the API
        const response = await fetch('/api/instagram/all');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        const posts = data.data || [];

        // Apply smart grouping algorithm
        const groupedData = groupHashtags(posts);
        setGroups(groupedData);
      } catch (error) {
        console.error('Error loading and grouping posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadAndGroupPosts();
  }, []);

  if (loading) {
    return (
      <div className="carousel-loading">
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (groups.length === 0) {
    return null;
  }

  return (
    <>
      {groups.map((group) => (
        <div key={group.name} className="instagram-carousel">
          <div className="carousel-header">
            <h3>{group.name}</h3>
            <span className="post-count">
              {group.count} producto{group.count !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="carousel-grid">
            {group.posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="carousel-item"
              >
                <div className="carousel-image-wrapper">
                  <img
                    src={
                      post.media_type === 'VIDEO' && post.thumbnail_url
                        ? post.thumbnail_url
                        : post.media_url
                    }
                    alt={post.caption || group.name}
                    className="carousel-image"
                  />
                  {post.media_type === 'VIDEO' && (
                    <div className="video-indicator">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>

                {post.caption && (
                  <div className="carousel-caption">
                    {post.caption.substring(0, 80)}
                    {post.caption.length > 80 ? '...' : ''}
                  </div>
                )}

                {(post.like_count !== undefined || post.comments_count !== undefined) && (
                  <div className="carousel-meta">
                    {post.like_count !== undefined && <span>❤️ {post.like_count}</span>}
                    {post.comments_count !== undefined && (
                      <span>💬 {post.comments_count}</span>
                    )}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
