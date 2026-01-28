"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float [animation-delay:1s]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-16 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-16 xl:gap-24 max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="lg:flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
              <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                1:1 Coaching
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Team Coaching
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                AI Adoption Consulting
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[1.25] tracking-tight mb-8 animate-fade-up [animation-delay:100ms]">
              Lead through
              <br />
              <span className="relative inline-block pb-2">
                <AnimatedText
                  words={["change", "growth", "transition",]}
                  className="gradient-text"
                />
              </span>
              <br />
              with clarity
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-up [animation-delay:200ms]">
              Evidence-based coaching for career transitions, organizational shifts, and AI-driven change.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up [animation-delay:250ms]">
              I partner with you to set priorities, lead hard conversations, create alignment, and build a practical plan you can execute.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:300ms]">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Book a Free Compatibility Call
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full px-8 h-14 text-base border-2 bg-transparent"
              >
                <Link href="/coaching" className="flex items-center gap-2">
                  Explore My Approach
                </Link>
              </Button>
            </div>

            {/* Proof Strip */}
            <div className="mt-8 animate-fade-up [animation-delay:350ms]">
              <p className="text-sm text-muted-foreground">
                Tech background (Meta, WeWork, Startups) · UPenn MSOD · Evidence-based coaching
              </p>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="mt-12 lg:mt-0 flex justify-center shrink-0 animate-fade-up [animation-delay:200ms]">
            <div className="text-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl -mt-8">
                <Image
                  src="/Athira Das.JPG"
                  alt="Athira Das - Executive Coach & AI Adoption Consultant"
                  fill
                  className="object-cover object-[center_15%]"
                  priority
                  quality={100}
                />
              </div>
              <div className="mt-6">
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  Athira Das
                </h2>
                <p className="text-muted-foreground mt-1">
                  Coach & AI Adoption Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
