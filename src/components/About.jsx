import React from 'react'
import { IoCheckmark } from 'react-icons/io5'
import { MdArrowOutward } from 'react-icons/md'
import pic1 from '../assets/pic1.jpeg'
import { FaRegPlayCircle } from 'react-icons/fa'

const About = () => {
  return (
    <div className=' w-full h-fit pb-14 bg-black z-30 relative'>
        <div className="cards flex flex-row w-fit gap-7 mx-auto">
            <div className=" bg-orange-500 w-[350px] h-[200px] rounded-2xl -mt-[100px] pl-8 flex flex-row justify-between hover:cursor-pointer hover:-mt-[120px] hover:bg-slate-200 duration-300 text-black">
                <div className="words text-left flex flex-col gap-6 ">
                    <h2 className=' font-extrabold text-2xl mt-10'>Choose a car</h2>
                    <div className=' w-[200px]'>
                        <p className=' text-sm text-left'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                    </div>
                </div>
                <div className="number text-right text-[200px] font-black -mt-6 text-black">1</div>
            </div>
            <div className=" bg-orange-500 w-[350px] h-[200px] rounded-2xl -mt-[100px] pl-8 flex flex-row justify-between hover:cursor-pointer hover:-mt-[120px] hover:bg-slate-200 duration-300 text-black">
                <div className="words text-left flex flex-col gap-6 ">
                    <h2 className=' font-extrabold text-2xl mt-10'>Come in contact</h2>
                    <div className=' w-[200px]'>
                        <p className=' text-sm text-left'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                    </div>
                </div>
                <div className="number text-right text-[200px] font-black -mt-6 text-black">2</div>
            </div>
            <div className=" bg-orange-500 w-[350px] h-[200px] rounded-2xl -mt-[100px] pl-8 flex flex-row justify-between hover:cursor-pointer hover:-mt-[120px] hover:bg-slate-200 duration-300 text-black">
                <div className="words text-left flex flex-col gap-6 ">
                    <h2 className=' font-extrabold text-2xl mt-10'>Enjoy driving</h2>
                    <div className=' w-[200px]'>
                        <p className=' text-sm text-left'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                    </div>
                </div>
                <div className="number text-right text-[200px] font-black -mt-6 text-black">3</div>
            </div>
        </div>
        <div className="about_container mt-[35vh] flex flex-row justify-between w-[85vw] mx-auto">
            <div className=' info h-[500px] w-[42vw] text-left'>
                <span className=' text-sm font-normal text-orange-500'>ZENCRAIZEE</span>
                <div className=' mt-5'>
                    <span className=' text-5xl font-extrabold tracking-tight text-slate-200'>We Are More Than Just<br/></span>
                    <span className=' text-5xl font-extrabold tracking-tight text-orange-600'>A Car Rental Company</span>
                </div>
                <div className=' w-[90%] mt-5'>
                    <p className='text-sm font-normal text-slate-200 leading-6'>Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum.</p>
                </div>
                <div className="icons flex flex-col gap-4 mt-5">
                    <div className=' flex flex-row gap-2 align-middle place-items-center'>
                        <div className=' p-3 w-fit rounded-full bg-orange-500/20'><IoCheckmark /></div>
                        <span className='text-sm font-normal text-slate-200'>Sports and Luxury Cars</span>
                    </div>
                    <div className=' flex flex-row gap-2 align-middle place-items-center'>
                        <div className=' p-3 w-fit rounded-full bg-orange-500/20'><IoCheckmark /></div>
                        <span className='text-sm font-normal text-slate-200'>Economic Cars</span>
                    </div>
                </div>
                <div className="button mt-7 hover:mt-5 hover:cursor-pointer duration-300 hover:bg-slate-200 hover:text-orange-500 flex flex-row gap-3 bg-orange-500 w-fit py-4 px-8 rounded-full align-middle place-items-center text-black">
                    <span>Read More</span>
                    <MdArrowOutward />
                </div>
            </div>
            <div className=' pic h-[500px] w-[32vw]'>
                <div>
                    <img src={pic1} className=' object-contain w-[95%] rounded-3xl'/>
                </div>
                <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><FaRegPlayCircle scale={2}/></a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About