import { SHOW_FORM } from "../../typess";

export default (state,action) => {
    switch (action.type) {
        case SHOW_FORM: return {
            ...action,
            form: true
        }
        default:
           return state;
    }
}