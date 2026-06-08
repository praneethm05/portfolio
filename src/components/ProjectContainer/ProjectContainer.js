import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const CARD_CONFIGS = [
  { accent: '#E07B39', bg: 'rgba(224, 123, 57, 0.08)',  shadow: 'rgba(224, 123, 57, 0.20)' },
  { accent: '#5CC8C8', bg: 'rgba(92,  200, 200, 0.08)', shadow: 'rgba(92, 200, 200, 0.20)'  },
  { accent: '#FFD166', bg: 'rgba(255, 209, 102, 0.10)', shadow: 'rgba(255, 209, 102, 0.25)' },
  { accent: '#FF9FB2', bg: 'rgba(255, 159, 178, 0.08)', shadow: 'rgba(255, 159, 178, 0.20)' },
  { accent: '#74B9FF', bg: 'rgba(116, 185, 255, 0.08)', shadow: 'rgba(116, 185, 255, 0.20)' },
  { accent: '#6BCB77', bg: 'rgba(107, 203, 119, 0.08)', shadow: 'rgba(107, 203, 119, 0.20)' },
]

const ProjectContainer = ({ project, colorIndex = 0 }) => {
  const { accent, bg, shadow } = CARD_CONFIGS[colorIndex % CARD_CONFIGS.length]

  return (
    <div
      className='project'
      style={{
        '--card-accent': accent,
        '--card-accent-bg': bg,
        '--card-accent-shadow': shadow,
      }}
    >
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={item} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
