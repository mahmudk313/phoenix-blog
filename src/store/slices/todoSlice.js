const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      createTodo: (state, action) => {},
      updateTodo: (state, action) => {},
      deleteTodo: (state, action) => {},
    },
  })
  
  
  export const { createTodo } = todoSlice.actions;
  export default todoSlice.reducer;