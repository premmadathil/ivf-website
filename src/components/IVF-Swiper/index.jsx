// IVFSwiper.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TeamsCard from "./teams-card/TeamsCard";
import TestimonialCard from "./teams-card/TestimonialCard";

const IVFSwiper = ({ cards = [], count = 1, isTestimonial }) => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper
        spaceBetween={24}
        centeredSlides={false}
        grabCursor={true}
        // loop={count > 1 && true}
        ref={swiperRef}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: isTestimonial ? 3 : 2,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="IVFSwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            {isTestimonial ? (
              <TestimonialCard {...card} />
            ) : (
              <TeamsCard {...card} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IVFSwiper;
