import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function TestimonialsSection() {
  return (
    <>
      <div className="testimonials-section">
        <div className="text">
          <span>Don’t Trust Us, Trust</span>
          <span>Their Voice</span>
        </div>
        <div className="map">
          <div className="slider-wrapper">
            <Swiper
              slidesPerView={"auto"}
              loop={true}
              centeredSlides={true}
              spaceBetween={70}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
