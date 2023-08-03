import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { BsYoutube } from 'react-icons/bs'
import { Sidebar } from '../Sidebar/Sidebar.js'
import { useState } from 'react'

export const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(true);

  const handleToggleNavbar = () => {
    setToggleNavbar(prev => !prev)
  }
  return (
    <nav className='bg-[#191921] sticky top-0 left-0 right-0'>
      <div className='p-3 flex justify-between items-center  flex-wrap md:mx-5'>
        <div className="text-xl text-white flex items-center gap-5">

          <div className='md:hidden'>
            {
              !toggleNavbar ? <AiOutlineMenu onClick={handleToggleNavbar} className="cursor-pointer" /> : <RxCross1 onClick={handleToggleNavbar} className="cursor-pointer" />
            }

          </div>
          <div className='md:flex items-center gap-2'>
            <span className='text-2xl md:text-4xl text-[#1D9BF0]'><BsYoutube /></span>
            <h1 className='text-white text-2xl font-bold hidden md:block'> QuickTube</h1>
          </div>
        </div>



        <div className='hidden md:block w-[40%]'>
          <input type="search" name="" id="" className='w-full p-1 bg-[#34343d] text-gray-200  outline-none rounded-lg  tracking-wider' placeholder='Search for videos' />
        </div>

        <div className='text-white text-2xl flex gap-5'>
          <span ><CgProfile /></span>
          <span>
            <FiLogOut /></span>
        </div>
        {
          toggleNavbar && <div className="h-screen md:hidden  w-full absolute top-[100%]  left-0">
            <Sidebar />
          </div>
        }

      </div>

      <div className='md:hidden bg-inherit border-5 w-[95%] mx-auto '>
        <input type="search" name="" id="" className='w-full bg-[#34343d] text-gray-200 my-2 mx-auto p-0.5    tracking-wider outline-none rounded-lg' placeholder='Search for videos' />
      </div>
    </nav>
  )
}
