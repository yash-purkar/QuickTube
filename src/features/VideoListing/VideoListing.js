import React from 'react'
import { SingleVideo } from '../../components/SingleVideo/SingleVideo'

export const VideoListing = () => {
  return (
    <div className='p-3 mt-24 h-screen bg-[#141319] flex flex-wrap items-start'>
      <SingleVideo />
      <SingleVideo />
      <SingleVideo />
    </div>
  )
}
