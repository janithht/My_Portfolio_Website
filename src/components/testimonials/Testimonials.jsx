import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Avatar One' />
          </div>  
          <h5>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </small>   
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt='Avatar One' />
          </div>  
          <h5>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </small>   
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt='Avatar One' />
          </div>  
          <h5>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </small>   
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials