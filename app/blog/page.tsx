"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { ArrowRight, ExternalLink, Youtube, Headphones, BookOpen, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"

const podcastEpisodes = [
  {
    title: "From a Seed to a Forest: Grey Mahout Leadership and Organizational Coaching",
    description:
      "Athira explains the Grey Mahout coaching method and the philosophy behind evidence-based leadership coaching.",
    platform: "YouTube",
  },
  {
    title: "Navigating AI-Driven Change in Organizations",
    description:
      "How leaders can support their teams through the uncertainty of AI adoption while maintaining psychological safety.",
    platform: "Spotify",
  },
  {
    title: "The Intersection Model: Individual, Interpersonal, and Systems",
    description:
      "Understanding where leadership challenges really live and how to design effective interventions.",
    platform: "YouTube",
  },
]

const blogPosts = [
  {
    title: "Why AI Adoption is a Change Problem, Not a Tech Problem",
    excerpt:
      "Most organizations focus on the tools when implementing AI. But the real challenge is how change lands in the human system.",
    category: "AI Integration",
  },
  {
    title: "The Leader's Guide to Hard Conversations",
    excerpt:
      "How to prepare for, initiate, and follow through on difficult conversations that you've been avoiding.",
    category: "Leadership",
  },
  {
    title: "Building Self-Trust as a Leader",
    excerpt:
      "Imposter syndrome isn't just a feeling—it's a signal. Here's how to build confidence that feels steady, not performative.",
    category: "Personal Growth",
  },
  {
    title: "From Resistance to Readiness: Supporting Your Team Through Change",
    excerpt:
      "Understanding the psychology of resistance and practical strategies for building the conditions for adoption.",
    category: "Change Management",
  },
]

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

export default function BlogPage() {
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
                  Insights on Leadership{" "}
                  <span className="text-accent">& Change</span>
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

        {/* Podcast Episodes */}
        <section className="py-24 lg:py-32">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {podcastEpisodes.map((episode, index) => (
                <SectionWrapper key={index} delay={index * 100}>
                  <article className={cn(
                    "group bg-card border border-border rounded-2xl p-6 lg:p-8",
                    "hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                  )}>
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
                  </article>
                </SectionWrapper>
              ))}
            </div>

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

        {/* Blog Posts */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                    Blog
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium text-balance">
                    Featured Articles
                  </h2>
                </div>
                <Button asChild variant="outline" className="hidden md:inline-flex rounded-full bg-transparent">
                  <a href="https://blog.athiradas.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Read the Blog
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </SectionWrapper>

            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <SectionWrapper key={index} delay={index * 100}>
                  <a
                    href="https://blog.athiradas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group block p-8 lg:p-10",
                      "bg-card border border-border rounded-2xl",
                      "hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                    )}
                  >
                    <span className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-4">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
                      Read more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </a>
                </SectionWrapper>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline" className="rounded-full bg-transparent">
                <a href="https://blog.athiradas.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Read the Blog
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
