"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  words: string[]
  className?: string
  interval?: number
}

export function AnimatedText({ words, className, interval = 3000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className="inline-block relative overflow-visible pb-[0.15em]">
      <span
        className={cn(
          "inline-block transition-all duration-500",
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
          className
        )}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}
