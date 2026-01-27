"use client"

import { useState } from "react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"
import { Target, Database, Lightbulb, Rocket, RotateCcw } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Goal Setting",
    icon: Target,
    description:
      "We define what success looks like for this engagement. Both short-term and long-term goals are established with clear outcomes.",
    details: [
      "Clarify the change you want",
      "Identify outcomes that matter most",
      "Set short-term and longer-term goals",
      "Define progress in behavior, not just feelings",
    ],
  },
  {
    number: "02",
    title: "Data Collection",
    icon: Database,
    description:
      "We gather the inputs that matter based on your goals. This can include stakeholder input, performance context, KPIs, employee engagement signals, 360 feedback, team dynamics, and coach observations.",
    details: [
      "Stakeholder input and interviews",
      "360 feedback (when useful)",
      "Performance context and KPIs",
      "Team dynamics observations",
    ],
  },
  {
    number: "03",
    title: "Understanding & Exploration",
    icon: Lightbulb,
    description:
      "We make sense of what the data is showing and how it connects to your goals. We identify patterns, root causes, and leverage points.",
    details: [
      "Identify patterns and root causes",
      "Separate symptoms from real constraints",
      "Explore mindsets and relationships",
      "Choose effective intervention points",
    ],
  },
  {
    number: "04",
    title: "Transformation",
    icon: Rocket,
    description:
      "We focus on the highest-impact actions first. This is where you start practicing new behaviors, leading the conversations you have been avoiding, and making the shifts that move the goal.",
    details: [
      "Practice high-stakes conversations",
      "Build new behaviors through experiments",
      "Work with resistance and fear",
      "Strengthen decision-making",
    ],
  },
  {
    number: "05",
    title: "Integration",
    icon: RotateCcw,
    description:
      "You leave with tools, language, and practices you can reuse. The goal is not dependence on coaching. It is building your capacity to coach yourself over time.",
    details: [
      "Capture tools and principles that worked",
      "Build your personal operating system",
      "Create plan to sustain progress",
      "Identify future risks and solutions",
    ],
  },
]

export function CoachingProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionWrapper>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
              Coaching Process
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-balance">
              What does the coaching{" "}
              <span className="gradient-text">journey look like?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Each coaching engagement is personalized, while following a structured framework to ensure clarity, alignment, and measurable progress.
            </p>
          </div>
        </SectionWrapper>

        {/* Compatibility Call Banner */}
        <SectionWrapper>
          <div className="bg-accent/10 rounded-2xl p-6 mb-12 text-center">
            <h3 className="font-serif text-xl font-medium mb-2">Compatibility Call (Free 30 minutes)</h3>
            <p className="text-muted-foreground">
              We start with a short conversation to understand what you are navigating, what you want from coaching, and whether we are a good fit.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Steps Navigation */}
          <SectionWrapper animation="slide-left">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-4">
                If we decide to move forward, most clients begin with an 8-session engagement. From there, we follow a 5-step iterative cycle:
              </p>
              {steps.map((step, index) => (
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
                        <span className="text-sm text-muted-foreground font-mono">
                          {step.number}
                        </span>
                        <h3 className="font-serif text-xl font-medium">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors duration-300",
                        activeStep === index ? "bg-accent" : "bg-border"
                      )}
                    />
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
                      const Icon = steps[activeStep].icon
                      return <Icon className="w-8 h-8 text-accent" />
                    })()}
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground font-mono">
                      Step {steps[activeStep].number}
                    </span>
                    <h3 className="font-serif text-2xl font-medium">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>

                <div className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Progress</span>
                    <span>{((activeStep + 1) / steps.length * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500 rounded-full"
                      style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Note */}
              <p className="text-sm text-muted-foreground mt-6 text-center">
                Most clients see meaningful progress within 8 sessions. We will reassess along the way and adjust the scope if you need fewer sessions or want to extend the work.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
