import { useState, useEffect } from 'react'
import { Linkedin, Download, Mail, FolderOpen } from 'lucide-react'
import { data } from '../data/portfolioData'

export default function Hero() {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  const [photoOk, setPhotoOk] = useState(true)

  useEffect(() => {
    const w = data.typing[i]
    let t
    if (!del && txt === w) t = setTimeout(() => setDel(true), 1200)
    else if (del && txt === '') { setDel(false); setI((i + 1) % data.typing.length) }
    else t = setTimeout(() => setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1)), del ? 40 : 80)
    return () => clearTimeout(t)
  }, [txt, del, i])

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="hello">HELLO, I'M {data.display}</p>
        <h1>{data.title}</h1>
        <p className="typing">{txt}<span className="cursor">|</span></p>
        <p>{data.intro}</p>
        <div className="btns">
          <a className="btn" href="#projects"><FolderOpen size={16} /> View My Projects</a>
          <a className="btn alt" href={data.resume} download><Download size={16} /> Download My Resume</a>
          <a className="btn alt" href="#contact"><Mail size={16} /> Contact Me</a>
          <a className="btn" href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> Connect on LinkedIn</a>
        </div>
      </div>
      <div className="photo">
        {photoOk ? <img src={data.photo} alt={data.name} onError={() => setPhotoOk(false)} /> : <div className="ph">MG</div>}
      </div>
    </section>
  )
}
