import React from 'react'
import { Link } from 'react-router-dom'

function GeneralThirdComponent() {
    
  const Sports = {
    topicSubHeading: "Slot Warns Southampton Slip-Up Ahead Of Liverpool's 'Increadible' Week",
    imgSrc: 'https://www.channelstv.com/wp-content/uploads/2024/11/liverpool.jpg',
    topicHeadline:"Slot has made a remarkable start to his time in charge of the Reds, winning 15 of his first 17 games in all competitions.",
    poster:"Emmanuel Imeh-Clememt"
  }



  const SportsS = {
    imgSrc: 'https://www.channelstv.com/wp-content/uploads/2024/11/Boniface.jpg',
    headline: 'Goal-Shy: Victor Boniface Suruggles to Replicate Club Form With Super Eagles',
    miniHeadline: 'Last season, Boniface netted 21 goals and bagged 10 assists in 34 matches for Xabi Alonso’s charges who won an impressive domestic double.',
    poster: 'Tom Jones Usen'
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
        
            <div className='w-9/12 bg-[] mt-14'>
                <h1 className='font-Custom text-PrimaryColor text-4xl font-bold'>Sports</h1>

                <div className='min-h-[650px] mt-2 border-t-[.2px] border-[#8080802f] gap-7 grid grid-cols-[75%,25%]'>
                      <div className='bg-[#EAF6FC] flex justify-center mt-5 border-t-[3px] border-PrimaryColor'>
                            <div className=''>      
                                  <div className='flex items-center space-x-1 ml-5 mt-3'>
                                      <div className='h-[8px] w-[8px] bg-[#791212]'></div><Link className='text-[16px] font-Custom'>SPORTS</Link>  
                                  </div>

                                  <Link><img src={Sports.imgSrc} className='mt-5 ml-7'/></Link>

                                  <Link className='font-Custom font-bold text-3xl text-[#1B1C1D] hover:text-PrimaryColor'><p className='ml-7 mt-4'>{Sports.topicSubHeading}</p></Link>

                                  <p className='font-Custom font-medium ml-7 mt-2 w-[380px] text-PrimaryColor'>{Sports.topicHeadline}</p>

                                  <div className='flex items-center space-x-1  ml-5 mt-3 font-Custom font-bold text-[#004081]'>
                                     <div className='h-[8px] w-[8px] bg-[#791212]'></div><p className='text-[16px] font-Custom'>{Sports.poster}</p>  
                                  </div>
                            </div>
                       </div>


                     <div className='bg-[] mt-5 border-t-[3px] border-PrimaryColor'>
                         <div className='bg-[#EAF6FC]'>
                              <Link>  <img src={SportsS.imgSrc} /> </Link>
                              
                              <div className='p-3'>        
                                  <Link>
                                        <p className='font-Custom font-bold text-[20px] text-[#1B1C1D] hover:text-PrimaryColor'>{SportsS.headline}</p>
                                  </Link>

                                  <p className='mt-2 w-5/3 text-[16px] font-Custom'>
                                       {SportsS.miniHeadline}
                                  </p>
                                    
                                  <div className='flex items-center mt-8 space-x-2 font-Custom font-medium text-[#004081]'>
                                      <div className='h-[10px] w-[10px] bg-[#791212]'></div><Link>{SportsS.poster}</Link>  
                                  </div>
                              
                              </div>
                         </div>
                     </div>     
                </div>   


                  <div className='min-h-[450px] p-3 gap-4 mt-28 grid grid-cols-[73%,27%]'>  
                         <div className='space-y-4  bg-[#EAF6FC] '>
                            {sportsHeading.map((sportsHeadingS, index)=>(
                                  <div key={index} className='flex items-center border-b-[3px] border-PrimaryColor space-x-5'>
                                      <img src={sportsHeadingS.imgSrc} className='h-[200px] w-[200px] bg-[green]'/>

                                      <Link className='font-Custom font-bold hover:text-PrimaryColor text-[20px]'>{sportsHeadingS.heading}</Link>
                                  </div>
                              ))}  
                         </div>

                                       {/* Sports Advert SideDiv */}
                        <div className=''>
                                          {/* Advert SideDiv 1 */}
                             <div className='h-[200px] '><a href=""><img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2021/08/ezgif.com-gif-maker-1.gif?fit=300%2C250&ssl=1"}/></a></div>
                                               
                                        {/* Advert SideDiv  */}
                             <div className='h-[200px] mt-10'><a href=""><img src={"https://sunrise.ng/wp-content/uploads/2024/07/300x250-Ready-for-the-Future.jpg"} alt="" /></a></div>

                             <div className='mt-20'><a href=""><img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2020/04/Explore-Digital-Bill-1.jpg?fit=2560%2C512&ssl=1"} /></a></div>
                        </div>   
                  </div>


                                      {/* Advert Box */}
                  <div className='h-[200px] w-full md:hidden bg-[#F6F6F6] lg:flex items-center justify-center mt-10'> 
                        <img src={"https://www.lindaikejisblog.com/advertss/1731844933.gif"} />
                  </div>
                            

            </div>
    </div>
  )
}

export default GeneralThirdComponent