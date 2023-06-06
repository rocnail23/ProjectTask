import React, { useContext } from 'react'
import authContex from '../context/auth/authContex'
import { Route,Navigate } from 'react-router-dom'

export const PrivateRoute = ({component: Component, ...props}) => {
    const {authenticated,loading} = useContext(authContex)
  
   if(!authenticated){
    return (<Navigate to="/" />)}else{
        return  <Component {...props}/>
    }
    
}
