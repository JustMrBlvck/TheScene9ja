import React from 'react'
import { Link } from 'react-router-dom'

function SportsFirstComponent() {
    
    const sportsHeading= {
        photo:'https://www.channelstv.com/wp-content/uploads/2024/12/Neuer.jpg',
        topic:'Bayern’s Manuel Neuer Gets First Red Card In 866-Game Career',
     }

     const sportsHeadingLeft = [
        {
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Chelsea.jpg",
            topic:"Maresca Says High-Flying Chelsea Can ‘Dominate’ English Football"
        },
        {
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/03/liverpool-brighton-.jpg",
            topic:"Slot Jokes Salah Knows Man City’s Fate After ‘Last Game’ Comment"
        },
        {
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/man-city.jpg",
            topic:"Guardiola Says Man City Can Hit Top Form Again Despite Slump"
        },
        {
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/Man-Utd-1.jpg",
            topic:"Man Utd Not Yet Out Of Premier League Title Race, Says Arteta"
        },
        {
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Terry-Griffiths.jpg",
            topic:"Former World Snooker Champion Terry Griffiths Dies Aged 77"
        },
     ]

  return (
    <div className='flex flex-col items-center dark:text-white'>
          
           <div className='w-[90%] lg:w-9/12 mt-14 dark:text-white'>

                 <div className='grid grid-cols-1 lg:overflow-hidden md:grid-cols-1 lg:space-x-10 border-[#8080802f] border-t-[.2px] border-b-[.2px] lg:grid-cols-[65%,35%]'>
                       <Link className='mt-5 relative'>
                               <Link><img src={sportsHeading.photo} className='w-full lg:h-[400px]'/></Link>

                               <Link className='h-[100px] absolute w-full top-[115px] md:top-[270px] lg:top-[300px] md:bg-[#00000072] p-3 text-white font-Custom font-bold text-[1.3rem] md:text-[1.7rem]'>{sportsHeading.topic}</Link>
                       </Link>

                       <div className='h-[400px]  mt-9 overflow-scroll overflow-x-hidden md:hidden lg:block space-y-4 lg:mt-5'>
                           {sportsHeadingLeft.map((sportsHeadingLeft, index)=>(
                              <div key={index} className='flex items-center space-x-4 mr-3'>
                                    <Link className="text-[20px] font-Custom font-medium  lg:text-[17px] hover:text-PrimaryColor">{sportsHeadingLeft.topic}</Link>

                                    <Link><img src={sportsHeadingLeft.imgSrc} className="w-25 h-20  rounded-lg  object-cover" /></Link>
                              </div>
                           ))}
                       </div>
                 </div>

           </div>

    </div>
  )
}

export default SportsFirstComponent