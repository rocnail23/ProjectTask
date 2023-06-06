import React, { useContext, useEffect } from 'react'
import Projectslisted from './Projectslisted'
import ProjectContext from '../context/projects/ProjectContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const ProjectListing = () => {

  const {projects, getProjects,deleteProject} = useContext(ProjectContext)
  const {message} = useContext(ProjectContext)
  
 useEffect(() => {
   getProjects()
   
 },[message])

 if(projects.length == 0) return <p>no hay proyectos para mostrar</p>
   
  return (
    <ul className='listado-proyectos'>
      {message ? <div className='alerta alerta-error'>{message}</div>: null}
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition key={project._id} classNames="proyecto" timeout={200} nodeRef={project.nodeRef}>
            <Projectslisted ref={project.nodeRef} project={project}/>
            </CSSTransition>
        ))}
        </TransitionGroup>
    </ul>
  )
}

export default ProjectListing