import { useState, useEffect, useRef } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about, skillIcons } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const visualRef = useRef(null)

  useEffect(() => {
    const visualElement = visualRef.current
    if (visualElement) {
      const handleMouseMove = (e) => {
        const { left, top, width, height } = visualElement.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) / 25
        const y = (e.clientY - top - height / 2) / 25
        setOffset({ x, y })
      }

      const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 })
      }

      visualElement.addEventListener('mousemove', handleMouseMove)
      visualElement.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        visualElement.removeEventListener('mousemove', handleMouseMove)
        visualElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
    return undefined // Explicit return to satisfy consistent-return
  }, [])

  // Positions relative to the right column (visual area)
  // Focusing on a scattered cloud effect
  const positions = [
    { top: '15%', left: '15%' },
    { top: '25%', left: '75%' },
    { top: '45%', left: '45%' }, // Center-ish
    { top: '65%', left: '10%' },
    { top: '75%', left: '70%' },
    { top: '10%', left: '55%' },
    { top: '85%', left: '30%' },
    { top: '40%', left: '85%' },
  ]

  const floatIcons = Object.values(skillIcons)
    .filter(slug => slug !== 'css') // Remove CSS icon from floating background
    .slice(0, 8)
    .map((slug, index) => ({
      id: index,
      url: `https://cdn.simpleicons.org/${slug}/64ffda`,
      // Wrapper style handles positioning and parallax
      wrapperStyle: {
        position: 'absolute',
        left: positions[index] ? positions[index].left : `${Math.random() * 80}%`,
        top: positions[index] ? positions[index].top : `${Math.random() * 80}%`,
        transform: `translate(${offset.x * (index % 2 === 0 ? 1 : -1) * ((index % 3) + 1)}px, ${offset.y * (index % 2 !== 0 ? 1 : -1) * ((index % 3) + 1)}px)`,
        transition: 'transform 0.1s ease-out',
        width: '50px',
        height: '50px', // Fix: Ensure wrapper has height
        zIndex: 0,
      },
      // Img style handles float animation
      imgStyle: {
        width: '100%',
        height: '100%',
        animationDelay: `${index * 1.5}s`,
        animationDuration: '14s',
      }
    }))

  return (
    <div className='about'>
      <div className='about__content'>
        {name && (
          <h1 className='animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        )}

        {role && (
          <h2 className='about__role animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
            A {role}.
          </h2>
        )}
        <p className='about__desc animate-fade-in-up' style={{ animationDelay: '0.3s' }}>
          {description && description}
        </p>

        <div className='about__contact center animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>

      <div className='about__visual' ref={visualRef}>
        {floatIcons.map((icon) => (
          <div key={icon.id} style={icon.wrapperStyle}>
            <img
              src={icon.url}
              alt=''
              className='floating-icon'
              style={icon.imgStyle}
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
