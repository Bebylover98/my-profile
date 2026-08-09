import { motion } from 'framer-motion'

// EDIT ME: update these two links if your handle or number ever changes.
const INSTAGRAM_URL = 'https://www.instagram.com/its_mr.ankityadav'
const WHATSAPP_URL = 'https://wa.me/9779803568924'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.93A9.86 9.86 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11a15.6 15.6 0 0 1-1.62-.6c-2.86-1.24-4.72-4.14-4.86-4.34-.14-.2-1.16-1.55-1.16-2.95 0-1.4.73-2.09 1-2.38.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.2.7-.82.89-1.1.19-.28.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.34Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.5.5.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5.35A6.65 6.65 0 1 0 12 18.65 6.65 6.65 0 0 0 12 5.35Zm0 10.97A4.32 4.32 0 1 1 12 7.68a4.32 4.32 0 0 1 0 8.64Zm6.9-11.2a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0Z" />
    </svg>
  )
}

const links = [
  {
    name: 'WhatsApp',
    href: WHATSAPP_URL,
    Icon: WhatsAppIcon,
    hoverBg: 'hover:bg-[#25D366] hover:border-[#25D366]',
  },
  {
    name: 'Instagram',
    href: INSTAGRAM_URL,
    Icon: InstagramIcon,
    hoverBg: 'hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] hover:border-transparent',
  },
]

// Fixed to the viewport (not the page), so it stays put through scrolling
// and shows on every section since this is a one-page site.
export default function FloatingSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-6"
    >
      {links.map(({ name, href, Icon, hoverBg }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat on ${name}`}
          className={`group relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-panel/80 text-ink shadow-lg backdrop-blur-xl transition-colors duration-300 sm:h-12 sm:w-12 ${hoverBg}`}
        >
          <Icon />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border border-border bg-panel px-2.5 py-1.5 font-mono text-[11px] text-ink opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            {name}
          </span>
        </a>
      ))}
    </motion.div>
  )
}
