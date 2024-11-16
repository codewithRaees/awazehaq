import { useState } from "react"
import Header from "./components/Header"
import Slider from "./components/Slider"
import SocialLinksStrip from "./components/SocialLinksStrip"
import Test from "./components/Test"


function App() {
const [navLinks , setnavLinks]=useState(['Home', 'About', 'Our Approach', 'Gallery', 'On Going Project', 'Volunteer', 'Media'])
 

  return (
    <>
      <SocialLinksStrip/>
     
         <Header navLinks={ navLinks} />
      {/* <Slider /> */}
  <Test />
    </>
  )
}

export default App
