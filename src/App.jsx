import Particlebg from './components/Particlebg'
import './App.css'
import { useRef, useState, useEffect, memo } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SectionBg from './components/Sectionbg'
import { FaGithub, FaLinkedin, FaAngleUp } from "react-icons/fa"

const MemoizedParticlebg = memo(Particlebg)
const MemoizedSectionbg = memo(SectionBg)

export default function App() {
  const navbarRef = useRef(null)
  const placeholderRef = useRef(null)
  const [sticky, setSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [aboutVisited, setAboutVisited] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current && placeholderRef.current) {
        const navbarTop = placeholderRef.current.getBoundingClientRect().top
        
        // becomes sticky when its original position scrolls past the top
        if (navbarTop <= 0 && !sticky) {
          setSticky(true)
        } else if (navbarTop > 0 && sticky) {
          setSticky(false)
        }
      }

      // determine which section is currently in view
      const sections = ['about', 'projects', 'contact']
      const navbarHeight = navbarRef.current?.offsetHeight || 0
      const scrollPosition = window.scrollY + navbarHeight + 150
      
      let currentSection = 'cover'
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId
          }
        }
      }
      
      // if we're near the bottom of the page, set to last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = 'contact'
      }
      
      if (currentSection) {
        setActiveSection(currentSection)
      }

      if (currentSection === 'about' && !aboutVisited) {
      setAboutVisited(true)  // mark About as visited
    }

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sticky, aboutVisited])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    
    if (section) {
      const navbarHeight = navbarRef.current?.offsetHeight || 0
      const sectionTop = section.offsetTop - navbarHeight
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='app-container'>

        <MemoizedParticlebg />

      {/* landing page cover */}
      <div className='content' style={{ height: "100vh" }} id="home">
        <p className="title">Hello, I'm <span style={{ color: "rgb(215, 94, 156)" }}>Lauren</span>.</p>
        <p className="title">I'm a full stack web developer.</p>
        <button className='description' onClick={(e) => scrollToSection(e, 'about')}>View My Work ↓</button>
      </div>
      
      {/* pplaceholder - marks where navbar should be in document flow */}
      <div ref={placeholderRef} style={{ height: sticky ? navbarRef.current?.offsetHeight : 'auto' }}>

        {/* navbar */}
        <div
          ref={navbarRef}
          style={{
            position: sticky ? "fixed" : "static",
            top: 0,
            right: 0,
            width: "100vw",
            background: "#070c33",
            padding: "1rem 2rem",
            borderBottom: "1px solid #000000ff",
            zIndex: 1000,
            display: "flex",
            justifyContent: "flex-end",
            gap: "2rem",
            boxShadow: "0 2px 4px #000000ff",
            fontFamily: "Arial, Helvetica, sans-serif",
            letterSpacing: '0.15rem',
            fontSize: "1.3rem",
            fontWeight: '550',
            paddingRight: '7vw'
          }}
        >
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            style={{ 
              color: activeSection === 'home' ? "rgb(215, 94, 156)" : "white", 
              textDecoration: "none", 
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontWeight: activeSection === 'home' ? 'bold' : 'normal'
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            style={{ 
              color: activeSection === 'about' ? "rgb(215, 94, 156)" : "white", 
              textDecoration: "none", 
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontWeight: activeSection === 'about' ? 'bold' : 'normal'
            }}
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            style={{ 
              color: activeSection === 'projects' ? "rgb(215, 94, 156)" : "white", 
              textDecoration: "none", 
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontWeight: activeSection === 'projects' ? 'bold' : 'normal'
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            style={{ 
              color: activeSection === 'contact' ? "rgb(215, 94, 156)" : "white", 
              textDecoration: "none", 
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontWeight: activeSection === 'contact' ? 'bold' : 'normal'
            }}
          >
            Contact
          </a>
        </div>
      </div>
      
      {/* main sections */}
      <div className="sections">
        <About aboutVisited={aboutVisited}/>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}


function Footer() {
  return (
    <div className='footer'>
      <button
        onClick={() => {
          const homeSection = document.getElementById("home");
          if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        style={{ background: "white", width: '3vw', height: '5vh', display: 'flex', justifyContent: "center", alignItems: "center", zIndex: "100", marginTop: '-5rem', border: '0' }}
      >
        <FaAngleUp style={{ fontSize: '2rem' }}/>
      </button>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.8rem', marginTop: '3vh'}}>
        <a
          href="https://github.com/lphan48"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
        >
          <FaGithub style={{ fontSize: '2.5rem' }}/>
        </a>

        <a
          href="https://www.linkedin.com/in/laurenphan/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
        >
          <FaLinkedin style={{ fontSize: '2.5rem' }} />
        </a>
      </div>
      <div style={{ color: 'white', fontSize: '0.7rem', fontFamily: 'Arial, Helvetica, sans-serif' }}>LAUREN PHAN @2025</div>
    </div>
  )
}