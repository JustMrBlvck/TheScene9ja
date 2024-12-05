import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
           <div className='h-[70px] bg-[#070711] hidden mt-5 lg:grid grid-cols-[30%,70%]'>
                <p className='flex items-center justify-center font-Custom font-medium text-[#939393]'>© 2024 The Scene 9ja</p>

                <div className='font-Custom font-bold flex justify-center items-center'>
                     <ul className='flex gap-3 text-[#939393]'>
                           <li><Link to='/entertainment'>Entertainment</Link></li>
                           <li><Link to='/news'>News</Link></li>
                           <li><Link to='/politics'>Politics</Link></li>
                           <li><Link to='/sports'>Sports</Link></li>
                           <li><Link to='/technology'>Technology</Link></li>
                           <li><Link >Privacy Policy</Link></li>
                           <li><Link >Terms & Condition</Link></li>
                     </ul>
                </div>
           </div>

           <div className='h-[90px] bg-[#1A1B1D] text-white font-Custom font-medium  flex justify-evenly items-center lg:hidden'>
                <Link >Privacy Policy</Link>
                <Link >Terms & Condition</Link>
           </div>
           <div className='h-[50px] bg-[#000000] flex justify-center items-center font-Custom font-medium text-white lg:hidden'><p>© 2024 The Scene 9ja</p></div>
    </div>
  )
}

export default Footer