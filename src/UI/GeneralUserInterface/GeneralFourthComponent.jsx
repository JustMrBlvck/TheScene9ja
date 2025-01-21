import React from 'react'
import { Link } from 'react-router-dom'

function GeneralFourthComponent() {
    const indexEntertainment = {
        topicSubHeading:"Glastonbury 2025 Ticket Sells Out In 35 Minutes",
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/Burna-Boy-performs-on-the-pyramid.jpg",
        topic:"Pop sensation Dua Lipa and indie-rockers Coldplay were among the headliners in 2024, and talks are reportedly already under way to secure acts for next year's festival, which will run from June 25 to 29.",
        poster:"Nebianet Usaini"
    }

    const entertainmentLeftDiv = {
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241121__36MU29V__v1__Preview__FilesFranceMediaInternetCinemaBook.jpg",
        topic:"French YouTuber Takes On Manga After Conquering Everest",
        headLine:"The 22-year-old content creator started posting video game footage in his mid-teens, and his livewire energy has catapulted him to superstardom among young French people, with some 20 million subscribers.",
        poster:"Khadijat Lawal"
    } 

  return (
    <div className='flex flex-col items-center dark:text-white'>

            <div className='w-[95%] lg:w-[83%] mt-16'>
                  <h1 className='font-Custom text-PrimaryColor text-3xl font-bold'>Entertainment</h1>

               <div className='min-h-[650px] mt-2 border-t-[.2px] border-[#8080802f] gap-7 grid grid-cols-1 lg:grid lg:grid-cols-[75%,25%]'>
                     <div className='bg-[#EAF6FC] lg:flex lg:justify-center mt-5 border-t-[3px] border-PrimaryColor'>
                         <div>      
                                <div className='flex items-center space-x-1 ml-3 lg:ml-5 mt-3'>
                                    <div className='h-[8px] w-[8px] bg-[#791212]'></div><Link className='text-[16px] font-Custom'>ENTERTAINMENT</Link>  
                                </div>

                                <Link><img src={indexEntertainment.imgSrc} className='md:w-full mt-5 lg:ml-7'/></Link>

                                <Link className='font-Custom font-bold text-2xl md:text-3xl text-[#1B1C1D] hover:text-PrimaryColor'><p className='md:ml-3 lg:ml-7 mt-4'>{indexEntertainment.topicSubHeading}</p></Link>

                                <p className='font-Custom font-medium md:ml-3 mt-2 md:w-[450px] lg:w-[380px]  lg:ml-7  text-PrimaryColor'>{indexEntertainment.topic}</p>

                                <div className='flex items-center space-x-1  ml-5 mt-3 font-Custom font-bold text-[#004081]'>
                                    <div className='h-[8px] w-[8px] bg-[#791212]'></div><p className='text-[16px] font-Custom'>{indexEntertainment.poster}</p>  
                                </div>
                          </div>
                     </div>


                     <div className='mt-5 border-t-[3px] border-PrimaryColor'>
                         <div className='bg-[#EAF6FC]'>
                             <Link>
                                    <img src={entertainmentLeftDiv.imgSrc} className='w-full'/>
                             </Link>

                             <div className='p-3'>
                                 <Link className='font-Custom font-bold text-[20px] text-[#1B1C1D] hover:text-PrimaryColor'>{entertainmentLeftDiv.topic}</Link>
                             </div>

                             <p className='mt-2 p-1 w-5/3 text-[20px] md:text-[20px] lg:text-[16px] font-Custom'>
                                  {entertainmentLeftDiv.headLine}
                             </p>

                                  
                             <div className='flex items-center p-3 mt-8 space-x-2 font-Custom font-medium text-[#004081]'>
                                 <div className='h-[10px] w-[10px] bg-[#791212]'></div><Link>{entertainmentLeftDiv.poster}</Link>  
                             </div>  

                            
                             <div><a href=""><img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2020/04/Explore-Digital-Bill-1.jpg"} /></a></div>
                         </div>
                     </div>
               </div>
            </div>

    </div>
  )
}

export default GeneralFourthComponent