import Header from "@/components/Header"
import PageBanner from "@/components/PageBanner"
import NosotrosIntro from "@/components/NosotrosIntro"
import NosotrosCompromiso from "@/components/NosotrosCompromiso"
import NosotrosValores from "@/components/NosotrosValores"
import NosotrosCeo from "@/components/NosotrosCeo"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata = {
  title: "Odontólogos En Chiclayo | Clínica Oscar Dental",
  description:
    "Odontólogos en Chiclayo | Porque sabemos que tu sonrisa es tu carta de presentación, estamos aquí para cuidarla y potenciarla.",
}

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner />
        <NosotrosIntro />
        <NosotrosCompromiso />
        <NosotrosValores />
        <NosotrosCeo />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}