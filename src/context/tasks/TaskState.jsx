import TaskContex from "./TaskContex";
import { createRef, useEffect, useReducer, useState } from "react";
import TaskReducer from "./TaskReducer";
import { GET_TASKS, GET_TASK_BY_ID, ADD_TASK, DELETE_TASK, CHANGE_STATE_TASK, SELECT_EDIT_TASK, UPDATE_TASK } from "../../typess";
import React from "react";


const TaskContextProvider = (props) => {
  const taskProject = [
    {nodeRef: createRef(null), id: 1, name: "comprar cuaderno", state: true, projectId: 1 },
    {nodeRef: createRef(null), id: 2, name: "forrar cuaderno", state: true, projectId: 2 },
    {nodeRef: createRef(null), id: 3, name: "regalar cuaderno", state: false, projectId: 3 },
    {nodeRef: createRef(null), id: 4, name: "dormir", state: false, projectId: 4 },
    {nodeRef: createRef(null), id: 5, name: "comprar cuaderno", state: true, projectId: 4 },
    {nodeRef: createRef(null), id: 6, name: "forrar cuaderno", state: true, projectId: 3 },
    {nodeRef: createRef(null), id: 7, name: "regalar cuaderno", state: false, projectId: 2 },
    {nodeRef: createRef(null), id: 8, name: "dormir", state: false, projectId: 1 },
  ]

  const initialState = {
    tasks: [],
    taskId: [],
    callApi: false,
    editSelected: null
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTasks = () => {
    dispatch({
      type: GET_TASKS,
      payload: taskProject,
    });
  };

  const getTaskById = (id) => {
    dispatch({
      type: GET_TASK_BY_ID,
      payload: id,
    });
  };

  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const deleteTask = (id) => {
    dispatch({
    type: DELETE_TASK,
    payload: id
    })
  }

 const changeStateTask = (id) => {
  dispatch({
    type: CHANGE_STATE_TASK,
    payload: id
  })
 }

 const editTask = (task) => {
  dispatch({
    type: SELECT_EDIT_TASK,
    payload: task
  })
 }

 const updateTask = (task) =>{
  dispatch({
    type: UPDATE_TASK,
    payload: task
  })
 }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContex.Provider
      value={{
        tasks: state.tasks,
        taskId: state.taskId,
        editSelected: state.editSelected,
        getTasks,
        getTaskById,
        addTask,
        deleteTask,
        changeStateTask,
        editTask,
        updateTask
      }}
    >
      {props.children}
    </TaskContex.Provider>
  );
};

export default TaskContextProvider;
