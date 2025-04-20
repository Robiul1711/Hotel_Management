import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Card from './Card';

export default function CardSlider({ data, cardNo=3 }) {
  return (
    <div className="w-full mx-auto py-10 bg-transparent">
      <Swiper
        modules={[]}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        speed={3000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: cardNo,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
