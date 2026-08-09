import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <nav
          className={`flex w-[92%] max-w-4xl items-center justify-between rounded-full border border-border/80 bg-panel/60 px-5 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-2.5'
          }`}
        >
          <button
            onClick={() => scrollTo('home')}
            className="font-display text-sm font-semibold tracking-tight text-ink"
          >
            {profile.name === '[YOUR NAME]' ? 'your.name' : profile.name}
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`relative rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                    active === item.id ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-panel2 border border-border"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal2 md:block"
          >
            Say hi
          </button>

          <button
            className="text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md md:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`font-display text-3xl font-medium ${
                      active === item.id ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
