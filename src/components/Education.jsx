import React from 'react'

// Education: vertical cards listing education entries
const education = [
  { period: '2020', title: 'Programming Course' },
  { period: '2018–2019', title: 'Graphic Design Course' },
  { period: '2016–2018', title: 'Web Design Course' },
  { period: '2014–2016', title: 'Design & Technology' }
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
