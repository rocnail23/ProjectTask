import { GET_TASK_BY_ID, ADD_TASK, DELETE_TASK, CHANGE_STATE_TASK, SELECT_EDIT_TASK, UPDATE_TASK} from "../../typess"


export default ((state, action) => {

          switch (action.type) {
      
        case GET_TASK_BY_ID:
        return{
            ...state,
            taskId: [...action.payload]
        }
        case ADD_TASK: return {
            ...state,
            callApi: !state.callApi,
            taskId: [...state.taskId, action.payload],
            
        }
        case DELETE_TASK: return{
            ...state,
            taskId: state.taskId.filter(task => task._id != action.payload)
        }
        case CHANGE_STATE_TASK: return {
            ...state,
            taskId: state.taskId.map(task => task._id == action.payload ? {...task, state:!task.state}: task)
        }
        case SELECT_EDIT_TASK: return {
            ...state,
            editSelected: action.payload
        }
        case UPDATE_TASK: return {
            ...state,
            taskId: state.taskId.map(task => task._id == action.payload._id ? action.payload: task),
            editSelected: null
        }
    
        default:
            return state
    }
    
})


