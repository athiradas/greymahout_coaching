"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Calendar, Linkedin } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "athiradas@greymahout.com",
    href: "mailto:athiradas@greymahout.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco Bay Area",
    href: null,
  },
  {
    icon: Calendar,
    label: "Sessions",
    value: "Virtual via Zoom or in-person in San Jose",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/athiradas",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative">
            <SectionWrapper>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-primary-foreground/80">Contact</span>
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 text-balance">
                  Let&apos;s Start a{" "}
                  <span className="text-accent">Conversation</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Book a free 30-minute compatibility call to discuss your goals and whether Grey Mahout
                  is the right fit for you. No obligation, just a clear conversation.
                </p>
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* Calendly Booking Section */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <SectionWrapper>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                  Book a Call
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                  Schedule Your Free <span className="gradient-text">Compatibility Call</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose a time that works for you. This 30-minute call is free and comes with no obligation.
                </p>
              </div>
            </SectionWrapper>
            <SectionWrapper>
              <div className="bg-card border border-border rounded-3xl overflow-hidden">
                <iframe
                  src="https://calendly.com/athiradas/discovery-call"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a Compatibility Call"
                  className="w-full"
                />
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <SectionWrapper animation="slide-left">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
                    Get in Touch
                  </h2>

                  <div className="space-y-6 mb-12">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="font-medium text-foreground hover:text-accent transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-secondary rounded-3xl p-8">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                      What to Expect
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      During our compatibility call, we&apos;ll discuss:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "What you are navigating right now",
                        "What a good outcome would look like",
                        "Whether coaching, consulting, or a blend is the right fit",
                        "Whether we feel like a good fit to work together",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionWrapper>

              {/* Contact Form */}
              <SectionWrapper animation="slide-right">
                <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and I&apos;ll get back to you within 24-48 hours.
                  </p>
                  <ContactForm />
                </div>
              </SectionWrapper>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
