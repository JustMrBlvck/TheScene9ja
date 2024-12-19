import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function TechnologySecondComponent() {

    const mainTechnology = [
        {
            id:0,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2021/05/Amazon-HQ-2.jpg",
            heading:"Amazon Invests Another $4bn In AI Firm Anthropic"
        }, {
            id:1,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2023/02/TikTok-2.jpg",
            heading:"TikTok Expands Digital Safety Initiative In Nigeria, Partners NITDA, DSN"
        }, {
            id:2,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/Social-media.jpg",
            heading:"Australia Passes Landmark Social Media Ban For Under 16s"
        }, {
            id:3,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/gaming.jpg",
            heading:"Exploring Entertainment Trends In 2024: From Digital Innovations Rise Of Immersive Gaming Experiences"
        },{
            id:4,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2023/03/us-social-media-china-internet-technology-telecoms-computers-wireless-tik-tok.jpg",
            heading:"Decision Expected In TikTok Appeal Of US Ban Threat"
        },{
            id:5,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2022/10/Meta-1.jpg",
            heading:"Meta Says No Sign Of AI Bedeviling Elections In 2024"
        },{
            id:6,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/Social-Media-1.jpg",
            heading:"Social Media Companies Slam Australia’s Under-16 Ban"
        },{
            id:7,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/NITDA.jpg",
            heading:"NITDA Alerts Nigerians About Malware Stealing Banking Details"
        },{
            id:8,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/TikTok-US-China.jpg",
            heading:"TikTok Faces US Ban After Losing Court Appeal"
        },{
            id:9,   
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/infinix-nigeria-technology-award.jpg",
            heading:"Infinix Shines With Double Wins At Nigeria Technology Awards 2024"
        },{
            id:10,   
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/Meta.jpg",
            heading:"EU Fines Meta $840m For ‘Abusive’ Facebook Ad Practices"
        },{
            id:11,   
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/11/games-nintendo__FilesJapanGamesBusinessNintendo-1.jpg",
            heading:"Nintendo Courts Non-Gamers In ‘About-Turn’ Strategy"
        },{
            id:12,   
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2022/10/Meta-1.jpg",
            heading:"South Korea Fines Meta For Illegal Collection Of User Data"
        },{
            id:13,   
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2020/09/Sonys-PlayStation-5.jpg",
            heading:"Playstation 5 Pro Goes On Sale, Will Gamers Pay Hefty Price To Play?"
        },
        {
            id:14,   
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/10/ChatGPT.jpg",
            heading:"OpenAI Releases ChatGPT Search Engine, Taking On Google"
        },{
            id:9,   
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/08/A-Google-logo-is-seen-during-the-Made-by-Google-media-event__UsInternetTelecommunicationComputersGoogle.jpg",
            heading:"Russia Says Massive Fines Against Google ‘Symbolic’"
        },
    ];

       
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPageMain = 9;

    const totalItems = mainTechnology.length;
    const totalPages = Math.ceil(totalItems / itemsPerPageMain);

    const paginate = (pageNumber) => {
        const validPageNumber = Math.max(1, Math.min(pageNumber, totalPages));
        setCurrentPage(validPageNumber);
    };

    const paginateArray = (array, itemsPerPage) => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return array.slice(indexOfFirstItem, indexOfLastItem);
    };

    const paginatedMainTechnology = paginateArray(mainTechnology, itemsPerPageMain);

  
 return (
        <div className='flex items-center flex-col dark:text-white'>

    
                {/* Advert Box */}
            <Link className='md:h-[190px] w-[90%] lg:w-[83%]bg-[#F6F6F6] md:flex items-center justify-center mt-10'> 
                    <a href=""><img src={"https://s0.2mdn.net/simgad/17325214540452252885"} /></a>
            </Link>
    
    
              <div className='w-[95%] lg:w-[83%]'>

                   <div className='min-h-[300px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[75%,25%] mt-4 gap-5 border-t-[.2px] border-[#8080802f] border-b-[.2px]'>
                        <Link className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                                  {paginatedMainTechnology.map((item)=>(
                                        <div key={item.id} className='flex w-full items-center flex-col space-y-4'>
                                            <div className='w-full'><img src={item.imgSrc} className='lg:w-[260px]'/></div>                                    
                                            
                                            <div className=' w-full font-Custom font-bold lg:text-[17px] hover:text-PrimaryColor'><Link>{item.heading}</Link></div> 
                                        </div>
                                  ))}
                        </Link>

                        <div className="md:hidden lg:block">
                              {/* Advert Box */}
                            <Link className='w-full flex flex-col items-center lg:mt-12'>
                                    <h3 className='font-Custom font-bold text-[gray]'>Advertisement</h3>
    
                                <div className='flex justify-center'><a href='' className='bg-[#F6F6F6] flex justify-center h-[270px] w-full'><img src={"https://tpc.googlesyndication.com/simgad/5974062208041488507"}/></a></div>
                            </Link>
    
                                                    {/* Advert Box */}
                            <div className='w-full mt-7 flex flex-col items-center lg:mt-6'>
                                    <h3 className='font-Custom font-bold text-[gray]'>Advertisement</h3>
    
                                <div className='flex justify-center items-center bg-[#F6F6F6]'><a href='' className='bg-[#F6F6F6] flex justify-center items-center h-[270px] w-full'><img src={"https://tpc.googlesyndication.com/simgad/2316020753188551016"}/></a></div>
                            </div>
                            
                        </div> 
                   </div>

              </div>

              <div className="mt-[40px]  md:w-[96%] lg:w-[83%] lg:mt-16">
                  <div className='min-h-[60px] rounded-xl w-full  gap-2 flex items-center border lg:w-[17%] border-[#8080802f]'>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                        key={i + 1}
                        className={`border-none btn ${currentPage === i + 1 ? 'btn-active' : ''}`}
                        onClick={() => paginate(i + 1)}
                        >
                        {i + 1}
                        </button>
                     ))}
                  </div>
             </div>

        </div>
  )
}

export default TechnologySecondComponent
