"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { ArrowUpRight, Play } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"
import { profile, youtubeId } from "@/lib/profile"

// The talk and the workshop come from the master profile.
const { talks } = profile
const gradTalk = talks["penn-grad-talk"]
const workshop = talks["oct14-workshop"]
const items = [
  {
    kicker: `${gradTalk.series} · ${gradTalk.format}`,
    title: gradTalk.label,
    body: null,
    url: gradTalk.url,
    linkText: "Watch the talk",
  },
  {
    kicker: `${workshop.format} · ${workshop.dates}`,
    title: workshop.label,
    body: `For ${workshop.host}, ${workshop.mode.toLowerCase()}.`,
    url: workshop.url,
    linkText: "Watch the recording",
  },
]

export default function TalksPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative">
            <SectionWrapper>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-primary-foreground/80">Teaching & Speaking</span>
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 text-balance">
                  Talks and <span className="text-accent">workshops</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Recordings of my talks and workshops on how organizations adopt AI.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* Recordings */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {items.map((item, index) => (
                <SectionWrapper key={item.url} delay={index * 100}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col",
                      "transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5",
                    )}
                  >
                    {/* Video preview: the YouTube thumbnail, opening the video on YouTube */}
                    <div className="relative aspect-video bg-secondary overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${youtubeId(item.url)}/hqdefault.jpg`}
                        alt={`Video preview: ${item.title}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-7 h-7 ml-1" fill="currentColor" />
                        </span>
                      </span>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <span className="text-sm font-medium text-accent">{item.kicker}</span>
                      <h2 className="font-serif text-xl font-medium text-foreground mt-2 mb-3 leading-snug">{item.title}</h2>
                      {item.body && <p className="text-muted-foreground leading-relaxed">{item.body}</p>}
                      <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {item.linkText}
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
