import "./globals.css";

export const metadata = {
  title: "Clínica Oscar Dental | Odontólogo en Chiclayo",
  description:
    "Clínica Oscar Dental - Chiclayo. Especialistas en ortodoncia, implantes, endodoncia y estética dental. Atención de calidad, agenda tu consulta.",
  keywords: [
    "dentista chiclayo",
    "odontólogo chiclayo",
    "clínica dental chiclayo",
    "implantes dentales",
    "ortodoncia",
  ],
  openGraph: {
    title: "Clínica Oscar Dental | Odontólogo en Chiclayo",
    description:
      "Especialistas en ortodoncia, implantes, endodoncia y estética dental. Atención de calidad, agenda tu consulta.",
    url: "https://dentalcasolay.com",
    siteName: "Clínica Oscar Dental | Chiclayo",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-PE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/imgs/28b9654d-f8c0-46b9-9084-0f3ea4746fd0.png" type="image/png" />
        <link rel="apple-touch-icon" href="/imgs/28b9654d-f8c0-46b9-9084-0f3ea4746fd0.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
