import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Checkbox, Form, Input } from 'antd';
import { Button, Popover } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header'
import SideBar from '../components/Sidebar'
import Image from 'next/image'
import data from '../data/data.json'
import { Icon } from '@iconify/react';
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
     
   <body className='m-0 p-0 overflow-hidden bg-white'>   
  <div className="h-screen w-full bg-white relative flex overflow-hidden">

   
   <div className="w-full h-full flex flex-col justify-between">
  
    <Header />
  <SideBar/>


  
    
    
    </div>
    </div> 

    </body> 
    </div>
   
  )
}

