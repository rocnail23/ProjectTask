import React, { useReducer } from "react";
import ProjectContex from "./ProjectContext";
import ProjectReduce from "./ProjectReduce";
import { SHOW_FORM, GET_PROJECTS, ADD_PROJECT, IS_ERROR, SET_PROJECT,DELETE_PROJECT} from "../../typess";
import { createRef } from "react";





const ProjectState = (props) => {

    const projects = [
        {nodeRef: createRef(null), id:1, name:"hacer tarea"},
        {nodeRef: createRef(null), id:2, name:"no hacer nada"},
        {nodeRef: createRef(null), id:3, name:"jugar"},
        {nodeRef: createRef(null), id:4, name:"patear"}
    ]

    const initialState = {
        projects :[],
        form : false,
        error: false,
        project: null
    }

    
    const [state, dispatch] = useReducer(ProjectReduce,initialState)
    
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

    const deleteProject = (project) => {
        dispatch({
            type: DELETE_PROJECT,
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
           deleteProject
        }}>
            {props.children}
        </ProjectContex.Provider>
    )
}   

export default ProjectState