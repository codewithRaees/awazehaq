import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
      <div className='  w-full bg-[#676838] h-14 flex justify-between px-5 sm:px-10 items-center relative'>
    
      <div className="right flex text-white items-center gap-10 text-[14px]">
        
              <div className="hidden sm:block ">
                  <div className="email flex  items-center gap-2"><span>Copyright ©2025. All Rights Reserved</span></div>
              </div>
            
      </div>
        <div className="left text-white justify-center items-center flex gap-3 sm:gap-6">
        <span>Connect With Us:</span>
        <div className="link text-[18px]"><ul className="flex gap-4 items-center justify-center">
          <li className=" w-10 h-10 rounded-full  items-center flex justify-center border border-white"><a href="#"><FaFacebookF /></a></li>
           <li className=" w-10 h-10 rounded-full  items-center flex justify-center border border-white"><a href="#">  <FaTiktok /></a> </li>
          <li className=" w-10 h-10 rounded-full   items-center flex justify-center border border-white"> <a href="#"><TfiYoutube /></a></li>
        </ul></div>
     </div>
    </div>
  )
}

export default Footer