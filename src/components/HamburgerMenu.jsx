import ReactDOM from 'react-dom';
import { ImCross } from "react-icons/im";

const HamburgerMenu = ({isOpen,onClose }) => {
 
    return ReactDOM.createPortal(
        <div className={` fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`flex flex-col justify-center items-center h-full transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                <button onClick={onClose} className="absolute top-7 right-3 hover:transition-all duration-200 hover:ease-in-out  px-4 py-2 text-white text-2xl"><ImCross/></button>
                <ul className="min-w-60  flex flex-col items-center space-y-2 text-white text-[16px]">
         <li  className='w-full hover:bg-[#a0a157] hover:text-white  px-3 py-1 cursor-pointer'>Home</li>
          <li className='w-full hover:bg-[#a0a157] hover:text-white  px-3 py-1 cursor-pointer'>About</li>
          <li className='w-full hover:bg-[#a0a157] hover:text-white  px-3 py-1 cursor-pointer'>Our Approach</li>
          <li className='w-full hover:bg-[#a0a157] hover:text-white  px-3 py-1 cursor-pointer'>Gallery </li>
          <li className='w-full hover:bg-[#a0a157] hover:text-white  px-3 py-1 cursor-pointer'>On Going Project </li>
          <li className='w-full hover:bg-[#a0a157] hover:text-white  px-3 py-1 cursor-pointer'>Volunteer</li>
          <li className='w-full hover:bg-[#a0a157] hover:text-white  px-3 py-1 cursor-pointer'>Media</li>
                </ul>
            </div>
        </div>,
        document.getElementById('hamburger-menu') // Render to the body element
    );
  
}

export default HamburgerMenu