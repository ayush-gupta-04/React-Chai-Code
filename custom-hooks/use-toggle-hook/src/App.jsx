import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // Memoizing the toggle function so it doesn't break React.memo child components!
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
}

export default function App() {
  const [isModalOpen, toggleModal] = useToggle(false);

  return (
    <div>
      <button onClick={toggleModal}>Open/Close Modal</button>
      {isModalOpen && <p>Modal Content Layer 🎉</p>}
    </div>
  );
}