import React from 'react'
import { Link } from 'react-router-dom'


function SportsThirdComponent() {

   const  sportsFootball = [
    {
        imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/12/Liverpool.jpg",
        heading:"No Reprieve For Guardiola As Liverpool Compound City’s Woes"
    },
    {
        imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/12/Chelsea.jpg",
        heading:"Chelsea Extend Unbeaten Run With 3-0 Routing Of Aston Villa"
    },
   ]

   const sportsFootballS = [
    {
        imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/12/Harry-Kane-Injury.jpg",
        heading:"Harry Kane Sidelined With Hamstring Tear"
    },
    {
        imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/12/Vieira.jpg",
        heading:"Vieira Gets First Win With Genoa At 10-Man Udinese"
    },
    {
        imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/10/Super-Eagles.jpg",
        heading:"Super Eagles’ AFCON Qualification: A Mix Of Triumph And Turmoil"
    },
    {
        imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/12/Amorin-1.jpg",
        heading:"Man Utd Thrash Everton To Give Amorim Perfect home Premier League Start"
    },
   ]

  return (
    <div className='bg-white flex items-center flex-col dark:text-white'>
         
         <div className='w-[90%] lg:w-9/12 mt-14 md:mt-14 lg:mt-24'>

             <h1 className='font-Custom text-PrimaryColor text-4xl font-medium'>Football</h1>

             <div className='min-h-[300px] grid grid-cols-1 mt-6 md:grid md:grid-cols-2 md:border-t-[.2px] gap-5 font-Custom font-bold  md:border-[#8080802f] lg:grid lg:grid-cols-2'>
                {sportsFootball.map((sportsFootball, index)=>(
                    <div key={index} className='flex w-full items-center flex-col space-y-4 lg:mt-5'>
                        <div><img src={sportsFootball.imgSrc}/></div>
                        
                        <div className=' w-full lg:text-[25px]'><Link className='text-start'>{sportsFootball.heading}</Link></div> 
                    </div>
                ))}
             </div>

         </div>


         <div className='w-[90%] lg:w-9/12 mt-4'>
                
            <div className='min-h-[300px] grid grid-cols-1 mt-6 md:grid md:grid-cols-2 md:border-t-[.2px] gap-5 font-Custom font-bold md:border-[#8080802f] lg:grid lg:grid-cols-4'>
                    {sportsFootballS.map((sportsFootballS, index)=>(
                        <div key={index} className='flex w-full items-center flex-col space-y-4 lg:mt-5'>
                            <div><img src={sportsFootballS.imgSrc}/></div>
                            
                            <div className=' w-full lg:text-[17px]'><Link>{sportsFootballS.heading}</Link></div> 
                        </div>
                    ))}
            </div>

         </div>

    </div>
  )
}

export default SportsThirdComponent