import { Star } from 'lucide-react'
import Section from './Section'
import { data } from '../data/portfolioData'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid">
        {data.achievements.map((a) => (
          <div className="glass" key={a}><Star color="#ec4899" size={20} /><p>{a}</p></div>
        ))}
      </div>
    </Section>
  )
}
