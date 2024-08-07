import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { Autoplay, EffectCards } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/Books');
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-10 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold text-gray-800'>
              Hello, Welcome here to learn something
              <span className='text-blue-800'> new everyday!!! </span> 
            </h1>
            <p className='text-xl text-gray-700'>
              Discover Your Next Great Read.
              Uncover captivating stories, enriching knowledge, and 
              endless inspiration in our curated collection of books.
              Find and read more books you will love.
            </p>
          </div>
          <button 
            className="btn mt-6 btn-active btn-secondary transform hover:scale-105 transition-transform duration-300"
            onClick={handleExploreClick}
          >
            Explore
          </button>
        </div>
        <div className='order-1 w-full md:w-1/2 swiper-container'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]} // Add Autoplay module
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Banner;
