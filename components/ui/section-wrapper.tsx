"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "scale-in" | "slide-left" | "slide-right" | "none"
  delay?: number
}

export function SectionWrapper({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const animationClasses = {
    "fade-up": isVisible ? "animate-fade-up" : "opacity-0 translate-y-8",
    "scale-in": isVisible ? "animate-scale-in" : "opacity-0 scale-95",
    "slide-left": isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-8",
    "slide-right": isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-8",
    none: "",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        animationClasses[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
