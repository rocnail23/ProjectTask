import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProjectState from './context/projects/ProjectState.jsx'
import TaskContextProvider from './context/tasks/TaskState.jsx'
import AlertProvider from './context/alerts/alertsState.jsx'
import AuthProvider from './context/auth/authState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectState>
        <TaskContextProvider>
          <AlertProvider>
            <AuthProvider>
    <App />
    </AuthProvider>
    </AlertProvider>
        </TaskContextProvider>
      </ProjectState>
  </React.StrictMode>,
)
