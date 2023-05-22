import React, { Fragment, useContext } from 'react'
import Task from './Task'
import ProjectContext from '../context/projects/ProjectContext'

const TaskListing = () => {

    const taskProject = [
        {name: "comprar cuaderno", state: true},
        {name: "forrar cuaderno", state: true},
        {name: "regalar cuaderno", state: false},
        {name: "dormir", state: false},
        
    ]

    const {project} = useContext(ProjectContext)

    if(!project) return null

  return (
    <Fragment>
        <h2>proyecto: {project?.name}</h2>
        <ul className='listado-tareas'>
        {taskProject.length == 0 
        ? <li>no hay tareas disponibles, agrega una tarea</li>
        : taskProject.map(task => ( 
        <Task
            task={task} />))}
        </ul>

        <button 
        type='button'
        className='btn btn-eliminar'>
          eliminar proyect &times;
      </button>
    </Fragment>
  )
}

export default TaskListing