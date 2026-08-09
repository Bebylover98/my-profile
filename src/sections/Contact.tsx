import { useForm, ValidationError } from '@formspree/react'
import { Github, Instagram, Youtube, Linkedin, Facebook, Music2, MessageCircle, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import { socials } from '../data/social'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import MagneticButton from '../components/MagneticButton'

const iconMap = { Github, Instagram, Youtube, Linkedin, Facebook, Music2, MessageCircle }

// Your Formspree form ID — from https://formspree.io/f/mqpzpqpz
const FORMSPREE_ID = 'mqpzpqpz'

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="max-w-lg text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let's build something together.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Have a project, an idea, or just want to say hi? My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {state.succeeded ? (
            <div className="mt-12 rounded-2xl border border-live/30 bg-live/5 px-6 py-8 text-center">
              <p className="font-display text-lg font-semibold text-ink">Message sent!</p>
              <p className="mt-1 text-sm text-muted">
                Thanks for reaching out — I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-faint">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-border bg-panel/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-signal2"
                    placeholder="Your name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="mt-1.5 block font-mono text-xs text-red-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-faint">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-border bg-panel/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-signal2"
                    placeholder="you@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1.5 block font-mono text-xs text-red-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-faint">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-panel/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-signal2"
                  placeholder="What's on your mind?"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1.5 block font-mono text-xs text-red-400"
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <MagneticButton type="submit" variant="solid">
                  {state.submitting ? 'Sending…' : 'Send Message'}{' '}
                  {!state.submitting && <ArrowUpRight size={16} />}
                </MagneticButton>
                {state.errors && state.errors.getFormErrors().length > 0 && (
                  <span className="font-mono text-xs text-red-400">
                    Something went wrong — please try again.
                  </span>
                )}
              </div>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-border pt-8">
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm text-muted transition-colors hover:text-ink"
            >
              {profile.email}
            </a>
            <div className="flex gap-2">
              {socials.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-signal2 hover:text-ink"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
