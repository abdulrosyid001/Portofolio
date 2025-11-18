import React, { useState } from 'react'

// ProjectsGrid: filterable projects grid with hover zoom and quick view button
export default function ProjectsGrid({ projects = [] }) {
  const [filter, setFilter] = useState('All')

  const types = ['All', ...Array.from(new Set(projects.map(p => p.type)))]

  const visible = projects.filter(p => filter === 'All' || p.type === filter)

  return (
    <div id="projects">
      <div className="flex gap-2 mb-4">
        {types.map(t => (
          <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1 rounded-full ${filter === t ? 'bg-primary text-black' : 'bg-black/30 text-subText'}`}>{t}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {visible.map(p => (
          <article key={p.title} className="relative rounded-xl overflow-hidden glass">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <div className="text-sm text-subText">{p.type}</div>
            </div>
            <button aria-label={`Quick view ${p.title}`} className="absolute top-3 right-3 bg-black/40 px-2 py-1 rounded">Quick View</button>
          </article>
        ))}
      </div>
    </div>
  )
}
