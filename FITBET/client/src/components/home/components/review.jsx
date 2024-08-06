import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/review.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Review() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div id="review_block">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="review">
            <div class="review_item review_img">
              <img
                src={require(`../uploads/review1.jpg`)}
                alt="hello"
                id="review-img"
              />
            </div>

            <div class="review_item">
              <h1>Name</h1>
              <h2>job role</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="review">
            <div class="review_item review_img">
              <img
                src={require(`../uploads/review2.jpg`)}
                alt="hello"
                id="review-img"
              />
            </div>

            <div class="review_item">
              <h1>Name</h1>
              <h2>job role</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="review">
            <div class="review_item review_img">
              <img
                src={require(`../uploads/review3.jpg`)}
                alt="hello"
                id="review-img"
              />
            </div>

            <div class="review_item">
              <h1>Name</h1>
              <h2>job role</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="review">
            <div class="review_item review_img">
              <img
                src={require(`../uploads/review4.jpg`)}
                alt="hello"
                id="review-img"
              />
            </div>

            <div class="review_item">
              <h1>Name</h1>
              <h2>job role</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
