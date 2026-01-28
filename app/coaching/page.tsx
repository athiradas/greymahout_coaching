"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Target, Database, Lightbulb, Rocket, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { useState } from "react"
import { cn } from "@/lib/utils"

const processSteps = [
  {
    number: "01",
    title: "Goal Setting",
    icon: Target,
    description: "We define what success looks like for the engagement, and translate it into goals that are specific and actionable.",
    whatWeDo: [
      "Clarify the change you want (role transition, leadership growth, team challenge, decision, conflict)",
      "Identify the outcomes that matter most (for you and for the system around you)",
      "Set short-term goals (next 2-4 weeks) and longer-term goals (2-6 months)",
      "Define what progress will look like in behavior, not just feelings",
    ],
    whatYouLeaveWith: [
      "A clear set of goals and success indicators",
      "A few 'high leverage' focus areas so the work stays focused",
    ],
  },
  {
    number: "02",
    title: "Data Collection",
    icon: Database,
    description: "We ground the work in reality. Depending on your goals, we gather qualitative and quantitative inputs that help us see patterns clearly.",
    whatWeDo: [
      "Stakeholder input (short interviews or written prompts)",
      "360 feedback (when useful)",
      "Performance context and expectations",
      "KPIs, engagement signals, or operational indicators (for leaders/teams)",
      "Team dynamics observations (communication, conflict patterns, decision flow)",
      "Your own reflections and real examples from work (emails, meetings, moments)",
    ],
    whatYouLeaveWith: [
      "A clearer view of what is working, what is not, and what the system is reinforcing",
      "Language to describe the problem accurately (which is half the solution)",
    ],
  },
  {
    number: "03",
    title: "Understanding & Exploration",
    icon: Lightbulb,
    description: "This stage turns data into insight. We connect what we are seeing to your goals and identify the underlying dynamics driving the situation.",
    whatWeDo: [
      "Identify patterns and root causes",
      "Separate symptoms from the real constraint",
      "Notice how mindsets, relationships, and systems are interacting",
      "Explore options and choose the most effective intervention points",
    ],
    whatYouLeaveWith: [
      "A shared diagnosis of what is happening and why",
      "A short list of leverage points to focus on first",
    ],
  },
  {
    number: "04",
    title: "Transformation (Eat your frog)",
    icon: Rocket,
    description: "This is the action stage. We focus on the highest-impact shift first, especially the thing you are most tempted to avoid.",
    whatWeDo: [
      "Practice high-stakes conversations (scripts, role-play, tone, timing)",
      "Build new behaviors through small experiments between sessions",
      "Work with resistance (fear, uncertainty, conflict avoidance, imposter thoughts)",
      "Strengthen decision-making and follow-through",
      "Adjust how you show up in meetings, feedback, conflict, or leadership moments",
    ],
    betweenSessions: [
      "A conversation to initiate",
      "A decision to make with a clear framework",
      "A new habit to test for one week",
      "A reflection prompt to notice patterns in real time",
    ],
    whatYouLeaveWith: [
      "Real behavior change and momentum",
      "Evidence that you can do the hard thing and survive it",
    ],
  },
  {
    number: "05",
    title: "Integration",
    icon: RotateCcw,
    description: "Integration is how change becomes durable. We consolidate learning so you can repeat it without depending on coaching.",
    whatWeDo: [
      "Capture the tools and principles that worked for you",
      "Build your personal 'operating system' for decision-making and communication",
      "Create a plan to sustain progress after coaching ends",
      "Identify future risks and what to do when you hit them",
    ],
    whatYouLeaveWith: [
      "A set of reusable tools and language",
      "A self-coaching approach you can return to",
      "Clear next steps beyond the engagement",
    ],
  },
]

const intersectionLevels = [
  {
    title: "Individual",
    description: "Beliefs, values, identity, self-trust, emotional regulation, leadership style, and personal patterns under stress.",
    examples: "self-doubt, avoidance, clarity, nervous system regulation",
  },
  {
    title: "Interpersonal Relations",
    description: "Communication, influence, conflict, feedback, trust, relationship dynamics, team norms.",
    examples: "misalignment, unclear expectations, conflict, feedback loops",
  },
  {
    title: "Organizational System",
    description: "Org structure, incentives, processes, decision-making, culture, power dynamics, and the context that shapes behavior.",
    examples: "incentives, role confusion, decision rights, process breakdowns",
  },
]

export default function CoachingPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative">
            <SectionWrapper>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-primary-foreground/80">Coaching</span>
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 text-balance">
                  A structured framework for{" "}
                  <span className="text-accent">real change</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10">
                  Coaching at Grey Mahout is personalized, while following a structured framework to ensure clarity, alignment, and measurable progress. The goal is to create real change that holds in the real world: in your decisions, communication, relationships, and daily leadership habits.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Start with a Compatibility Call
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* Compatibility Call */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SectionWrapper animation="slide-left">
                <div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                    Getting Started
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                    Start with a Compatibility Call
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We begin with a short conversation (free 30 minutes) to understand what you are navigating and whether we are a good fit.
                  </p>
                </div>
              </SectionWrapper>
              <SectionWrapper animation="slide-right">
                <div className="bg-secondary rounded-3xl p-8 lg:p-10">
                  <h3 className="font-medium text-foreground mb-6">What we&apos;ll explore:</h3>
                  <ul className="space-y-4">
                    {[
                      "What you are navigating right now",
                      "What a good outcome would look like",
                      "What support you have tried so far",
                      "Whether coaching, consulting, or a blend is the right fit",
                      "Whether we feel like a fit to work together",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-sm text-muted-foreground border-t border-border pt-6">
                    If we decide to move forward, most clients begin with an 8-session engagement (60 minutes each, held weekly or bi-weekly). We can adjust pacing based on your context.
                  </p>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </section>

        {/* 5-Step Process - Interactive */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                  The Method
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-balance">
                  The 5-Step <span className="gradient-text">Iterative Cycle</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  This is not a one-time linear process. We move through these stages in cycles. As you learn and take action, we refine the goals and keep building traction.
                </p>
              </div>
            </SectionWrapper>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Steps Navigation */}
              <SectionWrapper animation="slide-left">
                <div className="space-y-2">
                  {processSteps.map((step, index) => (
                    <button
                      key={step.number}
                      onClick={() => setActiveStep(index)}
                      className={cn(
                        "w-full text-left p-6 rounded-2xl transition-all duration-300",
                        activeStep === index
                          ? "bg-card border border-accent/30 shadow-lg"
                          : "hover:bg-card/50 border border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                            activeStep === index
                              ? "bg-accent text-accent-foreground"
                              : "bg-secondary text-muted-foreground"
                          )}
                        >
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground font-mono">{step.number}</span>
                            <h3 className="font-serif text-lg font-medium">{step.title}</h3>
                          </div>
                        </div>
                        <div className={cn(
                          "w-2 h-2 rounded-full transition-colors duration-300",
                          activeStep === index ? "bg-accent" : "bg-border"
                        )} />
                      </div>
                    </button>
                  ))}
                </div>
              </SectionWrapper>

              {/* Active Step Details */}
              <SectionWrapper animation="slide-right">
                <div className="lg:sticky lg:top-32">
                  <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                        {(() => {
                          const Icon = processSteps[activeStep].icon
                          return <Icon className="w-8 h-8 text-accent" />
                        })()}
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground font-mono">
                          Step {processSteps[activeStep].number}
                        </span>
                        <h3 className="font-serif text-2xl font-medium">{processSteps[activeStep].title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {processSteps[activeStep].description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                          What we do
                        </h4>
                        <ul className="space-y-2">
                          {processSteps[activeStep].whatWeDo.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {processSteps[activeStep].betweenSessions && (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                            Between-session practice
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">You will usually leave each session with 1-2 specific actions:</p>
                          <ul className="space-y-2">
                            {processSteps[activeStep].betweenSessions.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                          What you leave with
                        </h4>
                        <ul className="space-y-2">
                          {processSteps[activeStep].whatYouLeaveWith.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </section>

        {/* Intersection Model */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Visual */}
              <SectionWrapper animation="slide-left">
                <div className="relative aspect-square max-w-md mx-auto group">
                  <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl scale-75 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <Image
                    src="/Coaching Happens Here.png"
                    alt="The Intersection Model - Coaching happens at the intersection of Individual, Interpersonal Relations, and Organizational System"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </SectionWrapper>

              {/* Content */}
              <SectionWrapper animation="slide-right">
                <div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                    The Framework
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                    The Intersection Model
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    At the heart of Grey Mahout is the Intersection Model, which looks at change across three levels. Most leadership challenges live at the intersection of all three.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We identify which level is driving the challenge most right now, then design interventions that match. This is why the work is both practical and deep: it addresses what is happening inside you, between people, and around you.
                  </p>
                  <div className="space-y-6">
                    {intersectionLevels.map((level) => (
                      <div key={level.title} className="border-l-2 border-accent/30 pl-6">
                        <h3 className="font-medium text-foreground">{level.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{level.description}</p>
                        <p className="text-sm text-accent/80 mt-2">
                          <span className="font-medium">If the constraint is here:</span> {level.examples}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </section>

        {/* Duration */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-xl font-medium mb-4">Flexibility and Duration</h3>
              <p className="text-lg text-muted-foreground">
                Most clients see meaningful progress within <span className="font-semibold text-foreground">8 sessions</span>. 
                We will reassess along the way and adjust the scope if you need fewer sessions or want to extend the work.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
