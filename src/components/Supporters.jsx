import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SupportersChain from "../Data/SupportersChain.js";


const Supporters = () => {
  
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1: forward, -1: backward
  


  
  // Update slide to next or previous based on direction
  const nextslide = () => {
    if (SupportersChain.length - 3 === slide) {
      setDirection(-1); // Reverse direction when reaching the last slide
    } else {
      setSlide(slide + 1);
    }
  };

  const prevslide = () => {
    if (slide === 0) {
      setDirection(1); // Reverse direction when reaching the first slide
    } else {
      setSlide(slide - 1);
    }
  };

  // Use useEffect to set an interval for auto-scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === 1) {
        nextslide(); // Move forward
      } else {
        prevslide(); // Move backward
      }
    }, 3000); // Change the interval to control speed (3 seconds here)

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [slide, direction]);

  return (
    <div className='max-w-screen-lg mx-auto py-5 flex flex-col px-3 md:px-0'>
     
      <div className="sliderTop flex justify-between px-1 py-5 items-center">
        <h1 className='text-xl md:text-2xl font-extrabold '>Our Supporters & Contributers</h1>
        <div className="arrows flex gap-3 duration-300">
          <div
            className="left rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9]"
            onClick={prevslide}
          >
            <FaArrowLeft className='cursor-pointer' />
          </div>
          <div
            className="right rounded-full bg-[#e9eaeb] w-[30px] h-[30px] flex items-center justify-center px-1 py-1 hover:bg-[#d7d8d9]"
            onClick={nextslide}
          >
            <FaArrowRight className='cursor-pointer' />
          </div>
        </div>
      </div>
     
      <div className="card-main flex overflow-hidden justify-start">
        {/* Start of Card */}
        {SupportersChain.map((supporter, index) => (
          
          <div
            key={index}
            className="flex flex-col gap-1 md:gap-6 px-3"
            style={{
              transform: `translateX(-${slide * 100}%)`,
              transition: 'transform 0.5s ease-in-out', // Smooth transition for sliding
            }}
          >
            <div className="Test hover:scale-95 duration-300 transition-all md:w-72 w-48 ">
              <div className="w-auto h-auto relative rounded-xl overflow-hidden">
                <img src={`/images/${supporter.image}`} alt="Supporter Image" className=' w-full h-96 object-cover object-top' />
                <div className="inset-0 bg-gradient-to-t from-black/60 to-transparent heading absolute">
                 
                </div>
                <div className="restaurant-text ml-4 ">
              <div className="title flex flex-col py-3">
                <h1 className='font-bold text-[14px] md:text-[18px]  text-white z-10'>{supporter.name}</h1>
                <h2 className='font-bold text-[12px] md:text-sm  text-white z-10'>{supporter.profession}</h2>
                
                
              </div>
            </div>
              </div>
            </div>
            
          </div>
        ))}
        {/* End of card */}
      </div>
      <hr className='mt-4'></hr>
    </div>
  );
};

export default Supporters;
