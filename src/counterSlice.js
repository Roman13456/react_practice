import { createSlice } from '@reduxjs/toolkit'
import React from 'react';

    
    class Todo{
        constructor(name='demo',desc='desc_demo',id,isCompleted=false){
            this.id = id || Date.now();
            this.name = name || 'demo';
            this.desc = desc || 'desc_demo';
            this.isCompleted = isCompleted
        }
    }
export const counterSlice = createSlice({
  name: 'todoList',
  initialState: {
    value: [],
  },
  reducers: {
    createTodo: (state,action)=>{
        const {name,desc} = action.payload
        state.value = [...state.value, new Todo(name,desc)]
    },
    deleteTodo: (state,action)=>{
        const id = action.payload
        state.value = [...state.value.filter((e)=>e.id!==id)]
    },
    editTodo: (state,action)=>{
        const {id,body} = action.payload
        const index = state.value.findIndex((e)=>e.id===id)
        const stateCopy = [...state.value]
        stateCopy[index] = {...stateCopy[index],...body}
        state.value=[...stateCopy]
    },
    toggleTodo:(state,action)=>{
        const id = action.payload
        const index = state.value.findIndex((e)=>{
            console.log(e.id,id,action.payload)
            return e.id===id})
        const stateCopy = [...state.value]
        stateCopy[index].isCompleted=!stateCopy[index].isCompleted
        state.value=[...stateCopy]
    }
  },
})
export const { createTodo, deleteTodo,editTodo,toggleTodo} = counterSlice.actions

export default counterSlice.reducer