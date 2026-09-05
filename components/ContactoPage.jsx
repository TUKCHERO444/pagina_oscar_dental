import FadeIn from "@/components/FadeIn"

export default function ContactoPage() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <FadeIn variant="left" delay={0}>
            <div className="lg:pt-4">
              <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
                Contáctenos
              </p>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight">
                Cómo podemos ayudarte?
              </h2>
              <p className="mt-4 text-dark-muted leading-relaxed">
                En Oscar Dental, estamos listos para cuidar tu sonrisa; contáctanos y déjanos ayudarte.
              </p>
            </div>
          </FadeIn>

          <FadeIn variant="up" delay={150}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-light-border hover:shadow-md transition-shadow h-full">
              <h3 className="font-heading text-xl font-semibold text-dark mb-6">Horario de atención</h3>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-dark text-sm">Lunes - Sábado</p>
                  <p className="text-dark-muted text-sm">(09:00 AM - 01:00 PM)</p>
                  <p className="text-dark-muted text-sm">(04:00 PM - 08:00 PM)</p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="font-semibold text-dark text-sm">Emergencias</p>
                  <p className="text-dark-muted text-sm">Llamada: +51 947 922 617</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn variant="right" delay={300}>
            <div className="h-full flex items-center justify-center">
              <div className="relative rounded-2xl w-full aspect-[4/3] overflow-hidden shadow-lg">
                <img
                  src="/imgs/clinica-exterior.jpg"
                  alt="Vista interior de la Clínica Oscar Dental en Chiclayo"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/50 to-primary/30 flex items-center justify-center">
                  <span className="text-white font-heading text-xl font-bold text-center leading-snug px-6">
                    Clínica Dental
                    <span className="block text-primary-light">Oscar Dental</span>
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-light-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn variant="left" delay={0}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-wider">
              Visítanos
            </p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight">
              Necesitas más información?
            </h2>
            <p className="mt-4 text-dark-muted italic">
              «Tu sonrisa es nuestra prioridad; en Oscar Dental, estamos siempre a tu disposición.»
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-light-border hover:border-primary/60 transition-colors">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-dark text-sm">Dirección</p>
                    <p className="text-dark-muted text-sm">Av. 9 de Octubre Nro. 276 C.P. San Jose Obrero</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-light-border hover:border-primary/60 transition-colors">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="font-semibold text-dark text-sm">Correo</p>
                    <p className="text-dark-muted text-sm">informes@dentalcasolay.com</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn variant="right" delay={150}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-light-border">
              <h3 className="font-heading text-xl font-semibold text-dark mb-6">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-dark mb-1">Nombre</label>
                    <input type="text" id="nombre" className="w-full px-3 py-2 rounded-lg border border-light-border text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-dark mb-1">Teléfono</label>
                    <input type="tel" id="telefono" className="w-full px-3 py-2 rounded-lg border border-light-border text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Correo</label>
                  <input type="email" id="email" className="w-full px-3 py-2 rounded-lg border border-light-border text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" required />
                </div>
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-dark mb-1">Asunto</label>
                  <input type="text" id="asunto" className="w-full px-3 py-2 rounded-lg border border-light-border text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200" />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-dark mb-1">Mensaje</label>
                  <textarea id="mensaje" rows={5} className="w-full px-3 py-2 rounded-lg border border-light-border text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all duration-200" />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-lg">
                  Enviar
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn variant="up" delay={200}>
        <div className="rounded-none overflow-hidden border-t border-light-border">
          <iframe
            src="https://www.google.com/maps?q=-6.776493,-79.855955&z=16&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Oscar Dental"
          />
        </div>
      </FadeIn>
    </>
  )
}