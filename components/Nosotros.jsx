import FadeIn from "@/components/FadeIn"

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn variant="left" duration="duration-1000">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-light-surface">
                <img
                  src="/imgs/nosotros-clinica.jpg"
                  alt="Odontóloga atendiendo a un paciente en la Clínica Oscar Dental de Chiclayo"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl hidden sm:block animate-float">
                <p className="font-heading text-3xl font-bold">47+</p>
                <p className="text-sm text-white/80">Años de experiencia</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn variant="right" duration="duration-1000" delay={200}>
            <div>
              <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
                Sobre Nosotros
              </p>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight">
                Nos preocupamos por tu salud Bucal
              </h2>
              <p className="mt-6 text-dark-muted leading-relaxed">
                «Nuestra prioridad en <strong>Clínica Oscar Dental</strong> es cuidar la salud e integridad de tu cavidad bucal, protegiendo cada uno de sus elementos: dientes, encías, tejidos blandos, lengua, glándulas y más. Es fundamental que pacientes de todas las edades —niños, jóvenes y adultos— comprendan la importancia de mantener una adecuada conservación de su salud bucal.
              </p>
              <p className="mt-4 text-dark-muted leading-relaxed">
                Prestamos especial atención a las necesidades de personas de la tercera edad, mujeres embarazadas y pacientes con condiciones de salud especiales, garantizando un enfoque personalizado y de calidad.»
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <FadeIn variant="up" delay={400}>
                  <div>
                    <p className="font-heading text-4xl font-bold text-primary">47+</p>
                    <p className="mt-1 text-dark-muted text-sm">Años de experiencia</p>
                  </div>
                </FadeIn>
                <FadeIn variant="up" delay={550}>
                  <div>
                    <p className="font-heading text-4xl font-bold text-primary">10+</p>
                    <p className="mt-1 text-dark-muted text-sm">Especialistas</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
