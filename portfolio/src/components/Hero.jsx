import { profile, stats } from '../data/portfolio.js'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
      </div>

      <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Texto */}
        <div className="md:col-span-7 animate-fade-in-up">
          <p className="section-eyebrow mb-4">Hola, soy</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            {profile.name}
            <span className="block text-brand-400 mt-2 text-2xl sm:text-3xl font-bold">
              {profile.role}
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn-primary">
              Ver proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contacto" className="btn-ghost">
              Contactar
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-wider text-slate-400">
                  {s.label}
                </dt>
                <dd className="mt-1 text-base sm:text-lg font-bold text-white">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Foto */}
        <div className="md:col-span-5 relative flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            {/* Halo */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-500/40 via-purple-500/25 to-transparent blur-2xl" />

            {/* Marco con foto en formato retrato 4:5 */}
            <div className="relative w-52 sm:w-64 aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-brand-900/40 animate-float">
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                className="h-full w-full object-cover object-[50%_30%]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.classList.add(
                    'flex','items-center','justify-center','bg-gradient-to-br','from-ink-700','to-brand-900'
                  )
                  e.currentTarget.parentElement.innerHTML +=
                    '<span class="text-6xl font-bold text-brand-300">SH</span>'
                }}
              />
              {/* Vignette inferior para legibilidad del badge */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/80 to-transparent" />
            </div>

            {/* Badge "Disponible" */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 card px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-200">
                Disponible para trabajar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
