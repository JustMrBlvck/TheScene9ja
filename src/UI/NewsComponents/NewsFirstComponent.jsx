import React from 'react'
import { Link } from 'react-router-dom'
import RecentMugshots from '../Collections/RecentMugshots.jpg'

function NewsFirstComponent() {
 
   const Newsheading = {
     img: "https://theshaderoom.com/wp-content/uploads/2024/12/President-Joe-Biden-Pardons-Son-Hunter-Delaware-California-Convictions-scaled-e1733161923861.jpg",
     topic:"Free His Boy! What Happens Now That President Biden Pardoned His Son Hunter?"
   }

    const newsHeader = [
        {
            id:0,
               Image: "https://theshaderoom.com/wp-content/uploads/2024/10/15-Year-Old-Reportedly-Testifies-She-4-Others-Were-Bored-When-They-Fatally-Attacked-64-Year-Old-Man-In-Washington-D.C-scaled.jpg",
               Headline: "15 Year-Old Reportadly Testifies Shes & 4 Others Were 'Bored' When They Attecked 64-Year- Old Man In Washington, D.C."
        }, 
        {
            id:1,
              Image: "https://theshaderoom.com/wp-content/uploads/2024/10/Former-University-Of-Tampa-Student-Is-Arrested-After-Being-Accused-Of-Giving-Birth-Throwing-Newborn-Baby-In-Trash-scaled.jpg",
              Headline: "UPDATE: Husband Of Bronx Daycare Owner Sentenced Following Death 1-Year-Old Allegedly Exposed to Fentanyl"
        },
        {
            id:2,
              Image: "https://theshaderoom.com/wp-content/uploads/2024/10/Prayers-Up-At-Least-3-Workers-Dead-After-Bridge-Reportedly-Scheduled-For-Demolition-Collapsed-In-Mississippi-scaled.jpg",
              Headline: "Prayers Up! At Least 3 Workers Dead After Brigde Reportedly scheduled Demolition Collapsed In Mississipi"
        },
        {
            id:3,
              Image: "https://theshaderoom.com/wp-content/uploads/2024/10/Social-Media-Shares-Reactions-After-Family-Members-Of-The-Menendez-Brothers-Call-For-Their-Release-From-Prison-VIDEO-scaled.jpg",  
              Headline: "Social Media Shares Reaction After Family Member Of The Menendez Brothers Brother Call For Their Release From Prison (VIDEO) "
        }
    ]

  return (
    <div className='bg-[#F4EEF2] lg:mt-10 flex flex-col items-center'>
            
        <div className='w-[90%] lg:w-9/12 '>
          <div className='mt-10 min-h-[280px]'>
              <div className='min-h-[280px] w-full grid grid-cols-1 md:h-[250px] md:grid md:grid-cols-[60%,40%] lg:grid lg:grid-cols-[60%,40%]'>
                  <Link className='flex justify-end'>
                       <img src={Newsheading.img}/>
                  </Link>
                  
                  <div className='flex lg:bg-[white] items-center justify-center mt-4 lg:mt-0 lg:mx-2'>
                      <Link className='font-Custom text-center font-bold text-[25px] hover:text-PrimaryColor md:text-[20px] lg:text-3xl lg:leading-[40px]'>{Newsheading.topic}</Link>
                  </div>
              </div>
          </div>


        <div className="mt-[40px] lg:mt-[130px] lg:flex lg:justify-center">
            <div className='grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-4 lg:gap-8'>
                    {newsHeader.map((index)=>(
                          <Link key={index.id} className='grid grid-rows-[65%,35%] lg:grid lg:grid-rows-2'>
                          <div className='h-fit'>
                            <img src={index.Image} className='object-cover'/>
                          </div>

                          <Link className='text-[20px] text-center flex items-center text-[#1A1B1D]  font-bold lg:mt-[-10px] lg:flex lg:justify-center lg:items-start'>
                              <h1 className='font-Custom mt-7 md:mt-[20px] hover:text-PrimaryColor lg:text-[18px]'>{index.Headline}</h1>
                          </Link>
                      </Link>
                    ))}
             </div>
        </div>
     </div>
    </div>
  )
}

export default NewsFirstComponent