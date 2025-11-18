import React from 'react'

// Stats: horizontal list of small statistic items
export default function Stats({ items = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map((s) => (
        <div key={s.label} className="glass p-3 rounded-lg text-center">
          <div className="text-xl font-bold">{s.value}</div>
          <div className="text-sm text-subText">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
