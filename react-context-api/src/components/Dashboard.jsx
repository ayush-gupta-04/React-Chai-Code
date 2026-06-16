import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Dashboard() {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [inputValue, setInputValue] = useState('');

  // Inline styling rules matching our theme state
  const dashboardStyle = {
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
    backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
    color: theme === 'light' ? '#000000' : '#ffffff',
    border: '1px solid #ccc',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={dashboardStyle}>
      <h2>Dashboard Panel ({theme.toUpperCase()} Mode)</h2>
      
      {/* Auth UI section */}
      <div style={{ marginBottom: '20px' }}>
        {user?.isLoggedIn ? (
          <div>
            <p>Welcome back, <strong>{user.name}</strong>! 👋</p>
            <button onClick={logout}>Log Out</button>
          </div>
        ) 
        
        : 
        
        (
          <div>
            <p>You are currently logged out. Please sign in below:</p>
            <input 
              type="text" 
              placeholder="Enter name..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <button onClick={() => { if(inputValue) login(inputValue); }}>
              Log In
            </button>
          </div>
        )}
      </div>

      <hr />

      {/* Theme Control section */}
      <div style={{ marginTop: '20px' }}>
        <p>Want to change the mood?</p>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark 🌙' : 'Light ☀️'} Mode
        </button>
      </div>
    </div>
  );
}