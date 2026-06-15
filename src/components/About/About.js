import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { about, contact, skills, skillIcons } from '../../portfolio'
import profileImg from '../../assets/image.jpg'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const heroSkills = skills.slice(0, 8)

  return (
    <div className='about'>
      <div className='about__panel animate-fade-in-up'>

        {/* Left — Photo card */}
        <div className='about__identity'>
          <div className='about__monogram'>
            <img src={profileImg} alt='Praneeth M' className='about__photo' />
          </div>
          <p className='about__id-label'>Developer</p>
        </div>

        {/* Center — Bio */}
        <div className='about__bio'>
          <h1 className='about__greeting'>Hello!</h1>
          <p className='about__tagline'>
            I&apos;m <strong>{name}</strong>, a {role}
          </p>
          <p className='about__desc'>{description}</p>
          {resume && (
            <a
              href={resume}
              className='about__resume-btn'
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          )}
        </div>

        {/* Right — Skills + Links */}
        <div className='about__sidebar'>
          <div className='about__skills-block'>
            <h4 className='about__block-title'>SKILLS</h4>
            <div className='about__skill-tiles'>
              {heroSkills.map((skill) => {
                const slug = skillIcons[skill]
                if (!slug) return null
                return (
                  <div key={skill} className='about__skill-tile' title={skill}>
                    <img
                      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
                      alt={skill}
                      loading='lazy'
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className='about__links-block'>
            <h4 className='about__block-title'>LINKS</h4>
            <div className='about__social-links'>
              {social?.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='about__social-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubIcon />
                </a>
              )}
              {social?.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='about__social-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact bar */}
      <div className='about__contact-row'>
        {contact.email && (
          <a href={`mailto:${contact.email}`} className='about__contact-item'>
            <EmailIcon fontSize='small' />
            <span>{contact.email}</span>
          </a>
        )}
        {social?.github && (
          <a
            href={social.github}
            className='about__contact-item'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon fontSize='small' />
            <span>github.com/praneethm05</span>
          </a>
        )}
        {social?.linkedin && (
          <a
            href={social.linkedin}
            className='about__contact-item'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon fontSize='small' />
            <span>linkedin.com/in/praneethm05</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
