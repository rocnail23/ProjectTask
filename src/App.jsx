import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Project from './project/Project';
import tokenAuth from "./config/tokenAuth";
import { PrivateRoute } from './route/PrivateRoute';
import authContex from './context/auth/authContex';


function App() {
  const token = localStorage.getItem("token");
 
tokenAuth(token);


const { authenticatedUser } = useContext(authContex);
if(token){
  useEffect(() => {
    authenticatedUser();
  }, []);
}
 

  return (
    <Router>
      
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/nueva-cuenta" element={<SignUp />} />
                <Route path="/proyectos" element={<PrivateRoute component={Project} />} />
              </Routes>
            
        
    </Router>
  );
}

export default App;