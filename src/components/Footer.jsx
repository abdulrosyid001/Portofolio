import React from 'react'

// Footer: minimal footer with small nav and credits
export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-subText text-sm">
      <div className="mt-4 text-center">© {new Date().getFullYear()}</div>
    </footer>
  )
}
