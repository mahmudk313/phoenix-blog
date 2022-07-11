import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      createTodo: (state, action) => {
        // state.push(action.payload)
      },
      // updateTodo: (state, action) => {},
      // deleteTodo: (state, action) => {},
    },
  })
  
  
  export const { createTodo } = todoSlice.actions;
  export default todoSlice.reducer;