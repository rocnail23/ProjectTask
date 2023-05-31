import { SHOW_ALERT, UNSHOW_ALERT } from "../../typess";


export default (state, action) => {

    switch (action.type) {

        case SHOW_ALERT: return  {
            alert: action.payload
        }

        case UNSHOW_ALERT: return {
            alert: null
        }
    
        default: state
            break;
    }


}