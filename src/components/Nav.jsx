import React from 'react'
import logo from '../assets/logo.png'
import { FiPhoneCall } from 'react-icons/fi'

const Nav = () => {
  return (
    <div className=' w-[100%] pt-5 px-7 flex flex-row justify-between align-middle items-center'>
      <img src={logo} className=' object-contain w-[200px]'/>
      <div className=' flex flex-row gap-7'>
        <li className=' flex flex-row gap-4 my-auto'>
          <ul className=' hover:text-orange-500 hover:cursor-pointer text-sm'>Home</ul>
          <ul className=' hover:text-orange-500 hover:cursor-pointer text-sm'>About</ul>
          <ul className=' hover:text-orange-500 hover:cursor-pointer text-sm'>Services</ul>
          <ul className=' hover:text-orange-500 hover:cursor-pointer text-sm'>Cars</ul>
          <ul className=' hover:text-orange-500 hover:cursor-pointer text-sm'>Car Types</ul>
          <ul className=' hover:text-orange-500 hover:cursor-pointer text-sm'>Process</ul>
          <ul className=' hover:text-orange-500 hover:cursor-pointer text-sm'>Blog</ul>
          <ul className=' hover:text-orange-500 hover:cursor-pointer text-sm'>Contacts</ul>
        </li>
        <div className=' contact flex flex-row gap-5 items-center'>
        <div className=' border border-orange-600 rounded-full p-5'>
        <FiPhoneCall/>
        </div>
        <div className=' flex flex-col gap-2 text-left'>
            <span className=' text-sm'>Need Help?</span>
            <span className=' font-bold'>244 466 666</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Nav
