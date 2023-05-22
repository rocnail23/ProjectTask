import React, { useContext } from 'react'
import ProjectContext from '../context/projects/ProjectContext'

const Projectslisted = ({project}) => {
  const {selectProject} = useContext(ProjectContext)
  return (
    <li onClick={() => selectProject(project)}>
        <button
        type='button'
        className='btn btn-blank'>
            {project.name}
        </button>
    </li>
  )
}

export default Projectslisted