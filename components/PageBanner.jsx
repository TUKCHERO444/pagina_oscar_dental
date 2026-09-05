export default function PageBanner({
  title = "Nosotros",
  subtitle = "La mejor atención dental en el corazón de Chiclayo",
  eyebrow = "Clínica Oscar Dental",
  bgImage = "/imgs/equipo-odontologos.jpg",
}) {
  return (
    <section className="relative overflow-hidden bg-dark">
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark-surface/85 to-primary/30" />
      <div className="absolute inset-0 bg-dark/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 text-center">
        <p className="text-primary-light font-heading text-sm font-semibold uppercase tracking-wider">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-heading text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <nav aria-label="Breadcrumb" className="mt-8 inline-flex items-center gap-2 text-sm">
          <a href="/" className="text-white/70 hover:text-white transition-colors font-medium">
            Home
          </a>
          <svg className="w-4 h-4 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <span className="text-white font-medium" aria-current="page">
            {title}
          </span>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-light to-transparent z-10" />
    </section>
  )
}