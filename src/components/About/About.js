import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const HeroIllustration = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 300 320'
    className='hero-illustration'
    aria-label='Developer working at laptop'
    role='img'
  >
    {/* Desk */}
    <rect x='30' y='222' width='240' height='16' rx='8' fill='#5C4A3A' opacity='0.25' />

    {/* Laptop base */}
    <rect x='72' y='198' width='156' height='12' rx='6' fill='#5C4A3A' opacity='0.7' />

    {/* Laptop screen housing */}
    <rect x='77' y='118' width='146' height='84' rx='10' fill='#2D1E0F' />
    {/* Screen glow */}
    <rect x='84' y='125' width='132' height='70' rx='7' fill='#1C110A' />

    {/* Code lines on screen */}
    <rect x='92' y='138' width='55' height='5' rx='2.5' fill='#5CC8C8' opacity='0.9' />
    <rect x='92' y='150' width='88' height='5' rx='2.5' fill='#FFD166' opacity='0.85' />
    <rect x='92' y='162' width='42' height='5' rx='2.5' fill='#FF9FB2' opacity='0.85' />
    <rect x='92' y='174' width='72' height='5' rx='2.5' fill='#6BCB77' opacity='0.85' />

    {/* Blinking cursor */}
    <rect x='169' y='174' width='3' height='6' rx='1.5' fill='#E07B39'>
      <animate attributeName='opacity' values='1;0;1' dur='1.2s' repeatCount='indefinite' />
    </rect>

    {/* Body / torso */}
    <rect x='118' y='178' width='64' height='46' rx='22' fill='#74B9FF' />
    {/* Collar */}
    <rect x='141' y='178' width='18' height='14' rx='7' fill='#FFFBF5' opacity='0.9' />

    {/* Arms */}
    <ellipse cx='104' cy='207' rx='13' ry='9' fill='#74B9FF' />
    <ellipse cx='93'  cy='214' rx='9'  ry='7' fill='#F5CBA7' />
    <ellipse cx='196' cy='207' rx='13' ry='9' fill='#74B9FF' />
    <ellipse cx='207' cy='214' rx='9'  ry='7' fill='#F5CBA7' />

    {/* Head — chibi big round head */}
    <ellipse cx='150' cy='108' rx='52' ry='50' fill='#F5CBA7' />

    {/* Hair — dark bowl cut */}
    <ellipse cx='150' cy='84'  rx='52' ry='30' fill='#2D1E0F' />
    <rect x='98'  y='84'  width='104' height='16' fill='#2D1E0F' />
    <ellipse cx='118' cy='95' rx='15' ry='11' fill='#2D1E0F' />
    <ellipse cx='150' cy='93' rx='16' ry='8'  fill='#2D1E0F' />
    <ellipse cx='182' cy='95' rx='15' ry='11' fill='#2D1E0F' />

    {/* Headphones in teal */}
    <path d='M100 108 Q100 66 150 66 Q200 66 200 108'
          stroke='#5CC8C8' strokeWidth='5' fill='none' strokeLinecap='round' />
    <rect x='92'  y='104' width='14' height='18' rx='7' fill='#5CC8C8' />
    <rect x='194' y='104' width='14' height='18' rx='7' fill='#5CC8C8' />

    {/* Eyes — big chibi */}
    <ellipse cx='130' cy='112' rx='9'  ry='11' fill='#FFFBF5' />
    <ellipse cx='130' cy='113' rx='6'  ry='7'  fill='#2D1E0F' />
    <ellipse cx='128' cy='111' rx='2'  ry='2'  fill='#FFFBF5' opacity='0.9' />
    <ellipse cx='170' cy='112' rx='9'  ry='11' fill='#FFFBF5' />
    <ellipse cx='170' cy='113' rx='6'  ry='7'  fill='#2D1E0F' />
    <ellipse cx='168' cy='111' rx='2'  ry='2'  fill='#FFFBF5' opacity='0.9' />

    {/* Eyebrows */}
    <path d='M122 101 Q130 96 138 101' stroke='#2D1E0F' strokeWidth='2.5' fill='none' strokeLinecap='round' />
    <path d='M162 101 Q170 96 178 101' stroke='#2D1E0F' strokeWidth='2.5' fill='none' strokeLinecap='round' />

    {/* Smile */}
    <path d='M140 127 Q150 136 160 127' stroke='#C4A882' strokeWidth='2.5' fill='none' strokeLinecap='round' />

    {/* Blush */}
    <ellipse cx='115' cy='122' rx='9' ry='6' fill='#FF9FB2' opacity='0.45' />
    <ellipse cx='185' cy='122' rx='9' ry='6' fill='#FF9FB2' opacity='0.45' />

    {/* Coffee mug — terracotta */}
    <rect x='226' y='208' width='28' height='22' rx='6' fill='#E07B39' opacity='0.75' />
    <rect x='229' y='212' width='22' height='14' rx='4' fill='#FFFBF5' opacity='0.55' />
    <path d='M254 213 Q263 218 254 222' stroke='#E07B39' strokeWidth='2.5' fill='none' strokeLinecap='round' opacity='0.75' />
    {/* Steam */}
    <path d='M235 208 Q237 201 235 194' stroke='#C4A882' strokeWidth='1.5' fill='none' strokeLinecap='round' opacity='0.5' />
    <path d='M242 208 Q244 199 242 192' stroke='#C4A882' strokeWidth='1.5' fill='none' strokeLinecap='round' opacity='0.5' />

    {/* Decorative sparkles */}
    <circle cx='248' cy='52'  r='7'  fill='#FFD166' opacity='0.80' />
    <circle cx='244' cy='52'  r='3'  fill='#FFFBF5' opacity='0.90' />
    <circle cx='40'  cy='86'  r='9'  fill='#6BCB77' opacity='0.65' />
    <circle cx='36'  cy='86'  r='3.5' fill='#FFFBF5' opacity='0.80' />
    <circle cx='262' cy='136' r='6'  fill='#FF9FB2' opacity='0.60' />
    <circle cx='36'  cy='180' r='5'  fill='#5CC8C8' opacity='0.55' />
  </svg>
)

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about'>
      {/* Decorative background blobs */}
      <div
        className='deco-circle'
        style={{ width: 90, height: 90, background: 'var(--pal-yellow)', top: '4%', right: '6%' }}
        aria-hidden='true'
      />
      <div
        className='deco-circle'
        style={{ width: 55, height: 55, background: 'var(--pal-teal)', bottom: '12%', left: '1%' }}
        aria-hidden='true'
      />
      <div
        className='deco-circle'
        style={{ width: 38, height: 38, background: 'var(--pal-pink)', top: '45%', right: '2%' }}
        aria-hidden='true'
      />

      <div className='about__content'>
        <p className='about__greeting animate-fade-in-up' style={{ animationDelay: '0.05s' }}>
          Hello, World —
        </p>

        {name && (
          <h1 className='animate-fade-in-up' style={{ animationDelay: '0.15s' }}>
            I&apos;m <span className='about__name'>{name}.</span>
          </h1>
        )}

        {role && (
          <h2 className='about__role animate-fade-in-up' style={{ animationDelay: '0.25s' }}>
            {role}
          </h2>
        )}

        <p className='about__desc animate-fade-in-up' style={{ animationDelay: '0.35s' }}>
          {description}
        </p>

        <div className='about__actions center animate-fade-in-up' style={{ animationDelay: '0.45s' }}>
          {resume && (
            <a href={resume} target='_blank' rel='noreferrer'>
              <span className='btn btn--outline'>View Resume</span>
            </a>
          )}

          {social && (
            <div className='about__social'>
              {social.github && (
                <a href={social.github} aria-label='github' className='about__social-link link link--icon' target='_blank' rel='noreferrer'>
                  <GitHubIcon />
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} aria-label='linkedin' className='about__social-link link link--icon' target='_blank' rel='noreferrer'>
                  <LinkedInIcon />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className='about__visual'>
        <div className='hero-blob' aria-hidden='true' />
        <HeroIllustration />
      </div>
    </div>
  )
}

export default About
