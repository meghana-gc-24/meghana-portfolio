import Section from './Section'
import { data } from '../data/portfolioData'

export default function Experience() {
  return (
    <Section id="experience" title="My Learning Journey">
      <div className="grid">
        {data.learning.map((l) => (
          <div className="glass" key={l.title}>
            <h3>{l.title}</h3>
            {l.note && <p><em>{l.note}</em></p>}
            <ul>{l.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
