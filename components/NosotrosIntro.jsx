import FadeIn from "@/components/FadeIn"

export default function NosotrosIntro() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn variant="left" duration="duration-1000">
            <div className="relative">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-light-surface">
                <img
                  src="/imgs/equipo-odontologos.jpg"
                  alt="Equipo de odontólogos de Clínica Oscar Dental atendiendo a un paciente en Chiclayo"
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
                Odontólogos En Chiclayo - Clínica Oscar Dental
              </p>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight">
                Cuidamos tu sonrisa con pasión y dedicación
              </h2>

              <p className="mt-6 text-dark-muted leading-relaxed">
                Tu sonrisa es mucho más que una simple expresión; es el reflejo de tu alegría,
                confianza y personalidad. Cada vez que sonríes, transmites una armoniosa conexión
                entre tus dientes, labios y encías, dejando que tu verdadero «yo» brille ante el mundo.
              </p>
              <p className="mt-4 text-dark-muted leading-relaxed">
                Una sonrisa segura no solo abre puertas, sino que también deja una impresión
                inolvidable, mostrando lo mejor de ti. Es tu carta de presentación, un símbolo de
                confianza y una forma de compartir tu felicidad con los demás.
              </p>
              <p className="mt-4 text-dark-muted leading-relaxed">
                En nuestra clínica, nos preocupamos profundamente por tu sonrisa y por todo lo que
                representa. Nuestro compromiso es ayudarte a mantenerla sana, brillante y llena de
                vida. Queremos que cada vez que sonrías, lo hagas con total seguridad y confianza,
                porque tu felicidad también es la nuestra.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading text-4xl font-bold text-primary">47+</p>
                    <p className="text-sm text-dark-muted">Años de experiencia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm1.5 5.25a3 3 0 11-3.75 2.907m3.75 2.25a3.001 3.001 0 01-3 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading text-4xl font-bold text-primary">10+</p>
                    <p className="text-sm text-dark-muted">Especialistas</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}