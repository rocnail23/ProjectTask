import alertsReducer from "./alertsReducer";
import alertstContex from "./alertsContex.jsX";
import { useReducer } from "react";
import { SHOW_ALERT, UNSHOW_ALERT } from "../../typess";


const AlertProvider = (props) => {

    const initialState = {

        alert: null

    }

    const [state, dispatch] = useReducer(alertsReducer,initialState)

    const showAlert = (msg,category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        })

        setTimeout(() => {
            dispatch({
                type: UNSHOW_ALERT
            })
    
        },5000)
    }

   

    return(

        <alertstContex.Provider 
        value={{
           alert: state.alert,
           showAlert,
           
        }
        }>
            {props.children}
        </alertstContex.Provider>


    )


}

export default AlertProvider