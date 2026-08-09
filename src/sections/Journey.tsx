import { motion } from 'framer-motion'
import { timeline } from '../data/journey'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

export default function Journey() {
  return (
    <section id="journey" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>Journey</Eyebrow>
          <h2 className="max-w-xl text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How I got here
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-border sm:left-[11px]" />

          <div className="space-y-14">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.1}>
                <div className="relative flex gap-6 pl-8 sm:pl-12">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-signal2 bg-bg sm:h-6 sm:w-6"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-signal2" />
                  </motion.span>

                  <div>
                    <span className="font-mono text-sm text-signal2">{entry.year}</span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                      {entry.title}
                    </h3>
                    <p className="mt-2 max-w-lg leading-relaxed text-muted">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
