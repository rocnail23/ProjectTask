import { SHOW_FORM, GET_PROJECTS, ADD_PROJECT, IS_ERROR, SET_PROJECT, DELETE_PROJECT, ERROR_PROJECT } from "../../typess";

export default (state,action) => {
    switch (action.type) {
        case SHOW_FORM: return {
            ...state,
            form: true
        }
        case GET_PROJECTS: return {
            ...state,
            projects : action.payload
        }
        case ADD_PROJECT: return {
            ...state,
            form: false,
            projects: [...state.projects, action.payload],
            error: false
            
        }
        case IS_ERROR: return {
            ...state,
            error: true 
        }
        case SET_PROJECT : return {
            ...state,
            project: action.payload
        }
        case DELETE_PROJECT: return {
            ...state,
            projects: state.projects.filter(project => project._id != action.payload._id),
            project: null
        }
        case ERROR_PROJECT: return {
            ...state,
            message: action.payload
        }
        default:
           return state;
    }
}