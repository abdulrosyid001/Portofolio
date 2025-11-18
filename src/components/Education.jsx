import React from 'react'

// Education: vertical cards listing education entries
const education = [
  { period: '2023-Sekarang', title: 'S1-Statistika Universitas Sebelas Maret' },
  { period: '2020-2023', title: 'SMAN 1 Pekalongan' },
  { period: '2017-2020', title: 'SMPN 1 Sragi' },
  { period: '2011-2017', title: 'SDN 2 Wonosari' }
]

export default function Education() {
  return (
    <div className="space-y-4">
      {education.map((e, idx) => (
        <div key={idx} className="flex gap-4 items-start rounded-lg glass p-4">
          <div className="w-24 text-sm text-subText">{e.period}</div>
          <div>
            <div className="font-semibold">{e.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
