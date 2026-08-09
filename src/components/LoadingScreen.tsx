import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'

export default function LoadingScreen({ show }: { show: boolean }) {
  const name = profile.name === '[YOUR NAME]' ? 'your.name' : profile.name

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0em' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-mono text-sm text-muted"
          >
            <span className="text-signal2">$</span> booting {name}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
