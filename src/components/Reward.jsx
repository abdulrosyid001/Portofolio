import React from 'react'

// Awards: list of achievements / recognitions
const awards = [
  { 
    title: 'Finalis Data Science Competition Nasional',
    organizer: 'Universitas Indonesia',
    year: '2024' 
  },
  { 
    title: 'Juara 1 Machine Learning Regional Competition',
    organizer: 'Kaggle Community Regional',
    year: '2023' 
  },
  { 
    title: 'Best Paper Award – Statistical Modeling',
    organizer: 'Konferensi Statistika Indonesia',
    year: '2023' 
  }
]

export default function BlogPreview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {awards.map((a, i) => (
        <article key={i} className="glass p-4 rounded-xl">
          <h4 className="font-semibold leading-tight">{a.title}</h4>
          <p className="text-subText text-sm mt-1">{a.organizer}</p>
          <div className="text-subText text-xs mt-2">{a.year}</div>
        </article>
      ))}
    </div>
  )
}
