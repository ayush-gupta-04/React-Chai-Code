import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux Toolkit', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false }
  ]
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Action to add a new todo
    addTodo: (state, action) => {
      // action.payload will contain the text string
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    // Action to toggle completion status
    toggleTodo: (state, action) => {
      // action.payload will contain the todo's id
      const todo = state.todos.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Action to delete a todo
    deleteTodo: (state, action) => {
      // action.payload will contain the todo's id
      state.todos = state.todos.filter(item => item.id !== action.payload);
    }
  }
});

// RTK automatically generates action creators for us
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// Export the reducer to hook it up to the store
export default todoSlice.reducer;