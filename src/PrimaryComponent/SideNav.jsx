import React from 'react'
import { Link } from 'react-router-dom'

function SideNav(props) {
  return (
    <div>
            
            <div className='min-h-[100vh] w-[390px] bg-[#000000f8] md:w-[500px] lg:w-[350px] absolute top-0 z-20' style={{left:props.callNav, transition:'1s'}}>  
                 <Link to='/' className='font-Custom text-PrimaryColor text-4xl font-bold mt-5'>The Scene 9ja</Link>

            <div className='flex justify-center flex-col items-center  space-y-10'>
                <div className='flex font-Custom font-bold mt-10'>
                     <ul className='flex-col'>
                        <li><Link to='/news'>News</Link></li>
                     </ul>
                 </div>

                 <div className='flex font-Custom font-bold'>
                     <ul className='flex-col'>
                        <li><Link to='/sports'>Sports</Link></li>
                     </ul>
                 </div>

                 <div className='flex font-Custom font-bold'>
                     <ul className='flex-col'>
                        <li><Link to='/politics'>Politics</Link></li>
                     </ul>
                 </div>

                 <div className='flex font-Custom font-bold'>
                     <ul className='flex-col'>
                        <li><Link to='/technology'>Technology</Link></li>
                     </ul>
                 </div>

                 
                 <div className='flex font-Custom font-bold'>
                     <ul className='flex-col'>
                        <li><Link to='/entertainment'>Entertainment</Link></li>
                     </ul>
                 </div>
             </div>  
                 
            </div>

    </div>
  )
}

export default SideNav