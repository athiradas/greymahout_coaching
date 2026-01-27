"use client"

import Link from "next/link"
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
                  {/* Grey Mahout Visual - Elephant and Rider Metaphor */}
                  <div className="relative aspect-square max-w-sm mx-auto">
                    {/* Center - The Rider (Thinking) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="font-serif text-sm font-medium text-accent text-center">Strategy & Clarity</span>
                      </div>
                    </div>

                    {/* Surrounding - The Elephant (Emotional) */}
                    {[
                      { label: "Inner Experience", position: "top-4 left-1/2 -translate-x-1/2" },
                      { label: "Evidence-Based", position: "top-1/2 right-4 -translate-y-1/2" },
                      { label: "Practical Actions", position: "bottom-4 left-1/2 -translate-x-1/2" },
                      { label: "Systems Thinking", position: "top-1/2 left-4 -translate-y-1/2" },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className={`absolute ${item.position} w-24 h-24 rounded-full border-2 border-dashed border-border flex items-center justify-center animate-float`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <span className="text-xs font-medium text-muted-foreground text-center px-2">
                          {item.label}
                        </span>
                      </div>
                    ))}

                    {/* Connecting circle */}
                    <svg className="absolute inset-0 w-full h-full" style={{ transform: "rotate(45deg)" }}>
                      <circle
                        cx="50%"
                        cy="50%"
                        r="42%"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-border"
                        strokeDasharray="8 4"
                      />
                    </svg>
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
                Not just good conversations.{" "}
                <span className="gradient-text">Structured transformation.</span>
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
