import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Video() {
  const swiperRef = useRef(null);
  const videos = [
    { id: "1", url: "https://www.youtube.com/embed/JrC4T3Z0YHc" },
    { id: "2", url: "https://www.youtube.com/embed/efJ8fiysC1I" },
    { id: "3", url: "https://www.youtube.com/embed/KZR0xsLCFSI" },
    { id: "4", url: "https://www.youtube.com/embed/ckt_WXdDfy4" },
    { id: "5", url: "https://www.youtube.com/embed/Gp0h_USgTDg" },
    { id: "6", url: "https://www.youtube.com/embed/nESRjAay58U" },
    { id: "7", url: "https://www.youtube.com/embed/mngxwihOHEM" },
    { id: "8", url: "https://www.youtube.com/embed/qA4F19141zw" },
  ];
  return (
    <>
      <section className="p-16" id="video">
        <div className="text-3xl text-orange-500 font-bold mb-16">
          Video Gallery
        </div>
        <div className="w-full max-w-screen-xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-orange-500 font-bold text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-700"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-orange-500 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-700"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight />
          </button>

          {/* Swiper Slider */}
          <Swiper
            spaceBetween={20}
            slidesPerView={5} // Default for larger screens
            loop={true}
            speed={1200}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 }, // 1 video for small screens
              640: { slidesPerView: 2 }, // 2 videos for medium screens
              768: { slidesPerView: 3 }, // 3 videos for tablets
              1024: { slidesPerView: 4 }, // 4 videos for small desktops
              1280: { slidesPerView: 5 }, // 5 videos for larger desktops
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay]}
            className="video-slider"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative w-full h-64 sm:h-80">
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={`YouTube video ${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
