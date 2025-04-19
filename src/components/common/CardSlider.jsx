import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { IoLocationOutline } from "react-icons/io5";

import Card from './Card';



export default function CardSlider({data}) {
  return (
    <div className="w-full mx-auto py-10 bg-transparent">
      <Swiper
        // modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        // autoplay={{
        //   delay: 1, // almost no delay
        //   disableOnInteraction: false,
        // }}

        speed={6000} // smooth transition over 3 seconds
        allowTouchMove={true} // optional: disable dragging to keep it smooth
        grabCursor={true}
      >{
        data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
