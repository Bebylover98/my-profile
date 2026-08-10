import { MapPin, Cpu, GraduationCap, Rocket } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const infoCards = [
  { icon: MapPin, label: 'Based in', value: profile.location },
  { icon: Cpu, label: 'Focus', value: profile.focus },
  { icon: GraduationCap, label: 'Education', value: profile.education },
  { icon: Rocket, label: 'Currently building', value: profile.currentlyBuilding },
]

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="sticky top-28">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-panel">
              {/* Profile photo: drop your image at public/profile.jpg — see README "Add your photo" */}
              <img
                src="/profile.jpg"
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget
                  img.style.display = 'none'
                  const fallback = img.nextElementSibling as HTMLElement | null
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-panel2 to-panel">
                <span className="font-mono text-xs text-faint">[PROFILE IMAGE]</span>
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-lg border border-border bg-bg/80 px-3 py-2 backdrop-blur-md">
                <p className="font-mono text-[11px] text-muted">
                  <span className="text-live">●</span> {profile.name}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>About Me</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Who I Am
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-balance leading-relaxed text-muted">
              {profile.bio}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl text-balance leading-relaxed text-muted">
              {profile.goals}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {infoCards.map((card, i) => (
              <Reveal key={card.label} delay={0.1 + i * 0.05}>
                <div className="group rounded-xl border border-border bg-panel/50 p-5 transition-colors hover:border-signal2/50">
                  <card.icon size={18} className="text-signal2" />
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-faint">
                    {card.label}
                  </p>
                  <p className="mt-1 text-sm text-ink">{card.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
