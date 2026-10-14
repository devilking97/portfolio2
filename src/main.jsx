import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Download, Menu, X, Code2, Layers, Globe, Check, Send, Sparkles } from 'lucide-react'
import { profile, projects, experience, skills, certificates } from './data'
import './styles.css'

const siteName = 'Aghiles — Software Engineer'
const siteDescription = 'Software engineer and co-founder building thoughtful digital products, scalable marketplaces, and full-stack platforms.'

function PageEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const label = pathname === '/' ? 'Software Engineer & Technical Lead' : pathname.startsWith('/projects') ? 'Projects' : pathname === '/about' ? 'About' : pathname === '/contact' ? 'Contact' : 'Page not found'
    document.title = `Aghiles Khoukhou — ${label}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', siteDescription)
    document.querySelector('meta[property="og:site_name"]')?.setAttribute('content', siteName)
  }, [pathname])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand" aria-label="Aghiles Khoukhou, home"><span className="brand-mark">ak<span>.</span></span><span>aghiles<span className="muted">.dev</span></span></Link>
    <nav id="mobile-nav" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      <NavLink to="/" end>Home</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/about">About</NavLink><NavLink to="/contact">Contact <ArrowUpRight size={14} /></NavLink>
    </nav>
    <a className="header-connect" href={profile.github} target="_blank" rel="noreferrer" aria-label="Aghiles on GitHub"><Github size={19} /></a>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>
}

function Footer() {
  return <footer className="footer wrap"><div><Link to="/" className="footer-name">Aghiles Khoukhou<span>.</span></Link><p>Thoughtfully designed. Carefully engineered.</p></div><div className="footer-right"><div className="socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a></div><span className="mono">© {new Date().getFullYear()} · Built with intention</span></div></footer>
}

function SectionLabel({ children, number }) { return <div className="section-label"><span className="tiny-square" />{children}{number && <span className="label-number">{number}</span>}</div> }

function HeroArt() {
  return <div className="hero-art" aria-label="Abstract illustration of connected software systems" role="img">
    <div className="art-grid" /><div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
    <div className="code-core"><Code2 strokeWidth={1.35}/></div>
    <div className="floating-chip chip-api"><span className="green-dot"/> API connected <span className="chip-code">200 OK</span></div>
    <div className="floating-chip chip-stack"><Layers size={18}/> Built to scale <ArrowUpRight size={15}/></div>
    <div className="terminal-card"><div className="terminal-header"><span/><span/><span/><span className="terminal-title">a little bit of magic</span></div><div><span className="terminal-muted">const</span> idea <span className="terminal-muted">=</span> <span className="terminal-orange">yourVision</span>;</div><div><span className="terminal-muted">await</span> build(idea);</div><div className="terminal-success"><span>✓</span> Ready for the real world.</div></div>
    <span className="art-caption mono">FROM CONCEPT TO CODE.</span><svg className="art-spark" viewBox="0 0 60 60" aria-hidden="true"><path d="M30 2v56M2 30h56M10 10l40 40M10 50l40-40" fill="none" stroke="currentColor" strokeWidth="3"/></svg>
  </div>
}

function ProjectPreview({ project }) {
  return <div className={`project-preview ${project.color}`} aria-hidden="true"><span className="concept-label">INTERFACE CONCEPT</span>
    {project.preview === 'shop' ? <div className="shop-mock mock-window"><div className="shop-top"><b>vonliva<span>®</span></b><div>Discover &nbsp; Collections &nbsp; Our story</div><span>Bag (2)</span></div><div className="shop-content"><div><span className="mock-eyebrow">LESS, BUT BETTER.</span><h3>Everyday objects.<br/>Extraordinary living.</h3><p>Find your next favorite thing.</p><span className="shop-button">Explore the collection <ArrowRight size={10}/></span></div><div className="vase-scene"><div className="vase vase-one"/><div className="vase vase-two"/><div className="vase-shadow"/></div></div><div className="shop-bottom"><span>Considered design</span><span>Made for your everyday</span><span>Independent makers</span></div></div>
    : project.preview === 'analytics' ? <div className="analytics-mock mock-window"><div className="analytics-sidebar"><b>n<span>.</span></b><span className="sidebar-dot selected"/><span className="sidebar-dot"/><span className="sidebar-dot"/><span className="sidebar-dot"/></div><div className="analytics-body"><div className="analytics-top"><b>Campaign overview</b><span>Last 30 days⌄</span></div><div className="mock-stats"><div><span>Impressions</span><b>248.6k</b><small>↗ 12.8%</small></div><div><span>Clicks</span><b>18,492</b><small>↗ 8.2%</small></div><div><span>Active campaigns</span><b>24</b><small>Across all channels</small></div></div><div className="chart-title">Campaign performance <span>● Impressions</span></div><svg viewBox="0 0 430 100" className="mock-chart"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e77452" stopOpacity=".25"/><stop offset="100%" stopColor="#e77452" stopOpacity="0"/></linearGradient></defs><path d="M0 87 25 72 52 76 80 42 105 51 133 33 161 47 190 27 216 38 244 13 272 26 300 19 325 33 355 10 381 19 410 4 430 12V100H0Z" fill="url(#chartFill)"/><path d="M0 87 25 72 52 76 80 42 105 51 133 33 161 47 190 27 216 38 244 13 272 26 300 19 325 33 355 10 381 19 410 4 430 12" fill="none" stroke="#d96744" strokeWidth="2.5"/></svg><div className="chart-axis">Jun 01 <span>Jun 15</span> Jun 30</div></div></div>
    : project.preview === 'auction' ? <div className="auction-mock mock-window"><div className="mock-eyebrow"><span className="green-dot"/> LIVE AUCTION</div><div className="auction-visual"><div className="sculpture"/><div><span className="mono">LOT / 024</span><h3>A new way<br/>to place a bid.</h3><p>Real-time. On any device.</p></div></div><div className="auction-bottom"><span>Live connection <span className="green-dot"/></span><span className="bid-button">Place a bid <ArrowUpRight size={12}/></span></div></div>
    : <div className="other-mock mock-window"><div className="mock-eyebrow">{project.category === 'Education' ? 'CONNECTED CAMPUS' : 'BUILT FOR BUSINESS'}</div><div className="other-symbol">{project.category === 'Education' ? <Layers size={66} strokeWidth={1}/> : <Globe size={66} strokeWidth={1}/>}</div><h3>{project.name}<span>.</span></h3><p>{project.category === 'Education' ? 'Good connections. Better possibilities.' : 'A little local. A lot of possibility.'}</p><div className="other-line"/></div>}
  </div>
}

function ProjectCard({ project }) {
  return <Link to={`/projects/${project.slug}`} className="project-card"><div className="project-cover"><img src={project.images[0].src} alt={project.images[0].alt} loading="lazy"/></div><div className="project-card-title"><div><span className="mono project-type">{project.type}</span><h3>{project.name}</h3></div><span className="project-arrow"><ArrowUpRight size={22}/></span></div><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></Link>
}

function ContactBand() { return <section className="contact-band"><div><SectionLabel>HAVE SOMETHING IN MIND?</SectionLabel><h2>Good things start<br/>with a conversation<span>.</span></h2></div><Link className="button dark" to="/contact">Let’s build something <ArrowUpRight size={18}/></Link><span className="band-star" aria-hidden="true">✳</span></section> }

function Home() {
  return <><main className="wrap"><section className="hero"><div className="hero-copy"><div className="hero-intro"><span className="intro-line"/> HELLO, I’M AGHILES KHOUKHOU</div><h1>Engineering ideas.<br/>Building <span className="accent-word">impact.</span></h1><p className="hero-description">Software engineer. Co-founder. Problem solver.<br/>I turn ambitious ideas into thoughtful digital products<br className="desktop-break"/> — with clean code and a bigger-picture mindset.</p><div className="hero-actions"><Link to="/projects" className="button dark">Explore my work <ArrowUpRight size={18}/></Link><Link to="/about" className="text-link">A little about me <ArrowRight size={16}/></Link></div><div className="hero-footnote"><span className="green-dot"/> Full-stack thinking. Product-first building.</div></div><HeroArt/></section>
    <div className="skills-ribbon"><span className="mono ribbon-label">THE TOOLS BEHIND THE IDEAS</span><div>{['Python', 'Django', 'React', 'PostgreSQL', 'Docker'].map(skill => <span key={skill}>{skill}<span className="ribbon-dot"/></span>)}</div><span className="mono ribbon-end">+ a curious mind</span></div>
    <section className="selected-section"><div className="section-top"><div><SectionLabel number="01">SELECTED WORK</SectionLabel><h2>Less talk. <span className="serif">More building.</span></h2><p>A few things I’ve helped bring to life.</p></div><Link to="/projects" className="text-link">All projects <span className="small-count">06</span><ArrowUpRight size={18}/></Link></div><div className="project-grid">{projects.slice(0, 2).map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</div></section>
    <section className="about-teaser"><div><SectionLabel number="02">THE PERSON BEHIND THE CODE</SectionLabel><h2>Engineer by craft.<br/><span className="serif">Builder by nature.</span></h2></div><div><p>I’m Aghiles, a software engineer and co-founder who cares as much about <strong>why a product exists</strong> as how it’s built.</p><p>From marketplaces to real-time platforms, I connect technical architecture with real human needs. Thoughtful systems. Useful experiences. No unnecessary complexity.</p><Link to="/about" className="text-link">More about my approach <ArrowUpRight size={18}/></Link></div></section><ContactBand/>
  </main></>
}

function Projects() {
  const [filter, setFilter] = useState('All work')
  const filtered = projects.filter(project => filter === 'All work' || project.category === filter)
  return <main className="wrap inner-page"><SectionLabel>PROJECTS / SELECTED & EXPLORATORY</SectionLabel><div className="page-heading"><h1>Ideas into<br/><span className="serif accent">working things.</span></h1><p>Marketplaces, live experiences, and practical platforms.<br/>A closer look at the problems I help solve.</p></div><div className="project-filters" aria-label="Filter projects">{['All work', 'Platforms', 'Real-time', 'Education', 'Business'].map(category => <button key={category} onClick={() => setFilter(category)} className={filter === category ? 'active' : ''} aria-pressed={filter === category}>{category}{category === 'All work' && <span>06</span>}</button>)}</div><div className="project-grid" aria-live="polite">{filtered.map(project => <ProjectCard key={project.slug} project={project}/>)}</div><p className="preview-note">Visual previews are original interface concepts, not screenshots of deployed products. Project descriptions are based on my CV.</p><ContactBand/></main>
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <NotFound/>
  return <main className="wrap inner-page detail-page"><Link to="/projects" className="text-link back-link"><ArrowRight className="reverse" size={16}/> Back to projects</Link><SectionLabel>{project.type}</SectionLabel><h1>{project.name}<span className="accent">.</span></h1><p className="detail-lead">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-gallery">{project.images.map(image => <img key={image.src} src={image.src} alt={image.alt} loading="lazy"/>)}</div><div className="detail-content"><div><SectionLabel>THE CONTEXT</SectionLabel><h2>From problem<br/>to product.</h2></div><div><p>{project.overview}</p><h3>My contribution</h3><ul>{project.contributions.map(contribution => <li key={contribution}><Check size={17}/>{contribution}</li>)}</ul></div></div><ContactBand/></main>
}

function About() {
  return <main className="wrap inner-page"><SectionLabel>ABOUT / THE BIGGER PICTURE</SectionLabel><div className="page-heading"><h1>Code is the craft.<br/><span className="serif accent">People are the point.</span></h1><p>Software engineer, technical lead, and co-founder.<br/>Curious about what’s possible. Careful about what matters.</p></div><section className="about-intro"><div className="about-manifesto"><Code2 size={32}/><h2>Build with purpose.<br/>Keep it simple.<br/>Make it useful<span>.</span></h2><span className="mono">MY APPROACH, IN THREE LINES.</span></div><div><h2>Hi, I’m Aghiles.</h2><p>I combine technical expertise, product vision, and an entrepreneurial mindset to design and scale high-performance platforms focused on user needs.</p><p>My work spans full-stack development, software architecture, and project management. I’m comfortable moving from a product question to a database design, from an API to a React interface, and from an early idea to a deployed platform.</p><a className="button outline" href="/aghiles-khoukhou-cv.pdf" download>Download my CV <Download size={17}/></a></div></section>
    <section className="experience-section"><div className="section-top"><div><SectionLabel number="01">THE JOURNEY</SectionLabel><h2>Experience that <span className="serif">builds.</span></h2></div></div>{experience.map(job => <article className="experience-row" key={job.company}><span className="mono">{job.dates}</span><div><h3>{job.role}</h3><span className="company-name">{job.company}</span></div><p>{job.description}</p></article>)}</section>
    <section className="toolbox-section"><div><SectionLabel number="02">MY TOOLBOX</SectionLabel><h2>The right tool.<br/><span className="serif">Not every tool.</span></h2><p>Full-stack development, REST API design, database management, DevOps, and requirements analysis.</p></div><div className="toolbox">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>
    <section className="education-section"><div><SectionLabel number="03">FOUNDATIONS</SectionLabel><h2>Always <span className="serif">learning.</span></h2><div className="degree"><span className="mono">2019 — 2021</span><h3>Master’s Degree in IT Project Management</h3></div><div className="degree"><span className="mono">2015 — 2019</span><h3>Bachelor’s Degree in Computer Science</h3></div></div><div><h3 className="cert-title">Certifications & continuing education</h3><div className="cert-grid">{certificates.map(cert => <figure className="cert-card" key={cert.title}><img src={cert.image} alt={`${cert.title} certificate`} loading="lazy"/><figcaption><strong>{cert.title}</strong><span className="mono">{cert.issuer}</span></figcaption></figure>)}</div></div></section><ContactBand/></main>
}

function Contact() {
  const [status, setStatus] = useState('idle')
  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    try {
      const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
    } catch { setStatus('error') }
  }
  return <main className="wrap inner-page"><SectionLabel>CONTACT / START SOMETHING GOOD</SectionLabel><div className="page-heading"><h1>Your idea.<br/><span className="serif accent">Our next conversation.</span></h1><p>A project, an opportunity, or just a good question.<br/>I’d love to hear what you’re thinking.</p></div><div className="contact-layout"><section className="contact-info"><h2>Let’s connect<span>.</span></h2><p>The best way to reach me is by email.<br/>Prefer a quick hello? Find me here, too.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20}/></a><a className="phone-link" href="tel:+213556293090">{profile.phone}</a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={22}/><span>GitHub<small>Code & experiments</small></span><ArrowUpRight size={19}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={22}/><span>LinkedIn<small>The professional side</small></span><ArrowUpRight size={19}/></a></div><div className="contact-note"><Sparkles size={22}/><p>Good products start with a clear problem.<br/>Tell me a little about yours.</p></div></section><section className="form-panel"><h2>Send a note</h2><form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}><input type="hidden" name="form-name" value="contact"/><p hidden><label>Leave this blank<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></p><label htmlFor="name">Your name<input id="name" name="name" autoComplete="name" placeholder="What should I call you?" required maxLength={100}/></label><label htmlFor="email">Email address<input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/></label><label htmlFor="message">What’s on your mind?<textarea id="message" name="message" placeholder="A little about your project, idea, or opportunity…" required minLength={10} maxLength={5000} rows={5}/></label><button className="button dark" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending your note…' : 'Send message'}<Send size={17}/></button><div aria-live="polite" className={`form-status ${status}`}>{status === 'success' && <p><Check size={17}/> Thanks! Your message is on its way.</p>}{status === 'error' && <p>Something went wrong. Please try again, or <a href={`mailto:${profile.email}`}>email me directly</a>.</p>}</div><p className="form-disclaimer">Your details are only used to respond to your message.</p></form></section></div></main>
}

function NotFound() { return <main className="wrap inner-page not-found"><SectionLabel>404 / A SMALL DETOUR</SectionLabel><h1>This page took<br/>a wrong turn<span className="accent">.</span></h1><p>Let’s get you back to something worth exploring.</p><Link to="/" className="button dark">Back to home <ArrowRight size={18}/></Link></main> }

function App() { return <BrowserRouter><PageEffects/><a href="#main-content" className="skip-link">Skip to content</a><Header/><div id="main-content" tabIndex={-1}><Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></div><Footer/></BrowserRouter> }

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
