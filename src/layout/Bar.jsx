import React, { useContext } from 'react'
import authContex from '../context/auth/authContex'

const Bar = () => {
  const {user, closeSession} = useContext(authContex)
  return (
    <header className='app-header'>
       {user ? <p className='nombre-usuario'>hola <span>{user.name}</span></p>: null } 
        <nav className='nav-principal'>
            <a onClick={() => closeSession()} href="#!">cerrar sesion</a>
        </nav>
    </header>

  )
}

export default Bar