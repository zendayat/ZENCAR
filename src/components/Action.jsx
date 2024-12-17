import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const Action = () => {
  return (
    <div className=' min-h-[80vh] w-full relative z-30 justify-center align-middle place-content-center'>
      <div>
        <div className=''>
            <div className=' text-sm font-normal text-orange-600 tracking-[5px]'>RENT NOW</div>
            <div className=' mt-5'><span className=' text-4xl font-extrabold'>Book Auto Rental</span></div>
        </div>
        <div className=' h-[100px] w-[80%] gap-5 bg-black mt-5 mx-auto z-40 flex flex-row px-12 rounded-full'>
            <div className=' h-[60%] w-[150px] my-auto border border-l-0 border-t-0 border-b-0 border-r-slate-300/25 flex flex-row place-items-center gap-2 font-light text-sm justify-center text-center align-middle'>
                <div>Choose Car Type</div>
                <div><IoIosArrowDown color='orange'/></div>
            </div>
            <div className=' h-[60%] w-[150px] my-auto border border-l-0 border-t-0 border-b-0 border-r-slate-300/25 flex flex-row place-items-center gap-2 font-light text-sm justify-center text-center align-middle'>
                <div>Pickup Location</div>
                <div><IoIosArrowDown color='orange'/></div>
                <div className="absolute h-[200px] w-[150px] bg-black hidden hover:block duration-300 mt-64 -ml-3 flex flex-col justify-between py-2  ">
                    <div className=' w-[90%] h-10 mx-auto  align-middle text-center justify-center place-content-center border-slate-300/20 hover:bg-orange-500 duration-300 hover:cursor-pointer border-l-0 border-r-0 border-t-0 border'>
                        <a href="#" className=' text-white test-sm font-normal my-auto'>New York</a>
                    </div>
                    <div className=' w-[90%] h-10 mx-auto  align-middle text-center justify-center place-content-center border-slate-300/20 hover:bg-orange-500 duration-300 hover:cursor-pointer border-l-0 border-r-0 border-t-0 border'>
                        <a href="#" className=' text-white test-sm font-normal my-auto'>Sharjah</a>
                    </div>
                    <div className=' w-[90%] h-10 mx-auto  align-middle text-center justify-center place-content-center border-slate-300/20 hover:bg-orange-500 duration-300 hover:cursor-pointer border-l-0 border-r-0 border-t-0 border'>
                        <a href="#" className=' text-white test-sm font-normal my-auto'>Birmingham</a>
                    </div>
                    <div className=' w-[90%] h-10 mx-auto  align-middle text-center justify-center place-content-center border-slate-300/20 hover:bg-orange-500 duration-300 hover:cursor-pointer border-l-0 border-r-0 border-t-0 border'>
                        <a href="#" className=' text-white test-sm font-normal my-auto'>Other City</a>
                    </div>
                </div>
            </div>
            <div className=' h-[60%] w-[150px] my-auto border border-l-0 border-t-0 border-b-0 border-r-slate-300/25 flex flex-row place-items-center gap-2 font-light text-sm justify-center text-center align-middle'>
                <div>Pickup Date</div>
                <div><FaCalendarAlt color='orange'/></div>
            </div>
            <div className=' h-[60%] w-[150px] my-auto border border-l-0 border-t-0 border-b-0 border-r-slate-300/25 flex flex-row place-items-center gap-2 font-light text-sm justify-center text-center align-middle'>
                <div>Drop-off location</div>
                <div><IoIosArrowDown color='orange'/></div>
                <div className="absolute h-[200px] w-[150px] bg-black hidden hover:block duration-300 mt-64 -ml-3 flex flex-col justify-between py-2  ">
                    <div className=' w-[90%] h-10 mx-auto  align-middle text-center justify-center place-content-center border-slate-300/20 hover:bg-orange-500 duration-300 hover:cursor-pointer border-l-0 border-r-0 border-t-0 border'>
                        <a href="#" className=' text-white test-sm font-normal my-auto'>New York</a>
                    </div>
                    <div className=' w-[90%] h-10 mx-auto  align-middle text-center justify-center place-content-center border-slate-300/20 hover:bg-orange-500 duration-300 hover:cursor-pointer border-l-0 border-r-0 border-t-0 border'>
                        <a href="#" className=' text-white test-sm font-normal my-auto'>Sharjah</a>
                    </div>
                    <div className=' w-[90%] h-10 mx-auto  align-middle text-center justify-center place-content-center border-slate-300/20 hover:bg-orange-500 duration-300 hover:cursor-pointer border-l-0 border-r-0 border-t-0 border'>
                        <a href="#" className=' text-white test-sm font-normal my-auto'>Birmingham</a>
                    </div>
                    <div className=' w-[90%] h-10 mx-auto  align-middle text-center justify-center place-content-center border-slate-300/20 hover:bg-orange-500 duration-300 hover:cursor-pointer border-l-0 border-r-0 border-t-0 border'>
                        <a href="#" className=' text-white test-sm font-normal my-auto'>Other City</a>
                    </div>
                </div>
            </div>
            <div className=' h-[60%] w-[150px] my-auto border border-l-0 border-t-0 border-b-0 border-r-slate-300/25 flex flex-row place-items-center gap-2 font-light text-sm justify-center text-center align-middle'>
                <div>Return Date</div>
                <div><FaCalendarAlt color='orange'/></div>
            </div>
            
            <button className=' h-[60%] w-[150px] my-auto bg-orange-500 rounded-full flex flex-row place-items-center font-light text-sm justify-center text-center align-middle ml6'>
                Rent Now
            </button>
        </div>

      </div>
    </div>
  )
}

export default Action
