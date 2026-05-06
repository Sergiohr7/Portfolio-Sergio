import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-20 sm:py-28 bg-white/[0.02] border-y border-white/5"
    >
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-xl">
            <p className="section-eyebrow mb-3">Proyectos</p>
            <h2 className="section-heading">
              Trabajo real, no demos vacías.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Proyectos full-stack centrados en resolver un problema concreto.
            De la idea a producción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article
      className="card p-6 sm:p-7 flex flex-col gap-5 group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header: logo/avatar + número */}
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-gradient-to-br from-brand-500/20 to-purple-500/20 border border-white/10 grid place-items-center shrink-0">
            {project.logo ? (
              <>
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="h-full w-full object-contain p-1.5"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'grid'
                  }}
                />
                <span
                  className="hidden absolute inset-0 place-items-center font-mono text-sm font-bold text-brand-300"
                >
                  {initials}
                </span>
              </>
            ) : (
              <span className="font-mono text-sm font-bold text-brand-300">
                {initials}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>
        <span className="font-mono text-xs text-slate-500 shrink-0 mt-1">
          {String(index + 1).padStart(2, '0')}
        </span>
      </header>

      {/* Descripción */}
      <p className="text-sm text-slate-200 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((t) => (
          <li
            key={t}
            className="text-[11px] font-medium uppercase tracking-wide text-brand-200 bg-brand-500/10 border border-brand-500/20 rounded-full px-2.5 py-1"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  )
}
