import { skills, skillIcons } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <span className='section__title'>Things I&apos;ve worked with</span>
      <ul className='skills__list'>
        {skills.map((skill) => {
          const iconSlug = skillIcons[skill]
          return (
            <li key={skill} className='skills__item' title={skill}>
              {iconSlug && (
                <img
                  src={`https://cdn.simpleicons.org/${iconSlug}/ffffff`}
                  alt={skill}
                  className='skills__icon'
                  loading='lazy'
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              )}
              <span className='skills__name'>{skill}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
