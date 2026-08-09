import { motion } from 'framer-motion'
import { currentlyBuilding } from '../data/projects'
import Reveal from '../components/Reveal'

export default function CurrentlyBuilding() {
  return (
    <section className="relative px-6 pb-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-signal/30 bg-gradient-to-br from-panel via-panel to-signal/[0.06] p-8 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-live/30 bg-live/10 px-3 py-1 font-mono text-xs text-live">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
                  </span>
                  {currentlyBuilding.status}
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {currentlyBuilding.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted">
                  {currentlyBuilding.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {currentlyBuilding.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-xs shrink-0">
                <div className="flex items-center justify-between font-mono text-xs text-muted">
                  <span>Progress</span>
                  <span>{currentlyBuilding.progress}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-panel2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${currentlyBuilding.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-signal to-signal2"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
