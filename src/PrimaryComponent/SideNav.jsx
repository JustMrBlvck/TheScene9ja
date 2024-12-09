import React from 'react'
import { Link } from 'react-router-dom'

function SideNav(props) {
  return (
    <div>
            
            <div className='min-h-[100vh] bg-[#000000] w-[350px] absolute top-0 z-20' style={{left:props.callNav, transition:'1s'}}>  
                 <Link to='/' className='font-Custom text-PrimaryColor text-4xl font-bold mt-5'>The Scene 9ja</Link>

                 <div className='flex font-Custom font-bold'>
                    <ul className='flex-col'>
                         <li><Link to='/entertainment'>Entertainment</Link></li>
                         <li><Link to='/news'>News</Link></li>
                         <li><Link to='/politics'>Politics</Link></li>
                         <li><Link to='/sports'>Sports</Link></li>
                         <li><Link to='/technology'>Technology</Link></li>
                     </ul>
                 </div>
            </div>

    </div>
  )
}

export default SideNav