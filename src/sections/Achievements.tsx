import { Award } from 'lucide-react'
import { stats, achievements } from '../data/journey'
import Reveal from '../components/Reveal'

export default function Achievements() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-panel/50 px-5 py-8 text-center">
                <p className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-faint">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {achievements.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={0.1 + i * 0.06}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-panel/30 p-5">
                  <Award size={16} className="mt-0.5 shrink-0 text-signal2" />
                  <div>
                    <p className="text-sm text-ink">{a.title}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-faint">{a.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
