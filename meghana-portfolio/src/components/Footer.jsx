import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react'
import { data } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer>
      <h3>{data.name}</h3>
      <p>Aspiring Web Developer</p>
      <p className="quick">
        {['About', 'Skills', 'Projects', 'Contact'].map((l) => <a key={l} href={'#' + l.toLowerCase()}>{l}</a>)}
      </p>
      <p className="quick">
        <a href={`mailto:${data.email}`}><Mail size={16} /> Email</a>
        <a href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
        <a href={data.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
      </p>
      <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      <a className="top" href="#home" aria-label="Back to top"><ArrowUp /></a>
    </footer>
  )
}
