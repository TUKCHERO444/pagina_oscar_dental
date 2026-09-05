export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-white font-heading text-lg font-bold">
              Clínica <span className="text-primary-light">Oscar Dental</span>
            </span>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Tu clínica dental de confianza en Chiclayo. Atención integral para toda la familia.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/oscardental.soluciones/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
              </a>
              <a href="https://www.instagram.com/clinicadentalcasolay" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-white/70 hover:text-white text-sm transition-colors">Inicio</a></li>
              <li><a href="/nosotros" className="text-white/70 hover:text-white text-sm transition-colors">Nosotros</a></li>
              <li><a href="/servicios" className="text-white/70 hover:text-white text-sm transition-colors">Servicios</a></li>
              <li><a href="/contacto" className="text-white/70 hover:text-white text-sm transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li><span className="text-white/70 text-sm">Ortodoncia</span></li>
              <li><span className="text-white/70 text-sm">Implantes</span></li>
              <li><span className="text-white/70 text-sm">Endodoncia</span></li>
              <li><span className="text-white/70 text-sm">Blanqueamiento</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-white/70 text-sm">Av. 9 de Octubre Nro. 276 C.P. San Jose Obrero, Chiclayo</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-white/70 text-sm">+51 947 922 617</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-white/70 text-sm">informes@dentalcasolay.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} Clínica Oscar Dental. Todos los derechos reservados.
          </p>
          <p className="text-white/60 text-xs">
            Av. 9 de Octubre Nro. 276 C.P. San Jose Obrero, Chiclayo - Perú
          </p>
        </div>
      </div>
    </footer>
  )
}
