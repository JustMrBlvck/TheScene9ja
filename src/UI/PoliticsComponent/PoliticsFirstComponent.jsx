import React from "react";
import { Link } from "react-router-dom";

function PoliticsFirstComponent({  politicsHead = [],
  politicsNews = [],
  subpolitics = [],
  politicsMain = [],
  totalPages,
  currentPage,
  paginate, }) {
  return (
    <div className="">
      <div className="min-h-[100px] bg flex flex-col items-center">
        <div className="min-h-[100px] bg-[yellow] w-full md:w-[97%] lg:w-[90%]">
          <h1>place an advert here</h1>
        </div>
        <div className="w-full md:w-[97%] lg:w-[90%]  min-h-[50px] items-center grid font-Custom capitalize font-bold">
          <h1>politics</h1>
          <hr className="font-bold border-black border-[1px]" />
        </div>

        <div className="min-h-[100px] bg w-full md:w-[97%] lg:w-[90%] border-b-[1px] border-b-black dark:border-b-[white]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Headline Section */}
          <div className="lg:col-span-2">
            {politicsHead.map((item, index) => (
              <Link key={index} to="#">
                <div>
                  <img src={item.img} alt={item.heading} loading="lazy" className="w-full h-auto" />
                </div>
                <div className="flex dark:text-white  gap-2 items-center font-Custom  text-[1rem]">
                  <span>
                    <h1 className="before:w-[10px] flex relative items-center gap-2 before:h-[10px] before:bg-red-500   ">
                    {item.time} |

                    </h1>
                  </span>
                  <span className="font-semibold capitalize">
                    {item.author}
                  </span>
                </div>
                <div className="dark:text-white">
                  <h1 className="font-bold  text-[1.2rem]  lg:text-[1.4rem]  font-custom hover:text-PrimaryColor">{item.heading}</h1>
                  <p className="text-start font-Custom text-[1.2rem] lg:text-[1.3rem]">{item.about}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* News Items Section */}
          <div className="grid grid-cols-1  gap-1 md:grid-cols-1 lg:grid-cols-2">
            {politicsNews.map((news, index) => (
              <Link key={index} to="#">
                <div>
                  <img src={news.img} alt={news.heading} width='100%' height='100%' loading="lazy" className="w-full h-auto" />
                </div>
                <div className="flex dark:text-white  gap-2 items-center font-Custom  text-[1rem]">
                    <span>
                      <h1 className="before:w-[10px] flex relative items-center gap-2 before:h-[10px] before:bg-red-500   ">
                      {news.time} |

                      </h1>
                    </span>
                    <span className="font-semibold capitalize">
                      {news.author}
                    </span>
                  </div>
                  <div className="dark:text-white">
                  <h1 className="font-bold  text-[1.2rem]  lg:text-[1.3rem]  font-custom hover:text-PrimaryColor">{news.heading}</h1>
                    <p className="text-start font-Custom text-[1.2rem] lg:text-[1.3rem]">{news.about}</p>
                  </div>
              </Link>
            ))}

          </div>
          <div className="flex md:col-span-2 lg:justify-end  flex-col md:grid md:grid-cols-2 lg:mt-[-200px]  w-full lg:w-[50%] lg:ml-[101%]  gap-2 ">
            {subpolitics.map((subpolitic,index)=>(
              <Link key={index}>
               <div>
                <div>
                  <img src={subpolitic.img} loading="lazy" alt="" />
                </div>
                <div>
                <div className="flex dark:text-white  items-center font-Custom  text-[1rem]">
                    <span>
                      <h1 className="before:w-[10px] flex relative items-center gap-2 before:h-[10px] before:bg-red-500   ">
                      {subpolitic.time} |

                      </h1>
                    </span>
                    <span className="font-semibold capitalize text-start">
                      {subpolitic.author}
                    </span>
                  </div>
                  <div className="dark:text-white">
                  <h1 className="font-bold  text-[1.2rem]  lg:text-[1.3rem]  font-custom hover:text-PrimaryColor">{subpolitic.heading}</h1>
                    <p className="text-start font-Custom text-[1.2rem] lg:text-[1.3rem]">{subpolitic.about}</p>
                  </div>

                </div>
               </div>
              </Link>
            ))}
            
            
          </div>
       
        </div>
        <div className="min-h-[100px]  w-full md:w-[95%] lg:w-[90%] bg-red-500 mt-4">
          <h1>place an advert here</h1>
        
        </div>

        <div className="min-h-[100px] w-full md:w-[95%] lg:w-[90%] grid-cols-1  grid md:grid-cols-1 lg:grid-cols-[80%,20%] mt-4">
          <div className=" bg  grid grid-cols-1 md:grid-cols-2  gap-3 lg:grid-cols-3  ">
            {politicsMain.map((politicsMainn,index)=>(
              <Link key={index}>
                  <div>
                    <img src={politicsMainn.img} loading="lazy" alt="" />
                  </div>
                  <div className="dark:text-white font-Custom hover:text-PrimaryColor font-bold text-[1.2rem] capitalize">
                    <h3>{politicsMainn.about}</h3>

                  </div>

              </Link>


            ))}

          </div>
          <div className="bg-yellow-300 grid grid-rows-2 mt-2">
            <h1>
              place an advert here
            </h1>

          </div>

        </div>
        <div className="pagination-controls flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`btn ${currentPage === i + 1 ? "btn-active" : ""}`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default PoliticsFirstComponent;
