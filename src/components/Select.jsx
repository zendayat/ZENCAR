import React, { useRef } from 'react'
import img1 from '../assets/bg2.png'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper,SwiperSlide } from 'swiper/react';

const Select = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 866.66)}s`;
  };
  return (
    <>
    
      <div className=' h-fit pb-10 w-full bg-black relative z-30'>
        <div className='h-5 w-full'></div>
        <div className=' relative mt-10'>
          <div className=' text-sm font-normal text-orange-600 tracking-[5px] mt-10'>SELECT YOUR CAR</div>
          <div className=' mt-5'><span className=' text-4xl font-extrabold'>Luxury</span><span className=' text-4xl font-extrabold text-orange-500 ml-2'>Car Fleet</span></div>
        </div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 12500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
          enabled: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-[80vw] h-[10
        0vh]"
      >
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-[18px] bg-black text-white flex justify-center items-center'>
          <div className=' w-[100%] h-[90vh]'>
            <img src={img1} className=' w-[80vw] object-contain'/>
          </div>
        </SwiperSlide>
        
        <div className="autoplay-progress absolute right-[16px] bottom-[16px] z-40 w-[48px] h-[48px] flex items-center justify-center font-bold text-orange-500" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} className='  absolute left-0 top-0 z-10 w-[100%] h-[100%] stroke-[4px] stroke-orange-500 fill-none mystroke -rotate-90'>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </>
  )
}

export default Select
