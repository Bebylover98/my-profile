import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsTouchDevice } from '../hooks/useIsTouchDevice'

export default function CustomCursor() {
  const isTouch = useIsTouchDevice()
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const ringX = useSpring(mx, { damping: 25, stiffness: 300, mass: 0.5 })
  const ringY = useSpring(my, { damping: 25, stiffness: 300, mass: 0.5 })

  useEffect(() => {
    if (isTouch) return

    const move = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement
      setIsPointer(!!target.closest('a, button, [role="button"], input, textarea'))
    }

    const hide = () => setIsVisible(false)

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', hide)
    }
  }, [isTouch, isVisible, mx, my])

  if (isTouch) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      aria-hidden="true"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.2s' }}
    >
      {/* center dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-ink"
        style={{ x: mx, y: my, translateX: '-50%', translateY: '-50%' }}
      />
      {/* trailing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-signal2"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? 52 : 28,
          height: isPointer ? 52 : 28,
          opacity: isPointer ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}
