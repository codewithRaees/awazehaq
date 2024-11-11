import { useState } from "react"
import Header from "./components/Header"
import Slider from "./components/Slider"
import SocialLinksStrip from "./components/SocialLinksStrip"


function App() {
const [navLinks , setnavLinks]=useState(['Home', 'About', 'Our Approach', 'Gallery', 'On Going Project', 'Volunteer', 'Media'])
 

  return (
    <>
      <SocialLinksStrip/>
     
         <Header navLinks={ navLinks} />
      <Slider />
  
    </>
  )
}

export default App
