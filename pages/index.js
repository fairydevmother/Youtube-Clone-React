import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header'
import SideBar from '../components/Sidebar'
import Image from 'next/image'
import data from '../data/data.json'
import { Icon } from '@iconify/react';

import rain from './img/rain.png'
export default function Index() {

  return ( 

     <div>
      <Head>
        <title>Youtube</title>
        <Link rel="icon" href="img/favicon.png" />
        <ink rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
         
	      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
	      <meta content="width=device-width, initial-scale=1, user-scalable=no" name="viewport"  />
      </Head>
     

      <body class="bg-gray-800 font-sans leading-normal tracking-normal mt-1">

        <Header />
        <SideBar/>
        
    <section className="py-4 pl-20 bg-gray-100">
    <div className="mx-auto   max-w-6xl pl-6 grid-cols-1 gap-6  md:grid-cols-3 lg:grid-cols-4">
     
    <span className="category w-auto rounded-md  mr-4  p-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      All
      </span>
      <span className="category w-auto mr-4 rounded-md p-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
     Gaming
      </span>
      <span className="category w-auto mr-4 rounded-md p-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      Programming
      </span>
     </div>

     <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     
       
       
      <article className="card rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <a href="#">
          <div className="thumbnail relative flex items-end overflow-hidden rounded-xl">
           
           <Image  src={rain}  width={500} height={650}/>
             <div className="absolute bottom-3 right-1 inline-flex items-center rounded-lg bg-gray-600 p-2 shadow-md">
              
              <span className=" text-sm text-slate-400">01:00</span>
            </div>
          </div>
  
          <div className="mt-1 p-2">
           
         
            <p className="text-lg font-semibold text-blue-500">Follow me on Twitch </p>
                <p className="mt-1 text-sm text-slate-400">Rainundertheplane</p>
  
            <div className="mt-3 flex items-end justify-between">
                <h2 className="text-slate-700">   25 Mn views * 1 Month Ago</h2>
            
              <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
               
                
              </div>
            </div>
          </div>
        </a>
      </article>
  
      
      </div>
  </section>
      </body>
    

      <style jsx>{`
        .container{
          margin-left:15rem;
        }
        .card{
          width:24rem;
        }
        .thumbnail{
          width:23rem;
          
        }
        .category{
          background-color:#f2f2f2;
          font-size:smaller;
          font-weight:400;
        }
        .category:focus{
          background-color:black;
        }
      `}</style>

    </div>
   
  )
}

