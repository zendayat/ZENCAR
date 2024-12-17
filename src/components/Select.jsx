import React, { useRef } from 'react'
import img2 from '../assets/pic1.jpg'
import img3 from '../assets/pic2.jpg'
import img4 from '../assets/pic3.jpg'
import img5 from '../assets/pic4.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper,SwiperSlide } from 'swiper/react';
import { GiCarDoor } from 'react-icons/gi';
import { PiSeatbeltDuotone } from 'react-icons/pi';
import { TbManualGearboxFilled } from 'react-icons/tb';
import { BsLuggage } from 'react-icons/bs';

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
        slidesPerView={1.5}
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
        className="mySwiper w-[90vw] min-h-fit mt-5"
      >
        <SwiperSlide className=' relative text-center text-[18px] bg-black text-white flex flex-col justify-center items-center h-fit'>
          <div className='swiperdiv w-[100%] h-fit '>
            <img src={img5} className='swiperimg object-fit mx-auto h-[80vh] rounded-3xl'/>
           
          </div>
          <div className=' w-[35vw] rounded-3xl h-[100px] bg-black/70 absolute bottom-5 z-30 flex flex-row justify-between px-4'>
            <div className=' name my-auto'>
              <div className=' font-bold text-orange-500 leading-10'>Rolls Royce Cullinan</div>
              <div className=' flex gap-3 bg-black/70 px-3 py-2 rounded-2xl'>
                <div className=' gap-1 flex align-middle justify-center items-center'><GiCarDoor /><span className=' text-orange-500 font-light'>4</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><PiSeatbeltDuotone /><span className=' text-orange-500 font-light'>6</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><TbManualGearboxFilled /><span className=' text-orange-500 font-light'>auto</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><BsLuggage /><span className=' text-orange-500 font-light'>3</span></div>
              </div>
            </div>
            <div className=' buttons gap-2 flex flex-row my-auto justify-center align-middle items-center'>
              <div className=' btn px-3 py-2 h-fit w-fit rounded-full bg-orange-500 text-base'>
                Details
              </div>
              <div className=' flex flex-col text-right'>
                <span className=' text-orange-500 font-bold text-2xl'>$600</span>
                <span className=' font-extralight text-sm'>/ Day</span>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className=' relative text-center text-[18px] bg-black text-white flex flex-col justify-center items-center h-fit'>
          <div className='swiperdiv w-[100%] h-fit '>
            <img src={img5} className='swiperimg object-fit mx-auto h-[80vh] rounded-3xl'/>
           
          </div>
          <div className=' w-[35vw] rounded-3xl h-[100px] bg-black/70 absolute bottom-5 z-30 flex flex-row justify-between px-4'>
            <div className=' name my-auto'>
              <div className=' font-bold text-orange-500 leading-10'>Rolls Royce Cullinan</div>
              <div className=' flex gap-3 bg-black/70 px-3 py-2 rounded-2xl'>
                <div className=' gap-1 flex align-middle justify-center items-center'><GiCarDoor /><span className=' text-orange-500 font-light'>4</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><PiSeatbeltDuotone /><span className=' text-orange-500 font-light'>6</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><TbManualGearboxFilled /><span className=' text-orange-500 font-light'>auto</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><BsLuggage /><span className=' text-orange-500 font-light'>3</span></div>
              </div>
            </div>
            <div className=' buttons gap-2 flex flex-row my-auto justify-center align-middle items-center'>
              <div className=' btn px-3 py-2 h-fit w-fit rounded-full bg-orange-500 text-base'>
                Details
              </div>
              <div className=' flex flex-col text-right'>
                <span className=' text-orange-500 font-bold text-2xl'>$600</span>
                <span className=' font-extralight text-sm'>/ Day</span>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className=' relative text-center text-[18px] bg-black text-white flex flex-col justify-center items-center h-fit'>
          <div className='swiperdiv w-[100%] h-fit '>
            <img src={img5} className='swiperimg object-fit mx-auto h-[80vh] rounded-3xl'/>
           
          </div>
          <div className=' w-[35vw] rounded-3xl h-[100px] bg-black/70 absolute bottom-5 z-30 flex flex-row justify-between px-4'>
            <div className=' name my-auto'>
              <div className=' font-bold text-orange-500 leading-10'>Rolls Royce Cullinan</div>
              <div className=' flex gap-3 bg-black/70 px-3 py-2 rounded-2xl'>
                <div className=' gap-1 flex align-middle justify-center items-center'><GiCarDoor /><span className=' text-orange-500 font-light'>4</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><PiSeatbeltDuotone /><span className=' text-orange-500 font-light'>6</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><TbManualGearboxFilled /><span className=' text-orange-500 font-light'>auto</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><BsLuggage /><span className=' text-orange-500 font-light'>3</span></div>
              </div>
            </div>
            <div className=' buttons gap-2 flex flex-row my-auto justify-center align-middle items-center'>
              <div className=' btn px-3 py-2 h-fit w-fit rounded-full bg-orange-500 text-base'>
                Details
              </div>
              <div className=' flex flex-col text-right'>
                <span className=' text-orange-500 font-bold text-2xl'>$600</span>
                <span className=' font-extralight text-sm'>/ Day</span>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className=' relative text-center text-[18px] bg-black text-white flex flex-col justify-center items-center h-fit'>
          <div className='swiperdiv w-[100%] h-fit '>
            <img src={img5} className='swiperimg object-fit mx-auto h-[80vh] rounded-3xl'/>
          
          </div>
          <div className=' w-[35vw] rounded-3xl h-[100px] bg-black/70 absolute bottom-5 z-30 flex flex-row justify-between px-4'>
            <div className=' name my-auto'>
              <div className=' font-bold text-orange-500 leading-10'>Rolls Royce Cullinan</div>
              <div className=' flex gap-3 bg-black/70 px-3 py-2 rounded-2xl'>
                <div className=' gap-1 flex align-middle justify-center items-center'><GiCarDoor /><span className=' text-orange-500 font-light'>4</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><PiSeatbeltDuotone /><span className=' text-orange-500 font-light'>6</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><TbManualGearboxFilled /><span className=' text-orange-500 font-light'>auto</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><BsLuggage /><span className=' text-orange-500 font-light'>3</span></div>
              </div>
            </div>
            <div className=' buttons gap-2 flex flex-row my-auto justify-center align-middle items-center'>
              <div className=' btn px-3 py-2 h-fit w-fit rounded-full bg-orange-500 text-base'>
                Details
              </div>
              <div className=' flex flex-col text-right'>
                <span className=' text-orange-500 font-bold text-2xl'>$600</span>
                <span className=' font-extralight text-sm'>/ Day</span>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className=' relative text-center text-[18px] bg-black text-white flex flex-col justify-center items-center h-fit'>
          <div className='swiperdiv w-[100%] h-fit '>
            <img src={img5} className='swiperimg object-fit mx-auto h-[80vh] rounded-3xl'/>
           
          </div>
          <div className=' w-[35vw] rounded-3xl h-[100px] bg-black/70 absolute bottom-5 z-30 flex flex-row justify-between px-4'>
            <div className=' name my-auto'>
              <div className=' font-bold text-orange-500 leading-10'>Rolls Royce Cullinan</div>
              <div className=' flex gap-3 bg-black/70 px-3 py-2 rounded-2xl'>
                <div className=' gap-1 flex align-middle justify-center items-center'><GiCarDoor /><span className=' text-orange-500 font-light'>4</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><PiSeatbeltDuotone /><span className=' text-orange-500 font-light'>6</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><TbManualGearboxFilled /><span className=' text-orange-500 font-light'>auto</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><BsLuggage /><span className=' text-orange-500 font-light'>3</span></div>
              </div>
            </div>
            <div className=' buttons gap-2 flex flex-row my-auto justify-center align-middle items-center'>
              <div className=' btn px-3 py-2 h-fit w-fit rounded-full bg-orange-500 text-base'>
                Details
              </div>
              <div className=' flex flex-col text-right'>
                <span className=' text-orange-500 font-bold text-2xl'>$600</span>
                <span className=' font-extralight text-sm'>/ Day</span>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className=' relative text-center text-[18px] bg-black text-white flex flex-col justify-center items-center h-fit'>
          <div className='swiperdiv w-[100%] h-fit '>
            <img src={img5} className='swiperimg object-fit mx-auto h-[80vh] rounded-3xl'/>
           
          </div>
          <div className=' w-[35vw] rounded-3xl h-[100px] bg-black/70 absolute bottom-5 z-30 flex flex-row justify-between px-4'>
            <div className=' name my-auto'>
              <div className=' font-bold text-orange-500 leading-10'>Rolls Royce Cullinan</div>
              <div className=' flex gap-3 bg-black/70 px-3 py-2 rounded-2xl'>
                <div className=' gap-1 flex align-middle justify-center items-center'><GiCarDoor /><span className=' text-orange-500 font-light'>4</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><PiSeatbeltDuotone /><span className=' text-orange-500 font-light'>6</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><TbManualGearboxFilled /><span className=' text-orange-500 font-light'>auto</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><BsLuggage /><span className=' text-orange-500 font-light'>3</span></div>
              </div>
            </div>
            <div className=' buttons gap-2 flex flex-row my-auto justify-center align-middle items-center'>
              <div className=' btn px-3 py-2 h-fit w-fit rounded-full bg-orange-500 text-base'>
                Details
              </div>
              <div className=' flex flex-col text-right'>
                <span className=' text-orange-500 font-bold text-2xl'>$600</span>
                <span className=' font-extralight text-sm'>/ Day</span>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className=' relative text-center text-[18px] bg-black text-white flex flex-col justify-center items-center h-fit'>
          <div className='swiperdiv w-[100%] h-fit '>
            <img src={img5} className='swiperimg object-fit mx-auto h-[80vh] rounded-3xl'/>
           
          </div>
          <div className=' w-[35vw] rounded-3xl h-[100px] bg-black/70 absolute bottom-5 z-30 flex flex-row justify-between px-4'>
            <div className=' name my-auto'>
              <div className=' font-bold text-orange-500 leading-10'>Rolls Royce Cullinan</div>
              <div className=' flex gap-3 bg-black/70 px-3 py-2 rounded-2xl'>
                <div className=' gap-1 flex align-middle justify-center items-center'><GiCarDoor /><span className=' text-orange-500 font-light'>4</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><PiSeatbeltDuotone /><span className=' text-orange-500 font-light'>6</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><TbManualGearboxFilled /><span className=' text-orange-500 font-light'>auto</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><BsLuggage /><span className=' text-orange-500 font-light'>3</span></div>
              </div>
            </div>
            <div className=' buttons gap-2 flex flex-row my-auto justify-center align-middle items-center'>
              <div className=' btn px-3 py-2 h-fit w-fit rounded-full bg-orange-500 text-base'>
                Details
              </div>
              <div className=' flex flex-col text-right'>
                <span className=' text-orange-500 font-bold text-2xl'>$600</span>
                <span className=' font-extralight text-sm'>/ Day</span>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide className=' relative text-center text-[18px] bg-black text-white flex flex-col justify-center items-center h-fit'>
          <div className='swiperdiv w-[100%] h-fit '>
            <img src={img5} className='swiperimg object-fit mx-auto h-[80vh] rounded-3xl'/>
           
          </div>
          <div className=' w-[35vw] rounded-3xl h-[100px] bg-black/70 absolute bottom-5 z-30 flex flex-row justify-between px-4'>
            <div className=' name my-auto'>
              <div className=' font-bold text-orange-500 leading-10'>Rolls Royce Cullinan</div>
              <div className=' flex gap-3 bg-black/70 px-3 py-2 rounded-2xl'>
                <div className=' gap-1 flex align-middle justify-center items-center'><GiCarDoor /><span className=' text-orange-500 font-light'>4</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><PiSeatbeltDuotone /><span className=' text-orange-500 font-light'>6</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><TbManualGearboxFilled /><span className=' text-orange-500 font-light'>auto</span></div>
                <div className=' gap-1 flex align-middle justify-center items-center'><BsLuggage /><span className=' text-orange-500 font-light'>3</span></div>
              </div>
            </div>
            <div className=' buttons gap-2 flex flex-row my-auto justify-center align-middle items-center'>
              <div className=' btn px-3 py-2 h-fit w-fit rounded-full bg-orange-500 text-base'>
                Details
              </div>
              <div className=' flex flex-col text-right'>
                <span className=' text-orange-500 font-bold text-2xl'>$600</span>
                <span className=' font-extralight text-sm'>/ Day</span>
              </div>
            </div>
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
