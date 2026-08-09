export default function Eyebrow({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-signal2">
      <span className="h-px w-6 bg-signal2/60" aria-hidden="true" />
      {children}
    </div>
  )
}
