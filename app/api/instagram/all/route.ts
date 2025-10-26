import { NextResponse } from 'next/server';
import { fetchInstagramMedia } from '@/lib/instagram';

export const dynamic = 'force-dynamic';

/**
 * Fetch all Instagram posts (not filtered by hashtag)
 * Used for hashtag extraction and analysis
 */
export async function GET() {
  try {
    const posts = await fetchInstagramMedia(50);

    return NextResponse.json({
      success: true,
      data: posts,
      count: posts.length,
    });

  } catch (error) {
    console.error('Instagram API error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch Instagram posts',
        data: [],
      },
      { status: 500 }
    );
  }
}
