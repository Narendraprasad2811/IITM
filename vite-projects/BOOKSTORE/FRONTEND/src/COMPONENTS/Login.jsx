import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
    return (
        <div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)} method ="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link
                  to="/"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  ✕
                </Link>
    
                <h3 className="font-bold text-lg">Login</h3>
                {/* Email */}
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("Email", { required: true })}
                  />
                  <br />
                  {errors.Email && <span className="text-sm text-red-500">This field is required</span>}
                  <br />
                  
                </div>
                {/* password */}
                <div className="mt-4 space-y-2">
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("Password", { required: true })}
                  />
                  <br />
                  {errors.Password && <span className="text-sm text-red-500">This field is required</span>}
                  <br />
                  
                </div>
    
                {/* Button */}
                <div className="flex justify-around mt-6">
                  <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Login
                  </button>
                  <p>
                    Not registered?{" "}
                    <Link to="/Signup"
                      className="underline text-blue-500 cursor-pointer"
                    >
                      Signup
                    </Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      );
    }
    
    export default Login;
    