import React from "react";
import { Link } from "react-router-dom";

function PoliticsFirstComponent({
  // subpolitics = [],
  politicsMain = [],
  totalPages,
  currentPage,
  paginate, }) {


  //  PoliticsObject
const politics = {
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2023/08/Francis-Nwifuru.png",
      heading:"Ebonyi gov suspends two commissioners, others over alleged misconduct",
      subHeading:"Ebonyi gov suspends two commissioners, others over alleged misconduct",
      time:" 15m",
      author:" Emmanuel Egobiambu"
}

// politicsRight
const politicsRight = [
  {
    id:0,
    imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/Kemi-Badenoch1.jpg",
    time: "2h",
    author: "opeluwami akintayo",
    heading: "Kemi Badenoch’s Identity Debate Holds Zero Value For Nigeria – Moghalu",
  },
  {
    id:1,
    imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/09/FEC.jpg",
    time: "14h",
    author: "donatus anuchebe",
    heading: "President Tinubu Chairs Federal Executive Council Meeting",
  },
  {
     id:2,
     imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/Okpebholo_Portrait.png",
      time: "4h",
      author: "opeluwami akintayo",
      heading: "Ebonyi gov suspends two commissioners, others over alleged misconduct",
      about: "Data Breach: Gov Okpebholo Orders Urgent Review Of E-Governance Platform",
    },
    {
      id:3,
      imgSrc: "https://www.channelstv.com/wp-content/uploads/2024/11/Abaribe-new.jpg",
      time: "14h",
      author: "donatus anuchebe",
      heading: "Nigeria Would Probably Have Been Better If Peter Obi Won 2023 Election - Sen Abaribe",
    },

];
    
  return (
    // <div>
    //   <div className="min-h-[100px] bg flex flex-col items-center">
    //     <div className="min-h-[100px] bg-[yellow] w-full md:w-[97%] lg:w-[90%]">
    //       <h1>place an advert here</h1>
    //     </div>
    //     <div className="w-full md:w-[97%] lg:w-[90%]  min-h-[50px] items-center grid font-Custom capitalize font-bold">
    //       <h1>politics</h1>
    //       <hr className="font-bold border-black border-[1px]" />
    //     </div>

    //     <div className="min-h-[100px] bg w-full md:w-[97%] lg:w-[90%] border-b-[1px] border-b-black dark:border-b-[white]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //       {/* Headline Section */}
    //       <div className="lg:col-span-2">
    //         {politicsHead.map((item, index) => (
    //           <Link key={index} to="#">
    //             <div>
    //               <img src={item.img} alt={item.heading} loading="lazy" className="w-full h-auto" />
    //             </div>
    //             <div className="flex dark:text-white  gap-2 items-center font-Custom  text-[1rem]">
    //               <span>
    //                 <h1 className="before:w-[10px] flex relative items-center gap-2 before:h-[10px] before:bg-red-500   ">
    //                 {item.time} |

    //                 </h1>
    //               </span>
    //               <span className="font-semibold capitalize">
    //                 {item.author}
    //               </span>
    //             </div>
    //             <div className="dark:text-white">
    //               <h1 className="font-bold  text-[1.2rem]  lg:text-[1.4rem]  font-custom hover:text-PrimaryColor">{item.heading}</h1>
    //               <p className="text-start font-Custom text-[1.2rem] lg:text-[1.3rem]">{item.about}</p>
    //             </div>
    //           </Link>
    //         ))}
    //       </div>

    //       {/* News Items Section */}
    //       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-3">
    //         {politicsNews.map((news, index) => (
    //           <Link key={index} to="#">
    //             <div>
    //               <img src={news.img} alt={news.heading} width='100%' height='100%' loading="lazy" className="w-full h-auto" />
    //             </div>
    //             <div className="flex dark:text-white  gap-2 items-center font-Custom  text-[1rem]">
    //                 <span>
    //                   <h1 className="before:w-[10px] flex relative items-center gap-2 before:h-[10px] before:bg-red-500   ">
    //                   {news.time} |

    //                   </h1>
    //                 </span>
    //                 <span className="font-semibold capitalize">
    //                   {news.author}
    //                 </span>
    //               </div>
    //               <div className="dark:text-white">
    //               <h1 className="font-bold  text-[1.2rem]  lg:text-[1.3rem]  font-custom hover:text-PrimaryColor">{news.heading}</h1>
    //                 <p className="text-start font-Custom text-[1.2rem] lg:text-[1.3rem]">{news.about}</p>
    //               </div>
    //           </Link>
    //         ))}

    //       </div>
    //       <div className="flex md:col-span-2 lg:justify-end  flex-col md:grid md:grid-cols-2 lg:mt-[-200px]   w-full lg:w-[5] lg:ml-[101%]  gap-2 ">
    //         {subpolitics.map((subpolitic,index)=>(
    //           <Link key={index}>
    //            <div>
    //             <div>
    //               <img src={subpolitic.img} loading="lazy" alt="" />
    //             </div>
    //             <div>
    //             <div className="flex dark:text-white  items-center font-Custom  text-[1rem]">
    //                 <span>
    //                   <h1 className="before:w-[10px] flex relative items-center gap-2 before:h-[10px] before:bg-red-500   ">
    //                   {subpolitic.time} |

    //                   </h1>
    //                 </span>
    //                 <span className="font-semibold capitalize text-start">
    //                   {subpolitic.author}
    //                 </span>
    //               </div>
    //               <div className="dark:text-white">
    //               <h1 className="font-bold  text-[1.2rem]  lg:text-[1.3rem]  font-custom hover:text-PrimaryColor">{subpolitic.heading}</h1>
    //                 <p className="text-start font-Custom text-[1.2rem] lg:text-[1.3rem]">{subpolitic.about}</p>
    //               </div>

    //             </div>
    //            </div>
    //           </Link>
    //         ))}
            
            
    //       </div>
       
    //     </div>
    //     <div className="min-h-[100px]  w-full md:w-[95%] lg:w-[90%] bg-red-500 mt-4">
    //       <h1>place an advert here</h1>
        
    //     </div>

    //     <div className="min-h-[100px] w-full md:w-[95%] lg:w-[90%] grid-cols-1  grid md:grid-cols-1 lg:grid-cols-[80%,20%] mt-4">
    //       <div className=" bg  grid grid-cols-1 md:grid-cols-2  gap-3 lg:grid-cols-3  ">
    //         {politicsMain.map((politicsMainn,index)=>(
    //           <Link key={index}>
    //               <div>
    //                 <img src={politicsMainn.img} loading="lazy" alt="" />
    //               </div>
    //               <div className="dark:text-white font-Custom hover:text-PrimaryColor font-bold text-[1.2rem] capitalize">
    //                 <h3>{politicsMainn.about}</h3>

    //               </div>

    //           </Link>


    //         ))}

    //       </div>
    //       <div className="bg-yellow-300 grid grid-rows-2 mt-2">
    //         <h1>
    //           place an advert here
    //         </h1>

    //       </div>

    //     </div>
    //     <div className="pagination-controls flex justify-center mt-4">
    //       {Array.from({ length: totalPages }, (_, i) => (
    //         <button
    //           key={i + 1}
    //           className={`btn ${currentPage === i + 1 ? "btn-active" : ""}`}
    //           onClick={() => paginate(i + 1)}
    //         >
    //           {i + 1}
    //         </button>
    //       ))}
    //     </div>
        
    //   </div>
    // </div>
    <div className="bg-white flex flex-col items-center dark:text-white">

                {/* Advert Box */}
          <Link className='md:h-[130px] w-[90%] lg:w-9/12bg-[#F6F6F6] md:flex items-center justify-center mt-10'> 
                <a href=""><img src={""} /></a>
          </Link>

          <div className='w-[95%] lg:w-[83%] mt-6'>
              <h1 className='font-Custom text-PrimaryColor text-2xl lg:text-3xl font-bold'>Politics</h1>

                <div className="min-h-[450px] mt-2 border-t-[.2px] border-[#8080802f] border-b-[.2px] gap-4 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-[45%,55%]"> 
                     <div className='lg:flex lg:justify-center'>
                          <Link>
                              <div className='mt-5'>
                                  <Link >
                                      <img src={politics.imgSrc}/>
                                  </Link>

                                  <div className='w-full flex items-center space-x-1 mt-3  font-Custom'>
                                          <div className='h-[8px] w-[8px] bg-[#791212]'></div>
                                          <p className='text-[16px] font-Custom'>{politics.time}</p>
                                          <p>| {politics.author}</p>
                                  </div>

                                  <Link className='font-Custom font-bold text-2xl mt-5 hover:text-PrimaryColor'><p className='mt-3'>{politics.heading}</p></Link>

                                  <div><Link className='font-Custom text-PrimaryColor font-medium text-[16px]'>{politics.subHeading}</Link></div>  
                              </div>
                          </Link> 
                      </div>


                     <div className="border-[#8080802f] border-l-[.2px] gap-3 mt-5 my-5 grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2">
                           {politicsRight.map((index)=>(
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
                <a href=""><img src={""} /></a>
          </Link>

           
          <div className='w-[95%] lg:w-[83%] mt-6'>

               <div className="min-h-[300px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[70%,30%] mt-4 gap-5 border-t-[.2px] border-[#8080802f] border-b-[.2px]">
                    <Link className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                         {politicsMain.map((index)=>(
                            <div key={index.id} className='flex w-full items-center flex-col space-y-4'>
                                <div className='w-full'><img src={index.imgSrc} className='lg:w-[260px]'/></div>                                    
                                
                                <div className=' w-full font-Custom font-bold lg:text-[17px] hover:text-PrimaryColor'><Link>{index.heading}</Link></div> 
                            </div>
                        ))}
                    </Link> 

                    <div>

                    {/* Advert Box */}
                        <Link className='w-full  lg:flex lg:flex-col lg:items-center lg:mt-12'>
                              <h3 className='font-Custom font-bold text-[gray]'>Advertisement</h3>

                            <div className='flex justify-center'><a href='' className='bg-[#F6F6F6] h-[270px] w-full'><img src={"https://tpc.googlesyndication.com/simgad/5974062208041488507"}/></a></div>
                        </Link>

                                                {/* Advert Box */}
                        <Link className='w-full lg:flex lg:flex-col lg:items-center lg:mt-6'>
                              <h3 className='font-Custom font-bold text-[gray]'>Advertisement</h3>

                            <div className='flex justify-center bg-[#F6F6F6]'><a href='' className='bg-[#F6F6F6] h-[270px] w-full'><img src={"https://tpc.googlesyndication.com/simgad/5974062208041488507"}/></a></div>
                        </Link>
                      
                    </div> 
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
  );
}

export default PoliticsFirstComponent;
