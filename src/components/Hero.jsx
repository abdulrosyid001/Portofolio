import React from 'react'
import Stats from './Stats'
import { biodata } from '../data/biodata'

// Hero: left text + CTA, right portrait card
export default function Hero({ data = biodata }) {
  return (
    <section className="pt-24 lg:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Left Text Section */}
        <div>
          <p className="text-subText">Halo, Saya</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            {data.name}
            <span className="block text-2xl sm:text-3xl font-bold text-primary mt-2">
              Data Enthusiast | Mahasiswa Statistika
            </span>
          </h1>
          <p className="mt-4 text-subText max-w-xl">{data.about}</p>

          <div className="mt-6">
            <Stats items={data.stats} />
          </div>
        </div>

        {/* Right Photo Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-border">
            <img
              src={data.photo}        // Pastikan biodata.photo berisi path foto
              alt="Foto Profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
