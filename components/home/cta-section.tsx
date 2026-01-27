"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
              Ready to Start?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-balance">
              Ready to navigate your{" "}
              <span className="gradient-text">transition?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Book a free 30-minute compatibility call to explore how Grey Mahout can support you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-16 text-lg"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Book a Free Compatibility Call
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>30-minute call</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>100% confidential</span>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
