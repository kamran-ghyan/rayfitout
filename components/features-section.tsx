import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="bg-white py-[140px] px-12">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <div className="relative group overflow-hidden w-[430px] h-[537px]">
            <div className="w-full h-full relative">
              <Image
                src="/modern_profiles.png"
                alt="Modern aluminum door profiles with sleek black finish"
                fill
                className="object-cover object-left"
                sizes="430px"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wider text-center">
                  MODERN PROFILES
                </h3>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden w-[430px] h-[537px]">
            <div className="w-full h-full relative">
              <Image
                src="/integeration.png"
                alt="Integrated walk-in closet system with glass panels and lighting"
                fill
                className="object-cover"
                sizes="430px"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wider text-center">INTEGRATION</h3>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden w-[430px] h-[537px]">
            <div className="w-full h-full relative">
              <Image
                src="/modularity.png"
                alt="Modular wardrobe system with organized storage solutions"
                fill
                className="object-cover object-right"
                sizes="430px"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wider text-center">MODULARITY</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}