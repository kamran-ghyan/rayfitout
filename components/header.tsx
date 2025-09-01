'use client'

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
      <div className="text-white">
        <h1 className="text-[32px] font-medium tracking-wide">Rayfitout</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="/projects"
          className="text-white/90 hover:text-white transition-colors text-[16px] font-normal tracking-wide"
        >
          PROJECTS
        </Link>
        <Link
          href="/services"
          className="text-white/90 hover:text-white transition-colors text-[16px] font-normal tracking-wide"
        >
          SERVICES
        </Link>
        <Link
          href="/systems"
          className="text-white/90 hover:text-white transition-colors text-[16px] font-normal tracking-wide"
        >
          SYSTEMS
        </Link>
        <Link
          href="/products"
          className="text-white/90 hover:text-white transition-colors text-[16px] font-normal tracking-wide"
        >
          PRODUCTS
        </Link>
        <Link
          href="/about"
          className="text-white/90 hover:text-white transition-colors text-[16px] font-normal tracking-wide"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="text-white/90 hover:text-white transition-colors text-[16px] font-normal tracking-wide"
        >
          CONTACT
        </Link>
      </nav>

      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full bg-black/95 backdrop-blur-lg z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={closeMenu}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-6 pt-8">
          <Link
            href="/projects"
            onClick={closeMenu}
            className="text-white/90 hover:text-white transition-colors text-lg font-normal tracking-wide py-4 border-b border-white/10"
          >
            PROJECTS
          </Link>
          <Link
            href="/services"
            onClick={closeMenu}
            className="text-white/90 hover:text-white transition-colors text-lg font-normal tracking-wide py-4 border-b border-white/10"
          >
            SERVICES
          </Link>
          <Link
            href="/systems"
            onClick={closeMenu}
            className="text-white/90 hover:text-white transition-colors text-lg font-normal tracking-wide py-4 border-b border-white/10"
          >
            SYSTEMS
          </Link>
          <Link
            href="/products"
            onClick={closeMenu}
            className="text-white/90 hover:text-white transition-colors text-lg font-normal tracking-wide py-4 border-b border-white/10"
          >
            PRODUCTS
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-white/90 hover:text-white transition-colors text-lg font-normal tracking-wide py-4 border-b border-white/10"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-white/90 hover:text-white transition-colors text-lg font-normal tracking-wide py-4"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  )
}