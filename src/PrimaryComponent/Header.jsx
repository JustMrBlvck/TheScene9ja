import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GiTreeRoots } from "react-icons/gi";
import { Link } from 'react-router-dom';
import SideNav from './SideNav';

function Header() {
  let [callNav, setCallNav] = useState("-350px")

    function HeyNav() {
       if (callNav == "-350px") {
           setCallNav("0px")
           
       } else {
           setCallNav("-350px")
       }
    }   
 
  return (
    <div>
     
          <div  className='h-[150px] w-full bg-[] hidden md:hidden lg:grid lg:grid-rows-[25%,50%,25%]'>
                <div className='bg-[#000] grid grid-cols-[20%,55%,25%] boarder-b-[.3px] border-white'>
                     <div className='flex justify-center items-center'>
                          <button onClick={HeyNav} className='text-2xl text-white'><FaBarsStaggered />
                            
                               <SideNav callNav={callNav}/>
                          
                          </button>
                          <span className='text-PrimaryColor font-Custom font-medium text-[12px] ml-[30px]'>TRENDING</span>
                     </div>

                     <div className='text-[#c7c5c5] flex items-center font-Custom text-[15px]'>
                          {/* <a href="">Whew! Remy Ma Responds After Tay Roc Shared A Message About......</a> */}
                     </div>

                     <div className='text-white flex items-center justify-center gap-3'>
                           <a href=""><FaSearch /></a>
                           <a href=""><FaTiktok /></a>
                     </div>
                </div>


                <div className='bg-[#1A1B1D] grid grid-cols-[25%,50%,25%]'>
                     <div className='bg-[] flex justify-center items-center'>
                         <Link className='text-PrimaryColor text-4xl '><GiTreeRoots /></Link>
                     </div>

                     <div className='flex justify-center items-center text-PrimaryColor font-Custom font-bold text-4xl'>
                          <h1>The Scene 9ja</h1>
                     </div>

                     <div className='text-PrimaryColor flex justify-center items-center gap-3'>     
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaXTwitter /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaYoutube /></a>
                        <a href=""><FaTiktok /></a>
                     </div>
                </div>
                

                <div className='bg-[#FFFF] text-[#1A1B1D] font-Custom font-bold flex justify-center items-center border-b-[2px] shadow-lg'>
                     <ul className='flex gap-5'>
                         <li><Link to='/entertainment'>Entertainment</Link></li>
                         <li><Link to='/news'>News</Link></li>
                         <li><Link to='/politics'>Politics</Link></li>
                         <li><Link to='/sports'>Sports</Link></li>
                         <li><Link to='/technology'>Technology</Link></li>
                     </ul>
                </div>
          </div>


             {/* Mobile Header */}
        <div className='h-[70px] bg-[#000] grid grid-cols-[20%,60%,20%] border-b-[.3px] border-white lg:hidden'>
             <div className='flex justify-center items-center'>
                 <button onClick={HeyNav} className='text-2xl text-white'><FaBarsStaggered />
                 
                   <SideNav callNav={callNav}/>

                 </button>
             </div>

             <div className='flex justify-center items-center text-PrimaryColor font-Custom font-bold text-2xl'>
                 <h1>The Scene 9ja</h1>
             </div>

             <div className='text-white flex items-center justify-center gap-3'>
                <a href=""><FaYoutube /></a>
                <a href=""><FaTiktok /></a>
             </div>
        </div>

    </div>
  )
}

export default Header