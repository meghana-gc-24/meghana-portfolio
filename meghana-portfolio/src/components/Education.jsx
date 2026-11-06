import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { data } from '../data/portfolioData'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid">
        {data.education.map((e) => (
          <div className="glass" key={e.degree}>
            <GraduationCap color="#8b5cf6" />
            <h3>{e.degree}</h3>
            <p>{e.place}</p>
            <p>{e.extra}</p>
            {e.years && <p>{e.years}</p>}
            {e.note && <span className="chip">{e.note}</span>}
          </div>
        ))}
      </div>
    </Section>
  )
}
