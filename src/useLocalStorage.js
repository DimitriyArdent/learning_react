import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Retrieve the initial value from local storage or use the provided initial value
  const [value, setValue] = useState(() => {
    console.log('a')
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // Update local storage whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return the value and a function to update it
  return [value, setValue];
}

export default useLocalStorage;
