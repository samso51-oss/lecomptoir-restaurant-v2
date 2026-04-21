'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const dishes = [
  {
    name: "[PLAT 1]",
    description: "[Description du plat]",
    price: "[PRIX]",
    tag: "Signature"
  },
  {
    name: "[PLAT 2]", 
    description: "[Description du plat]",
    price: "[PRIX]",
    tag: "Nouveau"
  },
  {
    name: "[PLAT 3]",
    description: "[Description du plat]", 
    price: "[PRIX]",
    tag: "Populaire"
  },
  {
    name: "[PLAT 4]",
    description: "[Description du plat]",
    price: "[PRIX]",
    tag: ""
  }
]

export default function MenuPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 md:px-8 bg-gray-50"
      id="menu"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a962] font-semibold tracking-wider uppercase text-sm">
            Notre Carte
          </span>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-gray-900 mt-4">
            Saveurs d'exception
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Découvrez une sélection de nos plats les plus appréciés
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              ref={el => { cardsRef.current[index] = el }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image placeholder */}
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  <span>Photo {dish.name}</span>
                </div>
                {dish.tag && (
                  <span className="absolute top-4 right-4 bg-[#c9a962] text-black text-xs font-bold px-3 py-1 rounded-full">
                    {dish.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-gray-900">
                    {dish.name}
                  </h3>
                  <span className="text-[#c9a962] font-bold text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-[#c9a962] text-[#c9a962] font-semibold rounded-full hover:bg-[#c9a962] hover:text-black transition-all duration-300">
            Voir la carte complète
          </button>
        </div>
      </div>
    </section>
  )
}
