import { Check } from "lucide-react"

const challenges = [
  "Protecting a balance you worked hard to create",
  "Feeling not quite ready for the leap",
  "Discomfort with uncertainty and 'what if' thinking",
  "Competing priorities that make decisions harder",
  "Imposter syndrome or self-doubt",
  "Avoiding a hard conversation you know you need to have",
]

const outcomes = [
  "Clear priorities and a plan you can execute",
  "Better communication in high-stakes moments",
  "More alignment with stakeholders and your team",
  "Confidence that feels steady, not performative",
  "A calmer nervous system and stronger self-trust",
  "Tools you can reuse so you are not dependent on coaching",
]

export function WhatYouGetSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            What You&apos;ll Get From Coaching
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Change is constant. Learning to work with it is foundational.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            In high-growth environments, leaders are growing while also helping their teams grow. 
            The challenge is that the human brain prefers certainty. When things shift, it is normal 
            to feel unsettled, anxious, or resistant.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Challenges */}
          <div className="bg-muted rounded-2xl p-8 lg:p-10">
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">
              That resistance often shows up as:
            </h3>
            <ul className="space-y-4">
              {challenges.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="bg-foreground text-primary-foreground rounded-2xl p-8 lg:p-10">
            <h3 className="font-serif text-xl font-medium mb-6">
              What you can expect:
            </h3>
            <ul className="space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-foreground/60 mt-0.5 shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
