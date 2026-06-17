import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../app/todoSlice';

export default function App() {
  const [input, setInput] = useState('');
  
  // 🎯 Efficient Selector: Extracts exactly the todos array from the store
  const todos = useSelector((state) => state.todoStore.todos);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Dispatching the action with the text payload
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-md border border-gray-100">
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">RTK Todo App 📝</h1>

        {/* Input Form */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-1.5 text-sm bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <ul className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-2">No tasks remaining! 🎉</p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-2.5 bg-gray-50 rounded border border-gray-100 text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                    className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className={`text-gray-700 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                    {todo.text}
                  </span>
                </div>
                
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="text-gray-400 hover:text-red-500 font-medium transition-colors text-xs px-2 py-1"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}