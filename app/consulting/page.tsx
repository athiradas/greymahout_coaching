"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import Link from "next/link"
import { ArrowRight, Check, Users, Brain, BarChart, FileText, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"

const focusAreas = [
  {
    icon: Users,
    title: "Identifying Resistance",
    description:
      "We surface what is creating hesitation or friction: fear of replacement, loss of competence, unclear expectations, misaligned incentives, change fatigue, or lack of psychological safety.",
  },
  {
    icon: Brain,
    title: "Coaching Leaders & Teams",
    description:
      "We build the conditions for adoption: clearer narratives, better communication, stronger collaboration, and practical habits that increase confidence and capability.",
  },
  {
    icon: BarChart,
    title: "AI Maturity Evaluation",
    description:
      "We assess your organization's readiness across areas like leadership alignment, governance, data and tooling, role clarity, skill development, operating rhythms, and change capacity.",
  },
  {
    icon: FileText,
    title: "6-Month Change Plan",
    description:
      "You leave with a clear roadmap for adoption, including priority use cases, milestones and owners, enablement and communication plan, role and workflow shifts.",
  },
]

const roadmapItems = [
  "Priority use cases",
  "Milestones and owners",
  "Enablement and communication plan",
  "Role and workflow shifts",
  "Governance and responsible AI guardrails",
  "Success metrics and feedback loops",
]

export default function ConsultingPage() {
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
                  <span className="text-sm font-medium text-primary-foreground/80">AI Consulting</span>
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 text-balance">
                  AI Integration That{" "}
                  <span className="text-accent">Actually Sticks</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10">
                  AI adoption is rarely a technology problem alone. It is a change problem:
                  roles shift, trust is tested, workflows evolve, and people need clarity on what AI
                  means for their work.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Discuss Your AI Adoption
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* Approach */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SectionWrapper animation="slide-left">
                <div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                    Our Approach
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                    A Tech + People-First Approach
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    My approach combines two perspectives that are often treated separately:
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-2 border-accent pl-6">
                      <h3 className="font-medium text-foreground">Tech-first clarity</h3>
                      <p className="text-muted-foreground mt-1">
                        Understanding the tools, use cases, workflow changes, and the practical
                        realities of implementation.
                      </p>
                    </div>
                    <div className="border-l-2 border-accent pl-6">
                      <h3 className="font-medium text-foreground">People-first adoption</h3>
                      <p className="text-muted-foreground mt-1">
                        Understanding how change lands in the human system: beliefs, incentives,
                        identity, and team dynamics.
                      </p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>

              {/* Visual */}
              <SectionWrapper animation="slide-right">
                <div className="bg-secondary rounded-3xl p-8 lg:p-12">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-56 h-56 rounded-full border-2 border-accent/30 flex items-center justify-center animate-float">
                        <div className="text-center">
                          <span className="font-serif text-3xl font-medium text-accent">AI</span>
                          <span className="block text-sm text-muted-foreground mt-1">Integration</span>
                        </div>
                      </div>
                      <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg animate-float [animation-delay:0.3s]">
                        <span className="text-sm font-medium text-foreground">Tech</span>
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg animate-float [animation-delay:0.6s]">
                        <span className="text-sm font-medium text-foreground">People</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="max-w-3xl mb-16">
                <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                  What We Focus On
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance">
                  From resistance to <span className="gradient-text">readiness</span>
                </h2>
              </div>
            </SectionWrapper>

            <div className="grid md:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => (
                <SectionWrapper key={area.title} delay={index * 100}>
                  <div className={cn(
                    "group bg-card border border-border rounded-2xl p-8 lg:p-10",
                    "transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
                  )}>
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent/10">
                      <area.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SectionWrapper animation="slide-left">
                <div>
                  <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider mb-4 block">
                    Deliverable
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                    A Practical 6-Month Change Plan
                  </h2>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    You leave with a clear roadmap for adoption that covers all aspects of
                    organizational change, from use cases to governance.
                  </p>
                </div>
              </SectionWrapper>

              <SectionWrapper animation="slide-right">
                <div className="bg-primary-foreground/10 rounded-3xl p-8 lg:p-10 border border-primary-foreground/20">
                  <h3 className="font-medium text-primary-foreground mb-6">Your roadmap includes:</h3>
                  <ul className="space-y-4">
                    {roadmapItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-primary-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </section>

        {/* Coaching vs Consulting */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                  Not sure which to choose?
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-balance">
                  Coaching vs. Consulting
                </h2>
              </div>
            </SectionWrapper>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <SectionWrapper animation="slide-left">
                <div className="bg-secondary rounded-3xl p-8 lg:p-10 h-full">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-4">Coaching</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Best for individual leaders and teams who need to build capability, change
                    behavior, and navigate personal or interpersonal challenges during change.
                  </p>
                  <Button asChild variant="outline" className="w-full rounded-full bg-transparent">
                    <Link href="/coaching" className="flex items-center justify-center gap-2">
                      Learn About Coaching
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </SectionWrapper>

              <SectionWrapper animation="slide-right">
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-10 h-full">
                  <h3 className="font-serif text-2xl font-medium mb-4">Consulting</h3>
                  <p className="text-primary-foreground/80 leading-relaxed mb-6">
                    Best for organizations that need a roadmap, implementation support, and
                    system-level solutions for AI adoption and change management.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Start a Conversation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </SectionWrapper>
            </div>

            <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
              Many engagements blend both approaches. We&apos;ll clarify what fits best during the
              compatibility call.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
