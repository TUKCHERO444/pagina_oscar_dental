import FadeIn from "@/components/FadeIn"

const valores = [
  {
    sigla: "V",
    nombre: "VISIÓN",
    desc: "Ser la clínica dental líder en la región, reconocida por la excelencia en nuestros servicios, la confianza de nuestros pacientes y nuestra contribución al desarrollo de una comunidad con una salud bucal óptima.",
  },
  {
    sigla: "M",
    nombre: "MISIÓN",
    desc: "Brindar servicios odontológicos de calidad, centrados en la prevención, el cuidado personalizado y el bienestar integral de nuestros pacientes, utilizando tecnología avanzada y un equipo profesional comprometido con transformar sonrisas y mejorar vidas.",
  },
  {
    sigla: "L",
    nombre: "LEMA",
    desc: "Tu sonrisa, nuestra pasión.",
  },
]

export default function NosotrosValores() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn variant="up">
          <div className="text-center mb-16">
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
              Nuestros Valores
            </p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-dark">
              Confianza, empatía, y compromiso
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((v, i) => (
            <FadeIn key={i} variant="up" delay={i * 150}>
              <div className="group h-80 [perspective:1200px]" tabIndex={0}>
                <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 bg-white border border-light-border rounded-2xl flex flex-col items-center justify-center p-8 [backface-visibility:hidden] group-hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <span className="font-heading text-2xl font-bold text-primary">{v.sigla}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-dark tracking-wide">
                      {v.nombre}
                    </h3>
                    <p className="mt-3 text-sm text-dark-muted text-center">Pasa el cursor o toca para ver más</p>
                  </div>

                  <div className="absolute inset-0 bg-primary rounded-2xl flex flex-col items-center justify-center p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                      {v.nombre}
                    </h3>
                    <p className="mt-4 text-white/90 text-sm leading-relaxed text-center">
                      {v.desc}
                    </p>
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