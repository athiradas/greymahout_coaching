"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "It was a privilege to be coached by Athira. After just a few sessions, I saw immediate improvements in my self-confidence and assuredness, and was able to immediately implement some of the insights we uncovered both in my current role and in my long-term career development. She helped me identify and break through the negative self-talk that’s been holding me back professionally and personally. Athira is an exceptional listener, exceedingly empathetic, and showed a high-level of expertise in the areas our discussions took us. Above all I felt safe and trusted when we spoke – I could open up and be as candid as I needed, that I was truly in a safe space. Because of this, our sessions were productive, therapeutic and, best of all, highly enjoyable.",
    author: "Christian P",
    company: "Higher Education Manager, Wharton",
  },
  {
    quote:
      "Athira’s ability to listen and understand my experiences has been invaluable to my personal and professional growth.  Athira moved me closer to being in touch with my feelings and checking in with myself regularly. Professionally Athira has helped me better understand the role fear plays in my career decisions and helped me navigate some challenging moments.",
    author: "Stephanie K",
    company: "Human Performance Manager, Federal Aviation",
  },
  {
    quote:
      "Athira's invaluable support has greatly contributed to the improvement in both my personal life and career. She created a safe and nurturing space where I felt comfortable sharing my deepest concerns. Her exceptional listening skills and empathetic approach allowed me to express my emotions without judgment. Throughout our sessions, she skillfully guided me through the stages of healing, helping me understand and process the trauma. Athira helped me challenge negative thought patterns and core beliefs that were holding me back. Her impact on my life has been profound, both personally and professionally.",
    author: "Anonymous",
    company: "Software Engineer",
  },
  {
    quote:
      "Athira is a fantastic coach! Her guidance was an invaluable part of my ability to advance my coaching practice. I specifically appreciated her patience and the time that she took to understand me as a unique individual. Athira, Thank you for your guidance and expertise!!",
    author: "Holly K",
    company: "Veteneranian, Coach",
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionWrapper>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Left Column */}
            <div className="lg:w-1/3">
              <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                Testimonials
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                Inspiring coaching stories
              </h2>
              <p className="text-primary-foreground/70 mb-8">
                Real transformations from leaders who invested in their growth.
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent text-primary-foreground"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent text-primary-foreground"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <span className="text-sm text-primary-foreground/60 ml-2">
                  {activeIndex + 1} / {testimonials.length}
                </span>
              </div>
            </div>

            {/* Right Column - Testimonial */}
            <div className="lg:w-2/3 relative min-h-[450px] md:min-h-[400px] lg:min-h-[350px]">
              {testimonials.map((testimonial, index) => {
                const isLong = testimonial.quote.length > 400
                const isMedium = testimonial.quote.length > 250

                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-all duration-700",
                      index === activeIndex
                        ? "opacity-100 translate-x-0"
                        : index < activeIndex
                          ? "opacity-0 -translate-x-8"
                          : "opacity-0 translate-x-8"
                    )}
                  >
                    <Quote className="w-10 h-10 text-accent mb-4" />
                    <blockquote
                      className={cn(
                        "font-serif leading-relaxed mb-6",
                        isLong
                          ? "text-lg md:text-xl lg:text-2xl"
                          : isMedium
                            ? "text-xl md:text-2xl lg:text-3xl"
                            : "text-2xl md:text-3xl lg:text-4xl"
                      )}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                        <span className="font-serif text-lg font-medium">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-primary-foreground/60">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* Progress Dots */}
        <div className="flex justify-center lg:justify-end gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setActiveIndex(index)
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-accent"
                  : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
