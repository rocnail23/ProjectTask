import React, { useReducer } from "react";
import ProjectContex from "./ProjectContext";
import ProjectReduce from "./ProjectReduce";
import { SHOW_FORM, GET_PROJECTS, ADD_PROJECT, IS_ERROR, SET_PROJECT} from "../../typess";





const ProjectState = (props) => {

    const projects = [
        {name:"hacer tarea"},
        {name:"no hacer nada"}
    ]

    const initialState = {
        projects :[],
        form : false,
        error: false,
        project: null
    }

    
    const [state, dispatch] = useReducer(ProjectReduce,initialState)
    console.log(state.projects)
    const showForm = () => {
        dispatch({
          type: SHOW_FORM
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    const addProject = (project) => {
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const showError = () => {
        dispatch({
            type: IS_ERROR
        })
    }

    const selectProject = (project) =>{
        dispatch({
            type: SET_PROJECT,
            payload: project
        })
    }

    return (
        <ProjectContex.Provider
        value={{
            projects: state.projects,
           form: state.form,
           error: state.error,
           project: state.project,
           showForm,
           getProjects,
           addProject,
           showError,
           selectProject,
        }}>
            {props.children}
        </ProjectContex.Provider>
    )
}   

export default ProjectState