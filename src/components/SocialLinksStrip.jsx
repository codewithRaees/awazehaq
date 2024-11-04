import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const SocialLinksStrip = () => {
  return (
      <div className='w-full bg-[#676838] h-12 flex justify-between px-10 items-center'>
          <div className="left text-white text-2xl flex gap-6"><FaFacebookF/><FaTiktok/><TfiYoutube/></div>
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