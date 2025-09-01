import Image from "next/image"

export default function MaterialsSection() {
  return (
    <section className="px-12 border-t-1 border-t-[#D9D9D9] border-b-1 border-b-[#D9D9D9] bg-gray-50">
      <div className="lg:pl-12 lg:pl-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 py-12 ">
            <p className="text-gray-500 uppercase tracking-wider font-[18px]">MATERIALS</p>

            <div className="space-y-4 mt-12">
              <h2 className="text-[24px] md:text-[32px] lg:text-[32px] font-light leading-tight text-[#9A9A9A]">
                UNLIKE PLASTICS,<br/> <span className="text-[#000000]">ALUMINUM IS 100% <br/>RECYCLABLE.</span> MOREOVER, APPROXIMATELY 70% OF IT <br/><span className="text-[#000000]">PRODUCED IS STILL IN USE.</span>

              </h2>

              <p className="text-lg md:text-xl text-gray-600 font-light">
              </p>
            </div>

            <div className="mt-34"> 
                <button className="inline-flex items-center gap-3 px-12 py-4 border-2 border-black text-black text-[20px] font-normal transition-colors duration-300 group hover:bg-black hover:text-white cursor-pointer">
              VIEW PROJECTS
              <Image
                src="/arrow-black.png"
                alt="Inquiry"
                width={8}
                height={8}
                className="w-4 h-4 group-hover:invert"
                          
                />
            </button>
            </div>
            
          </div>


          <div className="relative aspect-[4/3] lg:aspect-square">
            <Image
              src="/unlike_plastic.png"
              alt="CNC aluminum machining process showing metal shavings and precision manufacturing"
              fill
              className="w-600 h-200"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
