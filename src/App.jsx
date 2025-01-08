
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useState } from "react"


function App() {

const [navLinks , setnavLinks]=useState(['Home', 'About', 'Our Approach', 'Gallery', 'On Going Project', 'Volunteer', 'Media'])
 
  return (
    <>
        <Header navLinks={ navLinks} />
    <Outlet/>
     
      
    </>
  )
}

export default App
