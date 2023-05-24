import { GET_TASKS,GET_TASK_BY_ID, ADD_TASK, DELETE_TASK, CHANGE_STATE_TASK, SELECT_EDIT_TASK, UPDATE_TASK} from "../../typess"


export default ((state, action) => {

          switch (action.type) {
        case GET_TASKS : return {
            ...state,
            tasks: action.payload 
        }
        case GET_TASK_BY_ID: return{
            ...state,
            taskId: state.tasks.filter(task => task.projectId == action.payload)
        }
        case ADD_TASK: return {
            ...state,
            callApi: !state.callApi,
            tasks: [...state.tasks, action.payload],
            
        }
        case DELETE_TASK: return{
            ...state,
            tasks: state.tasks.filter(task => task.id != action.payload)
        }
        case CHANGE_STATE_TASK: return {
            ...state,
            tasks: state.tasks.map(task => task.id == action.payload ? {...task, state:!task.state}: task)
        }
        case SELECT_EDIT_TASK: return {
            ...state,
            editSelected: action.payload
        }
        case UPDATE_TASK: return {
            ...state,
            tasks: state.tasks.map(task => task.id == action.payload.id ? action.payload: task),
            editSelected: null
        }
    
        default:
            return state
    }
    
})


