'use client'
import Login from '@/app/components/forms/Login'
import Signup from '@/app/components/forms/Signup'
import React, { useState } from 'react'

const auth = () => {
  
const [Form, setForm] = useState("in")


  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x flex flex-col justify-center items-center">
      

    {Form == "in" && 
    <>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white animate-float">
        Welcome back!
      </h1>
      <p className="text-lg md:text-2xl lg:text-4xl mb-8 text-white">
      Sign In
      </p>
      <Login />
      <p className="text-center text-gray-500 text-xs">
      ¿You don't have an acount? 
      </p>
      <a
          
          onClick={() => setForm("up")}
          rel="noopener noreferrer"
          className="font-bold py-2 px-4  text-2xl text-yellow-300 "
        >
        Sign Up.
      </a>
    </>
    }

    {Form == "up" &&
    <>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white animate-float">
        Welcome
      </h1>
      <p className="text-lg md:text-2xl lg:text-4xl mb-8 text-white">
      Sign Up
      </p>
      <Signup />
      <p className="text-center text-gray-500 text-xs">
      ¿You already have an acount? 
      </p>
      <a
          
          onClick={() => setForm("in")}
          rel="noopener noreferrer"
          className="font-bold py-2 px-4  text-2xl text-yellow-300 "
        >
        Sign In.
      </a>
    </>
    }

      
    
    </div>
  )
}

export default auth