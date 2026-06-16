import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the state after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // THE CRITICAL CLEANUP: If the user types again before the delay finishes,
    // this cleanup runs and clears the old timer, resetting the clock!
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Runs again only if value or delay shifts

  return debouncedValue;
}


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Fire your expensive API data fetch here smoothly!
      console.log("API Request fired for:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
        <div className='m-4'></div>
        <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder="Type to search..." 
            className='border-1 border-gray-300'
        />
    </div>
  );
}