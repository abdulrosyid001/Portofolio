import React from 'react'

// Skills: displays chips with small progress bars
const skills = [
  { name: 'Python', pct: 85 },
  { name: 'R', pct: 78 },
  { name: 'SQL', pct: 80 },
  { name: 'Statistics', pct: 90 },
  { name: 'Machine Learning', pct: 75 },
  { name: 'Data Visualization', pct: 82 },
  { name: 'TensorFlow', pct: 60 },
  { name: 'Tableau', pct: 70 }
]

export default function Skills() {
  return (
    <div className="glass p-4 rounded-xl">
      <div className="flex flex-wrap gap-4">
        {skills.map((s) => (
          <div key={s.name} className="w-full sm:w-1/2 lg:w-1/4">
            <div className="flex items-center justify-between">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-subText">{s.pct}%</div>
            </div>
            <div className="w-full bg-black/20 h-2 rounded mt-2">
              <div className="h-2 rounded bg-primary" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
