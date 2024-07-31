import React, { useRef } from 'react'
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Select = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
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
      ></Swiper>
      <div className=' min-h-[100vh] w-full bg-black relative z-30'>
        <div className='h-5 w-full'></div>
        <div className=' relative mt-10'>
          <div className=' text-sm font-normal text-orange-600 tracking-[5px] mt-10'>SELECT YOUR CAR</div>
          <div className=' mt-5'><span className=' text-4xl font-extrabold'>Luxury</span><span className=' text-4xl font-extrabold text-orange-500 ml-2'>Car Fleet</span></div>
        </div>
      </div>
    </>
  )
}

export default Select
