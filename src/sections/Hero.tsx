import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile, terminalLines } from '../data/profile'
import MagneticButton from '../components/MagneticButton'

function TerminalReadout() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState<string[]>([])

  useEffect(() => {
    if (lineIndex >= terminalLines.length) return
    const full = terminalLines[lineIndex].output
    if (charIndex < full.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setDone((d) => [...d, full])
      setLineIndex((i) => i + 1)
      setCharIndex(0)
    }, 350)
    return () => clearTimeout(t)
  }, [charIndex, lineIndex])

  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-panel/70 backdrop-blur-xl">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 font-mono text-[11px] text-faint">session.log</span>
      </div>
      <div className="space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
        {done.map((line, i) => (
          <div key={i}>
            <span className="text-signal2">{terminalLines[i].prompt}</span>
            <span className="text-muted"> → </span>
            <span className="text-ink">{line}</span>
          </div>
        ))}
        {lineIndex < terminalLines.length && (
          <div>
            <span className="text-signal2">{terminalLines[lineIndex].prompt}</span>
            <span className="text-muted"> → </span>
            <span className="text-ink">
              {terminalLines[lineIndex].output.slice(0, charIndex)}
            </span>
            <span className="inline-block h-3.5 w-1.5 translate-y-0.5 bg-signal2 animate-blink" />
          </div>
        )}
        {lineIndex >= terminalLines.length && (
          <div className="flex items-center gap-2 pt-1 text-live">
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            <span>ready</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" aria-hidden="true" />
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-signal/20 blur-[100px] animate-float"
        aria-hidden="true"
      />
      <div className="noise pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            {profile.availableForCollab ? 'Available for collaboration' : 'Hello, I\'m'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-mono text-sm uppercase tracking-[0.15em] text-signal2"
          >
            {profile.roles.join(' · ')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton onClick={scrollToProjects} variant="solid">
              Explore My Work <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton onClick={scrollToContact} variant="outline">
              Let's Connect
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <TerminalReadout />
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
