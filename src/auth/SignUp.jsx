import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import alertstContex from '../context/alerts/alertsContex.jsX'

const SignUp = () => {
    
    const {showAlert, alert} = useContext(alertstContex)

    const [user, setUser] = useState({
        password: "",
        email: "",
        name: "",
        password2: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(user.name.trim() == ""|| user.password.trim() == ""|| user.email.trim() == ""||
            user.password2.trim() == ""){
                return showAlert("llena todos los campor", "alerta-error")
            }

        if(user.password.length < 6){
            return showAlert("password de minimo de 6 caracteres", "alerta-error")
        }    

        if(user.password != user.password2){
            return showAlert("las contraseñas son distintas", "alerta-error")
        }
    }

  return (
    <div className='form-usuario'>
        {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div>: null}
    <div className='contenedor-form sombra-dark'>
    
        <h2>Registrate</h2>
        <form onSubmit={handleSubmit} >
            <div className='campo-form'>
                <label htmlFor="name">nombre</label>
                <input 
                    onChange={handleChange}
                    type="text"
                    id='name'
                    name='name'
                    placeholder='tu name' />
            </div>
            <div className='campo-form'>
                <label htmlFor="email">email</label>
                <input 
                    onChange={handleChange}
                    type="email"
                    id='email'
                    name='email'
                    placeholder='email' />
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
                <label htmlFor="password">confirmar password</label>
                <input
                    onChange={handleChange}
                    type="password"
                    id='password2'
                    name='password2'
                    placeholder='tu password' />
            </div>
            <div className='campo-form'>
                <input 
                onChange={handleChange}
                type="submit"
                className='btn btn-primario btn-block'
                value="registrar" />
            </div>
        </form>
        <Link to="/" className="enlace-cuenta">
               ya tienes una cuenta ? login
            </Link>
    </div>

</div>
  )
}

export default SignUp