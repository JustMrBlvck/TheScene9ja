import React from 'react'
import { Link } from 'react-router-dom'

function EntertainmentFirstComponent({ 
  asideEntertainment=[], 
  mainEntertainment=[],
  paginate,
  currentPage,
  totalPages
}) {

  const entertainment = {
     time:"2h",
     author:" Nebianet Usaini",
     imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/12/Funke_Akindele.jpg",
     heading:"You Will Be Arrested If You Pirate My New Movie, Akindele Warns Pirates",
     subHeading:"The movie will be released in cinemas on Friday, December 13."
  }

  const entertainmentRight=[
    {
        id:0,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/12/AFP__20241211__36Q483M__v1__Preview__FilesBritainUsLiteratureFilmAward.jpg',
        time:"1d",
        author:'Khadijat Lawal',
        heading:"Actress Sarah Parker Joins Booker Prize 2025 Jury"
    },
    {    id:1,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/12/AFP__20241209__36PY9MB__v2__Preview__82ndGoldenGlobeAwardsNominationsAnnouncement.jpg',
        time:"3d",
        author:"Khadijat lawal",
        heading:"‘Emilia Perez’ Tops Golden Globes Nominations",
    },
    {   
        id:2,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Michael-Jackson__RetiredCopFindsTroveOfUnreleasedJacksonSongs-1.jpg",
        time:'6h',
        author:"Nebianet Usaini",
        heading:"Retired Cop Finds Trove Of Unreleased Michael Jackson Songs"
    },
    {   
        id:3,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241125__36N89F2__v1__Preview__OpeningNightOfLaCageAuxFolles.jpg',
        time:'3d',
        heading:"Bestselling ‘Woman Of Substance’ Author Barbara Taylor Bradford Dies At 91",
        author:'Khadijat lawal'
    }
]
  return (
      <div className='bg-white flex flex-col items-center dark:text-white'>

                 {/* Advert Box */}
            <Link className='md:h-[130px] w-[90%] lg:w-9/12bg-[#F6F6F6] md:flex items-center justify-center mt-10'> 
                  <a href=""><img src={"https://www.lindaikejisblog.com/advertss/1731844933.gif"} /></a>
            </Link>


            <div className='w-[95%] lg:w-[83%] mt-6'>
                  <h1 className='font-Custom text-PrimaryColor text-2xl lg:text-3xl font-bold'>Entertainment</h1>

                  <div className='min-h-[450px] mt-2 border-t-[.2px] border-[#8080802f] border-b-[.2px] gap-4 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-[45%,55%]'>
                      <div className='lg:flex lg:justify-center'>
                          <Link>
                              <div className='mt-5'>
                                  <Link >
                                      <img src={entertainment.imgSrc}/>
                                  </Link>

                                  <div className='w-full flex items-center space-x-1 mt-3  font-Custom'>
                                          <div className='h-[8px] w-[8px] bg-[#791212]'></div>
                                          <p className='text-[16px] font-Custom'>{entertainment.time}</p>
                                          <p>| {entertainment.author}</p>
                                  </div>

                                  <Link className='font-Custom font-bold text-2xl mt-5 hover:text-PrimaryColor'><p className='mt-3'>{entertainment.heading}</p></Link>

                                  <div><Link className='font-Custom text-PrimaryColor font-medium text-[16px]'>{entertainment.subHeading}</Link></div>  
                              </div>
                          </Link> 
                      </div>


                      <div className='border-[#8080802f] border-l-[.2px] gap-3 mt-5 my-5 grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2'> 
                             {entertainmentRight.map((index)=>(
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


                        {/* Advert Box */}
             <Link className='md:h-[190px] w-[90%] lg:w-[83%]bg-[#F6F6F6] md:flex items-center justify-center mt-10'> 
                  {/* <a href=""><img src={"https://www.lindaikejisblog.com/advertss/1731844933.gif"} /></a> */}
            </Link>


            <div className='w-[95%] lg:w-[83%] mt-6'>

                  <div className='min-h-[300px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[70%,30%] mt-4 gap-5 border-t-[.2px] border-[#8080802f] border-b-[.2px]'>
                        <Link className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                              {mainEntertainment.map((mainEntertainment, index)=>(
                                    <div key={index} className='flex w-full items-center flex-col space-y-4'>
                                        <div className='w-full'><img src={mainEntertainment.imgSrc} className='lg:w-[260px]'/></div>                                    
                                        
                                        <div className=' w-full font-Custom font-bold lg:text-[17px] hover:text-PrimaryColor'><Link>{mainEntertainment.heading}</Link></div> 
                                    </div>
                                ))}
                        </Link>

                        <div className='mt-3 md:hidden lg:block'>
                                                 {/* Advert Box */}
                           <Link className='w-full flex flex-col items-center lg:mt-12'>
                                 <h3 className='font-Custom font-bold text-[gray]'>Advertisement</h3>

                                <div className='flex justify-center'><a href='' className='bg-[#F6F6F6] h-[270px] w-full'><img src={"https://tpc.googlesyndication.com/simgad/5974062208041488507"}/></a></div>
                           </Link>

                                                   {/* Advert Box */}
                           <Link className='w-full flex flex-col items-center lg:mt-6'>
                                 <h3 className='font-Custom font-bold text-[gray]'>Advertisement</h3>

                                <div className='flex justify-center'><a href='' className='bg-[#F6F6F6] h-[270px] w-full'><img src={"https://tpc.googlesyndication.com/simgad/5974062208041488507"}/></a></div>
                           </Link>
                        </div>
                  </div>


                  <div className='min-h-[60px] gap-2 flex items-center p-2 border border-[#8080802f] rounded-xl w-full md:w-[96%] lg:w-[17%] mt-16'>
                        {Array.from({length:totalPages},(_, i)=>(
                            <button
                            key={i + 1}
                            className={`border-none btn ${currentPage === i + 1 ? "btn-active" : ""}`}
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

export default EntertainmentFirstComponent