import logo from '../assets/logo.jpeg';
// src/App.js
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import HamburgerMenu from './HamburgerMenu';

// Define the blink animation
const blinkAnimation = keyframes`
  0%, 100% {
    background-color: #676838; /* Original color */
  }
  50% {
    background-color: #e3e31d ; /* Blinking color */
  }
`;

// Create a styled button with the blinking effect
const BlinkingButton = styled.button`
  
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border: none;
  cursor: pointer;
  animation: ${blinkAnimation} 1s infinite;
  transition: background-color 0.3s;

  &:hover {
    animation: none; /* Stop blinking on hover */
    background-color: #2980b9; /* Hover color */
  }
`;

  

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full shadow-lg">
            <header className="flex  justify-between sm:h-24 h-16 items-center px-3  ">
        <div className="logo"><span className='block text-xl font-bold text-[#676838] sm:hidden'>Awaz-e-Haq Foundation</span><img src={logo}  className='h-20 w-20 hidden sm:block'/></div>
                <div className=" header-left flex justify-around items-center sm:gap-5">
                    <nav className='hidden custom-md:block'>
        <ul className="flex justify-around gap-2 text-[#333333] text-[14px] font-semibold">
         <li  className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2  transition-all duration-500 ease-in-out'>Home</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2 transition-all duration-500 ease-in-out'>About</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2 transition-all duration-500 ease-in-out'>Our Approach</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2 transition-all duration-500 ease-in-out'>Gallery </li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2 transition-all duration-500 ease-in-out'>On Going Project </li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2 transition-all duration-500 ease-in-out'>Volunteer</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2 transition-all duration-500 ease-in-out'>Media</li>
        </ul>
                </nav>
                <BlinkingButton style={{ lineHeight: '23px' }} className='bg-[#676838] flex gap-1 px-3 py-1 sm:py-3  font-sans rounded-full sm:font-semibold   text-white'>
      <span className='text-[14px] sm:text-[16px]'> Donate</span> <span className='hidden sm:block'>Now!</span>
            </BlinkingButton>
             <div className="relative">
              
            <button onClick={toggleMenu} className=" block custom-md:hidden pl-2 sm:pl-4 text-3xl  text-[#6d6d23] rounded">
                ☰
            </button>
            <HamburgerMenu isOpen={isOpen} onClose={toggleMenu} />
            
        </div>
                </div>
              
      </header></div>
    
  )
}

export default Header