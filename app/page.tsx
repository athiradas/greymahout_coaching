import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialCarousel } from "@/components/home/testimonial-carousel"
import { WhatYouGetSection } from "@/components/home/what-you-get-section"
import { ApproachSection } from "@/components/home/approach-section"
import { CoachingProcessSection } from "@/components/home/coaching-process-section"
import { AboutCoachSection } from "@/components/home/about-coach-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <ServicesSection />
        <WhatYouGetSection />
        <ApproachSection />
        <CoachingProcessSection />
        <TestimonialCarousel />
        <AboutCoachSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
