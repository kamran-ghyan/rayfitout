import Image from "next/image"

export default function ProjectInquirySection() {
  return (
    <section className="bg-[#F1F1F1] py-12 px-4 sm:py-16 sm:px-8 lg:py-20 lg:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[24px] md:text-[40px] font-normal text-black tracking-wide">
          HAVE A PROJECT IN MIND ?
        </h2>

        {/* Button */}
        <button className="group relative flex items-center justify-center px-6 sm:px-8 py-4 border-2 border-black bg-transparent text-black font-normal tracking-wider transition-all duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer">
          <span className="mr-3 text-[20px]">DROP AN INQUIRY</span>
          <Image
            src="/arrow-black.png"
            alt="Inquiry"
            width={16}
            height={16}
            className="w-4 h-4 group-hover:invert"
          />
        </button>
      </div>
    </section>
  )
}
