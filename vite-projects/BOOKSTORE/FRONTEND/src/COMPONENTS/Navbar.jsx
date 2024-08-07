import React, { useEffect, useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import SearchBar from './SearchBar';
import { useAuth } from './context/AuthProvider';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
      sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out" : ""
    }`}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href="/">Home</a></li>
              <li><a href="/Books">Books</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/About">About</a></li>
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">BookStore</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href="/">Home</a></li>
              <li><a href="/Books">Books</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/About">About</a></li>
            </ul>
          </div>
          <div className='hidden md:block'>
            <SearchBar />
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
                  viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
              <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                <div className="card-body">
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {authUser ? (
            <div className="flex-none ml-4">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li>
                    <a>
                      <Logout />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer ml-4"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
  );
}

export default Navbar;
