import Section from './Section'
import { data } from '../data/portfolioData'

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid">
        {Object.entries(data.skills).map(([group, items]) => (
          <div className="glass" key={group}>
            <h3>{group}</h3>
            <div>{items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
