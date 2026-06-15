import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <span className='section__title'>Featured Projects</span>
      <div className='projects__grid'>
        {projects.map((project, index) => (
          <ProjectContainer key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
