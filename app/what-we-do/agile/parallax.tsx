"use client"

export function Parallax() {
  return (
    <div
      className="relative h-[500px] overflow-hidden"
      style={{
        backgroundImage: "url('/dashborad.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
    </div>
  )
}
