import { useEffect, useRef } from 'react'

/**
 * Tracks the pointer position and writes it to CSS custom properties
 * (--mx, --my) on <html>, so any element can react to cursor position
 * purely in CSS without re-rendering React on every mousemove.
 */
export function useMouseCSSVars() {
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMove = (e: MouseEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
        document.documentElement.style.setProperty('--my', `${e.clientY}px`)
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])
}
