import React from 'react'
import { IoIosHeart } from "react-icons/io";
const WhoAndOurMission = () => {
  return (
      <>
        <div className='max-w-screen-lg mx-auto py-5 md:py-10 items-center text-justify flex flex-col px-7  md:px-0'>
        <h1 className="text-[#676838] font-semibold leading-9 text-3xl ">Who Are are!</h1>
        <div className="line flex justify-center items-center text-xl gap-2 mb-3">
          <span className='w-[70px] tracking-wider h-[2px] bg-[#676838] rounded-full'></span>
          <span className='text-[#676838] text-3xl'><IoIosHeart/></span>
          <span className='w-[70px] tracking-wider h-[2px] bg-[#676838] rounded-full'></span>
        </div>
          <p className='text-[#666666] text-[14px]'>Awaz-e-Haq is a non-profit organization with a vision <span className='text-black font-bold '>" to improve education, support farming, and reduce poverty for a better future."</span></p>
  
        
        <h1 className="text-[#676838] font-semibold leading-9 text-3xl mt-5 md:mt-10 ">Our Mission</h1>
        <div className="line flex justify-center items-center text-xl gap-2 mb-3">
          <span className='w-[70px] tracking-wider h-[2px] bg-[#676838] rounded-full'></span>
          <span className='text-[#676838] text-3xl'><IoIosHeart/></span>
          <span className='w-[70px] tracking-wider h-[2px] bg-[#676838] rounded-full'></span>
        </div>
          <p className='text-[#666666] text-[14px] md:px-10'>The mission of Awaz-e-Haq is to empower communities by fostering educational opportunities, supporting sustainable farming practices, and alleviating poverty. We are dedicated to improving access to quality education for all, ensuring that every individual has the knowledge and skills to succeed. Through innovative agricultural initiatives, we aim to enhance food security and livelihoods, promoting self-sufficiency and environmental sustainability. By addressing the root causes of poverty, we strive to create a brighter, more prosperous future for underserved communities, where people have the tools and resources to build better lives for themselves and future generations.</p>
  
          </div>
    </>
    
  )
}

export default WhoAndOurMission