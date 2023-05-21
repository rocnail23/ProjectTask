import  { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Project from './project/Project'
import ProjectState from './context/projects/ProjectState'
function App() {
 

  return (
    
    <Router>
      <ProjectState>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/nueva cuenta' element={<SignUp/>}/>
        <Route path='/proyectos' element={<Project/>}/>
      </Routes>
      </ProjectState>
    </Router>
   
  )
}

export default App
