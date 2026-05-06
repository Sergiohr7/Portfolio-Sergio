import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // navigator.clipboard no disponible (contexto inseguro o navegador antiguo)
    }
  }

  return (
    <section
      id="contacto"
      className="py-20 sm:py-28 bg-white/[0.02] border-t border-white/5"
    >
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-eyebrow mb-3">Contacto</p>
          <h2 className="section-heading">
            ¿Hablamos sobre tu próximo proyecto?
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Estoy abierto a oportunidades como desarrollador. Si crees que
            puedo encajar en tu equipo, escríbeme y te respondo lo antes
            posible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-5 gap-4">
          {/* Email: ocupa 3/5 en sm+, full en móvil */}
          <div className="card sm:col-span-3 p-6 flex items-center gap-5 border-brand-500/30 bg-brand-500/[0.06]">
            <span className="grid place-items-center h-14 w-14 rounded-2xl bg-brand-500/20 text-brand-300 shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>

            <div className="min-w-0 flex-1 text-left">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-300">
                Email
              </p>
              <span className="block mt-1 text-base sm:text-[17px] font-semibold text-white break-all">
                {profile.email}
              </span>
              <p
                className={`mt-1 text-xs transition-colors ${
                  copied ? 'text-emerald-300' : 'text-slate-400'
                }`}
                aria-live="polite"
              >
                {copied ? 'Copiado' : 'Respuesta en menos de 24 h'}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Email copiado' : 'Copiar email'}
              className="shrink-0 grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-200 cursor-pointer hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95 transition"
            >
              {copied ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-300">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Ubicación: 2/5 en sm+, full en móvil */}
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(profile.location)}`}
            target="_blank"
            rel="noreferrer"
            className="card sm:col-span-2 p-6 flex items-center gap-4 group"
          >
            <span className="grid place-items-center h-12 w-12 rounded-xl bg-white/5 text-slate-300 group-hover:text-brand-300 transition shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span className="text-left">
              <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                Ubicación
              </span>
              <span className="block text-sm text-slate-200">
                {profile.location}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
