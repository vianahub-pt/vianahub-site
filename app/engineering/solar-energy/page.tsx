import WrappedSolarEnergyPageContent from "./SolarEnergyPageContent"

export default function SolarEnergyPage() {
  return <WrappedSolarEnergyPageContent />
}

// Metadados estáticos
export const metadata = {
  title: "Energia Solar - VianaHub",
  description: "Soluções completas em energia solar fotovoltaica. Projetos residenciais, comerciais e industriais.",
  keywords: "energia solar, fotovoltaica, painéis solares, sustentabilidade, energia renovável",
  openGraph: {
    title: "Energia Solar - VianaHub",
    description: "Soluções completas em energia solar fotovoltaica",
    type: "website",
    locale: "pt_PT",
  },
}
