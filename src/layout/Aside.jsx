import React from 'react'
import NewProject from '../project/NewProject'
import ProjectListing from '../project/ProjectListing'
const Aside = () => {
  return (
    < aside>
        <h1>Do<span>listApp</span></h1>
        <NewProject/>
        <div className='proyectos'>
            <h2>tus proyectos</h2>
            <ProjectListing/>

        </div>
    </aside>
  )
}

export default Aside