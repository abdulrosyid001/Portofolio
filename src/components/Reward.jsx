import React from 'react'

// Awards: list of achievements / recognitions
const awards = [
  { 
    title: 'Best Speaker Esai - Pesta Ilmiah Sriwijaya',
    organizer: 'Universitas Sriwijaya',
    year: '2024' 
  },
  { 
    title: 'Juara 1 Karya Tulis Ilmiah - Jambore Statistika',
    organizer: 'Universitas Mulawarman',
    year: '2025' 
  },
  { 
    title: 'Pembiayaan Business Plan - WIBAWA',
    organizer: 'Universitas Sebelas Maret',
    year: '2025' 
  },
  { 
    title: 'Juara 3 Data Science - Padjadjaran Statistics Olympiad',
    organizer: 'Universitas Padjajaran',
    year: '2025' 
  },
  { 
    title: '15 Besar Esai - Satria Data',
    organizer: 'Pusat Prestasi Nasional',
    year: '2025' 
  },
  { 
    title: 'Posisi 4 Data Science - Sebelas Maret Statistics Data Science',
    organizer: 'Universitas Sebelas Maret',
    year: '2025' 
  },
  { 
    title: 'Posisi 11 Data Science - Data Quest',
    organizer: 'Universitas Airlangga',
    year: '2025'
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
