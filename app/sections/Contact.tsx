'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Réservation envoyée ! [CONNECTER BACKEND]')
  }

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 md:px-8 bg-gray-900 text-white"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-[#c9a962] font-semibold tracking-wider uppercase text-sm">
              Réserver
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] mt-4 mb-8">
              Réservez votre table
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Pour une expérience culinaire inoubliable, réservez dès maintenant 
              ou contactez-nous pour toute demande spéciale.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a962]/20 rounded-full flex items-center justify-center text-[#c9a962]">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-gray-400">[ADRESSE DU RESTAURANT]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a962]/20 rounded-full flex items-center justify-center text-[#c9a962]">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <p className="text-gray-400">[NUMÉRO DE TÉLÉPHONE]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a962]/20 rounded-full flex items-center justify-center text-[#c9a962]">
                  🕐
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horaires</h4>
                  <p className="text-gray-400">[HORAIRES D'OUVERTURE]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-2xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#c9a962] outline-none"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#c9a962] outline-none"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#c9a962] outline-none"
                  placeholder="+225 XX XX XX XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#c9a962] outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nombre de personnes</label>
              <select
                value={formData.guests}
                onChange={e => setFormData({...formData, guests: e.target.value})}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#c9a962] outline-none"
                required
              >
                <option value="">Sélectionnez</option>
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="3-4">3-4 personnes</option>
                <option value="5-6">5-6 personnes</option>
                <option value="7+">7+ personnes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message (optionnel)</label>
              <textarea
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#c9a962] outline-none h-24 resize-none"
                placeholder="Demandes spéciales, allergies..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#c9a962] text-black font-semibold rounded-lg hover:bg-[#e8d5b5] transition-all duration-300 hover:scale-[1.02]"
            >
              Réserver maintenant
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
