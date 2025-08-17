import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function TestimonialsSection() {
  const testimonials = [
    {
      comment: "That was incredible!",
      description:
        "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
      author: "Byeon Wo Soek",
    },
    {
      comment: "Amazing experience!",
      description:
        "Working with this team was a pleasure. They quickly understood our goals and transformed them into a product beyond our expectations. Every detail was carefully crafted.",
      author: "Liam Carter",
    },
    {
      comment: "Outstanding work!",
      description:
        "The design quality was exceptional, and the collaboration was seamless. The team’s creativity and professionalism stood out from start to finish.",
      author: "Sophia Nguyen",
    },
    {
      comment: "Exceeded expectations!",
      description:
        "I was impressed by how dedicated the team was. They consistently went above and beyond, delivering a product that truly stands out in the market.",
      author: "Ethan Kim",
    },
    {
      comment: "Highly recommended!",
      description:
        "From the very beginning, the communication was excellent. The process was transparent, and the final result exceeded everything we hoped for.",
      author: "Amelia Rossi",
    },
    {
      comment: "Top-notch service!",
      description:
        "They paid close attention to detail, listened to feedback, and delivered something we are truly proud of. It was a fantastic journey with amazing results.",
      author: "Noah Johnson",
    },
  ];

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
              {testimonials.map((item, index) => (
                <SwiperSlide>
                  <div className="slider-inner" key={index}>
                    <span>{item.comment}</span>
                    <span>{item.description}</span>
                    <div></div>
                    <span>{item.author}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
