import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
      list: []
    },
    reducers: {
      addTodo: (state, action) => {
        state.list.push(action.payload)
      },
      // updateTodo: (state, action) => {},
      deleteTodo: (state, {payload}) => {
        state.list = state.list.filter((todo) => todo.id !== payload.id )
      },
      toggleTodoDone: (state, {payload}) => {
        state.list = state.list.map((todo) => {
          return todo.id === payload.id
            ? {
              ...todo,
              done: ! todo.done
            }
            : todo
        })
      }
    },
  })
  
  
  export const { addTodo, toggleTodoDone, deleteTodo } = todoSlice.actions;
  export default todoSlice.reducer;