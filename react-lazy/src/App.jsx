import React, { useState, lazy, Suspense } from 'react';

// ⚙️ Code-splitting: React won't download this file until we tell it to render
const HeavyChart = lazy(() => import('../components/HeavyChart'));

export default function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className='p-10'>
      <h1>Dashboard Page</h1>
      
      <button 
        onClick={() => setShowChart(true)} 
        className='bg-gray-200 rounded-lg p-2'
      >
        Load Heavy Chart
      </button>

      {showChart && (
        <Suspense fallback={<div>Downloading code chunk...</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}