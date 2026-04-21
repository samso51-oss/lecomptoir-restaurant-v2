'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-[family-name:var(--font-playfair)] text-[#c9a962] mb-4">
              [NOM RESTAURANT]
            </h3>
            <p className="text-gray-400 max-w-md mb-6">
              [DESCRIPTION COURTE DU RESTAURANT - Une expérience culinaire unique 
              alliant tradition et modernité]
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c9a962] hover:text-black transition-colors"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#c9a962]">Liens rapides</h4>
            <ul className="space-y-3 text-gray-400">
              {['Accueil', 'Notre histoire', 'La carte', 'Galerie', 'Réserver'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#c9a962]">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>[ADRESSE]</li>
              <li>[TÉLÉPHONE]</li>
              <li>[EMAIL]</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} [NOM RESTAURANT]. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm">
            Site créé avec ❤️ par WebSell
          </p>
        </div>
      </div>
    </footer>
  )
}
