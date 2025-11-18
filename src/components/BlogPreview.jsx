import React from 'react'

// BlogPreview: three small blog cards
const blogs = [
  { title: 'Understanding ARIMA for Time Series', excerpt: 'Quick primer on ARIMA and when to use it.', date: '2024-03-12' },
  { title: 'Data Viz Tips for Presentation', excerpt: 'Best practices for making charts that communicate.', date: '2024-02-01' },
  { title: 'Intro to CNN for Plant Disease', excerpt: 'How convolutional nets can help agriculture.', date: '2023-12-10' }
]

export default function BlogPreview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {blogs.map((b, i) => (
        <article key={i} className="glass p-4 rounded-xl">
          <div className="h-32 bg-black/20 rounded mb-3" />
          <h4 className="font-semibold">{b.title}</h4>
          <p className="text-subText text-sm">{b.excerpt}</p>
          <div className="text-subText text-xs mt-2">{b.date}</div>
        </article>
      ))}
    </div>
  )
}
