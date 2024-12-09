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

    const subfootballdisplay = [
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/11/Amorin.jpg',
            text:'Amorin Handed Challenge Of Restoring Glory Days To Man Utd'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/10/Man-utd.jpg',
            text:'Man Utd Hits Five To Start After Ten Hag, Arsenal, Liverpool Into League Cup Quarters'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/05/ten-hag-man-united.jpg',
            text:"Slot Expects To See Sacked Ten Hag At 'A Big Club Again "
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/05/Ten-hag-1.jpg',
            text:"Ten Hag Thought Another Trophy Would Make Man Utd Season A Success"
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
                            <a href="#">  <h1 className='text-start text-[1.5rem]  md:text-[1.6em]  text-[#00000095] font-Custom dark:text-black font-medium hover:text-PrimaryColor'>{footballdisplays.text}</h1></a>
                        </article>
                    </div>
                    
                

                ))}

            </div>
            <hr />

            <div className=' min-h-[200px] bg- grid grid-cols-1 lg:grid-cols-4  mt-10 gap-4'>
                {subfootballdisplay.map((subfootballdisplays,index)=>(
                    <div key={index} className='min-h-[200px] w-full  bg- '>
                        <article>
                            <a href="#"><img src={subfootballdisplays.pic} height='100%' loading='lazy' width='100%' alt="" /></a>
                        </article>

                        <article>
                            <a href="#">  <h1 className='text-start text-[1.2rem]  md:text-[1.5em]  text-[#00000095] font-Custom dark:text-black font-medium hover:text-PrimaryColor'>{subfootballdisplays.text}</h1></a>
                        </article>
                    </div>
                    
                

                ))}

            </div>

        </div>
    </div>
  )
}

export default SportsComponent4