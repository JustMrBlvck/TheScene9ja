import React from 'react'
import { Link } from 'react-router-dom'

function GeneralSecondComponent() {
     const NewsPolitics = [
        {
          id:0,
          Headline: "Here's What The Next 75 Days Of Transition Will Look Like For President-Elect Donald Trump",
          imgSrc: 'https://theshaderoom.com/wp-content/uploads/2024/11/President-Elect-Donald-Trump-75-Days-Of-Transition-White-House-Explainer-scaled-e1731019359245.jpg'
        },
        {
          id:1,
          Headline: "Lil Durk Faces Life In Prison If Convicted Of New Charges In Murder Scheme of Quando Rondo",
          imgSrc: 'https://theshaderoom.com/wp-content/uploads/2024/11/UPDATE-Lil-Durk-Reportedly-Appears-In-Los-Angeles-Federal-Courthouse-As-Tentative-Trial-Date-Is-Scheduled-scaled.jpg'
        },
        {
          id:2,
          Headline: "Benin Vs Nigeria And Other 2025 AFCON Qualifiers Fixtures (Full List)",
          imgSrc: 'https://www.channelstv.com/wp-content/uploads/2024/01/afcon-trophy.jpg'
        },
        {
          id:3,
          Headline: "Edo PDP Knocks Okpebholo, APC Over Alleged Misrule",
          imgSrc: 'https://www.channelstv.com/wp-content/uploads/2023/03/PDP-logo.png'
        },
     ]

     const NewsPoliticslG = [
      {
        id:0,
        Headline: "Here's What The Next 75 Days Of Transition Will Look Like For President-Elect Donald Trump",
        imgSrc: 'https://theshaderoom.com/wp-content/uploads/2024/11/President-Elect-Donald-Trump-75-Days-Of-Transition-White-House-Explainer-scaled-e1731019359245.jpg'
      },
      {
        id:1,
        Headline: "Lil Durk Faces Life In Prison If Convicted Of New Charges In Murder Scheme of Quando Rondo",
        imgSrc: 'https://theshaderoom.com/wp-content/uploads/2024/11/UPDATE-Lil-Durk-Reportedly-Appears-In-Los-Angeles-Federal-Courthouse-As-Tentative-Trial-Date-Is-Scheduled-scaled.jpg'
      },
      {
        id:2,
        Headline: "Benin Vs Nigeria And Other 2025 AFCON Qualifiers Fixtures (Full List)",
        imgSrc: 'https://www.channelstv.com/wp-content/uploads/2024/01/afcon-trophy.jpg'
      },
      // {
      //   Headline: "Edo PDP Knocks Okpebholo, APC Over Alleged Misrule",
      //   imgSrc: 'https://www.channelstv.com/wp-content/uploads/2023/03/PDP-logo.png'
      // },
      // {
      //   Headline: "Here's What The Next 75 Days Of Transition Will Look Like For President-Elect Donald Trump",
      //   imgSrc: ''
      // },
      // {
      //   Headline: "Here's What The Next 75 Days Of Transition Will Look Like For President-Elect Donald Trump",
      //   imgSrc: ''
      // }
   ]

  return (
    <div className='bg-[white] flex flex-col items-center'>
                                 {/* Mobile and Medium Screens News/Politics Section */}
            <div className='w-[95%] mt-16 lg:hidden'>
                  <h1 className='font-Custom text-PrimaryColor text-4xl font-bold lg:mt-0'>News & Politics</h1>

                  <div className='min-h-[380px] mt-6 md:space-x-6 md:grid md:grid-cols-2 lg:mt-5 lg:gap-8 grid lg:grid-cols-3 lg:space-x-0'>
                     {NewsPolitics.map((index)=>(
                           <div key={index.id} className='bg-[] gap-4 grid grid-rows-[70%,30%] font-Custom font-bold'>
                              <Link>
                                  <img src={index.imgSrc} className='object-cover h-[260px]'/>
                              </Link>

                              <Link className='text-[18px] mt-3 lg:mt-0 hover:text-PrimaryColor'>
                                   {index.Headline}
                              </Link>
                           </div>
                     ))}
                  </div>
             </div>
                                  
                                    {/* Lg General News/Politics*/}
             <div className='hidden w-[83%] mt-14 lg:block'>
                  <h1 className='font-Custom text-PrimaryColor text-4xl font-bold lg:mt-0'>News & Politics</h1>

                  <div className='min-h-[380px] mt-6 md:space-x-6 md:grid md:grid-cols-2 lg:mt-5 lg:gap-8 grid lg:grid-cols-3 lg:space-x-0'>
                     {NewsPoliticslG.map((index)=>(
                           <Link key={index.id} className='bg-[] gap-4 grid grid-rows-[70%,30%] font-Custom font-bold'>
                              <Link>
                                  <img src={index.imgSrc} className='object-cover h-[260px]'/>
                              </Link>

                              <Link className='text-[18px] mt-3 lg:mt-0 hover:text-PrimaryColor'>
                                   {index.Headline}
                              </Link>
                           </Link>
                     ))}
                  </div>
             </div>

    </div>
  )
}

export default GeneralSecondComponent