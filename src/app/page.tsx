//import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div  className="h-screen max-w-7xl mx-auto flex flex-col ">
     <Navbar />
    <div className="flex-1 relative overflow-hidden  animate-gradient-x flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-yellow-300 animate-float">
        Fake RBAC App
      </h1>
      
      <p className="text-lg md:text-2xl lg:text-4xl mb-8 text-yellow-300">
       Developed with ReactJS, Next13, Typescript y TailwindCSS.
      </p>
      <a
        href="https://github.com/DaianaArena"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold py-2 px-4  text-2xl text-yellow-300 "
      >
        
          By Daiana Arena ♥ 
          
      </a>
    </div>
    </div>
  )
}
/*

*/