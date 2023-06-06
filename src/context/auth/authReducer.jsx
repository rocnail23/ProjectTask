import { REGISTER_SUCCESSFUL,
REGISTER_FAIL,
LOGING_SUCCESFUL,
LOGING_ERROR,
CLOSE_SESSION } from "../../typess";
export default (state, action) => {

    switch (action.type) {

        case REGISTER_SUCCESSFUL: 
        localStorage.setItem("token", action.payload)
        return {
            ...state,
            message: null,
            authenticated: true,
            loading: false

        }
        case LOGING_SUCCESFUL: return {
            ...state,
            user: action.payload,
            authenticated: true,
            loading:false
        }

        case CLOSE_SESSION:
        case LOGING_ERROR:    
        case REGISTER_FAIL:
            localStorage.removeItem("token")
        return{
            ...state,
            authenticated: false,
            message: action.payload,
            user:null,
            loading:false
        }
        
        default: state
            break;
    }


}