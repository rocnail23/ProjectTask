import React, { useContext,forwardRef } from 'react'
import TaskContex from '../context/tasks/TaskContex'

const Task = forwardRef( ({task},ref) => {
    const {deleteTask,changeStateTask,editTask} = useContext(TaskContex)


  return (
    <li ref={ref} className='tarea sombra'>
        <p>{task?.name}</p>
        <div className='estado'>
            {task.state
            ? 
                (
                    <button 
                        onClick={() => changeStateTask(task.id)}
                        type='button'
                        className='completo'>
                            completo
                    </button>
                )
            :   
                ( 
                    <button 
                        onClick={() => changeStateTask(task.id)}
                        type='button'
                        className='incompleto'>
                        incompleto
                    </button>
                )}
        </div>
        <div className='acciones'>
            <button
                onClick={() => editTask(task)}
                type='button'
                className='btn btn-primario'>
                editar
            </button>
            <button
                onClick={() => deleteTask(task.id)}
                 type='button'
                 className='btn btn-secundario'>
                    eliminar
            </button>
        </div>
    </li>
  )
})

export default Task