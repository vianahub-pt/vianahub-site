import AgileClientPage from "./AgileClientPage"

export const metadata = {
  title: "Metodologia Ágil - VianaHub",
  description:
    "Desenvolvimento ágil de software com metodologias Scrum e Kanban. Entregas rápidas e qualidade garantida.",
  keywords: "agile, scrum, kanban, metodologia, desenvolvimento, software",
  openGraph: {
    title: "Metodologia Ágil - VianaHub",
    description: "Desenvolvimento ágil de software",
    type: "website",
    locale: "pt_PT",
  },
}

export default function AgilePage() {
  return <AgileClientPage />
}
