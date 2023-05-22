import React, { useContext } from 'react'
import ProjectContext from '../context/projects/ProjectContext'

const TaskForm = () => {
  const {project} = useContext(ProjectContext)
  return (
    <div className='formulario'>
        {project
        ? (<form>
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
      </form>)
      : <h2 className='crear-tarea' >selecciona un proyecto para comenzar a crear tareas</h2>}
    </div>
  )
}

export default TaskForm