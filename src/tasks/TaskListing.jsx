import React, { Fragment } from 'react'
import Task from './Task'

const TaskListing = () => {

    const taskProject = [
        {name: "comprar cuaderno", state: true},
        {name: "forrar cuaderno", state: true},
        {name: "regalar cuaderno", state: false},
        {name: "dormir", state: false},
        
    ]

  return (
    <Fragment>
        <h2>Proyectos:</h2>
        <ul className='listado-tareas'>
        {taskProject.length == 0 
        ? <li>no hay tareas disponibles, agrega una tarea</li>
        : taskProject.map(task => ( 
        <Task
            task={task} />))}
        </ul>
    </Fragment>
  )
}

export default TaskListing