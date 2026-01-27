"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Check, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      interest: formData.get("interest") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again or email directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-serif text-xl font-medium text-foreground mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="h-12"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company / Role</Label>
          <Input
            id="company"
            name="company"
            placeholder="Where you work"
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interest">I&apos;m interested in *</Label>
          <select
            id="interest"
            name="interest"
            required
            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select an option</option>
            <option value="coaching">Executive Coaching</option>
            <option value="team-coaching">Team Coaching</option>
            <option value="consulting">AI Adoption Consulting</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me a bit about what you're navigating and what you're looking for..."
          required
          className="min-h-[150px] resize-none"
        />
      </div>

      {error && (
        <div className="bg-destructive/10 text-destructive text-sm p-4 rounded-lg">
          {error}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full h-12" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Or email directly at{" "}
        <a href="mailto:athiradas@greymahout.com" className="text-accent hover:underline">
          athiradas@greymahout.com
        </a>
      </p>
    </form>
  )
}
