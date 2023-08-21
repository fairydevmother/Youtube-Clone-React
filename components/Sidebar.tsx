import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react';
const Sidebar = () => {
  return (
   <div className='h-full w-56 bg-white fixed top-12 left-0 overflow-y-hidden'>
    <div className = "w-full flex flex-col p-2">
        <div className = "rounded-xl flex items-center h-10 text-gray-700 bg-gray-300 font-semibold">
            <span className="h-6 w-6 text-gray-700">  
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"/></svg>
            </span>
            <span>Home</span>
        </div>
        <div className = "flex items-center h-10 text-gray-700 font-semibold">
        
            <Icon className="h-6 w-6 text-gray-70" icon="logos:explore" />
            <span>Shorts</span>
        </div>
        <div className = "flex items-center h-10 text-gray-700  font-semibold">
            <span className="h-6 w-6 text-gray-700 user-icon" data-icon="ic:baseline-subscriptions" data-inline="false"></span>
            <span>Subscriptions</span>
        </div>
        <div className = "flex items-center h-10 text-gray-700  font-semibold">
            <span className="h-6 w-6 text-gray-700 user-icon" data-icon="ic:baseline-subscriptions" data-inline="false"></span>
            <span>Youtube Music</span>
        </div>
    </div>
   
    </div>


  

   

  )
}

export default Sidebar