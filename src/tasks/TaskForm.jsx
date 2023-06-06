import React, { useContext, useEffect, useState } from 'react'
import ProjectContext from '../context/projects/ProjectContext'
import TaskContex from '../context/tasks/TaskContex'

const TaskForm = () => {
  const {project} = useContext(ProjectContext)
  const {addTask,editSelected,updateTask} = useContext(TaskContex)
  const [task, setTask] = useState({
    name: ""
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(e.target.name.value.trim() == ""){
      return
    }

    if(!editSelected){
      task.projectId = project._id
      addTask(task)
    }else{
      updateTask(task)
    
    }
   
   setTask({
    name: ""
   })

  }

  useEffect(() => {
    
    if(editSelected){
      setTask(editSelected)
    }

   
  },[editSelected])
  
 


  const handleOnchange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      state: false
    })
  }
  return (
    <div className='formulario'>
        {project
        ? (<form onSubmit={handleSubmit}>
          <div className='contenedor input'>
              <input 
                  onChange={handleOnchange}
                  value={task.name}
                  id='name'
                  type="text"
                  className='input-text'
                  placeholder='nombre tarea...'
                  name='name' />
          </div>
          <div className='contenedor input'>
              <input 
                  type="submit"
                  className='btn btn-primario btn-block'
                  value={editSelected ? "editar tarea" : "agregar tarea"}/>
          </div>
      </form>)
      : <h2 className='crear-tarea' >selecciona un proyecto para comenzar a crear tareas</h2>}
    </div>
  )
}

export default TaskForm