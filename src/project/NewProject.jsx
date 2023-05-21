import React, { Fragment, useContext } from 'react'
import ProjectContext from '../context/projects/ProjectContext'

const NewProject = () => {

  const {form,showForm} = useContext(ProjectContext)
  

  return (
    <Fragment>
        <button onClick={() => showForm()} className='btn btn-primario btn-block'>
            crea un nuevo projecto
        </button>
        {
          form
          ? (<form className='formulario-nuevo-proyecto'>
          <input 
          type="text"
          className='input-text'
          placeholder='nombre proyecto'
          name='nombre' />
          <input type="submit"
          className='btn btn-primario btn-block' 
          value='crear proyecto'/>
      </form>)
        : null}
    </Fragment>
  )
}

export default NewProject