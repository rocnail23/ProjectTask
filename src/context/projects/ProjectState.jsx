import React, { useReducer } from "react";
import ProjectContex from "./ProjectContext";
import ProjectReduce from "./ProjectReduce";
import { SHOW_FORM } from "../../typess";

const ProjectState = (props) => {
    const initialState = {
        form : false
    }

    const [state, dispatch] = useReducer(ProjectReduce,initialState)

    const showForm = () => {
        dispatch({
          type: SHOW_FORM
        })
    }

    return (
        <ProjectContex.Provider
        value={{
           form: state.form,
           showForm
        }}>
            {props.children}
        </ProjectContex.Provider>
    )
}   

export default ProjectState