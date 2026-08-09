import { useRef, useState, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const levelColor: Record<string, string> = {
  core: 'bg-live',
  comfortable: 'bg-signal2',
  exploring: 'bg-faint',
}

function TiltCard({
  title,
  note,
  skills,
}: {
  title: string
  note: string
  skills: { name: string; level?: string }[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({ rx: 0, ry: 0 })

  const onMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({ rx: py * -6, ry: px * 6 })
  }

  const reset = () => setStyle({ rx: 0, ry: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={{ rotateX: style.rx, rotateY: style.ry }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      className="rounded-2xl border border-border bg-panel/50 p-7"
    >
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-1 font-mono text-xs text-faint">{note}</p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="group flex items-center gap-2 rounded-full border border-border bg-bg/60 px-3.5 py-2 text-sm text-ink transition-all hover:-translate-y-0.5 hover:border-signal2/60"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${levelColor[skill.level ?? 'exploring']}`}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Skills</Eyebrow>
          <h2 className="max-w-xl text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Tools I reach for
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            A living list — not a scorecard. Dot color roughly signals how deep I've gone
            with each.
          </p>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-faint">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-live" /> core
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal2" /> comfortable
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-faint" /> exploring
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.1}>
              <TiltCard title={group.title} note={group.note} skills={group.skills} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
