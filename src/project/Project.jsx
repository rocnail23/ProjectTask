import React, { useContext, useEffect } from 'react'
import Aside from '../layout/Aside'
import Bar from '../layout/Bar'
import TaskForm from '../tasks/TaskForm'
import TaskListing from '../tasks/TaskListing'
import authContex from '../context/auth/authContex'





const Project = () => {
  
  const { authenticatedUser}  = useContext(authContex);

  useEffect(() => {
    authenticatedUser();
  }, []);

  return (
    <div className='contenedor-app'>
      <Aside/>
    <div className='seccion-principal'>
      <Bar/>
    <main>
      < TaskForm />
      <div className='contenedor-tareas'>
      <TaskListing/>
     
      </div>
    </main>
    </div>
    </div>
  )
}

export default Project