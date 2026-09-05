"use client"

import { useState, useEffect, useCallback } from "react"
import FadeIn from "@/components/FadeIn"

const slides = [
  { id: 1, src: "/imgs/galeria-1.jpg", alt: "Clínica Oscar Dental - Interior moderno del consultorio" },
  { id: 2, src: "/imgs/galeria-2.jpg", alt: "Clínica Oscar Dental - Consultorio iluminado con equipos modernos" },
  { id: 3, src: "/imgs/galeria-3.jpg", alt: "Clínica Oscar Dental - Consultorio ordenado y limpio" },
  { id: 4, src: "/imgs/galeria-4.jpg", alt: "Clínica Oscar Dental - Sillón de alta tecnología" },
  { id: 5, src: "/imgs/galeria-5.jpg", alt: "Clínica Oscar Dental - Sala de espera con sillas azules" },
  { id: 6, src: "/imgs/galeria-6.jpg", alt: "Clínica Oscar Dental - Amplio consultorio principal" },
  { id: 7, src: "/imgs/galeria-7.jpg", alt: "Clínica Oscar Dental - Consultorio listo para pacientes" },
]

export default function GaleriaInstalaciones() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3000)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section className="py-24 bg-light-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn variant="left" duration="duration-1000">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group bg-dark"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <button
                onClick={prev}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors flex items-center justify-center z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Imagen siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors flex items-center justify-center z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Imagen ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn variant="right" duration="duration-1000" delay={200}>
            <div>
              <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
                Nuestras instalaciones
              </p>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight">
                Un espacio diseñado para tu comodidad
              </h2>
              <p className="mt-6 text-dark-muted leading-relaxed">
                ¡Te invitamos a visitar <strong>Clínica Dental Oscar Dental</strong> en Chiclayo! Un espacio diseñado para tu comodidad y cuidado dental. Nuestro equipo está listo para brindarte una experiencia única y soluciones personalizadas para tu sonrisa.
              </p>
              <p className="mt-4 text-dark-muted leading-relaxed">
                Contamos con equipamiento moderno y ambientes acogedores para que cada visita sea agradable. ¡Te esperamos!
              </p>
              <a
                href="https://wa.me/51947922617"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
              >
                CONTACTO
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}