'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Letter by letter animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char')
        gsap.fromTo(chars, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.05,
            ease: "power3.out",
            delay: 0.3
          }
        )
      }

      // Subtitle fade in
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" }
      )

      // CTA button
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 1.8, ease: "back.out(1.7)" }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const titleWords = ["L'Art", "du", "Goût"]
  
  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background with parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-[family-name:var(--font-playfair)] mb-6 whitespace-nowrap"
        >
          {titleWords.map((word, i) => (
            <span key={i} className="char inline-block">
              {word}{i < titleWords.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 opacity-0"
        >
          Une expérience culinaire unique, entre tradition et modernité
        </p>

        <button 
          ref={ctaRef}
          className="px-8 py-4 bg-[#c9a962] text-black font-semibold rounded-full 
                     hover:bg-[#e8d5b5] transition-all duration-300 
                     hover:scale-105 hover:shadow-lg opacity-0"
        >
          Réserver une table
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
