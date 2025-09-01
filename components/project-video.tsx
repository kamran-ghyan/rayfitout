"use client"

export default function ProjectVideo() {
  return (
    <section className="py-[140px] bg-white relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden">
            <div className="aspect-video">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
                <source src="/v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="relative overflow-hidden ">
            <div className="aspect-video">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
                 <source src="/v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
    </section>
  )
}
