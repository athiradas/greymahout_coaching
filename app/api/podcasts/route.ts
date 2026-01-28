import { NextResponse } from "next/server"

export const revalidate = 3600 // Revalidate every hour

interface PodcastEpisode {
  title: string
  link: string
  pubDate: string
  description: string
  platform: "YouTube" | "Spotify"
  thumbnail?: string
}

async function fetchYouTubeVideos(): Promise<PodcastEpisode[]> {
  try {
    // YouTube channel RSS feed for @athira_das
    const response = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCI2Z9Z38dIcbUPt3hISlaMg",
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube feed")
    }

    const xml = await response.text()
    const episodes: PodcastEpisode[] = []

    // Parse YouTube Atom feed (uses <entry> not <item>)
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g
    let match

    while ((match = entryRegex.exec(xml)) !== null && episodes.length < 6) {
      const entry = match[1]

      const title = entry.match(/<title>(.*?)<\/title>/)?.[1] || ""
      const link = entry.match(/<link rel="alternate" href="(.*?)"/)?.[1] || ""
      const published = entry.match(/<published>(.*?)<\/published>/)?.[1] || ""
      const description = entry.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] || ""
      const thumbnail = entry.match(/<media:thumbnail url="(.*?)"/)?.[1] || ""

      // Clean description
      const cleanDescription = description
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .trim()
        .slice(0, 200) + (description.length > 200 ? "..." : "")

      episodes.push({
        title,
        link,
        pubDate: published,
        description: cleanDescription,
        platform: "YouTube",
        thumbnail,
      })
    }

    return episodes
  } catch (error) {
    console.error("Error fetching YouTube videos:", error)
    return []
  }
}

async function fetchSpotifyEpisodes(): Promise<PodcastEpisode[]> {
  // Note: Spotify doesn't provide public RSS feeds directly
  // If you have an Anchor.fm RSS feed URL, add it here
  // For now, returning empty array - YouTube will be the primary source

  // To enable Spotify, you would need to:
  // 1. Find your Anchor.fm RSS feed URL (format: https://anchor.fm/s/SHOW_ID/podcast/rss)
  // 2. Or use Spotify API with proper authentication

  return []
}

export async function GET() {
  try {
    // Fetch from both platforms in parallel
    const [youtubeEpisodes, spotifyEpisodes] = await Promise.all([
      fetchYouTubeVideos(),
      fetchSpotifyEpisodes(),
    ])

    // Combine and sort by date
    let allEpisodes = [...youtubeEpisodes, ...spotifyEpisodes]
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      .slice(0, 6)

    // If no episodes fetched, return fallback static content
    if (allEpisodes.length === 0) {
      allEpisodes = [
        {
          title: "From a Seed to a Forest: Grey Mahout Leadership and Organizational Coaching",
          description: "Athira explains the Grey Mahout coaching method and the philosophy behind evidence-based leadership coaching.",
          platform: "YouTube",
          link: "https://www.youtube.com/@athira_das",
          pubDate: "",
        },
        {
          title: "Navigating AI-Driven Change in Organizations",
          description: "How leaders can support their teams through the uncertainty of AI adoption while maintaining psychological safety.",
          platform: "Spotify",
          link: "https://open.spotify.com/show/5zLwrk8JEHUZT4vQSFc4BU",
          pubDate: "",
        },
        {
          title: "The Intersection Model: Individual, Interpersonal, and Systems",
          description: "Understanding where leadership challenges really live and how to design effective interventions.",
          platform: "YouTube",
          link: "https://www.youtube.com/@athira_das",
          pubDate: "",
        },
      ]
    }

    return NextResponse.json({ episodes: allEpisodes })
  } catch (error) {
    console.error("Error fetching podcasts:", error)
    return NextResponse.json({ episodes: [], error: "Failed to fetch episodes" }, { status: 500 })
  }
}
