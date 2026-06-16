import React from 'react';
import { AppProviders } from './context/AppProviders';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AppProviders>
      <div style={{ fontFamily: 'sans-serif', maxWidth: '500px', margin: '40px auto' }}>
        <h1>Context Architecture App 🗺️</h1>
        <p>This layout is wrapped inside our compound AppProvider module.</p>
        <Dashboard />
      </div>
    </AppProviders>
  );
}

export default App;