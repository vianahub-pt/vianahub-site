"use client"

export function EntertainmentSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entretenimento</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.fox.vianahub.pt/"
              className="w-full h-full border-0"
              title="Entretenimento Fox VianaHub"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
