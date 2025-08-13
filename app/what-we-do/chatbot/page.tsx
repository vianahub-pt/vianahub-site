import ChatbotClientPage from "./ChatbotClientPage"

export const metadata = {
  title: "Chatbot - VianaHub",
  description:
    "Soluções de chatbot inteligente para automatizar atendimento ao cliente e melhorar a experiência do usuário.",
  keywords: "chatbot, atendimento, automação, inteligência artificial, suporte",
  openGraph: {
    title: "Chatbot - VianaHub",
    description: "Soluções de chatbot inteligente",
    type: "website",
    locale: "pt_PT",
  },
}

export default function ChatbotPage() {
  return <ChatbotClientPage />
}
