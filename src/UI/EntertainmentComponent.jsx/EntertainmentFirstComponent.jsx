import React from 'react'
import { Link } from 'react-router-dom'

function EntertainmentFirstComponent({
  headEntertainment=[], 
  subEntertainment=[],
  asideEntertainment=[],
  mainEntertainment=[],
  paginate,
  currentPage,
  totalPages
}) {

            {/* CREATING AN OBJECT FOR ADVERT JUST FOR AN EASY ACCESS HERE  */}
  const advertBox = {
    AD: "https://dsp-media.eskimi.com/upload/142402_2123234271_0bd86081fa39063dcaeca9893dde821d.jpg",
   ADd: "https://sunrise.ng/wp-content/uploads/2024/04/RSA-Mortgage-digital-banner-300x250-1.png"
 }
 
  return (
    <div >
      <div className='min-h-[100px] dark:text-white flex items-center flex-col'>
       <div className="min-h-[100px]  w-full md:w-[97%] lg:w-[90%]">
          <a href=""><img src={"https://i0.wp.com/sunrise.ng/wp-content/uploads/2020/04/Explore-Digital-Bill-1.jpg"} /></a>
        </div>
        <div className="w-full md:w-[97%] lg:w-[90%] text-[1.2rem]  min-h-[50px] items-center grid font-Custom capitalize font-bold">
          <h1>entertainment</h1>
          <hr className="font-bold border-black border-[1px]" />
        </div>

        <div className='min-h-[100px] bg w-full md:w-[97%] lg:w-[90%] border-b-[1px] border-b-black dark:border-b-[white]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-2'>
            {headEntertainment.map((item,index)=>(
              <Link key={index}>
                <div>
                  <img src={item.img} loading='lazy' height='100%' width='100%' alt={item.heading} />
                </div>
                <div className='flex gap-1 items-center'>
                  <h1 className='before:w-[10px] before:h-[10px] flex relative items-center before:bg-[red]'>{item.time} |</h1>
                  <h1 className='text-[1.1rem] font-Custom font-bold'>{item.author}</h1>
                </div>
                <div>
                  <article className='leading-8'>
                    <h2 className='text-[1.3rem] font-Custom font-bold'>
                      {item.heading}
                    </h2>
                    <p className='font-Custom text-[1rem] font-semibold'>
                      {item.about}
                    </p>
                  </article>
                </div>
              
              </Link>
             
            ))}
          </div>
          <div className='b grid grid-cols-1 md:grid-cols-1 gap-3 lg:grid-cols-2'>
            {subEntertainment.map((item,index)=>(
              <Link key={index}>
                <div>
                <img src={item.img} width='100%' height='100%' loading='lazy' alt="" />
              </div>
              <div className='flex gap-1 items-center'>
                  <h1 className='before:w-[10px] before:h-[10px] flex relative items-center before:bg-[red]'>{item.time} |</h1>
                  <h1 className=' font-Custom font-bold'>{item.author}</h1>
              </div>
              <div>
                <article className='font-Custom font-bold '>
                  <h3>{item.heading}</h3>
                </article>
              </div>

              
              </Link>
              
            ))}

          </div>
          <div className='flex md:col-span-2 lg:justify-end  flex-col md:grid md:grid-cols-2 lg:mt-[-200px]  w-full lg:w-[50%] lg:ml-[101%]  gap-2 '>
            {asideEntertainment.map((items,index)=>(
             <Link key={index}>
               <div>
                <img src={items.img} alt={items.heading} />
              </div>
              <div className='flex gap-1 items-center dark:text-white'>
                  <h1 className='before:w-[10px] before:h-[10px] flex relative items-center before:bg-[red]'>{items.time} |</h1>
                  <h1 className=' font-Custom font-bold'>{items.author}</h1>
              </div>
              <div className='font-Custom font-bold'>
                <h3>{items.heading}</h3>
              </div>
             
             </Link>

            ))}
          </div>

        </div>
        <div className='min-h-[100px] w-full md:w-[97%] lg:w-[90%]  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[80%,20%] mt-4 gap-2'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              {mainEntertainment.map((item,index)=>(
                <Link key={index}>
                  <div>
                    <img src={item.img} height='100%' width='100%' loading='lazy' alt={item.heading} />
                  </div>
                  <div className='font-Custom font-bold text-[1.2rem]'>
                    <h3>{item.heading}</h3>
                  </div>

                </Link>
              ))}

          </div>
        {/* <div className='min-h-[100px] bg-yellow-200 w-full lg:hidden '>
          wsdcfv 

        </div> */}
      
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
              {Object.values(advertBox).map((url, index) => (
                    <img key={index} src={url} alt={`Advert ${index}`} />
                  ))}       
          </div>
    
        </div>
        <div className='min-h-[40px] w-full md:w-[96%] lg:w-[90%]  mt-2'>
          {Array.from({length:totalPages},(_, i)=>(
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
  )
}

export default EntertainmentFirstComponent