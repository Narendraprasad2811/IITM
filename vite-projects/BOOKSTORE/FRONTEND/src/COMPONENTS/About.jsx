import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './About.module.css';

function About() {
  return (
    <>
    <Navbar/>
    <br/>
    <div className='min-h-screen'>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <div className="mt-28 items-center justify-center text-center bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-lg shadow-lg">
          <div className={styles.body}>
        <div className={styles.container}>
          <img src="https://img.freepik.com/premium-vector/vector-design-bible-icon-style_1134108-171269.jpg?w=826" alt="Book Store" className={styles.image} />
          <div className={styles.content}>
            <p>Welcome to our Book Store! We are passionate about books and dedicated to providing a wide range of titles to cater to every reader's taste. Our mission is to create a haven for book lovers where they can discover new stories, explore different genres, and connect with a community of like-minded individuals.</p>
            <p>Founded in 2024, our store has grown from a small local shop to a beloved destination for book enthusiasts. We pride ourselves on our carefully curated selection, knowledgeable staff, and commitment to fostering a love for reading in our community.</p>
            <p>Whether you're looking for the latest bestseller, a classic novel, or a unique gift, we have something for everyone. Thank you for visiting our store, and we hope you enjoy your time here!</p>
          </div>
        </div>
      </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
