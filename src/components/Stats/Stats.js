import { useState, useEffect, useRef } from 'react'
import CodeIcon from '@material-ui/icons/Code'
import LayersIcon from '@material-ui/icons/Layers'
import StarIcon from '@material-ui/icons/Star'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import { projects, skills } from '../../portfolio'
import './Stats.css'

const uniqueStackCount = new Set(projects.flatMap((p) => p.stack)).size

const STATS = [
  {
    value:   projects.length,
    label:   'Projects Built',
    Icon:    CodeIcon,
    color:   '#E07B39',
    shadow:  'rgba(224, 123, 57, 0.30)',
  },
  {
    value:   uniqueStackCount,
    label:   'Technologies Used',
    Icon:    LayersIcon,
    color:   '#5CC8C8',
    shadow:  'rgba(92, 200, 200, 0.30)',
  },
  {
    value:   skills.length,
    label:   'Skills Mastered',
    Icon:    StarIcon,
    color:   '#74B9FF',
    shadow:  'rgba(116, 185, 255, 0.30)',
  },
  {
    value:   null,
    label:   'Coffees Consumed',
    Icon:    LocalCafeIcon,
    color:   '#FF9FB2',
    shadow:  'rgba(255, 159, 178, 0.30)',
  },
]

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0)
  const cardRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (target === null) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now) => {
            const elapsed  = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const ease     = 1 - Math.pow(1 - progress, 4)
            setCount(Math.round(ease * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [target, duration])

  return [count, cardRef]
}

const StatCard = ({ value, label, Icon, color, shadow }) => {
  const [count, cardRef] = useCountUp(value)

  return (
    <div
      className='stat-card'
      ref={cardRef}
      style={{ '--accent': color, '--accent-shadow': shadow }}
    >
      <span className='stat-card__icon-wrap'>
        <Icon style={{ fontSize: '1.8rem', color }} />
      </span>
      <span className='stat-card__value'>
        {value === null ? '∞' : count}
      </span>
      <span className='stat-card__label'>{label}</span>
    </div>
  )
}

const Stats = () => (
  <section className='section stats section--tinted' id='stats'>
    <h2 className='section__title'>By the Numbers</h2>
    <div className='stats__grid'>
      {STATS.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  </section>
)

export default Stats
