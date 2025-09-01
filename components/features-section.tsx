import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="bg-white py-[140px] px-12 ">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/modern_profiles.png"
                alt="Modern aluminum door profiles with sleek black finish"
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wider text-center">
                  MODERN PROFILES
                </h3>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/integeration.png"
                alt="Integrated walk-in closet system with glass panels and lighting"
                fill
                className="width=[430] height=[574]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wider text-center">INTEGRATION</h3>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="/modularity.png"
                alt="Modular wardrobe system with organized storage solutions"
                fill
                className="object-cover object-right"
                sizes="(max-width: 768px) 100vw, 33vw"
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
