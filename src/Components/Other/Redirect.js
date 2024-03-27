import React from 'react';
 import useLocalStorage from '../../useLocalStorage';
function MyComponent() {
   const [name, setName] = useLocalStorage('name', 'John');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default MyComponent;
