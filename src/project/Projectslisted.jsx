import React, { useContext,forwardRef } from 'react'
import ProjectContext from '../context/projects/ProjectContext'

const Projectslisted = forwardRef(({project},ref) => {
  const {selectProject} = useContext(ProjectContext)
  return (
    <li ref={ref} onClick={() => selectProject(project)}>
        <button
        type='button'
        className='btn btn-blank'>
            {project.name}
        </button>
    </li>
  )
}
)
export default Projectslisted