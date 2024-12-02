import React from 'react'

function SportsComponent8() {
    const cycling = [
        {
            pic:"https://www.channelstv.com/wp-content/uploads/2024/10/cycling.jpg",
            text:"'Completely Crazy'as lavreyson wins record 15th world cycling ",
            time:'15d'
        },
        {
            pic:"https://www.channelstv.com/wp-content/uploads/2024/08/Ese-lovina-Ukpeseraye.jpg",
            text:"paris olympics:german team lends bicycle to Nigerian cycclist",
            time:'August 6,2024, 6:40pm'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/07/111th-edition-of-the-Tour-de-France-cycling-race__CyclingTdf2024Stage08.jpg',
            text:'cyclist fined after kissing his wife at tour de france',
            time:"August 29,2024, 4:28pm"
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/04/Vingegaard.jpg',
            text:'vineguard suffers lung damage in crash',
            time:"April 5,2024, 5:17pm"
        },
       
    ]
  return (
    <div>
        <div className='min-h-[200px] w-full p-[20px] bg- box-border'>
             <div>
                <h1 className='font-Custom font-semibold text-[1.7rem] capitalize dark:text-white text-[#00000095]'>Cycling</h1>
                <hr className='' />
            </div>

            <div className='min-h-[200px] bg grid grid-cols-1 lg:grid-cols-4  mt-10 gap-4'>
                {cycling.map((cyclings,index)=>(
                    <div key={index} className='min-h-[200px] w-full  bg- '>
                        <article>
                            <a href="#"><img src={cyclings.pic} height='100%' loading='lazy' width='100%' alt="" /></a>
                        </article>

                        <article>
                            <a href="#">  <h1 className='text-start capitalize text-[1.2rem]  md:text-[1.5em]  text-[#00000095] font-Custom dark:text-white font-medium hover:text-PrimaryColor'>{cyclings.text}</h1></a>
                        </article>
                        <div>
                            <span>{cyclings.time}</span>
                        </div>
                    </div>
                    
                

                ))}

            </div>

        </div>
    </div>
  )
}

export default SportsComponent8