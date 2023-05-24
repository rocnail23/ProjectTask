import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import Task from './Task'
import ProjectContext from '../context/projects/ProjectContext'
import TaskContex from '../context/tasks/TaskContex'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TaskListing = () => {

  
  
    
    

   

    const {project,deleteProject} = useContext(ProjectContext)
    const {taskId,getTaskById,tasks} = useContext(TaskContex)

    useEffect(() => {
      

      getTaskById(project?.id)
      
    },[project,tasks])

   


    if(!project) return null
    if(taskId.lenght == 0) return <p>no hay tareas</p>
    
  return (
    <Fragment>
        <h2>proyecto: {project?.name}</h2>
        <ul className='listado-tareas'>
        {taskId.length == 0 
        ? <li>no hay tareas disponibles, agrega una tarea</li>
        :
         <TransitionGroup>
        { taskId.map(task => ( 
           <CSSTransition nodeRef={task.nodeRef} key={task.id} timeout={200} classNames="tarea">
        <Task
            ref={task.nodeRef}
            task={task} />
            </CSSTransition> ))
            }
          </TransitionGroup>
           }
         
        </ul>

        <button
        onClick={() =>  deleteProject(project)} 
        type='button'
        className='btn btn-eliminar'>
          eliminar proyect &times;
      </button>
    </Fragment>
  )
}

export default TaskListing