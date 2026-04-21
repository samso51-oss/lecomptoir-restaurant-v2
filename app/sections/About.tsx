'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal from left
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Text reveal from right
      gsap.fromTo(textRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 md:px-8 bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            ref={imageRef}
            className="relative overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="aspect-[4/3] bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Image restaurant / chef</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div ref={textRef} className="space-y-6">
            <span className="text-[#c9a962] font-semibold tracking-wider uppercase text-sm">
              Notre Histoire
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-gray-900">
              Une passion transmise depuis 1985
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {'[PERSONNALISER: Description du restaurant. Parler de l\'histoire, la philosophie culinaire, les valeurs, les produits locaux...]'}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {'[PERSONNALISER: Deuxième paragraphe. Équipe, ambiance, engagement qualité...]'}
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-[#c9a962]">35+</span>
                <span className="text-sm text-gray-500">Années d'expérience</span>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-[#c9a962]">50k+</span>
                <span className="text-sm text-gray-500">Clients satisfaits</span>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-[#c9a962]">4.9</span>
                <span className="text-sm text-gray-500">Note moyenne</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
