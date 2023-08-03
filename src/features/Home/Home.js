import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const Home = ({ children }) => {
  return (
    <div className='grid  md:grid-cols-[245px,auto] '>

      <div className="hidden md:block mt-14  relative" >
        <Sidebar />
      </div>
      <div className=''>
        {children}
      </div>
    </div>
  )
}
