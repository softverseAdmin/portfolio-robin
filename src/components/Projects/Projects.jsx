import React from "react";
import Cards from "./Cards";
import img from "../../assets/videos/ntg.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function Projects() {
  const data = [
    {
      customer: "Nepal Travel Guide",
      url: "https://www.nepal-travel-guide.com/",
      img: img,
    },
    {
      customer: "Nepal Guide",
      url: "https://www.nepal-travel-guide.com/",
      img: img,
    },
    {
      customer: "Travel Guide",
      url: "https://www.nepal-travel-guide.com/",
      img: img,
    },
    {
      customer: "Travel Guide",
      url: "https://www.nepal-travel-guide.com/",
      img: img,
    },
  ];
  return (
    <div className="container-fluid d-flex align-items-center vh-100">
      <div className="container flex-column">
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"

          // modules={[Navigation, Pagination, Scrollbar, A11y,]}
          // spaceBetween={200}
          // slidesPerView={3}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {data.map((d, index) => {
            const { customer, url, img } = d;
            return (
              <SwiperSlide key={index}>
                <Cards customer={customer} url={url} img={img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
