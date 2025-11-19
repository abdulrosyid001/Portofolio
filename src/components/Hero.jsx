import React from 'react'
import Stats from './Stats'
import { biodata } from '../data/biodata'

// Hero: left text + CTA, right portrait card
export default function Hero({ data = biodata }) {
  return (
    <section className="pt-24 lg:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-subText">Halo, Saya</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">{data.name}
            <span className="block text-2xl sm:text-3xl font-bold text-primary mt-2">Data Enthusiast | Mahasiswa Statistika</span>
          </h1>
          <p className="mt-4 text-subText max-w-xl">{data.about}</p>

          <div className="mt-6">
            <Stats items={data.stats} />
          </div>
        </div>
      </div>
    </section>
  )
}
