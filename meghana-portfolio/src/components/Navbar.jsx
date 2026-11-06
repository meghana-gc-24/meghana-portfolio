import { useState, useEffect } from 'react'
import { Menu, X, Linkedin } from 'lucide-react'
import { data } from '../data/portfolioData'

const links = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Certifications', 'Achievements', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase())
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="nav">
      <a href="#home" className="logo">{data.display}</a>
      <nav className={open ? 'open' : ''}>
        {links.map((l) => (
          <a key={l} href={'#' + l.toLowerCase()} className={active === l.toLowerCase() ? 'active' : ''} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a href={data.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
      </nav>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
    </header>
  )
}
