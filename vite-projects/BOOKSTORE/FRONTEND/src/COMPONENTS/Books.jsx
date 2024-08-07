import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          we believe every book has the power to transport you to new realms, spark your imagination, and enrich your mind.
           Whether you’re a fan of thrilling mysteries, heartwarming romances, or insightful non-fiction, our carefully curated collection has something for everyone.
           Join our community of book lovers today and let your next great read find you!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-lg shadow-lg">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}

        </div>

    </div>
    </>
  )
}

export default Books
