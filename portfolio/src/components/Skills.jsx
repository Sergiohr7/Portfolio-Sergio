import { skills } from '../data/portfolio.js'

const categoryMeta = {
  Frontend: {
    description: 'Construyo la capa visual.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  Backend: {
    description: 'Servicios, APIs y datos.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
        <path d="M3 12a9 3 0 0 0 18 0"></path>
      </svg>
    ),
  },
  'Automatización y herramientas': {
    description: 'Flujos automatizados y entorno de trabajo.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
  },
  Otras: {
    description: 'Lo que aporto al equipo.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="section-eyebrow mb-3">Habilidades</p>
          <h2 className="section-heading">Stack técnico, full-stack.</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Trabajo principalmente en frontend con React y TypeScript, y
            entro también en la parte de backend con Python. Estas son las
            tecnologías que uso a día de hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Object.entries(skills).map(([category, items], idx) => {
            const meta = categoryMeta[category] || {}
            return (
              <div
                key={category}
                className="card p-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-brand-500/15 text-brand-300 shrink-0">
                    {meta.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {category}
                    </h3>
                    {meta.description && (
                      <p className="text-xs text-slate-400">
                        {meta.description}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {items.map((name) => (
                    <li
                      key={name}
                      className="inline-flex items-center text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
