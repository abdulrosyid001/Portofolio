import React, { useState } from 'react'

// ProjectsGrid: filterable projects grid with modal quick view
export default function ProjectsGrid({ projects = [] }) {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const types = ['All', ...Array.from(new Set(projects.map(p => p.type)))]

  const visible = projects.filter(p => filter === 'All' || p.type === filter)

  return (
    <div id="projek">
      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        {types.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1 rounded-full ${
              filter === t
                ? 'bg-primary text-black'
                : 'bg-black/30 text-subText'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {visible.map(p => (
          <article
            key={p.title}
            className="relative rounded-xl overflow-hidden glass"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />

            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <div className="text-sm text-subText">{p.type}</div>
            </div>

            {/* Quick View Button */}
            <button
              aria-label={`Quick view ${p.title}`}
              className="absolute top-3 right-3 bg-black/40 px-2 py-1 rounded"
              onClick={() => setSelected(p)}
            >
              Quick View
            </button>
          </article>
        ))}
      </div>

      {/* Quick View Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="glass p-6 rounded-xl max-w-md w-full">
            <img
              src={selected.img}
              className="w-full h-44 object-cover rounded mb-3"
              alt={selected.title}
            />

            <h3 className="text-xl font-semibold">{selected.title}</h3>
            <div className="text-sm text-primary mb-2">{selected.type}</div>

            <p className="text-subText mt-2">{selected.desc}</p>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 w-full bg-primary text-black py-2 rounded"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
