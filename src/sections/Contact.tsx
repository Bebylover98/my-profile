import { useState, FormEvent } from 'react'
import { Github, Instagram, Youtube, Linkedin, Facebook, Music2, MessageCircle, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import { socials } from '../data/social'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import MagneticButton from '../components/MagneticButton'

const iconMap = { Github, Instagram, Youtube, Linkedin, Facebook, Music2, MessageCircle }

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // No backend is wired up yet — see README.md "Contact form" section
    // for how to connect this to Formspree, EmailJS, or your own API
    // in a couple of minutes, without exposing any private keys.
    setStatus('sent')
  }

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
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-faint">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-border bg-panel/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-signal2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-faint">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-border bg-panel/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-signal2"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-faint">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-lg border border-border bg-panel/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-signal2"
                placeholder="What's on your mind?"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <MagneticButton type="submit" variant="solid">
                Send Message <ArrowUpRight size={16} />
              </MagneticButton>
              {status === 'sent' && (
                <span className="font-mono text-xs text-live">
                  Message captured — connect a backend to deliver it (see README).
                </span>
              )}
            </div>
          </form>
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
