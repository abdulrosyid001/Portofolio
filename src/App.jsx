import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServicesAccordion from './components/ServicesAccordion'
import ProjectsGrid from './components/ProjectsGrid'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import BlogPreview from './components/BlogPreview'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { biodata } from './data/biodata'

// Main app layout - composes all sections in order
export default function App() {
  return (
    <div className="min-h-screen text-softText">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero data={biodata} />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Projek Saya</h2>
          <ProjectsGrid projects={biodata.projects} />
        </section>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-1">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pengalaman Saya</h3>
            <Experience />
          </div>
        </section>

        <section className="mt-12">
        <div className="glass p-6 rounded-xl neon-outline w-full">
            <h3 className="font-semibold mb-4">Kontak</h3>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            {/* Email */}
            <div className="flex items-center gap-2">
                <span className="text-primary text-xl">📧</span>
                <a href={`mailto:${biodata.email}`} className="text-primary hover:underline">
                {biodata.email}
                </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
                <span className="text-primary text-xl">📞</span>
                <span>{biodata.phone}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
                <span className="text-primary text-xl">📍</span>
                <span>{biodata.location}</span>
            </div>

            </div>
        </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}