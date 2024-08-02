import React from 'react';
import Home from './Home/Home';
import Allbooks from './Books/Allbooks';
import { Route, Routes } from 'react-router-dom'
import Signup from './COMPONENTS/Signup';
import Contact from './COMPONENTS/Contact'
import About from './COMPONENTS/About';

function App() {
  return (
    <>
    {/*<Home/>
    <Books/>*/}
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/Books" element={<Allbooks/>}/>
      <Route path= "/Signup" element={<Signup/>}/>
      <Route path= "/Contact us" element={<Contact/>}/>
      <Route path= "/About" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;

