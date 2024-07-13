import React, { useState } from 'react';
import './App.css';
import User from './User';

const App = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <User name="Narendra Prasad" age={21} />
      <User name="Manish" age={20} />
      <button onClick={handleButtonClick}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
