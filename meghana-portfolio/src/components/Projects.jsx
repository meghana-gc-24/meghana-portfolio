import { Github, ExternalLink, Code2 } from 'lucide-react'
import Section from './Section'
import { data } from '../data/portfolioData'

export default function Projects() {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid">
        {data.projects.map((p) => (
          <div className="glass project" key={p.title}>
            <div className="banner">{p.image ? <img src={p.image} alt={p.title} /> : <Code2 size={40} color="#fff" />}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div>{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
            <div className="btns">
              {p.github && <a className="btn alt" href={p.github} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
              {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
