"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-dark/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="/" className="flex-shrink-0 flex items-center gap-3">
          <img
            src="/imgs/28b9654d-f8c0-46b9-9084-0f3ea4746fd0.png"
            alt="Logo Clínica Oscar Dental"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className={`font-heading text-xl font-bold tracking-wide ${scrolled ? "text-dark" : "text-white"}`}>
            Clínica <span className="text-primary">Oscar Dental</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Menú principal">
          <a href="/" className={`transition-colors text-sm font-medium ${scrolled ? "text-dark-muted hover:text-dark" : "text-white/80 hover:text-white"}`}>Inicio</a>
          <a href="/nosotros" className={`transition-colors text-sm font-medium ${scrolled ? "text-dark-muted hover:text-dark" : "text-white/80 hover:text-white"}`}>Nosotros</a>
          <a href="/servicios" className={`transition-colors text-sm font-medium ${scrolled ? "text-dark-muted hover:text-dark" : "text-white/80 hover:text-white"}`}>Servicios</a>
          <a href="/contacto" className={`transition-colors text-sm font-medium ${scrolled ? "text-dark-muted hover:text-dark" : "text-white/80 hover:text-white"}`}>Contacto</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/oscardental.soluciones/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${scrolled ? "text-dark-muted hover:text-primary" : "text-white/60 hover:text-white"}`}
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/clinicadentalcasolay"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${scrolled ? "text-dark-muted hover:text-primary" : "text-white/60 hover:text-white"}`}
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
          <a
            href="https://wa.me/51947922617"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            CONTACTO
          </a>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-dark" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className={`lg:hidden border-t px-4 pb-4 ${scrolled ? "bg-white border-light-border" : "bg-dark-card border-dark-border"}`} aria-label="Menú móvil">
          <a href="/" className={`block py-3 text-sm transition-colors ${scrolled ? "text-dark-muted hover:text-dark border-b border-light-border" : "text-white/80 hover:text-white border-b border-dark-border"}`}>Inicio</a>
          <a href="/nosotros" className={`block py-3 text-sm transition-colors ${scrolled ? "text-dark-muted hover:text-dark border-b border-light-border" : "text-white/80 hover:text-white border-b border-dark-border"}`} onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="/servicios" className={`block py-3 text-sm transition-colors ${scrolled ? "text-dark-muted hover:text-dark border-b border-light-border" : "text-white/80 hover:text-white border-b border-dark-border"}`} onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="/contacto" className={`block py-3 text-sm transition-colors ${scrolled ? "text-dark-muted hover:text-dark" : "text-white/80 hover:text-white"}`} onClick={() => setMenuOpen(false)}>Contacto</a>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.facebook.com/oscardental.soluciones/?locale=es_LA" target="_blank" rel="noopener noreferrer" className={`transition-colors ${scrolled ? "text-dark-muted hover:text-primary" : "text-white/60 hover:text-white"}`} aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
            </a>
            <a href="https://www.instagram.com/clinicadentalcasolay" target="_blank" rel="noopener noreferrer" className={`transition-colors ${scrolled ? "text-dark-muted hover:text-primary" : "text-white/60 hover:text-white"}`} aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" /></svg>
            </a>
            <a href="https://wa.me/51947922617" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
              CONTACTO
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
