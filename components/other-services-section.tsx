const servicesData = [
  {
    id: 1,
    title: "INTERIOR FIT OUT",
    image: "/interior-fitout.png",
    alt: "Modern interior fit out with brick wall features"
  },
  {
    id: 2,
    title: "INTERIOR DESIGN",
    image: "/interior-design.png",
    alt: "Luxurious modern interior design"
  },
  {
    id: 3,
    title: "ARCHITECTURE DESIGN",
    image: "/architecture-design.png",
    alt: "Modern architecture design exterior"
  }
]

export default function OtherServicesSection() {
  return (
    <section className="bg-white pt-[60px] pb-[140px] px-12">
      <div className="">
        <h2 className="text-[18px] md:text-[30px] font-normal text-black mb-12 tracking-wide">
          OTHER SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="group relative overflow-hidden bg-gray-900 aspect-[4/3] cursor-pointer"
            >

              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`
                }}
              />
              
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
              
              <div className="relative h-full flex items-center justify-center p-6">
                <h3 className="text-white text-lg md:text-xl font-medium text-center tracking-wider">
                  {service.title}
                </h3>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}