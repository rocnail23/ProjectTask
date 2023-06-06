import React, { useReducer } from "react";
import ProjectContex from "./ProjectContext";
import ProjectReduce from "./ProjectReduce";
import { SHOW_FORM, GET_PROJECTS, ADD_PROJECT, IS_ERROR, SET_PROJECT,DELETE_PROJECT, ERROR_PROJECT} from "../../typess";
import { createRef } from "react";
import axiosClient from "../../config/axiosclient"
import axios from "axios";





const ProjectState = (props) => {

   

    const initialState = {
        projects :[],
        form : false,
        error: false,
        project: null,
        message: null
    }

    
    const [state, dispatch] = useReducer(ProjectReduce,initialState)
    
    const showForm = () => {
        dispatch({
          type: SHOW_FORM
        })
    }

    const getProjects = async() => {
        try {
            const res = await axiosClient.get("/api/project")
            const projects = res.data.map(project => {
                return {
                    ...project,
                    nodeRef: createRef(null)
                }
            })
            dispatch({
                type: GET_PROJECTS,
                payload: projects
            })
        } catch (error) {
            errorProject()
        }
    }

    const addProject = async(project) => {
        try {
           const res = await axiosClient.post("/api/project",project)
         
          res.data.nodeRef = createRef(null)
          dispatch({
            type: ADD_PROJECT,
            payload: res.data
          })
        } catch (error) {
            errorProject()
        }
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

    const deleteProject = async(project) => {
       try {
        
        const res = await axiosClient.delete(`/api/project/${project._id}`)
        
        dispatch({
            type: DELETE_PROJECT,
            payload: project
        })
       } catch (error) {
        console.log(error)
        errorProject()
        
       }
    }

    const errorProject = () => {

       const alert = "hubo un error"
       dispatch({
        type: ERROR_PROJECT,
        payload: alert
       })
       setTimeout(() => {
        dispatch({
            type: ERROR_PROJECT,
            payload: null
        })
       }, 2000)

    }

    return (
        <ProjectContex.Provider
        value={{
            projects: state.projects,
           form: state.form,
           error: state.error,
           project: state.project,
           message: state.message,
           showForm,
           getProjects,
           addProject,
           showError,
           selectProject,
           deleteProject,
           errorProject
        }}>
            {props.children}
        </ProjectContex.Provider>
    )
}   

export default ProjectState