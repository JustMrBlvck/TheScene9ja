import React from 'react'
import { Link } from 'react-router-dom'

function GeneralThirdComponent() {
    
  const Sports = {
    topicSubHeading: "Liverpool Beat Real Madrid To Go Top Of Champions League Table",
    imgSrc: 'https://www.channelstv.com/wp-content/uploads/2024/11/Liverpool-1.jpg',
    topicHeadline:"Second-half goals from Alexis Mac Allister and Cody Gakpo were enough to give Arne Slot's team victory.",
    poster:"Donatus Anichukwueze"
  }



  const SportsS = {
    imgSrc: 'https://www.channelstv.com/wp-content/uploads/2022/12/FIFA-chief-Gianni-Infantino-2.jpg',
    headline: "FIFA’s 2022 World Cup Legacy Fund To Donate Money To WHO, WTO And UNHCR",
    miniHeadline: "In its 2022 annual financial report, FIFA announced a gross profit of nearly $5.8 billion from the tournament in Qatar that year.",
    poster: "Donatus Anichukwueze"
  }



  const sportsHeading = [
    {
      heading:"Formal Inter Millian Star, Fredy Guarin Reveals He Was Drinking Up to 70 Beers A Night During His Darkest Period Of Career",
      imgSrc:"https://i.dailymail.co.uk/1s/2024/11/22/08/92364581-14113711-image-a-38_1732265865126.jpg"
    },
    {
      heading:"EPL: I’m Not Proud Of My behaviour In Man City Dressing Room – Guardiola",
      imgSrc:"https://i0.wp.com/sunrise.ng/wp-content/uploads/2020/09/Guardiola.jpg?resize=750%2C375&ssl=1",
    },
    {
      heading:"NBA Nike Extend Partenership Deal For 12 Year",
      imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/10/NBA.jpg",
    }
  ]

  return (
    <div className='bg-[white] flex flex-col items-center'>
        
            <div className='w-[95%] mt-14 lg:w-9/12'>
                <h1 className='font-Custom text-PrimaryColor text-4xl font-bold'>Sports</h1>

                <div className='min-h-[500px] w-[100%] md:w-[100%] mt-2 border-t-[.2px] border-[#8080802f] gap-7 grid grid-cols-1 lg:grid lg:grid-cols-[75%,25%]'>
                      <div className='bg-[#EAF6FC] flex justify-center mt-5 border-t-[3px] border-PrimaryColor'>
                            <div className=''>      
                                  <div className='flex items-center space-x-1 md:ml-0 lg:ml-5 mt-3'>
                                      <div className='h-[8px] w-[8px] bg-[#791212]'></div><Link className='text-[16px] font-Custom'>SPORTS</Link>  
                                  </div>

                                  <Link><img src={Sports.imgSrc} className='w-[98%] md:w-[98%]  md:ml-0 mt-5 h-[300px] lg:w-[80%] lg:ml-7'/></Link>

                                  <Link className='font-Custom font-bold md:text-2xl lg:text-3xl text-[#1B1C1D] hover:text-PrimaryColor'><p className=' md:ml-0 lg:ml-7 mt-4 '>{Sports.topicSubHeading}</p></Link>

                                  <p className='font-Custom font-medium ml-7 md:ml-0 lg:ml-7 mt-2 w-[380px] hidden md:block lg:block text-PrimaryColor'>{Sports.topicHeadline}</p>

                                  <div className='flex items-center space-x-1 md:ml-0 lg:ml-5 mt-3 font-Custom font-bold text-[#004081]'>
                                     <div className='h-[8px] w-[8px] bg-[#791212]'></div><p className='text-[16px] font-Custom'>{Sports.poster}</p>  
                                  </div>
                            </div>
                       </div>


                     <div className='mt-5 border-t-[3px] border-PrimaryColor'>
                         <div className='bg-[#EAF6FC]'>
                              <Link>  <img src={SportsS.imgSrc} className='md:w-[100%]'/> </Link>
                              
                              <div className='p-3'>        
                                  <Link>
                                        <p className='font-Custom font-bold md:text-[25px] lg:text-[20px] text-[#1B1C1D] hover:text-PrimaryColor'>{SportsS.headline}</p>
                                  </Link>

                                  <p className='mt-2 w-5/3 md:text-[22px] lg:text-[16px] font-Custom'>
                                       {SportsS.miniHeadline}
                                  </p>
                                    
                                  <div className='flex items-center mt-8 space-x-2 font-Custom font-medium text-[#004081]'>
                                      <div className='h-[10px] w-[10px] bg-[#791212]'></div><Link>{SportsS.poster}</Link>  
                                  </div>
                              
                              </div>
                         </div>
                     </div>     
                </div>   


                  <div className='min-h-[400px]  gap-4  mt-20 grid grid-cols-1 md:grid md:grid-cols-[73%,27%]'>  
                         <div className='space-y-4  bg-[#EAF6FC]'>
                            {sportsHeading.map((sportsHeadingS, index)=>(
                                  <div key={index} className='space-y-10 items-center flex flex-col md:flex md:items-center md:flex-row lg:flex lg:items-center lg:flex-row border-b-[3px] border-PrimaryColor md:space-x-5'>
                                      <img src={sportsHeadingS.imgSrc} className='md:h-[170px] md:w-[170px] bg-[green]'/>

                                      <Link className='font-Custom font-bold hover:text-PrimaryColor md:text-[18px] lg:text-[20px]'>{sportsHeadingS.heading}</Link>
                                  </div>
                              ))}  
                         </div>

                                       {/* Sports Advert SideDiv */}
                        <div>
                                          {/* Advert SideDiv 1 */}
                             <div className='h-[200px] hidden  md:flex justify-center'><a href=""><img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2021/08/ezgif.com-gif-maker-1.gif"}/></a></div>
                                               
                                        {/* Advert SideDiv  */}
                             <div className='h-[200px] justify-center hidden md:flex lg:mt-[50px] md:mt-3'><a href=""><img src={"https://sunrise.ng/wp-content/uploads/2024/07/300x250-Ready-for-the-Future.jpg"} alt="" /></a></div>

                             <div className='mt-20 md:hidden lg:block'><a href=""><img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2020/04/Explore-Digital-Bill-1.jpg?fit=2560%2C512&ssl=1"} loading='lazy'/></a></div>

                             {/* <div className=' w-[260px] hidden'><a href=""><img src={"https://sunrise.ng/wp-content/uploads/2024/04/RSA-Mortgage-digital-banner-300x250-1.png"} /></a></div> */}
                        </div>   
                  </div>


                                      {/* Advert Box */}
                  <div className='md:h-[200px] w-full hidden bg-[#F6F6F6] lg:flex items-center justify-center mt-10'> 
                        <img src={"https://www.lindaikejisblog.com/advertss/1731844933.gif"} />
                  </div>
                            

            </div>
    </div>
  )
}

export default GeneralThirdComponent