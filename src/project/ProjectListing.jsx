import React, { useContext, useEffect } from 'react'
import Projectslisted from './Projectslisted'
import ProjectContext from '../context/projects/ProjectContext'


const ProjectListing = () => {

  const {projects, getProjects} = useContext(ProjectContext)

 useEffect(() => {
   getProjects()
 },[])
   
  return (
    <ul className='listado-proyectos'>
        {projects.map(project => (
            <Projectslisted project={project}/>
        ))}
    </ul>
  )
}

export default ProjectListing