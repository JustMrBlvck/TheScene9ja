import React from 'react'
import { Link } from 'react-router-dom'

function SportsFifthComponent() {
                
                // SportsBasketBall Array
  const sportsBasketBall = [
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/10/NBA.jpg",
      heading:"NBA, Nike Extend Partnership Deal For 12 Years"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2023/08/rena-wakama-.jpg",
      heading:"Olympics: Tinubu Celebrates Rena Wakama For Winning Best Coach Prize"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2022/12/Curry-1-e1671289402551.jpg",
      heading:"Curry Signs New Contract Extension With Warriors"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/08/dtigress-.jpg",
      heading:"D’Tigress Make History As First African Team To Break Into FIBA Top 10"
    },
  ]
                
              // SportBoxing Array
  const sportsBoxing = [
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/08/Algerias-Imane-Khelif-__BoxingOlyParis2024-4.jpg",
      heading:"Gender Row Boxer Imane Khelif Wins Olympic Gold"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/tyson-mike.jpg",
      heading:"YouTuber Jake Paul Beats Mike Tyson"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/09/Anthony-Joshua.jpg",
      heading:"‘Warrior’ Joshua Vows To Fight On Despite Dubois Mauling"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/Puerto-Rican-boxer-Amanda-Serrano-takes-part-in-a-weigh-in-ahead-of-her-boxing-fight-against-Irish-boxer-Katie-Taylor__BoxingUndercardSerranoVsTaylor-4.jpg",
      heading:"Taylor Holds Off Bloodied Serrano To Retain Undisputed Crown"
    },
  ]


  const sportsGolf = [
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/04/Tiger-Woods.jpg",
      heading:"Woods Eyes Playing Three Majors In Next Three Months"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/04/Konda.jpg",
      heading:"Korda Tries To Stretch Streak At Revamped LPGA Match Play"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/04/Jaeger.jpg",
      heading:"Jaeger Holds Off Top-ranked Scheffler For First PGA Tour Title In Houston"
    },
    {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/05/Scottie-Scheffler.jpg",
      heading:"Police Arrest Golf World No.1 Scheffler Outside PGA Course"
    },
  ]

  return (
    <div className='bg-[#F6F6F6] flex items-center flex-col dark:text-white'>

          {/* Advert Box */}
          <div className='md:h-[200px] w-[90%] lg:w-9/12bg-[#F6F6F6] md:flex items-center justify-center mt-10'> 
                <img src={"https://www.lindaikejisblog.com/advertss/1731844933.gif"} />
          </div>
         
                                                   {/* SportsBasketBall */}
         <div className='w-[90%] lg:w-9/12 mt-10'>
               
                <h1 className='font-Custom text-PrimaryColor text-4xl font-medium'>Basketball</h1>
                    
              <div className='min-h-[250px] grid grid-cols-1 mt-6 md:grid md:grid-cols-2 md:border-t-[.2px] gap-5 font-Custom font-bold md:border-[#8080802f] lg:grid lg:grid-cols-4'>
                    {sportsBasketBall.map((sportsBasketBall, index)=>(
                        <div key={index} className='flex w-full items-center flex-col space-y-4 lg:mt-5'>
                            <div><img src={sportsBasketBall.imgSrc}/></div>
                            
                            <div className=' w-full lg:text-[17px]'><Link>{sportsBasketBall.heading}</Link></div> 
                        </div>
                    ))}
              </div>

         </div>

                                  
                                                    {/* SportBoxing */}
        <div className='w-[90%] lg:w-9/12 mt-5'>
               
              <h1 className='font-Custom text-PrimaryColor text-4xl font-medium'>Boxing</h1>
                   
            <div className='min-h-[250px] grid grid-cols-1 mt-6 md:grid md:grid-cols-2 md:border-t-[.2px] gap-5 font-Custom font-bold md:border-[#8080802f] lg:grid lg:grid-cols-4'>
                  {sportsBoxing.map((sportsBoxing, index)=>(
                      <div key={index} className='flex w-full items-center flex-col space-y-4 lg:mt-5'>
                          <div><img src={sportsBoxing.imgSrc}/></div>
                          
                          <div className=' w-full lg:text-[17px]'><Link>{sportsBoxing.heading}</Link></div> 
                      </div>
                  ))}
            </div>

        </div>


                                                 {/* SportGolf */}
        <div className='w-[90%] lg:w-9/12 mt-5'>
               
            <h1 className='font-Custom text-PrimaryColor text-4xl font-medium'>Golf</h1>
                    
               <div className='min-h-[300px] grid grid-cols-1 mt-6 md:grid md:grid-cols-2 md:border-t-[.2px] gap-5 font-Custom font-bold md:border-[#8080802f] lg:grid lg:grid-cols-4'>
                   {sportsGolf.map((sportsGolf, index)=>(
                        <div key={index} className='flex w-full items-center flex-col space-y-4 lg:mt-5'>
                            <div><img src={sportsGolf.imgSrc}/></div>
                            
                            <div className=' w-full lg:text-[17px]'><Link>{sportsGolf.heading}</Link></div> 
                        </div>
                    ))}
               </div>
 
        </div>
 

    </div>
  )
}

export default SportsFifthComponent