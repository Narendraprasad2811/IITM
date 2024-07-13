import React, { useState } from 'react';
import ContactForm from './ContactForm'; 
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <ContactForm />
    </div>
  );
};

export default App;
