import SocialLinksStrip from './SocialLinksStrip'
import CarousalSlider from './CarousalSlider'
import Card from '../Card'
import WhoAndOurMission from "./WhoAndOurMission"
import Supporters  from "./Supporters"

export const Home = () => {
    
  return (
      <>
       <SocialLinksStrip />
     
      
      {/* <Slider /> */}
     
        <CarousalSlider />
        <Card />
       <WhoAndOurMission/>
      
      
        <Supporters />
     
     
      </>
  )
}
