import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function DisplaySecondComponent() {

   
  const newsDisplay = {

    imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/Old-Port-Harcourt-Refinery.jpg",

    topic:"The Presidency has assured that the second 150,000 barrels per day plant of the Port Harcourt Refining Company in Rivers State will soon become operational as work is currently ongoing at the facility.",

    topicContinuation:"PHRC has two refineries including the 60,000bpd facility, and the 150,000bpd plant.The Special Adviser on Information and Strategy to President Bola Tinubu, Bayo Onanuga, in a statement titled ‘Putting to Rest Rumours about Port Harcourt Refinery Complex:  Our Fact-Finding Mission’, advised Nigerians to ignore negative talks on the newly revived old Port Harcourt 60, 000 barrels per day refinery.",

    topicContinuationN: "According to him, while the refinery is currently not running at 100 per cent, it is functioning at 70 per cent installed capacity, with plans to increase production shortly."
  }

  const moreStoriesArray = [  
    {
      "id":1,
      "imageSrc": "https://www.channelstv.com/wp-content/uploads/2023/12/A-man-waits-for-costumers-while-selling-clothes-at-the-Balogun-Market-in-Lagos-on-December-18-2023-2.jpg", 
      "title": "Economy: Better Days Ahead, Tinubu Assures Nigerians",
    },
    {
      id:2,
      imageSrc: 'https://www.channelstv.com/wp-content/uploads/2024/07/Mohammed-Idris-1-1.jpg',
      title: "Nigeria Long Overdue For Tax Reforms — Minister",
    },
    {
      id:3,
      imageSrc: 'https://www.channelstv.com/wp-content/uploads/2023/12/Nigeria-Christmas-3.jpg',
      title: 'Nigeria’s Economy Still Facing Crisis, CBN Admits',
    },
];  


  return (
    <div className='flex items-center flex-col'>
        
         <div className='w-[90%] lg:w-9/12 mt-3'>
              
              <div className='min-h-[100vh] grid grid-cols-1 lg:grid lg:grid-cols-[65%,35%]'>
                  <div className='md:border-r-[.2px] md:border-[#8080802f]'>
                    <div className='lg:mx-3'>
                              {/* imgSrc */}
                       <img src={newsDisplay.imgSrc} className='w-full'/>

                             {/* Topic */}
                       <div className='mt-16'>
                              <p className='font-Custom font-bold text-[18px]'>
                                    {newsDisplay.topic}
                              </p>
                       </div>


                                        {/* Advert Box */}
                       <div className='md:h-[250px] font-Custom font-bold text-[gray] flex-col mt-10  flex items-center'>
                              <h3>Advertisement</h3>

                            <a className='w-full mt-2' href=""> 
                                  <img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2020/10/ezgif.com-gif-maker-1.gif"} />
                            </a> 
                       </div>

                                {/* TopicContinuation */}
                       <div className='mt-14 md:mt-0'>
                              <p className='font-Custom text-[19px]'>
                                    {newsDisplay.topicContinuation} <br />
                              </p>
                                            
                              <p className='font-bold text-[23px] font-Custom mt-3'>READ ALSO: <a className='text-PrimaryColor text-[19px] decoration-slice' href="">World Bank Announces $100bn Loan For Poorest Countries</a></p>
                       </div>

                       <div className='mt-10 md:mt-6'>
                              <p className='font-Custom text-[19px]'>
                                    {newsDisplay.topicContinuationN} 
                              </p>
                       </div>
                    </div>

                                          {/* More Stories */}
                         <div className='block mt-10 lg:p-3'>                             
                               <h1 className=' font-Custom text-4xl font-medium'>More Stories</h1>

                            <div className='h-[200px] grid md:grid-cols-2 lg:grid-cols-3 border-t-[.2px] border-[#8080802f] gap-9 md:gap-9 lg:gap-5'>
                                {moreStoriesArray.map((moreStoriesArray, index)=>(
                                      <Link key={index} className='h-[200px] mt-5'>
                                      <div>
                                        <img src={moreStoriesArray.imageSrc} className='object-cover'/>
                                      </div>

                                      <Link className='bg-[]  text-[#1A1B1D] flex justify-start items-center font-bold'>
                                          <h1 className='font-Custom  hover:text-PrimaryColor text-[18px]'>{moreStoriesArray.title}</h1>
                                      </Link>
                                  </Link>
                                ))}
                            </div>  


                               {/* Comment Session */}
                            <div className='mt-[600px]  md:mt-[380px] lg:mt-16'>
                               <h3 className="text-lg font-Custom font-semibold mb-4">1 Comment</h3>

                                 <div>
                                       
                                 </div>

                               <div className='border-t-[2px] border-[#8080802f]'>

                                  <div className="flex items-start mt-6 space-x-5">
                                      <div className="bg-PrimaryColor text-white md:flex items-center hidden justify-center rounded-md w-[50px] h-[50px] text-4xl font-Custom font-bold">
                                        G
                                      </div>

                                      <textarea
                                          className="w-full border font-Custom flex-1 flex items-center justify-center rounded-lg p-2"
                                          placeholder="Comment..."
                                      ></textarea>
                                  </div>

                                   
                                  <div className='mt-7 lg:mt-6'>
                                       <button className='p-2  w-full bg-PrimaryColor font-Custom font-bold rounded-lg'>Comment</button>
                                  </div>
                                  
                               </div>
                                 
                            </div>

                         </div>           
                  </div>


                <div>
                       <div className='lg:mx-3'>
                                      {/* Advert Box */}
                           <div className='w-full  lg:flex lg:flex-col lg:items-center hidden'>
                                 <h3 className='font-Custom font-bold text-[gray]'>Advertisement</h3>

                                <div className='bg-[#F6F6F6] h-[400px] w-full'></div>
                           </div>


                          
                           {/* Display LatestNews */}
                  <div className='md:mt-[50px] hidden md:block lg:mt-6'>

                       <h1 className='font-Custom text-PrimaryColor text-[35px] font-bold'>Latest Stories</h1>

                  <div className="space-y-4 border-t-[.2px] border-[#8080802f]">
                       {
                        [
                          {
                            id:0,
                            headline: 'Three Die In Lagos Truck Accident',
                            imageSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/lagos-accident-truck-.jpg",
                            time: "21 mins ago"
                          },
                           {
                             headline: "Viral Naira Abuse Video Not From Goje's Daughters Weedding, Says EFCC",
                             imageSrc: 'https://www.channelstv.com/wp-content/uploads/2023/01/EFCC-operatives.png',
                             time: "2 hours ago"
                           },
                         {
                             headline: "US Climated Action Won't End With Trump, Envoy Tells COP29",
                             imageSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/cop-29.jpg',
                             time: "2 hours ago"
                         },
                         {
                          headline: "NAFDAC Seizes Counterfeit Wines Worth $40k In Nasarawa",
                          imageSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/nAFDAC-fake-wines.jpg',
                          time: "5 hours ago"
                         },
                        ].map((medium, index)=>(
                            <div key={index} className="flex items-center space-x-4 mt-6">
                                <img src={medium.imageSrc} className="w-20 h-20 rounded-lg  bg-[red] object-cover" />

                                <Link className="text-[18px] font-Custom font-medium text-gray-700  hover:text-PrimaryColor">{medium.headline}<p className='text-[16px] mt-1'>{medium.time}</p></Link>
                            </div>
                        ))}
                  </div>
                  </div>

               <div className='h-[230px] hidden lg:flex lg:justify-center lg:mt-7'>
                   <div className='h-[330px] w-[350px] bg-[#F4F4F4] flex items-center justify-center flex-col rounded-lg mt-2 text-center'>
                         <h1 className='font-Custom font-bold text-2xl'>Join Our <span className='text-PrimaryColor'>19,894,217</span> Email <br />
                              Subcribers
                         </h1>

                         <p className='font-medium text-[14px] mt-3'>
                         Get latest News & Entertainment Gist <br />
                            
                            Update
                         </p>

                         <input className='h-[40px] w-[250px] font-medium p-5 rounded-md mt-7 font-Custom shadow-lg' type="text" 
                         
                           
                         placeholder='Email Address'/>

                         <button className='h-[40px] w-[250px] mt-7 font-Custom bg-PrimaryColor font-bold'>SUBSCRIBE</button>
                    </div>
               </div>

                 
               <div className='w-full lg:mt-[160px] hidden lg:flex lg:mx-3 font-Custom font-bold text-[gray]  lg:flex-col lg:items-center'>
                     <h3>Advertisement</h3>
                        <div  className='h-[300px] w-full bg-[#F6F6F6] flex items-center justify-center'><a href=""><img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2021/08/ezgif.com-gif-maker-1.gif"}/></a></div>
               </div>


              </div>
              </div>


              </div>

         </div>

    </div>
  )
}

export default DisplaySecondComponent