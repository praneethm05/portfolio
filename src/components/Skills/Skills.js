import { skills } from '../../portfolio'
import './Skills.css'

const PILL_CONFIG = [
  { bg: '#E07B39', text: '#FFFBF5', iconColor: 'ffffff' },
  { bg: '#5CC8C8', text: '#FFFBF5', iconColor: 'ffffff' },
  { bg: '#FFD166', text: '#2D1E0F', iconColor: '2D1E0F' },
  { bg: '#FF9FB2', text: '#2D1E0F', iconColor: '2D1E0F' },
  { bg: '#74B9FF', text: '#FFFBF5', iconColor: 'ffffff' },
  { bg: '#6BCB77', text: '#FFFBF5', iconColor: 'ffffff' },
]

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map(({ name, icon }, index) => {
          const config = PILL_CONFIG[index % PILL_CONFIG.length]
          return (
            <li
              key={name}
              className='skill-pill'
              style={{ '--pill-bg': config.bg, '--pill-text': config.text }}
            >
              <img
                src={`https://cdn.simpleicons.org/${icon}/${config.iconColor}`}
                alt=''
                className='skill-pill__icon'
                loading='lazy'
                aria-hidden='true'
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span>{name}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
