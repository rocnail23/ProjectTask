import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import alertstContex from '../context/alerts/alertsContex.jsX'
import authContex from '../context/auth/authContex'
import { SHOW_ALERT } from '../typess'

const Login = () => {


    const {showAlert, alert} = useContext(alertstContex)
    const {loggingUser,navigateToProject} = useContext(authContex)
    const [user, setUser] = useState({
        password: "",
        email: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    navigateToProject(showAlert)


    const handleSubmit = (e) => {
        e.preventDefault()
      if(user.password.trim() == "" || user.email.trim() == ""){
        return showAlert("llena todos los campos", "alerta error")
      }

      loggingUser(user)
        
    }

  return (
    <div className='form-usuario'>
        {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div>: null}
        <div className='contenedor-form sombra-dark'>
            <h2>iniciar sesion</h2>
            <form onSubmit={handleSubmit}>
                <div className='campo-form'>
                    <label htmlFor="email">email</label>
                    <input 
                        onChange={handleChange}
                        type="email"
                        id='email'
                        name='email'
                        placeholder='tu email' />
                </div>
                <div className='campo-form'>
                    <label htmlFor="password">password</label>
                    <input
                        onChange={handleChange} 
                        type="password"
                        id='password'
                        name='password'
                        placeholder='tu password' />
                </div>
                <div className='campo-form'>
                    <input 
                    type="submit"
                    className='btn btn-primario btn-block' />
                </div>
            </form>
            <Link to="/nueva-cuenta" className="enlace-cuenta">
                conseguir cuenta
            </Link>

        </div>

    </div>)
}

export default Login