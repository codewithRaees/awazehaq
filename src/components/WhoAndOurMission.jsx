import React from 'react'
import { IoIosHeart } from "react-icons/io";
const WhoAndOurMission = () => {
  return (
      <>
        <div className='max-w-screen-lg mx-auto py-7 items-center flex flex-col px-3 md:px-0'>
        <h1 className="text-red-700 font-semibold leading-9 text-3xl ">Who Are are!</h1>
        <div className="line flex justify-center items-center text-xl gap-2">
          <span className='w-[70px] tracking-wider h-[2px] bg-red-700 rounded-full'></span>
          <span className='text-red-700 text-3xl'><IoIosHeart/></span>
          <span className='w-[70px] tracking-wider h-[2px] bg-red-700 rounded-full'></span>
        </div>
          <p>Awaz-e-Haq is a non-profit organization with a vision <b>" to improve education, support farming, and reduce poverty for a better future."</b></p>
  
          </div>
    </>
    
  )
}

export default WhoAndOurMission