import Image from "next/image"

export default function BackgroundImage() {
  return (
    <div className="">
      <Image
        src="/hero_bg.png"
        alt="Modern office interior"
        fill
        className="object-cover animate-zoomin"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}
