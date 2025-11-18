import React from 'react'

// Testimonials: simple cards with avatar, role and quote
const items = [
  { name: 'Siti Rahma', role: 'Product Manager', quote: 'Great work, timely delivery and clear insights.' },
  { name: 'Budi Santoso', role: 'Researcher', quote: 'Excellent analysis and visualizations.' }
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((t, i) => (
        <div key={i} className="glass p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center">{t.name[0]}</div>
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-subText">{t.role}</div>
            </div>
          </div>
          <p className="mt-3 text-subText italic">“{t.quote}”</p>
        </div>
      ))}
    </div>
  )
}
