import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Sidebar } from '../Sidebar/Sidebar.js'
import { useState } from 'react'

export const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(true);

  const handleToggleNavbar = () => {
    setToggleNavbar(prev => !prev)
  }
  return (
    <nav className='bg-[#191921] p-3 flex justify-between sticky top-0 left-0 right-0'>
      <h1 className='text-white text-2xl font-bold '>QuickTube</h1>

      <div className="text-xl text-white md:hidden">

        {
          !toggleNavbar ? <AiOutlineMenu onClick={handleToggleNavbar} className="cursor-pointer" /> : <RxCross1 onClick={handleToggleNavbar} className="cursor-pointer" />
        }

      </div>

      {
        toggleNavbar && <div className="h-screen md:hidden  w-full absolute top-14  left-0">
          <Sidebar />
        </div>
      }
    </nav>
  )
}
