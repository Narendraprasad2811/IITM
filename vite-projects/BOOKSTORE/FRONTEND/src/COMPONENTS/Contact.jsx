import Navbar from './Navbar';
import Footer from './Footer';
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you can add code to handle form submission, e.g., sending data to a server
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">
              <span className="text-pink-500">Contact Us</span>{" "}:)
            </h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className={styles.textarea} />
              </div>
              <button type="submit" className={styles.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
