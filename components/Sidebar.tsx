import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react';

import shorts from './Resources/shorts.png'
import subs from './Resources/subs.png'
import music from './Resources/music.png'
import home from './Resources/home.png'
import bookshelf from './Resources/bookshelf.png'
const Sidebar = () => {
  
  return (
   <div className='h-full pl-1 pr-6 py-2 mr-4 w-56 bg-white fixed top-12 left-0 overflow-y-hidden'>
    <div className = "w-full flex flex-col p-2">
        <div className = "px-2 category rounded-xl flex items-center h-10 font-semibold">
        <Image  className='h-7 p-1 w-7 text-gray-70' src={home} width={700} height={700}  alt=""/>

            <span>Home</span>
        </div>
        <div className = "px-2 category rounded-xl flex items-center h-10 font-semibold">
        <Image  className='h-7 p-1 w-7 text-gray-70' src={shorts} width={700} height={700}  alt=""/>
          
            <span>Shorts</span>
        </div>
        <div className = "p-2 category rounded-xl flex items-center h-10 font-semibold ">
        <Image  className='h-7 p-1 w-7 text-gray-70' src={subs} width={400} height={400}alt=""/>
            <span>Subscriptions</span>
        </div>
        <div className = "p-2 category rounded-xl flex items-center h-10 text-gray-700 bg-gray-300 font-semibold">
        <Image  className='h-7 p-1 w-7 text-gray-70' src={music} width={400} height={400}  alt=""/>
       
            <span>Youtube Music</span>
        </div>
    </div>
   
    <div className = "p-2 category rounded-xl flex items-center h-10 text-gray-700 bg-gray-300 font-semibold shadow-lg hover:shadow-xl  duration-300">
        <div className = "rounded-xl flex items-center h-10 text-gray-700 bg-gray-300 font-semibold">
        <Image  className='h-7 p-1 w-7 text-gray-70' src={bookshelf} width={700} height={700}  alt=""/>
            <span>BookShelf</span>
        </div>
      
    </div>






    <style jsx>{`
       
        .category{
          
         
        }
        .category:hover{
            background-color:#f2f2f2;
        }
        .category:visited{
            background-color:black;
          
        }
      `}</style> 
    </div>


  

   

  )
}

export default Sidebar