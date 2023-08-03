import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const Home = ({ children }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[17.9%,auto]'>
      <div className="hidden md:block w-[20%]" >
        <Sidebar />
      </div>
      <div className='mx-2'>
        {children}
      </div>
    </div>
  )
}
