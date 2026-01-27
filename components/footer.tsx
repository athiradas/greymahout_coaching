"use client"

import Link from "next/link"
import { Linkedin, Youtube, Mail, ArrowUpRight } from "lucide-react"

const footerLinks = {
  services: [
    { href: "/coaching", label: "Executive Coaching" },
    { href: "/coaching", label: "Team Coaching" },
    { href: "/consulting", label: "AI Consulting" },
  ],
  company: [
    { href: "/about", label: "About Athira" },
    { href: "/blog", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
}

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/athiradas",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.youtube.com/@athira_das",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "mailto:athiradas@greymahout.com",
    label: "Email",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-primary font-serif font-bold text-lg">G</span>
              </div>
              <span className="font-serif text-2xl font-semibold text-primary-foreground">
                Grey Mahout
              </span>
            </Link>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              Evidence-based coaching for leaders navigating growth, transitions, and AI-driven change.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-6">
              Get in Touch
            </h3>
            <p className="text-primary-foreground/70 mb-4">
              Based in San Francisco Bay Area
            </p>
            <a
              href="mailto:athiradas@greymahout.com"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              athiradas@greymahout.com
            </a>
            
            {/* Newsletter hint */}
            <div className="mt-8 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/60">
                Subscribe to the podcast for leadership insights.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-2 hover:underline"
              >
                Explore Resources
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              {new Date().getFullYear()} Grey Mahout. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/50">
              <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
