"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { ArrowRight, ExternalLink, Youtube, Headphones, BookOpen, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
}

interface PodcastEpisode {
  title: string
  link: string
  pubDate: string
  description: string
  platform: "YouTube" | "Spotify"
}

const platforms = [
  {
    href: "https://blog.athiradas.com/",
    icon: BookOpen,
    title: "Read the Blog",
    subtitle: "blog.athiradas.com",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    href: "https://www.youtube.com/@athira_das",
    icon: Youtube,
    title: "Watch on YouTube",
    subtitle: "@athira_das",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    href: "https://open.spotify.com/show/5zLwrk8JEHUZT4vQSFc4BU",
    icon: Headphones,
    title: "Listen on Spotify",
    subtitle: "Grey Mahout Podcast",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
]

function formatDate(dateString: string) {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return ""
  }
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [podcasts, setPodcasts] = useState<PodcastEpisode[]>([])
  const [loadingPosts, setLoadingPosts] = useState(true)
  const [loadingPodcasts, setLoadingPodcasts] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/blog")
        const data = await response.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setLoadingPosts(false)
      }
    }

    async function fetchPodcasts() {
      try {
        const response = await fetch("/api/podcasts")
        const data = await response.json()
        setPodcasts(data.episodes || [])
      } catch (error) {
        console.error("Error fetching podcasts:", error)
      } finally {
        setLoadingPodcasts(false)
      }
    }

    fetchPosts()
    fetchPodcasts()
  }, [])

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative">
            <SectionWrapper>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-primary-foreground/80">Resources</span>
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 text-balance">
                  Thoughts, Strategies{" "}
                  <span className="text-accent">& Insights</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Explore articles, podcast episodes, and resources on leadership development,
                  organizational change, and AI integration.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* Platform Links */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <SectionWrapper key={platform.title} delay={index * 100}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex items-center gap-4 p-6",
                      "bg-card border border-border rounded-2xl",
                      "hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                    )}
                  >
                    <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center shrink-0", platform.bgColor)}>
                      <platform.icon className={cn("w-7 h-7", platform.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {platform.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{platform.subtitle}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent shrink-0 transition-colors" />
                  </a>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts - Now First */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                    Blog
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium text-balance">
                    Latest Articles
                  </h2>
                </div>
                <Button asChild variant="outline" className="hidden md:inline-flex rounded-full bg-transparent">
                  <a href="https://blog.athiradas.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Read All Articles
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </SectionWrapper>

            {loadingPosts ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
              </div>
            ) : posts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <SectionWrapper key={post.link} delay={index * 100}>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group block p-8 lg:p-10 h-full",
                        "bg-card border border-border rounded-2xl",
                        "hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                      )}
                    >
                      <span className="inline-block text-xs font-medium text-muted-foreground mb-4">
                        {formatDate(post.pubDate)}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{post.description}</p>
                      <span className="inline-flex items-center text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
                        Read more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </a>
                  </SectionWrapper>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                <p>Unable to load blog posts. Please visit the blog directly.</p>
                <Button asChild variant="outline" className="mt-4 rounded-full bg-transparent">
                  <a href="https://blog.athiradas.com/" target="_blank" rel="noopener noreferrer">
                    Visit Blog
                  </a>
                </Button>
              </div>
            )}

            <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline" className="rounded-full bg-transparent">
                <a href="https://blog.athiradas.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Read All Articles
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Podcast Episodes - Now Second */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                    Podcast
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium text-balance">
                    Latest Episodes
                  </h2>
                </div>
                <Button asChild variant="outline" className="hidden md:inline-flex rounded-full bg-transparent">
                  <a
                    href="https://www.youtube.com/@athira_das"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View All Episodes
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </SectionWrapper>

            {loadingPodcasts ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
              </div>
            ) : podcasts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {podcasts.map((episode, index) => (
                  <SectionWrapper key={episode.link || index} delay={index * 100}>
                    <a
                      href={episode.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group block bg-card border border-border rounded-2xl p-6 lg:p-8 h-full",
                        "hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                      )}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        {episode.platform === "YouTube" ? (
                          <Youtube className="w-4 h-4 text-red-500" />
                        ) : (
                          <Headphones className="w-4 h-4 text-green-500" />
                        )}
                        <span className="text-xs font-medium text-muted-foreground uppercase">
                          {episode.platform}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-medium text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {episode.description}
                      </p>
                    </a>
                  </SectionWrapper>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                <p>Unable to load podcast episodes. Please visit the channels directly.</p>
              </div>
            )}

            <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline" className="rounded-full bg-transparent">
                <a
                  href="https://www.youtube.com/@athira_das"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View All Episodes
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
