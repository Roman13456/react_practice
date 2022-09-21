import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'todoList',
  initialState: {
    value: [],
  },
  reducers: {
    createTodo: (state,action)=>{
        
    }
  },
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions

export default counterSlice.reducer