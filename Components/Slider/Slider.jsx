/* eslint-disable react/no-unescaped-entities */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper"
      >
        <SwiperSlide className="Slider">
          <h1 style={{ position: "absolute" }}>India Achivement</h1>
          <p className="Slider-Content1">India Mars Mission </p>
          <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1399/1571399-i-4cc0f96dc2e5" />
        </SwiperSlide>
        <SwiperSlide className="Slider">
          <h1>1920</h1>
          <p className="Slider-Content1">Horror Of Hearts</p>
          <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2141/1572141-i-f631d7a36bb6" />
        </SwiperSlide>
        <SwiperSlide className="Slider">
          <h1>Talwar</h1>
          <p className="Slider-Content1">The Mystry.</p>
          <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8505/1368505-i-18ce01b87408" />
        </SwiperSlide>
        <SwiperSlide className="Slider">
          <h1>Love Sonia</h1>
          <p className="Slider-Content1">The Unexpected twist</p>
          <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5535/1375535-i-c13f1a8f99a8" />
        </SwiperSlide>

        <SwiperSlide className="Slider">
          <h1>Vikran Vedha</h1>
          <p className="Slider-Content1">
            A police Ofiicer catches Vedha
            <br />
          </p>
          <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/439/1410439-i-1c9afbb2551c" />{" "}
        </SwiperSlide>
        <SwiperSlide className="Slider">
          <h1>Frozen II</h1>
          <p className="Slider-Content1">
            Story of two Sister
            <br />
          </p>
          <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9171/1549171-i-c60d43005982" />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
