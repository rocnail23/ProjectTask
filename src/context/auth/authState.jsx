import { useContext, useEffect, useReducer } from "react";
import authContex from "./authContex";
import authReducer from "./authReducer";
import { REGISTER_SUCCESSFUL,
    REGISTER_FAIL,
    LOGING_SUCCESFUL,
    LOGING_ERROR,
    CLOSE_SESSION, 
    } from "../../typess";
import axiosClient from "../../config/axiosclient";    
import authToken from "../../config/tokenAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AuthProvider = (props) => {
   
    const initialState = {
        token: localStorage.getItem("token"),
        user:null,
        message: null,
        authenticated: null,
        loading: true
    }

    const [state, dispatch] = useReducer(authReducer,initialState)

    const registerUser = async dates => {

        try {
            let user = await axiosClient.post("/api/user", dates)
            dispatch({
                type: REGISTER_SUCCESSFUL,
                payload: user.data.token
            })
         
            authenticatedUser()
        } catch (error) {
            console.log(error)
            const alert = {
                mgs: error.response.data.mgs,
                category: "alerta-error"
            }    
            dispatch({
                type: REGISTER_FAIL,
                payload: alert        
            })
        }
    }

    const authenticatedUser = async() => {

        const token = localStorage.getItem("token")
        
            authToken(token)
            if(!token){
                return
            }
      
        try {
            
            const res = await axiosClient.get("/api/auth")
            
                saveAuthenticatedUser(res.data.user)
        
            

        } catch (error) {
            setErrorLoggin(error)
        }

    }

    const saveAuthenticatedUser = dates => {

        dispatch({
            type: LOGING_SUCCESFUL,
            payload: dates
        }
        )

    }

    const setErrorLoggin =(error) => { 
       
        const alert = {
            mgs: error.response.data.mgs,
            category: "alerta-error"
        }    
        dispatch({
            type: LOGING_ERROR,
            payload: alert
        })
    }

    const navigateToProject = (showalert) => {
        const navigate = useNavigate()

        useEffect(()=>{
           if(state.authenticated){
            return navigate("/proyectos")
           }
            if(state.message){
                showalert(state.message.mgs, state.message.category)
            }
        },[state.authenticated,state.message])
    }

    const loggingUser = async(dates) => {

        try {
            const user = await axiosClient.post("/api/auth",dates)
            
            dispatch({
                type: REGISTER_SUCCESSFUL,
                payload: user.data.token
            })
            
            authenticatedUser()
            
        } catch (error) {
           setErrorLoggin(error)
        }



    }
    
    const closeSession = () => {

        dispatch({
            type:CLOSE_SESSION
        })

    }

    return (

        <authContex.Provider value={{
            token: state.token,
            user: state.user,
            message: state.message,
            authenticated: state.authenticated,
            loading: state.loading,
            registerUser,
            navigateToProject,
            loggingUser,
            authenticatedUser,
            closeSession
        }}>
            {props.children}
        </authContex.Provider>


    )

}

export default AuthProvider
