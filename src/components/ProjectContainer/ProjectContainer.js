import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project, index }) => {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className='project'>
      <span className='project__number'>{num}</span>
      <h3 className='project__name'>{project.name}</h3>
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
            className='project__link'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon fontSize='small' />
          </a>
        )}
        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='project__link'
            target='_blank'
            rel='noreferrer'
          >
            <LaunchIcon fontSize='small' />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
