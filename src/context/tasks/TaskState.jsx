import TaskContex from "./TaskContex";
import { createRef, useEffect, useReducer, useState } from "react";
import TaskReducer from "./TaskReducer";
import { GET_TASK_BY_ID, ADD_TASK, DELETE_TASK, CHANGE_STATE_TASK, SELECT_EDIT_TASK, UPDATE_TASK } from "../../typess";
import React from "react";
import axiosClient from "../../config/axiosclient";
import axios from "axios";


const TaskContextProvider = (props) => {
 

  const initialState = {
    taskId: [],
    callApi: false,
    editSelected: null
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTasks = async() => {
   try {
    dispatch({
      type: GET_TASKS,
      payload: state.taskId,
    });
   } catch (error) {
    
   }
  };

  const getTaskById = async(id) => {
   try {
    let res = await axiosClient.get(`/api/task/${id}`)
    dispatch({
      type: GET_TASK_BY_ID,
      payload: res.data
    })
   } catch (error) {
    console.log(error)
   }
  };

  const addTask = async(task) => {
    
    const res = await axiosClient.post("/api/task",task)
    
    dispatch({
      type: ADD_TASK,
      payload: res.data,
    });
  };

  const deleteTask = async(id) => {
    try {
      console.log(id)
      const res = await axiosClient.delete(`/api/task/${id}`)
      console.log(res)
      dispatch({
        type: DELETE_TASK,
        payload: id
        })
    } catch (error) {
      console.log(error)
    }
    
  }

 const changeStateTask = async(task) => {
 try {
  console.log(task)
  const taskeditstate = {
    name: task.name,
    _id: task._id,
    projectId: task.projectId,
    state: !task.state
  }
  console.log(taskeditstate)

  const res = await axiosClient.put("/api/task", taskeditstate)
  console.log(res)
  dispatch({
    type: CHANGE_STATE_TASK,
    payload: task._id
  })
 } catch (error) {
  console.log(error)
 }
 }

 const editTask = (task) => {
  dispatch({
    type: SELECT_EDIT_TASK,
    payload: task
  })
 }

 const updateTask = async(task) =>{
  console.log(task)
    try {
      const res = await axiosClient.put("/api/task", task)
      console.log(res.data)
      dispatch({
        type: UPDATE_TASK,
        payload: task
      })
    } catch (error) {
      console.log(error)
    }
 
 }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContex.Provider
      value={{
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
