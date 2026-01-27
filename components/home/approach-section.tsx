"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export function ApproachSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <SectionWrapper animation="slide-left">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-secondary rounded-3xl p-8 lg:p-12">
                <div className="space-y-8">
                  {/* Grey Mahout Visual - Elephant and Rider Image */}
                  <div className="relative aspect-square max-w-sm mx-auto animate-float">
                    <Image
                      src="/Elephant Rider.png"
                      alt="The Grey Mahout Approach - Elephant and Rider metaphor representing the thinking and emotional sides of leadership"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-serif text-xl font-medium mb-2">The Grey Mahout Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Supporting both your strategy and your inner experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10 animate-float [animation-delay:0.5s]" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/5 rounded-xl -z-10 animate-float [animation-delay:1s]" />
            </div>
          </SectionWrapper>

          {/* Right - Content */}
          <SectionWrapper animation="slide-right">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                My Approach at Grey Mahout
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                Structured transformation.
                <br />
                <span className="gradient-text">Aligning strategy and emotion.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Grey Mahout, coaching is not just good conversations. It is a structured, goal-oriented partnership designed to help you build clarity and traction, even when things feel uncertain.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The name Grey Mahout represents the thinking and emotional sides of leadership, inspired by Jonathan Haidt&apos;s elephant and rider metaphor. Our work supports both: your strategy and your inner experience, so your actions match what you know matters.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                We use evidence-based tools from humanistic psychology, psychodynamics, systems thinking, and adult development, along with practical experiments between sessions. When helpful, we also use data such as stakeholder input or 360 feedback to ground the work in reality.
              </p>

              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              >
                <Link href="/coaching" className="flex items-center gap-2">
                  Learn More About My Approach
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
