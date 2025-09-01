"use client"

import { useState } from 'react'

const faqData = [
  {
    id: 1,
    question: "WHAT IS INTERIOR FIT OUT?",
    answer: "Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves installing partition walls, flooring, ceiling, fittings and furniture fixtures."
  },
  {
    id: 2,
    question: "WHAT DO INTERIOR FIT OUT COMPANIES IN DUBAI DO?",
    answer: "Interior fit out companies in Dubai provide comprehensive services including space planning, design consultation, construction management, installation of fixtures and fittings, and project coordination to transform empty spaces into fully functional interiors."
  },
  {
    id: 3,
    question: "HOW LONG DOES AN INTERIOR FIT OUT TYPICALLY TAKE?",
    answer: "The duration of an interior fit out project varies depending on the size and complexity of the space. Typically, a standard office fit out can take 4-12 weeks, while larger commercial projects may take 3-6 months or more."
  },
  {
    id: 4,
    question: "WHAT IS THE SCOPE OF THE INTERIOR FIT OUT?",
    answer: "The scope of interior fit out includes space planning, electrical and plumbing work, HVAC installation, flooring, ceiling systems, partition walls, lighting, furniture installation, and final finishing touches to create a complete functional space."
  },
  {
    id: 5,
    question: "HOW MUCH DOES AN INTERIOR FIT OUT COST?",
    answer: "Interior fit out costs vary widely based on factors such as space size, quality of materials, complexity of design, and location. Costs typically range from AED 100-500 per square foot, depending on the level of finish and customization required."
  },
  {
    id: 6,
    question: "WHAT COUNTRIES DOES RAYFITOUT OPERATE IN?",
    answer: "RayFitout operates primarily in the UAE, with a strong presence in Dubai, Abu Dhabi, and other emirates. We also provide services across the GCC region including Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1]) // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="bg-white pb-[140px] px-12 border-b-1 border-b-[#D9D9D9]">
      <div className="">
        <h2 className="text-[24px] md:text-[30px] font-light text-blck mb-8 tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        
        <div className="space-y-0 pt-8 border-t-1 border-t-[#D9D9D9]">
          {faqData.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="text-[14px] md:text-[18px] font-light text-black tracking-wide pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(faq.id) ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(faq.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-6 pr-8">
                  <p className="text-[14px] md:text-[16px] text-[#8C8C8C] text-light leading-relaxed lg:w-1/2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}