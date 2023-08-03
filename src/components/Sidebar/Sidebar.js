import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (

    <ul className="fixed  bg-[#191921] h-screen text-white p-5 px-12 md:px-20  flex flex-col gap-10">
      <li><NavLink>Home</NavLink></li>
      <li><NavLink>Playlist</NavLink></li>
      <li><NavLink>Liked</NavLink></li>
      <li><NavLink>Watch Later</NavLink></li>
      <li><NavLink>History</NavLink></li>
    </ul>
  )
}
