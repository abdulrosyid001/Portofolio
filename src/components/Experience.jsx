import React from 'react'

// Experience: vertical stack of experience items
const experience = [
  { period: 'Juli 2025 - Sekarang', title: 'Asisten Penelitian dengan Topik Time Series Forecasting', org: 'Melakukan eksplorasi dan pemodelan pada data time series musiman dengan berbagai model, seperti XGBoost, LGBM, Prophet, ARIMA, SARIMA, dan lain-lain.' },
  { period: 'Agustus 2025 - Sekarang', title: 'Asisten Dosen Mata Kuliah Analisis Regresi', org: '● Membantu 39 mahasiswa semester 3 untuk menggunakan R pada topik analisis regresi linear sederhana dan regresi linear berganda serta pengembangannya.\n' +
'● Mengawasi 39 mahasiswa semester 3 selama ujian berlangsung.\n'+
'● Mengoreksi hasil ujian mahasiswa semester 3.' },
  { period: 'Agustus 2025 - Sekarang', title: 'Asisten Praktikum Mata Kuliah Basis Data', org: 'Mengawasi 33 mahasiswa semester 1 selama ujian berlangsung.' }
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
