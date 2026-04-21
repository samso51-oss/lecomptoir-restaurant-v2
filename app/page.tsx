import Hero from './sections/Hero'
import About from './sections/About'
import MenuPreview from './sections/MenuPreview'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuPreview />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
