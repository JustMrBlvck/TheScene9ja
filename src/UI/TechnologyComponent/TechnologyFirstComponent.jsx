import React from "react";
import { Link } from "react-router-dom";

function TechnologyFirstComponent() {

    //  TechnologyObject
const technology = {
  imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/12/TikTok-US-China.jpg",
  heading:"TikTok Asks Supreme Court To Temporarily Block Looming US Ban",
  subHeading:"Trump's support for TikTok marks a reversal from his first term, when the Republican leader tried to ban the app over similar security concerns.",
  time:"  3h",
  author:"Ignatius Igwe"
}
   
// politicsRight
const technologyRight = [
  {
    id:0,
    imgSrc: "https://www.channelstv.com/wp-content/uploads/2023/04/Products-are-displayed-inside-the-new-Apple-iPhone-Phone-case-retail-store-during-a-media-preview-on-the-eve-of-its-opening-in-Mumbai-4.jpg",
    time: "2h",
    author: "Nebianet Usaini",
    heading: "Apple Adds ChatGPT Integration In Latest Software Update",
  },
  {
    id:1,
    imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/09/FEC.jpg",
    time: " 5h",
    author: "Kayode Oyero",
    heading: "Ireland Fines Meta 251m Euros Over Facebook Hacks",
  },
  {
     id:2,
     imgSrc: "https://www.channelstv.com/wp-content/uploads/2021/03/Untitled-1-18.png",
      time: "2d",
      author: "opeluwami akintayo",
      heading: "Technical Issue Shuts Out Facebook, Instagram, WhatsApp Users",
    },
    {
      id:3,
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/12/A-giant-Google-logo__FilesUsTechnologyGoogleAi.jpg",
      time: " 6d",
      author: "Nebianet Usaini",
      heading: "Google Unveils Latest AI Model, Gemini 2.0",
    },

];

 return (

    <div className="flex items-center flex-col dark:text-white">

          <Link className='md:h-[130px] w-[90%] lg:w-9/12bg-[#F6F6F6] md:flex items-center justify-center mt-10'> 
                <a href=""><img src={""} /></a>
          </Link>
          
          <div className='w-[95%] lg:w-[83%]'>

               <h1 className='font-Custom text-PrimaryColor text-2xl lg:text-3xl font-bold'>Technology</h1>

                  <div  className="min-h-[450px] mt-2 border-t-[.2px] border-[#8080802f] border-b-[.2px] gap-4 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-[45%,55%]">
                        <div className="lg:flex lg:justify-center md:sticky md:top-0 md:h-[450px] lg:static">
                             <Link>
                                     <div className='mt-5'>
                                          <Link >
                                              <img src={technology.imgSrc}/>
                                          </Link>
        
                                          <div className='w-full flex items-center space-x-1 mt-3  font-Custom'>
                                                  <div className='h-[8px] w-[8px] bg-[#791212]'></div>
                                                  <p className='text-[16px] font-Custom'>{technology.time}</p>
                                                  <p>| {technology.author}</p>
                                          </div>
        
                                          <Link className='font-Custom font-bold text-2xl mt-5 hover:text-PrimaryColor'><p className='mt-3'>{technology.heading}</p></Link>
        
                                          <div><Link className='font-Custom text-PrimaryColor font-medium text-[16px]'>{technology.subHeading}</Link></div>  
                                      </div>
                             </Link>
                        </div>

                        <div className="border-[#8080802f] border-l-[.2px] gap-3 mt-5 my-5 grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2">
                               {technologyRight.map((index)=>(
                                  <div key={index.id} className='flex w-full items-center flex-col space-y-4 lg:ml-4'>
                                      <div className='w-full'><img src={index.imgSrc} className='lg:w-[260px]'/></div>
                                      
                                      <div className='w-full flex items-center space-x-1  font-Custom'>
                                            <div className='h-[8px] w-[8px] bg-[#791212]'></div>
                                            <p className='text-[16px] font-Custom'>{index.time}</p>
                                            <p>| {index.author}</p>
                                        </div>
                                      
                                      <div className=' w-full font-Custom font-bold lg:text-[17px]'><Link>{index.heading}</Link></div> 
                                  </div>
                              ))}
                        </div>
                  </div>
          </div>

    </div>
   
  );
}

export default TechnologyFirstComponent;
