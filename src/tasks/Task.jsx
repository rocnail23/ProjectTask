import React from 'react'

const Task = ({task}) => {
  return (
    <li className='tarea sombra'>
        <p>{task.name}</p>
        <div className='estado'>
            {task.state
            ? 
                (
                    <button 
                        type='button'
                        className='completo'>
                            completo
                    </button>
                )
            :   
                ( 
                    <button 
                        type='button'
                        className='incompleto'>
                        incompleto
                    </button>
                )}
        </div>
        <div className='acciones'>
            <button
                type='button'
                className='btn btn-primario'>
                editar
            </button>
            <button
                 type='button'
                 className='btn btn-secundario'>
                    eliminar
            </button>
        </div>
    </li>
  )
}

export default Task