import React from 'react'
import { Link } from 'react-router-dom'

function GeneralFifthComponent() {
     const technology = {
        imgSrc: "https://www.channelstv.com/wp-content/uploads/2021/05/Amazon-HQ-2.jpg",
        headLine:"Amazon Invests Another $4bn In AI Firm Anthropic"
     }

     const technologyArray = [
        {
            id:0,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/games-nintendo__FilesJapanGamesBusinessNintendo-1.jpg",
            headLine:"Nintendo Courts Non-Gamers In ‘About-Turn’ Strategy"
        },
        {
            id:1,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241119__36MU2P6__v1__Preview__FilesSkoreaTransportAutomobile.jpg",
            headLine:"Three Auto Workers Dead After Incident At Hyundai Car Factory"
        },
        {
            id:2,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/10/large-Google-logo-is-seen-at-Googles-Bay-View-campus__FilesUsTechGoogleEarnings.jpg",
            headLine:"US Govt Calls For Breakup Of Google And Chrome"
        },
        {
            id:3,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/gaming.jpg",
            headLine:"Exploring Entertainment Trends In 2024: From Digital Innovations Rise Of Immersive Gaming Experiences"
        }
     ]

    // const technologyAdvertDiv = [
    //     {

    //     }
    // ]
  return (
    <div className='flex flex-col items-center dark:text-white'>
        
            <div className='w-[95%] lg:w-[83%] mt-20'>
                        <h1 className='font-Custom text-PrimaryColor text-4xl font-bold'>Technology</h1>

                <div className='min-h-[400px] gap-4 mt-3 grid border-t-[.2px] border-[#8080802f] md:grid md:grid-cols-[73%,27%]'>  
                         <div className='space-y-4 bg-[] mt-8'>
                            {technologyArray.map((index)=>(
                                  <div key={index.id} className='flex items-center border-b-[3px] border-PrimaryColor space-x-5'>
                                      <img src={index.imgSrc} className='h-[170px] w-[170px] object-cover'/>

                                      <Link className='font-Custom font-bold hover:text-PrimaryColor text-[20px]'>{index.headLine}</Link>
                                  </div>
                              ))}  
                         </div>

                                       {/* Sports Advert SideDiv */}
                        <div className='mt-8 lg:sticky lg:top-0'>                                
                            
                   {/* Advert SideDiv 1 */} <div className=' hidden   md:block lg:w-[260px] '><a href=""><img src={"https://sunrise.ng/wp-content/uploads/2024/04/RSA-Mortgage-digital-banner-300x250-1.png"} /></a></div>

                    {/* Advert SideDiv 2 */}<div className='h-[200px] hidden md:block lg:w-[260px] mt-[50px]'><a href=""><img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2021/08/ezgif.com-gif-maker-1.gif"}/></a></div>
                                                      
                    {/* Advert SideDiv 3*/}<div className='h-[200px] hidden md:block lg:w-[260px] lg:hidden '><a href=""><img src={"https://sunrise.ng/wp-content/uploads/2024/07/300x250-Ready-for-the-Future.jpg"} /></a></div>

                    {/* Advert SideDiv 4*/}  <div className='h-[200px] hidden md:block lg:w-[260px]  lg:mt-[50px]'><a href=""><img src={"https://dsp-media.eskimi.com/upload/143359_2630718223_8099b1eaab7f642f8dc623bf6974a269.gif"} /></a></div>

                        </div>   
                  </div>


            </div>

    </div>
  )
}

export default GeneralFifthComponent