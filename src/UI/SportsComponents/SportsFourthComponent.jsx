import React from 'react'
import { Link } from 'react-router-dom'

function SportsFourthComponent() {

    const  sportsTennis = [
        {
            imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/04/swiatek-Stuttgart-open.jpg",
            heading:"World Number 2 Swiatek Suspended For One Month Over Doping"
        },
        {
            imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/murray-djokovic.jpg",
            heading:"World Number 2 Swiatek Suspended For One Month Over Doping"
        },
       ]

       const sportsTennisS = [
        {
            imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/davis-cup.jpg",
            heading:"‘Not Here For Retiring’: Nadal Insists Focus On Davis Cup"
        },
        {
            imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/coco-gauff.jpg",
            heading:"Gauff Fights Back To Win WTA Title"
        },
        {
            imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/Nadal-1.jpg",
            heading:"Spain’s Nadal Loses In Davis Cup Quarter-Finals Singles Opener"
        },
        {
            imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/05/Djokovic-1.jpg",
            heading:"Injured Djokovic Gives Up On ATP Finals Title Defence"
        },
       ]
    

  return (
    <div className='flex items-center flex-col dark:text-white'>
     
           <div className='w-[90%] lg:w-9/12 mt-14 md:mt-14 lg:mt-20'>
           
             <h1 className='font-Custom text-PrimaryColor text-4xl font-medium'>Tennis</h1>

                <div className='min-h-[300px] grid grid-cols-1 mt-6 md:grid md:grid-cols-2 md:border-t-[.2px] gap-5 font-Custom font-bold  md:border-[#8080802f] lg:grid lg:grid-cols-2'>
                    {sportsTennis.map((sportsTennis, index)=>(
                        <div key={index} className='flex w-full items-center flex-col space-y-4 lg:mt-5'>
                            <div><img src={sportsTennis.imgSrc}/></div>
                            
                            <div className=' w-full lg:text-[25px]'><Link className='text-start'>{sportsTennis.heading}</Link></div> 
                        </div>
                    ))}
                </div>

           </div>


           <div className='w-[90%] lg:w-9/12 mt-4'>
                
                <div className='min-h-[300px] grid grid-cols-1 mt-6 md:grid md:grid-cols-2 md:border-t-[.2px] gap-5 font-Custom font-bold md:border-[#8080802f] lg:grid lg:grid-cols-4'>
                        {sportsTennisS.map((sportsTennisS, index)=>(
                            <div key={index} className='flex w-full items-center flex-col space-y-4 lg:mt-5'>
                                <div><img src={sportsTennisS.imgSrc}/></div>
                                
                                <div className=' w-full lg:text-[17px]'><Link>{sportsTennisS.heading}</Link></div> 
                            </div>
                        ))}
                </div>
    
             </div>

    </div>
  )
}

export default SportsFourthComponent