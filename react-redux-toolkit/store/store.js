import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../app/todoSlice';

export const store = configureStore({
  reducer: {
    todoStore: todoReducer // Mapping our slice reducer to a key named 'todoStore'
  }
});