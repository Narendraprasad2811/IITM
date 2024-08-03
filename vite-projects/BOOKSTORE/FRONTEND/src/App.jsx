import React from 'react';
import Home from './Home/Home';
import Allbooks from './Books/Allbooks';
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './COMPONENTS/Signup';
import Contact from './COMPONENTS/Contact'
import About from './COMPONENTS/About';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './COMPONENTS/context/AuthProvider';
function App() {
  const [authUser, setAuthUser] = useAuth();
    console.log(authUser);
  return (
    <>
    
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/Books" element={authUser ?<Allbooks/> : <Navigate to="/Signup" />}/>
      <Route path= "/Signup" element={<Signup/>}/>
      <Route path= "/Contact us" element={<Contact/>}/>
      <Route path= "/About" element={<About/>}/>
    </Routes>
    <Toaster/>

    </>
  );
}

export default App;

