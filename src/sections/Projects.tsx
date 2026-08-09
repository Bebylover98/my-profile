import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Featured Work</Eyebrow>
          <h2 className="max-w-xl text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Projects I've shipped
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-panel/50 transition-colors hover:border-signal2/50">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-panel2 to-panel lg:aspect-auto lg:border-b-0 lg:border-r">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-contain p-6"
                      />
                    ) : (
                      <span className="font-mono text-6xl font-semibold text-border transition-colors duration-500 group-hover:text-signal/30">
                        {project.index}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-signal/0 transition-colors duration-500 group-hover:bg-signal/5" />
                  </div>

                  <div className="flex flex-col justify-center p-8 sm:p-10">
                    <span className="font-mono text-xs text-faint">{project.index}</span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-signal2"
                        >
                          <Github size={14} /> Code
                        </a>
                      )}
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-xs text-bg transition-colors hover:bg-signal2"
                        >
                          <ExternalLink size={14} /> Visit
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 font-mono text-xs text-faint">
                          <ExternalLink size={14} /> Demo coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
