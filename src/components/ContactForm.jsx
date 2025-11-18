import React, { useState } from 'react'

// ContactForm: client-side validation and mock success toast
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [success, setSuccess] = useState(false)

  const valid = form.name && form.email && form.message

  function onSubmit(e) {
    e.preventDefault()
    if (!valid) return alert('Please fill name, email and message')
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div id="contact">
      <form onSubmit={onSubmit} className="glass p-6 rounded-xl space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input aria-label="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="p-2 bg-transparent border rounded" placeholder="Name*" />
          <input aria-label="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="p-2 bg-transparent border rounded" placeholder="Email*" />
        </div>
        <input aria-label="Subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="p-2 bg-transparent border rounded w-full" placeholder="Subject" />
        <textarea aria-label="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="p-2 bg-transparent border rounded w-full h-32" placeholder="Message*" />
        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-primary text-black rounded">Send Message</button>
          {success && <div className="text-sm text-primary">Message sent! (mock)</div>}
        </div>
      </form>
    </div>
  )
}
