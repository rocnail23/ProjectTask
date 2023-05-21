import React from 'react'
import Projectslisted from './Projectslisted'


const ProjectListing = () => {

    const projects = [
        {name:"hacer tarea"},
        {name:"no hacer nada"}
    ]
  return (
    <ul className='listado-proyectos'>
        {projects.map(project => (
            <Projectslisted project={project}/>
        ))}
    </ul>
  )
}

export default ProjectListing