import Image from "next/image"

export default function AluminumSystemsSection() {
  const systems = [
    {
      title: "DOORS",
      image: "/door.png",
    },
    {
      title: "WINDOWS",
      image: "/windows.png",
    },
    {
      title: "PARTITIONS",
      image: "/partitions.png",
    },
    {
      title: "PERGOLAS",
      image: "/pergolas.png",
    },
    {
      title: "BULLET RESISTANT WINDOWS",
      image: "/bullet_resistant_windows.png",
    },
    {
      title: "CURTAIN WALLS & FACADES",
      image: "/curtain_walls_facades.png",
    },
  ]

  return (
    <section className="bg-white py-[140px] px-12 border-b-1 border-b-[#D9D9D9]">
      <div className="">
        {/* Section Header */}
        <div className="text-start mb-12">
          <h2 className="text-[24px] md:text-[30px] text-black mb-4 tracking-wide animate-zoomout">OUR ALUMINIUM SYSTEMS</h2>
          <p className="text-[#8C8C8C] text-lg font-light animate-zoomout ">
            Expert craftsmanship in aluminium systems, offering fit your unique space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div key={index} className="group cursor-pointer">
              <div className=" aspect-[4/3] mb-4">
                <Image
                  src={system.image || "/placeholder.svg"}
                  alt={system.title}
                  width={440}
                  height={337}
                  className="w-[440px] h-[337px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="text-[24px] font-light text-black tracking-wide">{system.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
