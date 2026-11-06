import Section from './Section'
import { data } from '../data/portfolioData'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="glass">
        {data.about.map((p) => <p key={p} style={{ marginBottom: 12 }}>{p}</p>)}
        <h3>Interests</h3>
        <div>{data.interests.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
        <h3 style={{ marginTop: 16 }}>Career Goal</h3>
        <p>{data.goal}</p>
      </div>
    </Section>
  )
}
