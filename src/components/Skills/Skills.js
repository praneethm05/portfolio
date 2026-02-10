import { skills, skillIcons } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => {
          const iconSlug = skillIcons[skill] || 'github' // Default to github if not found
          const iconUrl = `https://cdn.simpleicons.org/${iconSlug}/64ffda` // Default color matching theme

          return (
            <li key={skill} className='skills__list-item btn btn--plain animate-fade-in-up'>
              <img
                src={iconUrl}
                alt={skill}
                className='skill__icon'
                loading='lazy'
                onError={(e) => { e.target.style.display = 'none' }} // Hide if fails
              />
              <span className='skill__name'>{skill}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
