import React from 'react'

// Experience: vertical stack of experience items
const experience = [
  { period: '2023–Now', title: 'Lead Developer', org: 'Open Source Project' },
  { period: '2021–2023', title: 'Full Stack Web Developer', org: 'Startup Co.' },
  { period: '2020–2021', title: 'UI Designer', org: 'Agency' },
  { period: '2019–2020', title: 'Junior Graphics Designer', org: 'Studio' }
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
