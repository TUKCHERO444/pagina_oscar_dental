import FadeIn from "@/components/FadeIn"

const habitos = [
  "Técnicas de cepillado dental en vivo.",
  "Uso correcto del hilo dental y cepillos interdentales.",
  "Concientización sobre el impacto de los carbohidratos en la salud bucal.",
  "Hábitos de higiene diaria, mensual y semestral.",
  "Control de placa bacteriana y prevención de problemas dentales.",
]

export default function NosotrosCompromiso() {
  return (
    <section className="py-24 bg-light-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn variant="left" duration="duration-1000">
            <div>
              <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
                Nosotros - Odontólogos en Chiclayo
              </p>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight">
                Clínica Oscar Dental: Cuidamos las sonrisas de toda tu familia
              </h2>

              <p className="mt-6 text-dark-muted leading-relaxed">
                En Clínica Oscar Dental, nos dedicamos a atender todas las necesidades dentales
                de tu familia, creando un ambiente donde cada miembro, desde los más pequeños hasta
                los mayores, reciba el cuidado que merece.
              </p>
              <p className="mt-4 text-dark-muted leading-relaxed">
                Nuestro compromiso va más allá de los tratamientos. Nos enfocamos en educar a tu
                familia con enseñanzas personalizadas, adaptadas a cada etapa de la vida. Organizamos
                sesiones prácticas y dinámicas que incluyen:
              </p>

              <ul className="mt-6 space-y-3">
                {habitos.map((habito, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.207 7.793a1 1 0 00-1.414-1.414L10.5 12.672l-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l4.5-4.5z"
                      />
                    </svg>
                    <span className="text-dark-muted leading-relaxed">{habito}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-dark-muted leading-relaxed">
                En nuestra clínica, trabajamos para integrar a toda tu familia en el cuidado de su
                salud bucal, promoviendo sonrisas saludables y duraderas. Porque una familia que
                sonríe junta, se mantiene unida.
              </p>
            </div>
          </FadeIn>

          <FadeIn variant="right" duration="duration-1000" delay={200}>
            <div className="relative">
              <div className="bg-white border border-light-border rounded-2xl p-10 sm:p-14 shadow-lg">
                <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="mt-6">
                  <p className="font-heading text-xl sm:text-2xl text-dark leading-snug text-center">
                    "Trabajamos con el corazón para que cada sonrisa refleje salud y felicidad."
                  </p>
                </blockquote>
                <div className="mt-8 flex justify-center">
                  <div className="w-12 h-1 rounded-full bg-primary" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white rounded-2xl p-5 shadow-xl hidden sm:block">
                <p className="font-heading text-lg font-bold leading-tight">
                  Salud y felicidad
                  <br />
                  en cada sonrisa
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}