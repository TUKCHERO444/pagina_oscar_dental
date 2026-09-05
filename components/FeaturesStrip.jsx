import FadeIn from "@/components/FadeIn"

export default function FeaturesStrip() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 005.982-2.275M12 21a8.966 8.966 0 01-5.982-2.275M15.75 3.186a24.284 24.284 0 011.944.098m-1.944-.098L12 3.104m3.75 18.282L12 21m0 0a8.966 8.966 0 01-5.982-2.275M12 21c1.574 0 3.067-.465 4.327-1.261M12 21a8.966 8.966 0 00-5.982-2.275M12 21v-3.846" />
        </svg>
      ),
      title: "Atención integral",
      desc: "Odontología familiar y opciones cosméticas",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "No hay necesidad de tener miedo",
      desc: "Sedación administrada suavemente",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      title: "Llamada de emergencia",
      desc: "+51 947 922 617",
      href: "https://wa.me/51947922617",
    },
  ]

  return (
    <section className="relative -mt-28 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const card = (
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-5">
                <div className="flex-shrink-0 text-primary animate-float">{f.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-dark">{f.title}</h3>
                  <p className="mt-1 text-dark-muted text-sm">{f.desc}</p>
                </div>
              </div>
            )

            return (
              <FadeIn key={i} variant="up" delay={i * 150}>
                {f.href ? (
                  <a href={f.href} target="_blank" rel="noopener noreferrer" className="block">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
