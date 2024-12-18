import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';


function DisplayFirstComponet() {
  const {sportsSid} = useParams();

     const display = {
        heading:"Work Ongoing On 150,000b/d Second P’Harcourt Refinery, To Become Operational Soon — Presidency",
        topic:"The update comes following controversies which have trailed the resuscitation of the 60, 000 barrels per day old Port Harcourt refinery."
     }

  return (
    <div className='bg-white flex flex-col items-center dark:text-white'>

             {/* Advert Box */}
          <Link className='md:h-[200px] w-[90%] lg:w-9/12bg-[#F6F6F6] md:flex items-center justify-center mt-10'> 
                <a href=""><img src={"https://www.lindaikejisblog.com/advertss/1731844933.gif"} /></a>
          </Link>
          
           <div className='w-[90%] lg:w-9/12 border-t-[.2px] border-[#8080802f]'>
                 
                  <div className='mt-8 lg:p-3'>
                        <p className='font-Custom font-medium text-2xl md:text-4xl lg:text-5xl'>
                            {display.heading}
                        </p>

                        <p className='font-Custom text-[21px] mt-3'>
                            {display.topic}
                        </p>

                        <div className='flex gap-2 mt-7 text-white font-Custom'>
                             <a className='h-[40px] w-[130px] rounded-sm flex justify-center items-center gap-1 bg-PrimaryColor'href=""><FaXTwitter />  Twitter</a>
                             <a className='h-[40px] w-[130px] rounded-sm flex justify-center items-center gap-1 bg-PrimaryColor' href=""><FaFacebookF /> Facebook</a>
                             <a className='h-[40px] w-[130px] rounded-sm flex justify-center items-center gap-1 bg-PrimaryColor' href=""><FaInstagram />  Instagram</a>
                        </div>
                  </div>

           </div>

    </div>
  )
}

export default DisplayFirstComponet