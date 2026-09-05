import Header from "@/components/Header"
import PageBanner from "@/components/PageBanner"
import ServiciosIntro from "@/components/ServiciosIntro"
import Servicios from "@/components/Servicios"
import Testimonios from "@/components/Testimonios"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata = {
  title: "Dentista En Chiclayo | Clínica Oscar Dental",
  description:
    "Servicios odontológicos integrales en Chiclayo: odontología restauradora, rehabilitación oral, prótesis, cirugías bucales, endodoncia, ortodoncia, blanqueamiento y limpieza dental.",
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Servicios"
          subtitle="Descubre todos los tratamientos dentales que ofrecemos pensados para tu salud bucal"
          eyebrow="Nuestros"
          bgImage="/imgs/tratamiento-dental.jpg"
        />
        <ServiciosIntro />
        <Servicios />
        <Testimonios />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}