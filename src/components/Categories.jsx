import { FaRegPlayCircle } from 'react-icons/fa'
import pic1 from '../assets/pic7.jpg'
import pic2 from '../assets/pic1.jpg'
import pic3 from '../assets/pic9.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';



const Categories = () => {
  return (
    <div className=' bg-black h-fit w-[100vw] relative z-30 p-5 pb-24'>
        <div className=' bg-orange-500 w-[2px] h-20 mx-auto mt-5'></div>
        <div className="content mt-16">
            <div className=' text-sm font-normal text-orange-600 tracking-[5px]'>WHAT WE DO</div>
            <div className=' mt-5'><span className=' text-4xl font-extrabold'>Our Services</span></div>
        </div>
        <div className="cards w-[70%] flex flex-row justify-between items-center mx-auto mt-12">
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper mx-auto w-fit px-5"
        style={{
            "--swiper-pagination-color": "#FFA500",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}>
        
            <SwiperSlide><div className=' pic h-[500px] w-[32vw]'>
                <div>
                    <img src={pic3} className=' object-contain w-[95%] rounded-3xl'/>
                </div>
                <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><FaRegPlayCircle scale={2}/></a>
                    </div> 
                </div>
                <div className=' relative -top-[250px] -left-24 font-extrabold text-2xl text-orange-500'>FAMILY CARS</div>
            </div></SwiperSlide>
            <SwiperSlide><div className=' pic h-[500px] w-[32vw]'>
                <div>
                    <img src={pic2} className=' object-contain w-[95%] rounded-3xl'/>
                </div>
                <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><FaRegPlayCircle scale={2}/></a>
                    </div> 
                </div>
                <div className=' relative -top-[250px] -left-24 font-extrabold text-2xl'>SPORT CARS</div>
            </div></SwiperSlide>
            <SwiperSlide><div className=' pic h-[500px] w-[32vw]'>
                <div>
                    <img src={pic1} className=' object-contain w-[90%] rounded-3xl'/>
                </div>
                <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><FaRegPlayCircle scale={2}/></a>
                    </div> 
                </div>
                <div className=' relative -top-[250px] -left-20 font-extrabold text-2xl text-orange-500'>OFFROAD CARS</div>
            </div></SwiperSlide>
            <SwiperSlide><div className=' pic h-[500px] w-[32vw]'>
                <div>
                    <img src={pic1} className=' object-contain w-[90%] rounded-3xl'/>
                </div>
                <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><FaRegPlayCircle scale={2}/></a>
                    </div> 
                </div>
                <div className=' relative -top-[250px] -left-20 font-extrabold text-2xl text-orange-500'>OFFROAD CARS</div>
            </div></SwiperSlide>
            <SwiperSlide><div className=' pic h-[500px] w-[32vw]'>
                <div>
                    <img src={pic1} className=' object-contain w-[90%] rounded-3xl'/>
                </div>
                <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><FaRegPlayCircle scale={2}/></a>
                    </div> 
                </div>
                <div className=' relative -top-[250px] -left-20 font-extrabold text-2xl text-orange-500'>OFFROAD CARS</div>
            </div></SwiperSlide>
            <SwiperSlide><div className=' pic h-[500px] w-[32vw]'>
                <div>
                    <img src={pic1} className=' object-contain w-[90%] rounded-3xl'/>
                </div>
                <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><FaRegPlayCircle scale={2}/></a>
                    </div> 
                </div>
                <div className=' relative -top-[250px] -left-20 font-extrabold text-2xl text-orange-500'>OFFROAD CARS</div>
            </div></SwiperSlide>
        </Swiper>
                
        </div>
           
        
    </div>
  )
}

export default Categories