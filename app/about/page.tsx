"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"

const timeline = [
  {
    period: "Early Life",
    title: "Growing up in India",
    description:
      "I grew up in a small village in India, where my father encouraged me to focus on possibilities rather than limitations. He also taught me to look for the 'why' behind people's actions instead of judging them.",
  },
  {
    period: "Education",
    title: "Engineering & Analytics",
    description:
      "After my bachelor's degree in Electronics and Biomedical Engineering, I began my career in Bangalore as a data scientist at a startup. I later moved to Chicago for a master's degree in Business Analytics.",
  },
  {
    period: "WeWork",
    title: "Learning to Scale",
    description:
      "My first role in Silicon Valley was at WeWork. Watching a company scale quickly was a crash course in adaptability, resilience, and how leadership decisions shape culture.",
  },
  {
    period: "Meta",
    title: "Building at Scale",
    description:
      "I joined Meta, first on Instagram Ads and later on Social Impact. I saw what it takes to build products and teams that operate at scale. Over time, I was increasingly drawn to understanding the human side of organizations.",
  },
  {
    period: "Transition",
    title: "Discovering Coaching",
    description:
      "That curiosity led me to coaching. I earned my first certification in Integrated Attachment Theory and began coaching alongside my full-time work. Coaching put me in a state of flow.",
  },
  {
    period: "UPenn",
    title: "Graduate Training",
    description:
      "The drive for evidence-based insight brought me to the University of Pennsylvania, where I learned how theory, practice, lifelong learning, and self-reflection come together in effective coaching.",
  },
  {
    period: "Today",
    title: "Grey Mahout",
    description:
      "Today, I support leaders and teams navigating growth, communication challenges, and change. My work is influenced by Carl Rogers' focus on congruence—aligning values with actions.",
  },
]

const credentials = [
  "MSOD (in progress), University of Pennsylvania",
  "Leadership and Organizational Coaching focus",
  "Certified in Integrated Attachment Theory",
  "Former Data Engineer at Meta, WeWork, Amazon",
  "Research focus on AI integration in the workplace",
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SectionWrapper animation="slide-left">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-medium text-primary-foreground/80">About</span>
                  </span>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8">
                    Hi, I&apos;m{" "}
                    <span className="text-accent">Athira Das</span>
                  </h1>
                  <p className="text-xl text-primary-foreground/80 leading-relaxed">
                    I&apos;m an evidence-based coach, finishing the MSOD program in Organizational
                    Dynamics at the University of Pennsylvania, a former data engineer at Meta and
                    WeWork, and a researcher focused on how AI is integrated in the workplace.
                  </p>
                </div>
              </SectionWrapper>

              {/* Photo with social links */}
              <SectionWrapper animation="slide-right">
                <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                  <div className="aspect-square rounded-3xl overflow-hidden relative">
                    <Image
                      src="/Athira Das.JPG"
                      alt="Athira Das - Leadership Coach"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                      <p className="text-xl font-serif font-medium text-primary-foreground">Athira Das</p>
                      <p className="text-sm text-primary-foreground/80 mt-1">Leadership Coach</p>
                    </div>
                  </div>
                  
                  {/* Floating social links */}
                  <div className="absolute -top-4 -left-4 flex gap-2">
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
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  I worked in tech as a data engineer, and today I combine that operating experience
                  with graduate training in leadership and organizational coaching.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  With coaching training from the University of Pennsylvania and a love of research, I
                  partner with leaders, founders, and teams to create the conditions for growth and
                  sustainable change.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="max-w-3xl mb-16">
                <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                  My Journey
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-balance">
                  From data engineering to <span className="gradient-text">coaching</span>
                </h2>
              </div>
            </SectionWrapper>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <SectionWrapper key={item.period} delay={index * 100}>
                    <div className={`relative lg:flex lg:items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}>
                      {/* Content */}
                      <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                        <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-accent/30 transition-colors">
                          <span className="text-sm font-medium text-accent">{item.period}</span>
                          <h3 className="font-serif text-xl font-medium text-foreground mt-2 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                      {/* Empty space for alternating layout */}
                      <div className="hidden lg:block lg:w-1/2" />
                    </div>
                  </SectionWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SectionWrapper animation="slide-left">
                <div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                    Credentials
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-8 text-balance">
                    Background & Training
                  </h2>
                  <ul className="space-y-4">
                    {credentials.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionWrapper>

              <SectionWrapper animation="slide-right">
                <div className="bg-secondary rounded-3xl p-8 lg:p-10">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                    On a personal note
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I live in the Bay Area with my husband, and we recently welcomed a baby girl.
                    Becoming a parent has deepened my perspective on growth, patience, and change.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    If you are ready to grow, inspire, and lead through change with purpose, let&apos;s
                    connect. I&apos;d be honored to support you.
                  </p>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                  Ready to navigate your transition?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-10">
                  Book a free 30-minute compatibility call to explore how Grey Mahout can support you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    <Link href="/coaching">See How Coaching Works</Link>
                  </Button>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
