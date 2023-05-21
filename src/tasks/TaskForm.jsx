import React from 'react'

const TaskForm = () => {
  return (
    <div className='formulario'>
        <form>
            <div className='contenedor input'>
                <input 
                    type="text"
                    className='input-text'
                    placeholder='nombre tarea...'
                    name='name' />
            </div>
            <div className='contenedor input'>
                <input 
                    type="submit"
                    className='btn btn-primario btn-block'
                    value="agregar tarea" />
            </div>
        </form>
    </div>
  )
}

export default TaskForm