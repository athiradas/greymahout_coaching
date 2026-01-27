"use client"

import { cn } from "@/lib/utils"

interface LogoMarqueeProps {
  logos: { name: string; className?: string }[]
  className?: string
  speed?: "slow" | "normal" | "fast"
}

export function LogoMarquee({ logos, className, speed = "normal" }: LogoMarqueeProps) {
  const speedClasses = {
    slow: "[animation-duration:60s]",
    normal: "[animation-duration:40s]",
    fast: "[animation-duration:20s]",
  }

  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className={cn("flex animate-marquee", speedClasses[speed])}>
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center justify-center px-8 md:px-12 shrink-0"
          >
            <span className={cn("text-muted-foreground/60 font-semibold text-lg md:text-xl tracking-wide", logo.className)}>
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
