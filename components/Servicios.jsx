import FadeIn from "@/components/FadeIn"

const servicios = [
  {
    title: "Odontología Restauradora Estética",
    desc: "Transformamos sonrisas con odontología restauradora estética: salud, funcionalidad y belleza en armonía.",
  },
  {
    title: "Rehabilitación Oral Fija",
    desc: "Recupera la funcionalidad y estética de tu sonrisa con nuestras soluciones de rehabilitación oral fija.",
  },
  {
    title: "Prótesis Removible",
    desc: "Comodidad y confianza en cada sonrisa con nuestras prótesis removibles, adaptadas a tus necesidades.",
  },
  {
    title: "Cirugías Bucales",
    desc: "Precisión y cuidado en cirugías bucales para garantizar tu salud y bienestar oral.",
  },
  {
    title: "Endodoncia",
    desc: "Salvamos tus dientes con tratamientos de endodoncia precisos y libres de dolor.",
  },
  {
    title: "Periodoncia y Tejidos Circundantes",
    desc: "Cuidamos la salud de tus encías y tejidos circundantes con tratamientos especializados en periodoncia.",
  },
  {
    title: "Implantología",
    desc: "Recupera tu sonrisa y calidad de vida con nuestros implantes dentales de última generación.",
  },
  {
    title: "Ortodoncia Preventiva e Intersectiva",
    desc: "Corrección temprana y prevención de problemas dentales con nuestra ortodoncia preventiva e intersectiva.",
  },
]

function ToothIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5 11C5 13 6 14 6 16C6 18 5 20 5 22H7C7 20 8 19 9 19C10 19 10.5 20 10.5 22H13.5C13.5 20 14 19 15 19C16 19 17 20 17 22H19C19 20 18 18 18 16C18 14 19 13 19 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z" />
    </svg>
  )
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-light-surface relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn variant="up">
          <div className="text-center mb-16">
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
              Nuestros
            </p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-dark uppercase">
              Servicios
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <FadeIn key={i} variant="up" delay={i * 100}>
              <div className="bg-white border border-light-border rounded-2xl p-8 text-center hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <ToothIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-3">{s.title}</h3>
                <p className="text-dark-muted text-sm leading-relaxed mb-6">{s.desc}</p>
                <a
                  href="https://wa.me/51947922617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:text-primary-dark text-sm font-semibold transition-colors"
                >
                  Consultar →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
