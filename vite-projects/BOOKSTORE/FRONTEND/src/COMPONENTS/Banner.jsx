import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards } from 'swiper/modules';

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-10 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>
                    Hello, Welcome here to learn something
                    <span className='text-blue-800'> new everyday!!! </span> 
                </h1>
                <p className='text-xl'>
                    Discover Your Next Great Read.
                    Uncover captivating stories,enriching knowledge, and 
                    endless inspiration in our curated collection of books.
                    Find and read more books you will love.
                </p>
  <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
            </div>
            <button className="btn mt-6 btn-active btn-secondary">Explore</button>
         </div>
    <div className='order-1 w-full md:w-1/2 swiper-container'>
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
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
  )
}

export default Banner;
