import FadeIn from "@/components/FadeIn"

export default function ServiciosIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeIn variant="left" className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-secondary shadow-xl">
              <img
                src="/imgs/tratamiento-dental.jpg"
                alt="Odontólogo realizando una revisión dental a un paciente en Clínica Oscar Dental"
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white rounded-2xl shadow-lg px-6 py-4">
              <span className="font-heading text-3xl font-bold text-primary">15+</span>
              <span className="text-dark-muted text-sm leading-tight">
                Años cuidando<br />sonrisas
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn variant="right" className="order-1 lg:order-2">
          <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
            Clínica Oscar Dental
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight">
            Cuidado dental pensado para ti
          </h2>
          <p className="mt-6 text-dark-muted leading-relaxed">
            En nuestra clínica, nos esforzamos por brindar atención personalizada que combine
            profesionalismo, tecnología avanzada y un trato cálido. Cada paciente es único, por
            eso trabajamos con dedicación para garantizar resultados que transformen su salud
            bucal y su confianza.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/51947922617"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              Agenda una cita
            </a>
            <a
              href="https://wa.me/51947922617"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-light-border hover:border-primary text-dark hover:text-primary px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              Consultar
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}