import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FeaturesStrip from "@/components/FeaturesStrip"
import Nosotros from "@/components/Nosotros"
import Servicios from "@/components/Servicios"
import CtaAppointment from "@/components/CtaAppointment"
import GaleriaInstalaciones from "@/components/GaleriaInstalaciones"
import Testimonios from "@/components/Testimonios"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesStrip />
        <Nosotros />
        <Servicios />
        <CtaAppointment />
        <GaleriaInstalaciones />
        <Testimonios />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
