import { useReducer } from "react";
import authContex from "./authContex";
import authReducer from "./authReducer";
import { REGISTER_SUCCESSFUL,
    REGISTER_FAIL,
    LOGING_SUCCESFUL,
    LOGING_ERROR,
    CLOSE_SESSION } from "../../typess";


const AuthProvider = (props) => {

    const initialState = {
        token: localStorage.getItem("token"),
        user:null,
        message: null,
        authenticated: null,
    }

    const [state, dispatch] = useReducer(authReducer,initialState)

    return (

        <authContex.Provider value={{
            token: state.token,
            user: state.user,
            message: state.message,
            authenticated: state.authenticated,
        }}>
            {props.children}
        </authContex.Provider>


    )

}

export default AuthProvider
