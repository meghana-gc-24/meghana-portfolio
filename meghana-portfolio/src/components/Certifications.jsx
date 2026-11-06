import { Award } from 'lucide-react'
import Section from './Section'
import { data } from '../data/portfolioData'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid">
        {data.certs.map((c) => (
          <div className="glass" key={c.title}>
            {c.image ? <img className="cert" src={c.image} alt={c.title} /> : <div className="banner"><Award size={40} color="#fff" /></div>}
            <h3>{c.title}</h3>
            <p>{c.issuer}</p>
            <p>{c.date || 'Completion date: coming soon'}</p>
            {c.file && <a className="btn" href={c.file} target="_blank" rel="noreferrer">View Certificate</a>}
          </div>
        ))}
      </div>
    </Section>
  )
}
