"use client"

import { SectionWrapper } from "@/components/ui/section-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is Grey Mahout coaching for?",
    answer:
      "Grey Mahout works with executives, senior leaders, founders, and professionals navigating transitions, complex challenges, or high-growth environments. If you are stepping into a new role, leading change, or working through uncertainty, coaching can help you move forward with clarity and traction.",
  },
  {
    question: "How long does coaching typically last?",
    answer:
      "Engagements typically range from 3 to 12 months. Many clients start with an 8-session commitment and continue based on goals and progress. Sessions are 60 minutes and can be weekly, bi-weekly, or monthly.",
  },
  {
    question: "What is the difference between coaching, mentoring, consulting, and therapy?",
    answer:
      "Coaching is a goal-oriented partnership that supports learning, reflection, and behavior change. Mentoring is guidance from someone with domain experience who shares advice and perspective. Consulting provides expert recommendations and solutions to specific organizational problems. Therapy focuses on mental health and healing, often exploring the past and addressing clinical concerns.",
  },
  {
    question: "Do you provide consulting services?",
    answer:
      "Yes. Grey Mahout offers consulting for system-level challenges, especially around change management and AI adoption. We will clarify whether coaching, consulting, or a blend is most appropriate based on your goals and context.",
  },
  {
    question: "How does Grey Mahout distinguish itself from other coaching services?",
    answer:
      "Grey Mahout is evidence-based and systems-oriented, drawing on humanistic psychology, psychodynamics, adult development, and organizational diagnostics. You also get the benefit of Athira's Silicon Valley experience and research-informed approach to AI integration, with a focus on practical actions that create measurable progress.",
  },
  {
    question: "How do sessions work?",
    answer:
      "Sessions are 60 minutes and typically held virtually via Zoom. Athira is based in the San Francisco Bay Area. In-person sessions are available at Riverpark Tower in downtown San Jose for clients who prefer to meet in person.",
  },
  {
    question: "Do you work with teams or just individuals?",
    answer:
      "Both. Individual coaching supports leaders through transitions, decision-making, communication, and growth. Team coaching supports groups navigating change, strengthening collaboration, and building psychological safety and performance.",
  },
  {
    question: "How much does coaching cost?",
    answer:
      "Investment varies based on the length, frequency, and scope of the engagement. Pricing is discussed transparently during the free compatibility call, and you will have clear options to choose from.",
  },
  {
    question: "What if Grey Mahout is not the right fit?",
    answer:
      "That can happen. If I am not the right fit for your needs, I will recommend a coach from the University of Pennsylvania's Leadership and Organizational Coaching network or another trusted community.",
  },
  {
    question: "How do you use AI in your coaching?",
    answer:
      "AI is primarily used to support 360 feedback synthesis and related analysis, when appropriate. For clients who want it, I also offer an optional chat-based resource that helps you revisit key themes, tools, and takeaways from our work together.",
  },
  {
    question: "Is everything we discuss confidential?",
    answer:
      "Yes. Coaching is confidential by default. If we use any AI-enabled elements (such as 360 synthesis), we will discuss boundaries and consent up front. Grey Mahout follows GDPR and CCPA-aligned practices for data handling.",
  },
  {
    question: "How do I know if we are a good fit?",
    answer:
      "Book a complimentary 30-minute compatibility call. We will discuss your goals, what you are navigating, and whether my approach fits what you need. There is no obligation, just a clear conversation.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Header */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
                FAQ
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Everything you need to know about working with Grey Mahout. 
                Can&apos;t find the answer you&apos;re looking for? Book a compatibility call.
              </p>
            </div>

            {/* Right - Accordion */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-2xl px-6 overflow-hidden data-[state=open]:border-accent/30 transition-colors duration-300"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground py-6 hover:no-underline text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
