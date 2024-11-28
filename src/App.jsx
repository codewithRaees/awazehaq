import { useState } from "react"
import Header from "./components/Header"
import SocialLinksStrip from "./components/SocialLinksStrip"
import CarousalSlider from "./components/CarousalSlider"
import WhoAndOurMission from "./components/WhoAndOurMission"

import Card from "./Card"
// import WhoAndOurMission from "./components/WhoAndOurMission"
import Supporters from "./components/Supporters"


function App() {
const [navLinks , setnavLinks]=useState(['Home', 'About', 'Our Approach', 'Gallery', 'On Going Project', 'Volunteer', 'Media'])
 

  return (
    <>
      <SocialLinksStrip/>
     
         <Header navLinks={ navLinks} />
      {/* <Slider /> */}
     
        <CarousalSlider />
        <Card />
       <WhoAndOurMission/>
      
      
        <Supporters />
     
      
      
    </>
  )
}

export default App
