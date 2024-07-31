import React, { useEffect } from 'react'
import Nav from './Nav'
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import { MdArrowOutward } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  useEffect(() => {
    const image1 = document.getElementById('img1');
    const image2 = document.getElementById('img2');

    ScrollTrigger.create({
      trigger: '.bg-changer',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(image2, { opacity: 0, duration: 0.5 });
        gsap.to(image1, { opacity: 0.5, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(image2, { opacity: 0.5, duration: 0.5 });
        gsap.to(image1, { opacity: 0, duration: 0.5 });
      }
    });
  }, []);
  return (
    <div className=' relative h-[100vh]'>
      <img src={bg2} id='img1' className=' fixed z-10 bg-gradient-to-r from-black to-slate-500'/>
      <img src={bg1} id='img2' className=' fixed z-10 bg-gradient-to-r from-black to-slate-500'/>
      <div className="container left-[7.5vw] w-[85vw] min-h-[90vh] z-20 absolute">
        <Nav/>
        <div className=' text-left mt-24'>
          <div className=' flex flex-row gap-3'>
            <span className=' text-sm font-normal text-orange-600'>*</span>
            <span className=' text-sm font-normal text-orange-600'>PREMIUM</span>
          </div>
          <div>
            <span className=' text-7xl font-extrabold'>Rental Car</span>
          </div>
          <div className=' flex flex-row gap-3 text-center align-middle items-center'>
            <span>Lamborghini G36</span>
            <div className=' flex flex-row gap-3 text-center align-middle items-center'>
              <span className='text-xl font-semibold text-orange-600'>$800</span>
              <span className='text-lg font-light text-white'>/DAY</span>
            </div>
          </div>
        </div>
        <div className="buttons flex flex-row gap-7 mt-8">
          <div className="btn-primary hover:bg-slate-200 hover:-mt-5 duration-500 py-4 px-4 w-40 rounded-3xl text-sm text-black flex flex-row text-center align-middle justify-center gap-2 h-[50px]">
            <span>View Details</span>
            <MdArrowOutward />
          </div>
          <div className="btn-secondary hover:bg-orange-500 hover:-mt-5 duration-500 py-4 px-4 w-44 rounded-3xl text-sm text-white flex flex-row text-center align-middle justify-center gap-2 h-[50px]">
            <span>Rent Car</span>
            <MdArrowOutward />
          </div>
        </div>
        <div className='bg-changer h-4 w-4 bg-white absolute mt-[70vh] z-30'></div>
      </div>
      
    </div>
  )
}

export default Landing