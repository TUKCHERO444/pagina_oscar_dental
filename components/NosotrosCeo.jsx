import FadeIn from "@/components/FadeIn"

export default function NosotrosCeo() {
  return (
    <section className="py-24 bg-light-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          <FadeIn variant="left" duration="duration-1000">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-light-border shadow-lg">
                <img
                  src="/imgs/dr-rostro.jpg"
                  alt="Retrato del Dr. Marcos Esteban Caso Lay, CEO de Clínica Oscar Dental"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-secondary text-white rounded-full px-8 py-3 shadow-lg animate-float whitespace-nowrap hidden sm:block">
                <p className="font-heading text-sm font-semibold">Dr. Marcos Esteban Caso Lay</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn variant="right" duration="duration-1000" delay={200} className="lg:col-span-2">
            <div>
              <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-dark leading-tight">
                "Cuidar de tu sonrisa es nuestra mayor responsabilidad y orgullo."
              </h3>
              <p className="mt-6 text-dark-muted leading-relaxed">
                «En Oscar Dental, nuestra prioridad es tu sonrisa. Contamos con un equipo de odontólogos
                altamente capacitados y con amplia experiencia, comprometidos a ofrecer atención
                personalizada y de excelencia. Utilizamos tecnología de última generación para
                garantizar tratamientos precisos, cómodos y duraderos. Nuestro enfoque está en tu
                bienestar, brindando un ambiente cálido y seguro. Visítanos y comprueba por qué somos
                la mejor opción para el cuidado de tu salud bucal.»
              </p>
              <div className="mt-8">
                <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
                  CEO: Dr. Marcos Esteban Caso Lay
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}