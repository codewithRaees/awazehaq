import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImage from '/assets/err.jpg'; 
export const ErrorPage = () => {
  const error = useRouteError()
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <img src={errorImage} alt="Error" className="w-1/3 mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mb-6">
        We're sorry for the inconvenience. Please <strong>visit again soon!</strong>
      </p>
      <Link
        to="/"
        className="bg-[#676838] text-white px-6 py-3 rounded-lg shadow hover:bg-[#54532c] transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  )
}
