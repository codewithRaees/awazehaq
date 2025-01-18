import logo from '/assets/logo.jpeg';

import React, { act, useState } from "react";
import styled, { keyframes } from "styled-components";
import HamburgerMenu from './HamburgerMenu';
import { Link, useLocation } from 'react-router-dom';

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

  

const Header = ({navLinks}) => {
// const [activeLink, setActiveLink] = useState('Home');
 
   const [isOpen, setIsOpen] = useState(false);
 const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
  };
   // Function to handle link clicks and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link.path);
  };
    return (
        <div className="w-full shadow-lg sticky top-0 z-10 bg-white">
            <header className="flex  justify-between sm:h-24 h-16 items-center px-3  ">
          <div className="logo flex items-center gap-4 pl-5">
            <img src={logo} className='h-20  w-20 hidden sm:block' />
            <span className='block text-xl leading-6 text-[#676838] '><span className='font-bold'>Awaz-e-Haq </span><br></br>Foundation</span>
          </div>
                <div className=" header-left flex justify-around items-center sm:gap-5">
                    <nav className='hidden custom-md:block'>
        <ul className="flex justify-around gap-2 text-[#333333] text-[14px] font-semibold">
                {
                 navLinks.map((link, i) => (
  <li 
    key={i} 
    onClick={() => handleLinkClick(link)} 
    className={`hover:bg-[#676838] hover:text-white rounded-full px-3 py-2 transition-all duration-300 ease-in-out`}
  >
    <Link 
      to={link.path} 
      className={`${activeLink === link.path ? 'border-b-4 border-[#676838]' : ''}`}
    >
      {link.label}
    </Link>
  </li>
))
          }
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