import Image from "next/image"

export default function BespokeSystemsSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/bespoke.png"
          alt="Modern luxury interior with aluminum systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 px-8 lg:px-12 flex items-center justify-between w-full ">
        <div className="text-white ">
          <p className="text-[18px] font-light tracking-wider uppercase mb-6">SEAMLESS INTEGRATION</p>
          <h2 className="text-[24px] lg:text-[32px] font-light leading-tight mb-8">
            <span className="font-normal">BESPOKE</span> SYSTEMS,
            <br />
            <span className="font-normal">CUSTOM MADE</span> FOR YOUR <span className="font-normal">SPACE</span>
          </h2>
        </div>

        <div className="hidden lg:block ">
          <button className="inline-flex items-center justify-center gap-2 bg-transparent border border-white hover:border-black text-white transition-colors duration-300 px-8 py-4 text-sm font-[16px] tracking-wider hover:bg-black hover:text-white cursor-pointer">
            DROP AN INQUIRY
            <Image
                src="/arrow.png"
                alt="Inquiry"
                width={8}
                height={8}
                className="w-4 h-4 group-hover:invert"
            
                />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 right-6 lg:hidden z-10 ">
        <button className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 py-3 text-sm font-medium tracking-wider uppercase rounded-md">
          DROP AN INQUIRY
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
