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
          <h2 className="text-2xl font-semibold mb-4">My Recent Works</h2>
          <ProjectsGrid projects={biodata.projects} />
        </section>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pengalaman Saya</h3>
            <Experience />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Pendidikan Saya</h3>
            <Education />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Kemampuan Saya</h2>
          <Skills />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>
          <BlogPreview />
        </section>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl neon-outline">
            <h3 className="font-semibold mb-2">Kontak</h3>
            <p>Email: <a className="text-primary" href={`mailto:${biodata.email}`}>{biodata.email}</a></p>
            <p>Nomor Telepon: {biodata.phone}</p>
            <p>Lokasi: {biodata.location}</p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
