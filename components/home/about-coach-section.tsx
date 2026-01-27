"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export function AboutCoachSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <SectionWrapper animation="slide-left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Main Image Card */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/Athira Das.JPG"
                  alt="Athira Das - Leadership & Organizational Coach"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card text-card-foreground rounded-2xl p-6 shadow-xl animate-float [animation-delay:0.5s]">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-serif text-2xl font-semibold text-accent">Meta</div>
                    <div className="text-xs text-muted-foreground">WeWork, Amazon</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-semibold text-accent">UPenn</div>
                    <div className="text-xs text-muted-foreground">MSOD Program</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="absolute -top-4 -left-4 lg:-left-8 flex gap-2">
                <a
                  href="https://www.linkedin.com/in/athiradas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card text-card-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@athira_das"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card text-card-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="mailto:athiradas@greymahout.com"
                  className="w-12 h-12 rounded-full bg-card text-card-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </SectionWrapper>

          {/* Content */}
          <SectionWrapper animation="slide-right">
            <div>
              <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider mb-4 block">
                About the Coach
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                Meet Your Coach
              </h2>
              <div className="space-y-4 text-primary-foreground/80 leading-relaxed mb-8">
                <p className="text-xl md:text-2xl text-primary-foreground font-medium">
                  Hi, I&apos;m Athira Das.
                </p>
                <p>
                  I&apos;m an evidence-based coach specializing in leadership and organizational coaching,
                  with a background in tech and data engineering. I have worked at companies including Meta, WeWork, Amazon,
                  and early-stage startups, and I bring a practical, systems-aware approach grounded in real operating experience.
                </p>
                <p>
                  I&apos;m finishing the MSOD program at the University of Pennsylvania, with a focus on Leadership and Organizational 
                  Coaching. My research on AI integration and its impact on the workplace shapes the way I support leaders and 
                  organizations through AI-driven change. I&apos;m also certified in Integrated Attachment Theory, which strengthens 
                  my work around communication, relationships, and patterns that show up under stress.
                </p>
                <p>
                  I transitioned from the tech industry because I&apos;m deeply curious about how people and organizations grow, 
                  especially during change. Today, I partner with clients to create clarity in uncertainty, lead with more 
                  confidence and care, and build changes that actually stick at the individual, team, and organizational level.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["Tech Background (Meta, WeWork, Startups)", "UPenn MSOD", "Evidence-Based Coaching", "Integrated Attachment Theory Certified"].map((cred) => (
                  <span
                    key={cred}
                    className="px-4 py-2 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/80"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Book a Compatibility Call
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/about">Read My Story</Link>
                </Button>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
