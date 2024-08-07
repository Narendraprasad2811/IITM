import React from 'react';
import Home from './Home/Home';
import Allbooks from './Books/Allbooks';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './COMPONENTS/Signup';
import Contact from './COMPONENTS/Contact';
import About from './COMPONENTS/About';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './COMPONENTS/context/AuthProvider';
import { BrowserRouter as Router, } from 'react-router-dom';
import SearchResults from './COMPONENTS/SearchResults';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={authUser ? <Allbooks /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
