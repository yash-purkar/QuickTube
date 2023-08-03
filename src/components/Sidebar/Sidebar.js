import React from 'react'
import { AiFillHeart, AiFillHome, AiFillPlayCircle } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import { FaHistory } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (

    <ul className="fixed  bg-[#191921] h-screen text-white py-5 pl-10 pr-12 md:pr-20  flex flex-col gap-10">
      <li className='flex items-center gap-3 text-sm md:text-xl'><span><AiFillHome /></span><NavLink className="md:text-lg">Home</NavLink></li>
      <li className='flex items-center gap-3 text-sm md:text-xl'><span><AiFillPlayCircle /></span><NavLink className="md:text-lg">Playlist</NavLink></li>
      <li className='flex items-center gap-3 text-sm md:text-xl'><span><AiFillHeart /></span><NavLink className="md:text-lg">Liked</NavLink></li>
      <li className='flex items-center gap-3 text-sm md:text-xl'><span><MdOutlineWatchLater /></span><NavLink className="md:text-lg">Watch Later</NavLink></li>
      <li className='flex items-center gap-3 text-sm md:text-xl'><span><FaHistory /></span><NavLink className="md:text-lg">History</NavLink></li>
    </ul>
  )
}
