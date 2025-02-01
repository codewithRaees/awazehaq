
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useState } from "react"
import Footer from "./components/Footer"


function App() {
// 'Home', 'About', 'Our Approach', 'Gallery', 'On Going Project', 'Volunteer', 'Media'
const [navLinks , setnavLinks]=useState([{ path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/ourapproach', label: 'Our Approach' },
{path: '/gallery', label: 'Gallery' },
{path: '/ongoinprojects', label: 'On Going Project' },
{path: '/volunteer', label: 'Volunteer' },
{path: '/media', label: 'Media' }])
 
  return (
    <>
        <Header navLinks={ navLinks} />
        <Outlet/>
        <Footer/>
       
                
    </>
  )
}

export default App
