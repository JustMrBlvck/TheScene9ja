import React from 'react'
import { Link } from 'react-router-dom'

function SportsSecondComponent() {
 
    const sportsS = [
        {   
            id:0,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Terry-Griffiths.jpg",
            topic:"Former World Snooker Champion Terry Griffiths Dies Aged 77"
        },
        {
            id:1,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Arsenal-Man-Utd.jpg",
            topic:"Arsenal To Host Man Utd In FA Cup Blockbuster"
        },
        {
            id:2,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Imo-Grasshoppers-COAS-Babes-Make-Handball-League-History.jpg",
            topic:"Imo Grasshoppers, COAS Babes Make Handball League History"
        },
        {
            id:3,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/DUBOIS.jpg",
            topic:"Imo Grasshoppers, COAS Babes Make Handball League History"
        }
    ]

  return (
    <div className=' flex items-center flex-col dark:text-white'>

         <div className='w-[90%] lg:w-9/12 mt-[50px] md:mt-8'>
          
             <div className='grid grid-cols-1 md:grid md:grid-cols-2 md:border-t-[.2px] gap-5 font-Custom font-bold border-b-[.2px] md:border-[#8080802f] lg:grid lg:grid-cols-4'>
                {sportsS.map((sportsS, index)=>(
                    <Link to={`/display/${sportsS.id}`}>
                        <div key={index} className='flex items-center flex-col space-y-4'>
                            <img src={sportsS.imgSrc}/>
                            
                            <p className='flex justify-start items-start text-[20px]'>{sportsS.topic}</p> 
                        </div>
                    </Link>
                   
                ))}
             </div>

         </div>

    </div>
  )
}

export default SportsSecondComponent