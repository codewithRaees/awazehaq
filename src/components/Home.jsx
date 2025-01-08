
import { useState } from "react"
import Header from "./Header"
import SocialLinksStrip from './SocialLinksStrip'
import CarousalSlider from './CarousalSlider'
import Card from '../Card'
import WhoAndOurMission from "./WhoAndOurMission"
import Supporters  from "./Supporters"
import Footer from './Footer'
export const Home = () => {
    
  return (
      <>
       <SocialLinksStrip />
     
      
      {/* <Slider /> */}
     
        <CarousalSlider />
        <Card />
       <WhoAndOurMission/>
      
      
        <Supporters />
     
        <Footer/>
      </>
  )
}
