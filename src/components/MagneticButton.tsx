import { useRef, useState, ReactNode, MouseEvent as ReactMouseEvent } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'outline'
  className?: string
  type?: 'button' | 'submit'
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'solid',
  className = '',
  type = 'button',
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: ReactMouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.25, y: y * 0.35 })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  const base =
    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors font-body'
  const styles =
    variant === 'solid'
      ? 'bg-ink text-bg hover:bg-signal2 hover:text-ink'
      : 'border border-border text-ink hover:border-signal2'

  const content = (
    <motion.span
      ref={ref as any}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  )
}
