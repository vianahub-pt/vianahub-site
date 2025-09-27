"use client";

type ParallaxProps = {
  src: string;
  height?: string;
};

export function Parallax({ src, height = "500px" }: ParallaxProps) {
  return (
    <div
      className="relative h-[500px] overflow-hidden"
      style={{
        backgroundImage: `url(${src})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
    </div>
  );
}
