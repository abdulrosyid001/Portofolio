import React from 'react'

// Footer: minimal footer with small nav and credits
export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-subText text-sm">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-bold">G</div>
          <div>Abdul Rosyid</div>
        </div>
        <div className="flex gap-4">
          <a href="#">Home</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="mt-4 text-center">© {new Date().getFullYear()} Abdul Rosyid — Built with ❤️ • <a className="text-primary" href="#">DownloadNewThemes.com</a></div>
    </footer>
  )
}
