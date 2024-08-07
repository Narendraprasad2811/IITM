import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';
import styles from './Contact.module.css';
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    await axios
      .post("http://localhost:4001/Contact/contact", contactInfo,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Form Submit Successfully");  
          localStorage.setItem("Users", JSON.stringify(res.data.user));
      }

    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    });
  };

  return (
    <>
      <Navbar />
      <br/>
      <div className='min-h-screen'>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div className="mt-28 items-center justify-center text-center bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-4xl">
              <span className="text-pink-500">Contact Us</span>{" "}:)
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name:</label>
                <input 
                  type="text"
                  placeholder="Enter your Name"
                  className={styles.input}
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.input}
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message:</label>
                <textarea 
                  name="message" 
                  placeholder="Enter your Message"
                  className={styles.textarea}
                  {...register("message", { required: true })}
                />
                {errors.message && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="flex justify-around mt-4">
                <button 
                  type="submit" 
                  className={styles.button}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
