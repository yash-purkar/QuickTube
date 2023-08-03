import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl'

export const SingleVideo = () => {
  return (
    <div className='flex flex-col  md:w-[350px] gap-1.5 mx-auto  pb-3 rounded-xl' style={{ boxShadow: "rgba(90, 90, 90, 0.5) 0px 5px 15px" }}>
      <img src="https://i.ytimg.com/vi/YT7tQzmGRLA/0.jpg" alt="Img" className='max-w-[350px] h-44 rounded-t-lg object-cover' />
      <div className='flex justify-between items-center mx-2' >
        <h3 className='text-gray-200 text-[1.125rem] md:text-lg font-bold tracking-wide'>Atomic Habits by James Clear</h3>
        <span className='text-gray-300'>
          <SlOptionsVertical />
        </span>
      </div>
      <div className='flex justify-between items-center mx-2'>
        <p className='text-gray-300 font-bold'>Ali Abdal</p>
        <p className='text-gray-300 text-xs'>Dec 12 2021</p>
      </div>
    </div>
  )
}
