import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="mt-2 p-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        RBAC

        <a 
        href="/pages/auth"
        rel="noopener noreferrer"
        className="font-bold py-2 px-4  text-white hover:text-yellow-400 "
        >
            Login/Sign Up
        </a>
    </div>

  )
}

export default Navbar