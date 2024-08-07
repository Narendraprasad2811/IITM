import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import styles from "./freebook.module.css"; // Ensure this is the correct path to your CSS module

function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data); // Removed the filter to show all books
      } catch (error) {
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Offered Books</h1>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Slider {...settings}>
            {book.map((item) => (
              <div className="mt-4 my-3 p-3" key={item.id}>
                <div className={`${styles.card} `}>
                  <figure className={styles.figure}>
                    <img src={item.image} alt={item.title} className={styles.image} />
                  </figure>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>
                      {item.title}
                      <div className="badge badge-secondary">{item.category}</div>
                    </h3>
                    <div className={styles.cardActions}>
                      <div className="badge badge-outline">₹{item.price}</div>
                      <div className={`${styles.buyNow} text-sm`}>Buy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Freebook;
