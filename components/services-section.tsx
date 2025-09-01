export default function ServicesSection() {
  return (
    <section className="bg-white pb-[140px] border-b-1 border-b-[#D9D9D9]">
        <h2 className="text-[24px] md:text-[30px] text-black mb-12 tracking-wide px-12 pb-4 border-b-1 border-b-[#D9D9D9] animate-zoomout">ABOUT OUR PRODUCTS & SERVICES</h2>
        <div className="px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Complimentary Installation */}
            <div className="space-y-4">
                <h3 className="text-[24px] font-light text-gray-900 tracking-wide">
                COMPLIMENTARY
                <br />
                INSTALLATION
                </h3>
                <p className="text-[16px] text-[#8C8C8C] leading-relaxed">
                We offer complimentary professional installation by our in-house technicians to ensure flawless execution
                on every project.
                </p>
            </div>

            {/* Made-to-Measure Architecture */}
            <div className="space-y-4">
                <h3 className="text-[24px] font-light text-black tracking-wide">
                MADE-TO-MEASURE
                <br />
                ARCHITECTURE
                </h3>
                <p className="text-[16px] text-[#8C8C8C] leading-relaxed">
                Every system is precisely fabricated to its environment. No gaps, no compromises—only bespoke precision.
                </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-[24px] font-light text-black tracking-wide">PATENTED DESIGNS</h3>
                <p className="text-[16px] text-[#8C8C8C] leading-relaxed">
                Our systems are designed to be embedded in the architecture—not added onto it. They align perfectly with
                joinery, wall cladding, and interior finishes.
                </p>
            </div>
            </div>
        </div>
    </section>
  )
}
