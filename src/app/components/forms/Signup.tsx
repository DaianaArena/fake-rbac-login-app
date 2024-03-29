import React from 'react'

const Signup = () => {
  return (
    <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             id="username"
             type="text"
             placeholder="Username"
             
             />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2"  >
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" 
      type="password" 
      placeholder="******************"
      
      />
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2"  >
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" 
      type="password" 
      placeholder="******************"
      
      />
      
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-purple-400 hover:text-purple-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  
  </div>
  )
}

export default Signup