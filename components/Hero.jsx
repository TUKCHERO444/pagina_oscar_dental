"use client"

import { useState, useEffect, useCallback } from "react"

const slides = [
  { id: 1, src: "/hero/slide-1.jpg", alt: "Consultorio dental moderno - Clínica Oscar Dental Chiclayo" },
  { id: 2, src: "/hero/slide-2.jpg", alt: "Sillón dental con equipamiento de última generación - Clínica Oscar Dental" },
  { id: 3, src: "/hero/slide-3.jpg", alt: "Ambiente contemporáneo de la clínica dental - Caso Lay" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [mounted, setMounted] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
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
              loading={i === 0 ? "eager" : "lazy"}
              className={`w-full h-full object-cover animate-ken-burns ${
                i === current ? "opacity-100" : ""
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-dark/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1
            className={`font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            Clínica Dental <span className="text-primary">Chiclayo</span>
          </h1>
          <p
            className={`mt-4 font-heading text-lg sm:text-xl text-white/80 transition-all duration-1000 ease-out delay-200 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            Oscar Dental | Al servicio de pacientes de todas las edades
          </p>
          <a
            href="https://wa.me/51947922617"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-1000 ease-out delay-500 animate-pulse-cta ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            Agendar una cita
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10" role="tablist" aria-label="Slides del carrusel">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
