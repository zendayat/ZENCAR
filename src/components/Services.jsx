import React from 'react'
import {  PiNumberOne, PiNumberThree, PiNumberTwo } from 'react-icons/pi'

const Services = () => {
  return (
    <div className=' bg-black h-fit w-[100vw] relative z-30 p-5 pb-16'>
        <div className=' bg-orange-500 w-[2px] h-20 mx-auto'></div>
        <div className="content mt-16">
            <div className=' text-sm font-normal text-orange-600 tracking-[5px]'>WHAT WE DO</div>
            <div className=' mt-5'><span className=' text-4xl font-extrabold'>Our Services</span></div>
            <div className="cards w-[85%] flex flex-row justify-between mx-auto mt-12">
                <div>
                  <div className="card bg-slate-600/75 w-[25vw] h-[45vh] rounded-3xl shadow-sm shadow-slate-600 pt-14">
                    <div className=' text-xl font-bold'>Corporate Car Rental</div>
                    <div className=' text-sm w-[90%] mt-4 mx-auto leading-7'>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</div>
                  </div>
                  <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><PiNumberOne scale={2}/></a>
                    </div> 
                </div>
                </div>
                <div>
                  <div className="card bg-slate-600/75 w-[25vw] h-[45vh] rounded-3xl shadow-sm shadow-slate-600  pt-14">
                    <div className=' text-xl font-bold'>Corporate Car Rental</div>
                    <div className=' text-sm w-[90%] mt-4 mx-auto leading-7'>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</div>
                  </div>
                  <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><PiNumberTwo scale={2}/></a>
                    </div> 
                </div>
                </div>
                <div>
                  <div className="card bg-slate-600  pt-14/75 w-[25vw] h-[45vh] rounded-3xl shadow-sm shadow-slate-600  pt-14">
                    <div className=' text-xl font-bold'>Corporate Car Rental</div>
                    <div className=' text-sm w-[90%] mt-4 mx-auto leading-7'>Lorem ipsum dolor sit amet the consectetur adipiscing elit entesque hendrerit elit nisan lacinia feugiat nunc eu aucton.</div>
                  </div>
                  <div className=' w-fit h-fit p-4 rounded-full bg-black place-items-center align-middle -mt-12 -ml-5 z-10 relative'>
                    <div className=' w-fit p-4 rounded-full bg-slate-900/50 hover:scale-125 duration-300 border border-orange-400'>
                        <a href="#" className=' decoration-current'><PiNumberThree scale={2}/></a>
                    </div> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services