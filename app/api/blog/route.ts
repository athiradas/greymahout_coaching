import { NextResponse } from "next/server"

export const revalidate = 3600 // Revalidate every hour

interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
  category?: string
}

export async function GET() {
  try {
    const response = await fetch("https://blog.athiradas.com/feed", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed")
    }

    const xml = await response.text()

    // Parse RSS feed
    const posts: BlogPost[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(xml)) !== null) {
      const item = match[1]

      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
                    item.match(/<title>(.*?)<\/title>/)?.[1] || ""

      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || ""

      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ""

      const description = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ||
                          item.match(/<description>(.*?)<\/description>/)?.[1] || ""

      // Clean up description - remove HTML tags and limit length
      const cleanDescription = description
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .trim()
        .slice(0, 200) + (description.length > 200 ? "..." : "")

      posts.push({
        title,
        link,
        pubDate,
        description: cleanDescription,
      })
    }

    return NextResponse.json({ posts: posts.slice(0, 6) }) // Return up to 6 posts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ posts: [], error: "Failed to fetch posts" }, { status: 500 })
  }
}
