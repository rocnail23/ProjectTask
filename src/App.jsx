import  { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Project from './project/Project'
import ProjectState from './context/projects/ProjectState'
import TaskContextProvider from './context/tasks/TaskState'
import AlertProvider from './context/alerts/alertsState.jsx'
import AuthProvider from './context/auth/authState'
function App() {
 

  return (
    
    <Router>
      <ProjectState>
        <TaskContextProvider>
        <AlertProvider>
          <AuthProvider>
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        
        <Route path='/nueva cuenta' element={<SignUp/>}/>
        <Route path='/proyectos' element={<Project/>}/>
      </Routes>
      </AuthProvider>
      </AlertProvider>
      </TaskContextProvider>
      </ProjectState>
    </Router>
   
  )
}

export default App
