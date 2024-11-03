import React from 'react'

function SportsComponent6() {
    const boxing = [
        {
            pic:"https://www.channelstv.com/wp-content/uploads/2024/09/Anthony-Joshua.jpg",
            text:"'warrior joshua vows to fight on despite dubious mauling",
            time:'Semptember 22,2024, 3:47pm'
        },
        {
            pic:"https://www.channelstv.com/wp-content/uploads/2024/08/Algerias-Imane-Khelif-__BoxingOlyParis2024-4.jpg",
            text:"gender row boxer imane khelif wins olympic gold",
            time:'August 10,2024, 12:12am'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/07/pacquiao.jpg',
            text:"pacquio exhibition fight in japan ends in a draw",
            time:"July 28,2024, 3:18pm"
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/06/pacquaio.jpg',
            text:'pacquio gets new  opponent for japan exhibition fight',
            time:"June 28,2024, 6:177pm"
        }
    ]
  return (
    <div>
        <div className='min-h-[200px] w-full p-[20px] box-border  mt-10'>
            <div>
                <h1 className='font-Custom font-semibold text-[1.7rem] capitalize text-[#00000095]'>Boxing</h1>
                <hr className='' />
            </div>
            <div className='min-h-[200px] bg grid grid-cols-1 lg:grid-cols-4  mt-10 gap-4'>
                {boxing.map((boxings,index)=>(
                    <div key={index} className='min-h-[200px] w-full  bg- '>
                        <article>
                            <a href="#"><img src={boxings.pic} height='100%' loading='lazy' width='100%' alt="" /></a>
                        </article>

                        <article>
                            <a href="#">  <h1 className='text-start capitalize text-[1.2rem]  md:text-[1.5em]  text-[#00000095] font-Custom dark:text-black font-medium hover:text-PrimaryColor'>{boxings.text}</h1></a>
                        </article>
                        <div>
                            <span>{boxings.time}</span>
                        </div>
                    </div>
                    
                

                ))}

            </div>

        </div>
    </div>
  )
}

export default SportsComponent6