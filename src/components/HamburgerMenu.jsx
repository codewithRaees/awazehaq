import ReactDOM from 'react-dom';
const HamburgerMenu = ({isOpen,onClose }) => {
 
    return ReactDOM.createPortal(
        <div className={` fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`flex flex-col justify-center items-center h-full transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                <button onClick={onClose} className="absolute top-5 right-5 hover:transition-all duration-200 hover:ease-in-out hover:bg-[#9fa05b] bg-[#c9ca71] px-4 py-2 text-white text-2xl">X</button>
                <ul className="min-w-60  flex flex-col items-center space-y-4 text-white text-xl">
         <li  className='w-full hover:bg-[#c9ca71] hover:text-white  px-3 py-2'>Home</li>
          <li className='w-full hover:bg-[#c9ca71] hover:text-white  px-3 py-2'>About</li>
          <li className='w-full hover:bg-[#c9ca71] hover:text-white  px-3 py-2'>Our Approach</li>
          <li className='w-full hover:bg-[#c9ca71] hover:text-white  px-3 py-2'>Gallery </li>
          <li className='w-full hover:bg-[#c9ca71] hover:text-white  px-3 py-2'>On Going Project </li>
          <li className='w-full hover:bg-[#c9ca71] hover:text-white  px-3 py-2'>Volunteer</li>
          <li className='w-full hover:bg-[#c9ca71] hover:text-white  px-3 py-2'>Media</li>
                </ul>
            </div>
        </div>,
        document.getElementById('hamburger-menu') // Render to the body element
    );
  
}

export default HamburgerMenu