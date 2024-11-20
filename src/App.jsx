import { useState } from "react"
import Header from "./components/Header"
import SocialLinksStrip from "./components/SocialLinksStrip"
import CarousalSlider from "./components/CarousalSlider"
import Card from "./Card"
import TestCard from "./components/TestCard"


function App() {
const [navLinks , setnavLinks]=useState(['Home', 'About', 'Our Approach', 'Gallery', 'On Going Project', 'Volunteer', 'Media'])
 

  return (
    <>
      <SocialLinksStrip/>
     
         <Header navLinks={ navLinks} />
      {/* <Slider /> */}
      <CarousalSlider />
      <Card/>
      
    </>
  )
}

export default App
