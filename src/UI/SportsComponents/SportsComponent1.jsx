import React from 'react'
import { Link } from 'react-router-dom'


function SportsComponent1() {
    const head= [
        {
            pics:'https://www.channelstv.com/wp-content/uploads/2024/11/PSG.jpg',
            text:'PSG "Fight" To extend Lead Atop Of Ligue 1 with  Lens Win',
            time:'7m'
        }

    ]

    const header =[
        {
            pics:'https://www.channelstv.com/wp-content/uploads/2024/11/juventus-udinese.jpg',
            text:"Motta's Juventus Up To Third With 'Important' Udinese Win",
            time:'3m'
        },
        {
            pics:'https://www.channelstv.com/wp-content/uploads/2024/11/harry-kane.jpg',
            text:'Kane Double Takes Bayern Past Union ,Frankfurt Hit Seven',
            time:'2h'
        },
        {
            pics:'https://www.channelstv.com/wp-content/uploads/2024/11/liverpool-brighton.jpg',
            text:'Salah Strike Beat Brighton To Take Liverpool Top',
            time:'4h'
        },
        {
            pics:'https://www.channelstv.com/wp-content/uploads/2024/11/man-city.jpg',
            text:'Champions Manchester City Lose To Bournemouth, Suffers First Leauge Defeat',
            time:'4h'

        }
        
    ]
  return (
    <div>
        <div className='min-h-[100px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[60%,40%] p-[20px] box-border gap-3'>
            {head.map((heads,index)=>(
                <Link>
                    <div key={index} className='min-h-[200px] relative '>
                        <div>
                            <img loading='lazy' src={heads.pics} height='100%' width='100%' alt="" />
                        </div>
                        <div className='absolute min-h-[100px] w-[100%] bg-[#00000072] text-white font-Custom font-bold top-20  md:top-[290px] flex justify-center flex-col text-[1.3rem] md:text-[1.7rem] p-[10px] box-border '>
                            <h1 className='hover:text-PrimaryColor'>{heads.text}</h1>
                            <h1>{heads.time}</h1>
                        </div>
 
                    </div>
               
             
                </Link>
            ))}
            <div className='min-h-[100px] bg mt-2 grid gap-4 md:hidden'>
                {header.map((headers, index)=>(
                    <Link>
                        <div key={index} className='bg w-full flex gap-2'>
                            <div className='w-[40%]'>
                             <img src={headers.pics} loading='lazy' width='100%' height='100%' alt="" />

                            </div>
                            <article className='w-[60%]'>
                                <h1 className='text-[1.3rem] font-Custom dark:text-black hover:text-PrimaryColor font-bold'>{headers.text}</h1>
                                <span>{headers.time}</span>
                            </article>
                            

                        </div>
                    
                    
                    </Link>
                ))}
                
            
            </div>      

            {/* FOR MEDIUM SCREEN */}


            <div className='min-h-[100px] bg hidden lg:hidden md:grid gap-8  grid-cols-2'>
                {header.map((headers, index)=>(
                    <Link>
                        <div className='bg  flex gap-2 '>
                            <article className='w-[60%]'>
                                <h1 className='text-[1.3rem] text-black font-Custom dark:text-black font-bold hover:text-PrimaryColor'>{headers.text}</h1>
                                <span>{headers.time}</span>
                            </article>
                            <div className='w-[50%]'>
                             <img src={headers.pics} loading='lazy' width='100%' height='100%' alt="" />

                            </div>                         
                        </div>
                    </Link>
                ))}
                
            
            </div>     


           <div className='min-h-[100px] bg hidden lg:block md:hidden gap-10  grid-cols-2'>
                {header.map((headers, index)=>(
                    <Link>
                        <div className='bg  flex  '>
                            <article className='w-[60%]'>
                                <h1 className='text-[1.3rem] font-Custom dark:text-black font-bold hover:text-PrimaryColor'>{headers.text}</h1>
                                <span>{headers.time}</span>
                            </article>
                            <div className='w-[50%]'>
                             <img src={headers.pics} loading='lazy' width='100%' height='100%' alt="" />

                            </div>                         
                        </div>
                    </Link>
                ))}
                
            
            </div>      

          

        </div>
    </div>









// {head.map((heads, index)=>(
//     <Link key={index} className='min-h-[350px] bg-[] border-b-[.2px] border-[#8080802f] grid grid-cols-1 md:h-[200px] md:grid md:grid-cols-1 lg:h-[220px] lg:grid lg:grid-cols-[40%,60%]'>
//         <Link className='bg-[] '>
//               <img src={heads.pics} height='100%' width='100%' className=''/>
//         </Link>

//         <div className=' absolute '>
//            <Link className='text-[18px] text-start font-Custom font-bold md:text-[16px] lg:text-[17px] hover:text-SecondaryColor duration-75'>{heads.text}</Link>
//         </div>
//     </Link>
//  ))}
  )
}

export default SportsComponent1