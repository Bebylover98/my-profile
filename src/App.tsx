import { useEffect, useState } from 'react'
import { useMouseCSSVars } from './hooks/useMousePosition'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import CurrentlyBuilding from './sections/CurrentlyBuilding'
import Journey from './sections/Journey'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  useMouseCSSVars()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen bg-bg">
      <LoadingScreen show={loading} />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentlyBuilding />
        <Journey />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
