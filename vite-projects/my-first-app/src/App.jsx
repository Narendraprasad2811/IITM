import React,{useState} from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {

  const [name, setName] = useState('Narendra')

  return (
  <div className='App'>
    <header className= 'App-Header'>
      <h1>Hello, react with vite</h1>
      <Greeting name={name} />

      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    </header>
  </div>
  )
}

export default App


