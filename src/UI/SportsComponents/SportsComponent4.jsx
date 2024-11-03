import React from 'react'

function SportsComponent4() {
    const footballdisplay =[
        {
            pics: 'https://www.channelstv.com/wp-content/uploads/2024/11/Leverkusen.jpg',
            text:'Stuggart Hold Wasteful Bayer Leverkusen'
        },
        {
            pics:'https://www.channelstv.com/wp-content/uploads/2024/10/man-united-Brentford.jpg',
            text:'Man Utd Hope For Van Nistelrooy Magic, Arsenal Face Newcastle Test'
        }
    ]
  return (
    <div>
        <div className='min-h-[100px] bg-slate-300 w-full p-[20px] mt-[40px]'>
            <div>
                <h1 className='font-Custom font-semibold text-[1.7rem] text-[#00000095]'>Football</h1>
                <hr className='' />
            </div>
            <div className=' min-h-[200px] bg- grid grid-cols-1 lg:grid-cols-2  mt-10 gap-4'>
                {footballdisplay.map((footballdisplays,index)=>(
                    <div key={index} className='min-h-[200px] w-full  bg- '>
                        <article>
                            <a href="#"><img src={footballdisplays.pics} height='100%' loading='lazy' width='100%' alt="" /></a>
                        </article>

                        <article>
                            <a href="#">  <h1 className='text-start text-[1.5rem]  md:text-[1.9em]  text-[#00000095] font-Custom dark:text-black font-medium hover:text-PrimaryColor'>{footballdisplays.text}</h1></a>
                        </article>
                    </div>
                    
                

                ))}

            </div>

        </div>
    </div>
  )
}

export default SportsComponent4