import RoadClientPage from "./RoadClientPage"

export const metadata = {
  title: "Engenharia Rodoviária - VianaHub",
  description: "Projetos rodoviários completos. Planejamento, construção e manutenção de rodovias e vias urbanas.",
  keywords: "engenharia rodoviária, rodovias, construção, planejamento, infraestrutura",
  openGraph: {
    title: "Engenharia Rodoviária - VianaHub",
    description: "Projetos rodoviários completos",
    type: "website",
    locale: "pt_PT",
  },
}

export default function RoadPage() {
  return <RoadClientPage />
}
