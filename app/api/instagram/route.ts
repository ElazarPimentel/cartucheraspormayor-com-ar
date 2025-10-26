import { NextRequest, NextResponse } from 'next/server';
import { fetchPostsByHashtag } from '@/lib/instagram';

export const dynamic = 'force-dynamic';

/**
 * Instagram API proxy endpoint
 * Fetches posts from centralized API (boris.pensanta.com)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const hashtag = searchParams.get('hashtag');

    if (!hashtag) {
      return NextResponse.json(
        { success: false, error: 'Hashtag parameter is required' },
        { status: 400 }
      );
    }

    const posts = await fetchPostsByHashtag(hashtag, 12);

    return NextResponse.json({
      success: true,
      data: posts,
      hashtag,
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
