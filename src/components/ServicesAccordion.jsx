import React, { useState } from 'react'

// ServicesAccordion: accessible accordion with 4 items
const items = [
  { id: 1, title: 'Branding Design', body: 'Brand identity, logo systems, and visual language for impact.' },
  { id: 2, title: 'UI/UX Design', body: 'User flows, wireframes, prototyping, and usability testing.' },
  { id: 3, title: 'Web Design', body: 'Responsive websites, performance-minded and accessible.' },
  { id: 4, title: 'App Design', body: 'Mobile-first interfaces and interaction design for apps.' }
]

export default function ServicesAccordion() {
  const [openId, setOpenId] = useState(1)

  return (
    <div id="services" className="space-y-3">
      {items.map((it) => (
        <div key={it.id} className={`rounded-xl p-3 ${openId === it.id ? 'border border-primary bg-black/30' : 'glass'}`}>
          <button aria-expanded={openId === it.id} aria-controls={`panel-${it.id}`} onClick={() => setOpenId(openId === it.id ? null : it.id)} className="w-full text-left flex items-center justify-between">
            <div>
              <div className="font-semibold">{it.title}</div>
            </div>
            <div className="text-primary">{openId === it.id ? '−' : '+'}</div>
          </button>

          {openId === it.id && (
            <div id={`panel-${it.id}`} className="mt-3 text-subText italic">
              {it.body}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
