import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react'
import Section from './Section'
import { data } from '../data/portfolioData'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value })
  // No backend needed: this opens the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
  }
  return (
    <Section id="contact" title="Let's Connect!">
      <div className="grid">
        <div className="glass">
          <h3>{data.name}</h3>
          <p><Mail size={16} /> <a href={`mailto:${data.email}`}>{data.email}</a></p>
          <p><Phone size={16} /> <a href={`tel:${data.phone}`}>{data.phone}</a></p>
          <p><MapPin size={16} /> {data.location}</p>
          <p><Linkedin size={16} /> <a href={data.linkedin} target="_blank" rel="noreferrer">My LinkedIn Profile</a></p>
        </div>
        <form className="glass" onSubmit={submit}>
          <input name="name" placeholder="Name" required value={f.name} onChange={change} />
          <input name="email" type="email" placeholder="Email" required value={f.email} onChange={change} />
          <input name="subject" placeholder="Subject" required value={f.subject} onChange={change} />
          <textarea name="message" rows="4" placeholder="Message" required value={f.message} onChange={change} />
          <button className="btn" type="submit"><Send size={16} /> Send Message</button>
        </form>
      </div>
    </Section>
  )
}
