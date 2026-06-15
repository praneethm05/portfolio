import { useState } from 'react'
import { experience } from '../../portfolio'
import './Experience.css'

const ExperienceNode = ({ item }) => {
  const [open, setOpen] = useState(false)
  const hasDetails = item.details && item.details.length > 0

  return (
    <div className='tl-node'>
      <div className='tl-node__dot' />
      <div className='tl-node__connector' />

      <div className='tl-card'>
        <button
          type='button'
          className={`tl-card__header ${hasDetails ? 'is-clickable' : ''}`}
          onClick={() => hasDetails && setOpen(o => !o)}
          aria-expanded={open}
        >
          <div className='tl-card__info'>
            <span className='tl-card__title'>{item.title}</span>
            <span className='tl-card__subtitle'>{item.subtitle}</span>
          </div>
          <div className='tl-card__right'>
            <span className='tl-card__meta'>{item.meta}</span>
            {item.link && (
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className='tl-card__link'
                onClick={e => e.stopPropagation()}
              >
                verify ↗
              </a>
            )}
            {hasDetails && (
              <span className={`tl-card__chevron ${open ? 'is-open' : ''}`}>
                ↓
              </span>
            )}
          </div>
        </button>

        {hasDetails && (
          <div className={`tl-card__body ${open ? 'is-open' : ''}`}>
            <ul>
              {item.details.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

const Experience = () => (
  <section className='section experience' id='experience'>
    <span className='section__title'>Experience</span>
    <div className='timeline'>
      <div className='tl-trunk' />
      {experience.map(group => (
        <div key={group.category} className='tl-group'>
          <div className='tl-category'>
            <div className='tl-category__dot' />
            <span className='tl-category__label'>{group.category}</span>
          </div>
          <div className='tl-items'>
            {group.items.map((item) => (
              <ExperienceNode key={item.title} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Experience
