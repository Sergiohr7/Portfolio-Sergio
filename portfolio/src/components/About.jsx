import { aboutText } from '../data/portfolio.js'

const highlights = [
  {
    title: 'Frontend con criterio',
    text: 'JavaScript moderno, TypeScript y React aplicados a proyectos reales con foco en accesibilidad y rendimiento.',
  },
  {
    title: 'Backend para entender el producto',
    text: 'APIs REST y servicios en Python, persistencia en bases de datos relacionales. No me quedo en la capa visual.',
  },
  {
    title: 'Experiencia previa que suma',
    text: 'Años en logística y atención al cliente: organización, precisión y trato directo con el usuario final.',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="section-eyebrow mb-3">Sobre mí</p>
          <h2 className="section-heading">
            De la logística al desarrollo, sin prisa pero sin rodeos.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Texto principal */}
          <div className="lg:col-span-7">
            <div className="space-y-5 text-slate-300 leading-relaxed text-[17px]">
              {aboutText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Cita */}
            <figure className="mt-10 card p-6 relative">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-400 mb-3"
              >
                <path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-3 4-3 4v4zm10 0c3 0 7-1 7-8V5h-7v8h4c0 4-3 4-3 4v4z" />
              </svg>
              <blockquote className="text-slate-200 leading-relaxed">
                Vengo del mundo no técnico. Eso me ha enseñado disciplina,
                trato con personas y a entender el negocio antes que el
                código.
              </blockquote>
            </figure>
          </div>

          {/* Highlights */}
          <ul className="lg:col-span-5 space-y-4">
            {highlights.map((h) => (
              <li key={h.title} className="card p-5">
                <h3 className="text-sm font-semibold text-white">
                  {h.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  {h.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
