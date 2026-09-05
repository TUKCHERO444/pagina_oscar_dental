import Header from "@/components/Header"
import PageBanner from "@/components/PageBanner"
import ContactoPage from "@/components/ContactoPage"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata = {
  title: "Odontólogo En Chiclayo | Clínica Oscar Dental Chiclayo",
  description:
    "Urgencias dentales las 24 horas en Chiclayo. En Clínica Oscar Dental estamos disponibles para atenderte cuando más lo necesites. Agenda tu cita.",
}

export default function ContactoRoute() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Contacto"
          subtitle="Nuestro equipo está a tu disposición para ayudarte. Nos comprometemos a ofrecerte un servicio de calidad en un ambiente cálido y seguro."
          eyebrow="Contáctenos"
          bgImage="/imgs/clinica-exterior.jpg"
        />
        <ContactoPage />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}