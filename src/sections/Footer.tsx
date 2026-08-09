import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  const name = profile.name === '[YOUR NAME]' ? '[YOUR NAME]' : profile.name

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-faint sm:flex-row">
        <p>
          © {year} {name}. Built from scratch, not a template.
        </p>
        <p className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-live" /> status: online
        </p>
      </div>
    </footer>
  )
}
