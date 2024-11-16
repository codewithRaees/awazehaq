import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const SocialLinksStrip = () => {
  return (
      <div className='  w-full bg-[#676838] h-14 flex justify-between px-5 sm:px-10 items-center relative'>
      <div className="left text-white justify-center items-center flex gap-3 sm:gap-6">
        <span>Follow Us:</span>
        <div className="link text-[18px]"><ul className="flex gap-4 items-center justify-center">
          <li className=" w-10 h-10 rounded-full  items-center flex justify-center border border-white"><a href="#"><FaFacebookF /></a></li>
           <li className=" w-10 h-10 rounded-full  items-center flex justify-center border border-white"><a href="#">  <FaTiktok /></a> </li>
          <li className=" w-10 h-10 rounded-full   items-center flex justify-center border border-white"> <a href="#"><TfiYoutube /></a></li>
        </ul></div>
     </div>
      <div className="right flex text-white items-center gap-10 text-[14px]">
        
              <div className="hidden sm:block ">
                  <div className="email flex  items-center gap-2"><MdEmail/><span>example@gmail.com</span></div>
              </div>
              <div className="whatsapp flex items-center  gap-2"><BsWhatsapp/><span>+92-000-0000000</span></div>
          </div>
    </div>
  )
}

export default SocialLinksStrip