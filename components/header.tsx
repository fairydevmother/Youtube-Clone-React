import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react';
const Header = () => {
  return (

 	<header className = "flex justify-between p-1 h-12 overflow-hidden bg-white">
		<div className = "flex">
			<div className = "flex justify-center  items-center h-8 w-12">
				<span className="navbar-burger text-gray-600"  data-inline="false">
					<svg className="block pt-2 h-6 pl-2  fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg></span>
			</div>
			<div className = "flex">	
				
				<Icon className='pt-2 w-28 h-8 pl-4' icon="logos:youtube" />
				<span className = "country-code text-gray-600 text-xs">TR</span>
			</div>
		</div>
		<div className="w-1/3 p-1  relative mb-4 flex  flex-wrap items-stretch">
		<input style={{borderColor:'gray' }}
      type="search"
      className="rounded-l-[19px] border-2 h-10 relative border-gray-900 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon3" />
		  <button style={{backgroundColor:"#F2F2F2",borderColor:'#9BA4B5' }}
      className="rounded-r-[19px] rounded-r-3xl relative rounded-r border-2 px-6 py-2 h-10 text-xs font-medium uppercase text-gray-900 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      type="button"
      id="button-addon3"
      data-te-ripple-init>
      <svg className="w-4 h-4 mr-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </button>
		  
	
      </div>
		<div className = "flex w-56 items-center pr-4">
			<button className= "user-btn">
			<i className='bx bxs-video-plus' ></i>
				<span className="h-6 w-6 text-gray-700" data-icon="bx:bxs-video-plus" data-inline="false"></span>
			</button>
			<button className = "user-btn">
				<span className="h-6 w-6 text-gray-700" data-icon="gg:menu-grid-r" data-inline="false"></span>
			</button>
			<button className = "user-btn">
				<span className="h-6 w-6 text-gray-700" data-icon="fa-solid:bell" data-inline="false"></span>
			</button>
			<button>
				<span className="h-6 w-6 text-gray-700 user" data-icon="carbon:user-avatar-filled" data-inline="false">

				</span>
			</button>
		</div>
	</header>


  )
}

export default Header