import  logo  from '../assets/logo.jpeg';
const Header = () => {
    return (
        <div className="w-full shadow-lg">
            <header className="flex  justify-between h-24 items-center px-7 ">
        <div className="logo"><img src={logo}  className='h-20 w-20'/></div>
                <div className="header-left flex justify-around items-center gap-8">
                    <nav>
        <ul className="flex justify-around gap-6 text-[#333333] text-[14px]">
         <li  className='hover:bg-[#676838] hover:text-white rounded-full px-4 py-2'>Home</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-4 py-2'>About</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-4 py-2'>Our Approach</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-4 py-2'>Gallery </li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-4 py-2'>On Going Project </li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-4 py-2'>Volunteer</li>
          <li className='hover:bg-[#676838] hover:text-white rounded-full px-4 py-2'>Media</li>
        </ul>
                </nav>
                <button style={{ lineHeight: '23px' }} className='bg-[#676838]  font-sans rounded-full font-semibold px-4 py-3 text-white'>Donate Now!</button>
      </div>
      </header></div>
    
  )
}

export default Header