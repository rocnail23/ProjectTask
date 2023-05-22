import React, { Fragment, useContext, useState } from 'react'
import ProjectContext from '../context/projects/ProjectContext'
import {v4 as uuid} from "uuid"
const NewProject = () => {

  const {form,showForm,addProject,showError,error} = useContext(ProjectContext)
  const [project, setproject] = useState({
    name: ""
  })

  const handleOnchange = (e) => {
    setproject({
      [e.target.name] : e.target.value
    })
  }
  


  const handleSubmit = (e) =>{
    e.preventDefault()
    if(e.target.name.value.trim() == "" ){
      showError()
      return 
    }
    project.id = uuid()
    addProject(project)
  setproject({
    name : ""
  })
  }

  

  return (
    <Fragment>
        <button onClick={() => showForm()} className='btn btn-primario btn-block'>
            crea un nuevo projecto
        </button>
        {
          form
          ? (<form
           className='formulario-nuevo-proyecto'
           onSubmit={handleSubmit}>
          <input 
          onChange={handleOnchange}
          type="text"
          className='input-text'
          placeholder='nombre proyecto'
          name='name'
          id='name'
          value={project.name}
           />
          <input type="submit"
          className='btn btn-primario btn-block' 
          value='crear proyecto'/>
      </form>)
        : null}

        {error ? <p className='mensaje error'>llena el campo</p>: null}
    </Fragment>
  )
}

export default NewProject