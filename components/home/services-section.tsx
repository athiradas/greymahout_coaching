"use client"

import Link from "next/link"
import { ArrowUpRight, Brain, Users, Sparkles } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Brain,
    title: "One-on-one Coaching",
    description:
      "One-on-one coaching for leaders navigating growth, transitions, and complex challenges. We'll work on your goals and translate them into clear priorities, stronger communication, and practical next steps.",
    href: "/coaching",
    features: ["360 feedback", "Psychometric assessments", "Structured reflection tools"],
  },
  {
    icon: Users,
    title: "AI Adoption Team Coaching",
    description:
      "Support for leaders and teams across the organization as they adopt AI and navigate change. We focus on reducing resistance, strengthening collaboration and psychological safety, clarifying roles and workflows, and building habits that make AI a capability, not a threat.",
    href: "/coaching",
    features: ["Reduce resistance", "Strengthen collaboration", "Build psychological safety"],
  },
  {
    icon: Sparkles,
    title: "Change Management & AI Adoption Consulting",
    description:
      "Consulting from both a people and tech perspective. I help companies build a practical 6-month AI adoption roadmap, covering organizational readiness, role and workflow shifts, enablement, governance, and success metrics.",
    href: "/consulting",
    features: ["6-month roadmap", "Role & workflow shifts", "Success metrics"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionWrapper>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                Services
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance">
                Coaching builds capability.{" "}
                <span className="gradient-text">Consulting delivers roadmaps.</span>
              </h2>
            </div>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <SectionWrapper key={service.title} delay={index * 100}>
              <Link
                href={service.href}
                className={cn(
                  "group relative block p-8 lg:p-10 rounded-2xl h-full",
                  "bg-card border border-border",
                  "transition-all duration-500",
                  "hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5",
                  "hover:-translate-y-1"
                )}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent/10">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-medium mb-3 flex items-center gap-3">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
