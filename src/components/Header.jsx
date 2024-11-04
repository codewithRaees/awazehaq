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
  padding: 10px 20px;
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
            <header className="flex  justify-between h-24 items-center px-3  ">
        <div className="logo"><img src={logo}  className='h-20 w-20'/></div>
                <div className=" header-left flex justify-around items-center gap-5">
                    <nav className='hidden custom-md:block'>
        <ul className="flex justify-around gap-2 text-[#333333] text-[14px]">
         <li  className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2'>Home</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2'>About</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2'>Our Approach</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2'>Gallery </li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2'>On Going Project </li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2'>Volunteer</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-3 py-2'>Media</li>
        </ul>
                </nav>
                <BlinkingButton style={{ lineHeight: '23px' }} className='bg-[#676838]  font-sans rounded-full font-semibold px-4 py-3 text-white'>
       Donate Now!
            </BlinkingButton>
             <div className="relative">
            <button onClick={toggleMenu} className=" block md:hidden p-4 text-3xl  text-[#6d6d23] rounded">
                ☰
            </button>
            <HamburgerMenu isOpen={isOpen} onClose={toggleMenu} />
            
        </div>
                </div>
              
      </header></div>
    
  )
}

export default Header