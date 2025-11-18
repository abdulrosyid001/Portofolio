import React from 'react'

// Experience: vertical stack of experience items
const experience = [
  { period: 'Juli 2025 - Sekarang', title: 'Asisten Penelitian dengan Topik Time Seires Forecasting', org: '...' },
  { period: 'Agustus 2025 - Sekarang', title: 'Asisten Dosen Mata Kuliah Analisis Regresi', org: '...' },
  { period: 'Agustus 2025 - Sekarang', title: 'Asisten Praktikum Mata Kuliah Basis Data', org: '...' }
]

export default function Experience() {
  return (
    <div className="space-y-4">
      {experience.map((e, idx) => (
        <div key={idx} className="flex gap-4 items-start rounded-lg glass p-4">
          <div className="w-24 text-sm text-subText">{e.period}</div>
          <div>
            <div className="font-semibold">{e.title}</div>
            <div className="text-subText text-sm">{e.org}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
