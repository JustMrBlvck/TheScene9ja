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
 
          <div className='min-h-[100vh] bg-[#F4EEF2] mt-10 flex justify-center items-center'>
              <div className='min-h-[500px] w-full bg-[]  grid grid-cols-1  md:h-[250px] md:w-[90%] md:grid md:grid-cols-[60%,40%] md:top-12 md:left-8 lg:h-[500px] lg:w-[87%] lg:grid lg:grid-cols-[65%,35] lg:top-10 lg:left-24'>
                  <Link>
                       <img src={RecentMugshots}/>
                  </Link>
                  
                  <div className='bg-[white] flex justify-center items-center'>
                      <a href="" className='font-Custom font-bold text-center text-[22px] hover:text-PrimaryColor md:text-[18px] lg:text-3xl lg:leading-[50px]'>
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


        <div className=" w-full flex justify-center">
        <div className='min-h-[380px] bg-[] w-full grid grid-cols-1 gap-8 mt-16  md:w-[90%] md:grid md:grid-cols-2 md:top-[280px] md:left-8 lg:w-[87%] lg:grid lg:grid-cols-4 lg:top-[500px] lg:left-24 lg:gap-8'>
                {newsHeader.map((News, index)=>(
                      <Link key={index} className='h-[380px] bg-[] grid grid-rows-2'>
                      <div className='bg-[]'>
                         <img src={News.Image} className='object-cover'/>
                      </div>

                      <Link className='bg-[] text-[20px] text-center flex items-center md:justify-center md:items-center text-[#1A1B1D]  font-bold lg:mt-[-10px] lg:flex lg:justify-center lg:items-start'>
                           <h1 className='font-Custom mt-[90px] md:mt-[20px] hover:text-SecondaryColor'>{News.Headline}</h1>
                      </Link>
                  </Link>
                ))}
          </div>
        </div>
 
    </div>
  )
}

export default NewsFirstComponent