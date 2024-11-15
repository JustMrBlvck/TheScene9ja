import React from 'react'
import { Link } from 'react-router-dom'
import RecentMugshots from '../Collections/RecentMugshots.jpg'

function NewsFirstComponent() {
    const newsHeader = [
        {
            id: 1,
               Image: "https://theshaderoom.com/wp-content/uploads/2024/10/15-Year-Old-Reportedly-Testifies-She-4-Others-Were-Bored-When-They-Fatally-Attacked-64-Year-Old-Man-In-Washington-D.C-scaled.jpg",
               Headline: "15 Year-Old Reportadly Testifies Shes & 4 Others Were 'Bored' When They Attecked 64-Year- Old Man In Washington, D.C."
        }, 
        {
            id: 2,
              Image: "https://theshaderoom.com/wp-content/uploads/2024/10/Former-University-Of-Tampa-Student-Is-Arrested-After-Being-Accused-Of-Giving-Birth-Throwing-Newborn-Baby-In-Trash-scaled.jpg",
              Headline: "UPDATE: Husband Of Bronx Daycare Owner Sentenced Following Death 1-Year-Old Allegedly Exposed to Fentanyl"
        },
        {
            id: 3,
              Image: "https://theshaderoom.com/wp-content/uploads/2024/10/Prayers-Up-At-Least-3-Workers-Dead-After-Bridge-Reportedly-Scheduled-For-Demolition-Collapsed-In-Mississippi-scaled.jpg",
              Headline: "Prayers Up! At Least 3 Workers Dead After Brigde Reportedly scheduled Demolition Collapsed In Mississipi"
        },
        {
            id: 4,
              Image: "https://theshaderoom.com/wp-content/uploads/2024/10/Social-Media-Shares-Reactions-After-Family-Members-Of-The-Menendez-Brothers-Call-For-Their-Release-From-Prison-VIDEO-scaled.jpg",  
              Headline: "Social Media Shares Reaction After Family Member Of The Menendez Brothers Brother Call For Their Release From Prison (VIDEO) "
        }
    ]

  return (
    <div>
 
          <div className='min-h-[72vh] bg-[#F4EEF2] mt-10 md:min-h-[35vh] md:flex md:items-center md:justify-center lg:min-h-[100vh] lg:flex lg:items-center lg:justify-center'>
              <div className='min-h-[280px] bg-[green] w-full grid grid-cols-1 md:h-[250px] md:grid md:grid-cols-[60%,40%] md:mx-14 lg:h-[500px] lg:grid lg:grid-cols-[65%,35] lg:mx-28'>
                  <Link className='flex justify-end'>
                       <img src={RecentMugshots}/>
                  </Link>
                  
                  <div className='bg-[white] flex justify-center items-center'>
                      <a href="" className='font-Custom font-bold text-center text-[25px] hover:text-PrimaryColor md:text-[20px] lg:text-3xl lg:leading-[50px]'>
                           Recent Mugshot Of <br />
                           Erik & Lyle <br />
                           Menendez Surface <br />
                           Following Los <br />
                           Angeles DA's <br />
                           Recommendation <br />
                           To Resentence The <br />
                           Brothers
                      </a>
                  </div>
              </div>
          </div>


        <div className=" min-h-[30px] bg-[#F4EEF2] lg:flex lg:justify-center md:mx-14 lg:mx-28">
            <div className='min-h-[300px] bg-[] grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-4 lg:gap-8'>
                    {newsHeader.map((News, index)=>(
                          <Link key={index} className='h-[410px] bg-[] grid grid-rows-2 md:h-[340px]'>
                          <div className='bg-[]'>
                            <img src={News.Image} className='object-cover'/>
                          </div>

                          <Link className='bg-[] text-[20px] text-center flex items-center  md:justify-center md:items-end text-[#1A1B1D]  font-bold lg:mt-[-10px] lg:flex lg:justify-center lg:items-start'>
                              <h1 className='font-Custom mt-7 mx-3 md:mt-[20px] hover:text-PrimaryColor lg:text-[18px]'>{News.Headline}</h1>
                          </Link>
                      </Link>
                    ))}
             </div>
        </div>
 
    </div>
  )
}

export default NewsFirstComponent