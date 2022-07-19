import { configureStore } from '@reduxjs/toolkit'

import todoReducer from './slices/todoSlice'
import usersReducer from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    todos : todoReducer,
    users : usersReducer,
  },
})