'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: 'Plat signature' },
  { id: 2, src: '/images/gallery-2.jpg', alt: 'Ambiance restaurant' },
  { id: 3, src: '/images/gallery-3.jpg', alt: 'Chef au travail' },
  { id: 4, src: '/images/gallery-4.jpg', alt: 'Dessert' },
  { id: 5, src: '/images/gallery-5.jpg', alt: 'Salle principale' },
  { id: 6, src: '/images/gallery-6.jpg', alt: 'Cocktails' },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, i) => {
        if (img) {
          gsap.fromTo(img,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: i * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: img,
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
      className="py-24 px-4 md:px-8 bg-white"
      id="galerie"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a962] font-semibold tracking-wider uppercase text-sm">
            Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-gray-900 mt-4">
            Un aperçu de notre univers
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              ref={el => { imagesRef.current[index] = el }}
              className={`relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 3 ? 'row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`bg-gray-200 flex items-center justify-center ${
                index === 0 || index === 3 ? 'aspect-[3/4]' : 'aspect-square'
              }`}>
                <span className="text-gray-400 text-sm">{image.alt}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full bg-gray-800 rounded-xl aspect-video flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <span className="text-gray-400">
                {galleryImages[selectedImage]?.alt}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
