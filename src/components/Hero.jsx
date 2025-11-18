import React from 'react'
import Stats from './Stats'
import { biodata } from '../data/biodata'

// Hero: left text + CTA, right portrait card
export default function Hero({ data = biodata }) {
  return (
    <section className="pt-24 lg:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-subText">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">{data.name}
            <span className="block text-2xl sm:text-3xl font-bold text-primary mt-2">Data Enthusiast | Mahasiswa Statistika</span>
          </h1>
          <p className="mt-4 text-subText max-w-xl">{data.about}</p>

          <div className="mt-6 flex gap-3">
            <a href="#" className="px-4 py-2 rounded-md border border-primary text-primary">Unduh CV</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-primary text-black">Kontak Saya</a>
          </div>

          <div className="mt-6">
            <Stats items={data.stats} />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-64 sm:w-80 lg:w-96 p-4 rounded-2xl glass neon-outline shadow-soft-lg">
            <img src="/placeholders/paddy.svg" alt="portrait" className="w-full h-56 object-cover rounded-xl" loading="lazy" />
            <div className="mt-3 flex items-center justify-center gap-4">
              <a aria-label="GitHub" href="#" className="text-subText">GitHub</a>
              <a aria-label="LinkedIn" href="#" className="text-subText">LinkedIn</a>
              <a aria-label="Instagram" href="#" className="text-subText">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
