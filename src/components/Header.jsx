import React, { useState, useEffect } from 'react'

// Header: sticky top navigation with logo, links and hire button
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-30 transition-all ${scrolled ? 'backdrop-blur-lg bg-black/30 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purpleDeep flex items-center justify-center font-bold text-white">G</div>
            <span className="font-semibold">Abdul</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-subText hover:text-white">Home</a>
            <a href="#projects" className="text-subText hover:text-white">Work</a>
            <a href="#services" className="text-subText hover:text-white">Services</a>
            <a href="#experience" className="text-subText hover:text-white">Experience</a>
            <a href="#blog" className="text-subText hover:text-white">Blog</a>
            <a href="#contact" className="text-subText hover:text-white">Contact</a>
            <button className="ml-2 px-3 py-1 border border-primary rounded-md text-primary hover:bg-primary/10">Hire me</button>
          </div>

          <div className="md:hidden">
            <button aria-label="Open menu" onClick={() => setMenuOpen(v => !v)} className="p-2">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/60 p-4">
          <div className="flex flex-col gap-3">
            <a href="#" className="text-subText">Home</a>
            <a href="#projects" className="text-subText">Work</a>
            <a href="#services" className="text-subText">Services</a>
            <a href="#experience" className="text-subText">Experience</a>
            <a href="#blog" className="text-subText">Blog</a>
            <a href="#contact" className="text-subText">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
