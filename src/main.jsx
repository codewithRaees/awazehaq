import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AboutUs from './components/AboutUs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home'
import { ErrorPage } from './components/ErrorPage'
import PhotoGallery from './components/PhotoGallery '
import LearnMore from './components/LearnMore'
import OnGoingProjects from './components/OngoingProjects'
import OurApproach from './components/OurApproach'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
     {
    path: '/',
        element: <Home />,
    
  },
      {
    path: '/about',
    element:<AboutUs/>
      }
      ,
      {
    path: '/gallery',
    element:<PhotoGallery/>
      },
      {
            path: "/ongoinprojects",
            element:< OnGoingProjects />
      },
       {
            path: "/ourapproach",
            element:< OurApproach />
      },
          {
            path: "/learnmore/:id",
            element:< LearnMore />
  }
    ]
  },
  
])
const root = createRoot(document.getElementById('root'))

root.render(
  
  <StrictMode>
    <>
      
    <RouterProvider router={router} />
    </>
    
  </StrictMode>
)
