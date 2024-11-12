import React from 'react'
import { Link } from 'react-router-dom'

function GeneralFirstComponent() {

      const TopStories = {
         HeadLine: "Atiku Envious Of Tinubu's Position, Misconstrues Nigeria's Realities - Presidency",
         ImageSrc: "https://www.channelstv.com/wp-content/uploads/2023/10/Untitled-design-4.png",
         SubHeadLine: "How I Would Handled Subsidy Removal, FX Reforms As President - Atiku"
      }

      const newsItems = [
        {
          id:1,
          imageSrc: 'https://www.channelstv.com/wp-content/uploads/2024/11/Nigerians-wh-o-won-elecions.jpg', 
          title: 'Tax Reform Bills Not Dead On Arrival, Will Be Passed, Says Jibrin',
        },
        {
          id:2,
          imageSrc: 'https://www.channelstv.com/wp-content/uploads/2023/11/Untitled-design-8-2.png', 
          title: 'NiDCOM Congratulates More Nigerians Who Won Elections Abroad',
        },
        {
          id:3,
          imageSrc: 'https://www.channelstv.com/wp-content/uploads/2024/11/Tinubu.jpg',
          title: 'Tinubu Demands End To Israel Aggression In Gaza At Saudi Arabia',
        },
      ];  


  return (
    <div className='bg-[white] flex flex-col items-center'>

                     {/* Advert Box */}
           <div className='h-[100px] w-full md:hidden lg:w-9/12 bg-[#F6F6F6] lg:flex items-center justify-center mt-10'> 
                 <img src={"https://dsp-media.eskimi.com/upload/142402_2123234271_0bd86081fa39063dcaeca9893dde821d.jpg"} />
           </div>
                          {/* Mobile and Medium Screens General Section */}
            <div className='w-[90%] mt-14 md:block lg:hidden'>
                    <h1 className='font-Custom text-PrimaryColor text-4xl font-bold'>Top Stories</h1>

                  <div className='md:min-h-[200px] bg-[] grid grid-cols-1 md:grid md:grid-cols-[40%,60%] mt-5 border-[#8080802f] border-t-[.2px]'>
                        <div className='flex items-center justify-center'>
                             <Link className=''>
                                  <img src={TopStories.ImageSrc} className='object-cover'/>
                            </Link>
                        </div>
                          
                        <div className='bg-[] flex items-center'>
                             <Link className='font-Custom font-bold text-2xl  hover:text-PrimaryColor'>
                                    {TopStories.HeadLine}
                              </Link>
                        </div>

                        {/* <div className='w-3/2 mt-8'><Link className='font-[cursive] text-PrimaryColor font-bold text-[18px]'>{TopStories.SubHeadLine}</Link></div> */}
                  </div>

                
                  <div className='h-[200px] p-0 md:p-3 mt-9 md:border-[#8080802f] grid grid-cols-1 gap-14 md:grid md:grid-cols-2 md:gap-8 md:border-t-[.2px]'>
                        {
                          [
                            {
                              id:1,
                              imageSrc: 'https://www.channelstv.com/wp-content/uploads/2024/11/Nigerians-wh-o-won-elecions.jpg', 
                              title: 'Tax Reform Bills Not Dead On Arrival, Will Be Passed, Says Jibrin',
                            },
                            {
                              id:2,
                              imageSrc: 'https://www.channelstv.com/wp-content/uploads/2023/11/Untitled-design-8-2.png', 
                              title: 'NiDCOM Congratulates More Nigerians Who Won Elections Abroad',
                            },
                            {
                              id:3,
                              imageSrc: 'https://www.channelstv.com/wp-content/uploads/2024/11/Tinubu.jpg',
                              title: 'Tinubu Demands End To Israel Aggression In Gaza At Saudi Arabia',
                            },
                             {
                              id:4,
                              imageSrc: 'https://www.channelstv.com/wp-content/uploads/2022/05/Gunmen-Gunmennnnnnnnnnnnnnnn2.jpg',
                              title: 'Lakurawa Not A New Terror Group - ACF, Bukarti',
                            },
                           
                          ].map((newsItemsM, index)=>(
                             <Link key={index} className='h-[200px] bg-[] grid'>
                                  <div className='bg-[]'>
                                    <img src={newsItemsM.imageSrc} className='object-cover'/>
                                  </div>

                                  <Link className='bg-[]  text-[#1A1B1D] flex justify-start items-start font-bold'>
                                      <h1 className='font-Custom mt-4  hover:text-PrimaryColor text-[19px]'>{newsItemsM.title}</h1>
                                  </Link>
                              </Link>
                          ))}
                  </div>

                  <div className='md:border-[#8080802f] md:border-l-[.2px] md:mt-5 md:p-5'>
                       <h1 className='font-Custom text-PrimaryColor text-[15px] font-bold'>Latest Stories</h1>
                  <div className="space-y-4 mt-[235%] md:mt-72">
                       {
                        [
                          {
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
                          <div key={index} className="flex items-center space-x-4">
                          <img src={medium.imageSrc} className="w-20 h-20 rounded-lg  object-cover" />
                          <Link className="text-[20px] font-Custom font-medium text-gray-700  hover:text-PrimaryColor">{medium.headline}
                          
                             <p className='text-[16px] mt-1'>{medium.time}</p>
                          </Link>
                        </div>
                        ))}
                  </div>
              </div>

             </div>

                      {/* Lg General Section */}
            <div className='w-[90%] lg:w-9/12 mt-14 hidden lg:block'>
                  <h1 className='font-Custom text-PrimaryColor text-4xl font-bold'>Top Stories</h1>

                     <div className="min-h-[100vh] mt-7 grid grid-cols-[65%,35%] space-x-4 border-[#8080802f] border-t-[.2px] border-b-[.2px]">
                          <div className='mt-5'>
                               <Link >
                                   <img src={TopStories.ImageSrc}/>
                               </Link>

                               <Link className='font-Custom font-bold text-3xl mt-3 hover:text-PrimaryColor'>{TopStories.HeadLine}</Link>

                               <div className='w-1/2 mt-5'><Link className='font-[cursive] text-PrimaryColor font-bold text-[16px]'>{TopStories.SubHeadLine}</Link></div>


                               <div className='h-[200px] p-3 mt-9 border-[#8080802f] grid grid-cols-3 gap-8 border-t-[.2px]'>
                                  {newsItems.map((newsItemsS, index)=>(
                                        <Link key={index} className='h-[200px] bg-[] grid'>
                                        <div className='bg-[]'>
                                          <img src={newsItemsS.imageSrc} className='object-cover'/>
                                        </div>

                                        <Link className='bg-[]  text-[#1A1B1D] flex justify-start items-start font-bold'>
                                            <h1 className='font-Custom  hover:text-PrimaryColor text-[18px]'>{newsItemsS.title}</h1>
                                        </Link>
                                    </Link>
                                  ))}
                               </div> 
                          </div>

                          <div className='border-[#8080802f] border-l-[.2px] mt-5 p-5'>
                                <h1 className='font-Custom text-PrimaryColor text-4xl font-bold'>Latest Stories</h1>
                                
                                <div className="space-y-4 mt-5">
                                  {[
                                     {
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
                                      headline: "Obasaki Pardons Inmates With Less Than One Year To Serve",
                                      imageSrc:'https://www.channelstv.com/wp-content/uploads/2024/09/Obaseki-2.jpg',
                                      time: "3 hours ago"
                                  },
                                  {
                                    headline: "NAFDAC Seizes Counterfeit Wines Worth $40k In Nasarawa",
                                    imageSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/nAFDAC-fake-wines.jpg',
                                    time: "5 hours ago"
                                },
                                  ].map((headlineS, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                      <img src={headlineS.imageSrc} className="w-20 h-20 rounded-lg  object-cover" />
                                      <Link className="text-[20px] font-Custom font-medium text-gray-700  hover:text-PrimaryColor">{headlineS.headline}
                                      
                                         <p className='text-[16px] mt-1'>{headlineS.time}</p>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                          </div>
                     </div>
            </div>

    </div>
  )
}

export default GeneralFirstComponent