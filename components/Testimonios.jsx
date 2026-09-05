import FadeIn from "@/components/FadeIn"

const testimonios = [
  {
    name: "María Fernández",
    text: "Excelente atención y un trato muy profesional. Cada tratamiento fue explicado con claridad y me sentí en buenas manos desde el primer momento.",
    stars: 5,
  },
  {
    name: "Carlos Ramírez",
    text: "Clínica moderna con tecnología de punta. Mi implante dental se realizó sin dolor y el resultado es increíble. Muy recomendados.",
    stars: 5,
  },
  {
    name: "Lucía Torres",
    text: "Me encantó el trato cálido del equipo. El blanqueamiento superó mis expectativas y ahora no tengo miedo de ir al dentista.",
    stars: 5,
  },
]

function Star() {
  return (
    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function Testimonios() {
  return (
    <section className="py-24 bg-light-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn variant="up">
          <div className="text-center mb-16">
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
              Testimonios
            </p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-dark">
              Nuestros Clientes
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <FadeIn key={i} variant="up" delay={i * 100}>
              <div className="bg-white border border-light-border rounded-2xl p-8 h-full flex flex-col hover:border-primary/60 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} />
                  ))}
                </div>
                <p className="text-dark-muted text-sm leading-relaxed flex-1">“{t.text}”</p>
                <div className="mt-6 pt-6 border-t border-light-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-dark">{t.name}</p>
                    <p className="text-xs text-dark-muted">Paciente de Clínica Oscar Dental</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}