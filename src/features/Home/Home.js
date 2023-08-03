import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const Home = ({ children }) => {
  return (
    <div className='grid  md:grid-cols-[245px,auto] '>

      <div className="hidden md:block border-5 border-red-500 overflow-hidden relative" >
        <Sidebar />
      </div>
      <div className='mx-2'>
        {children}
      </div>
    </div>
  )
}
