import React from 'react'

function SportsComponent2() {
    const subpic = [
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/03/Amorim.jpg',
            text:'Amorim Joins Manchester United After ",Now Or Never" Ultimatum',
            time:'7h'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/06/Vinicius-Jr.jpg',
            text:'Chelsea Wants Real Madrid Star Vinicius',
            time:'6h'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2021/11/maradona.jpg',
            text:'Children Of Football Legend Maradona Unveil Memorial Site Plans',
            time:'12h'
        },
        {
            pic: 'https://www.channelstv.com/wp-content/uploads/2024/11/Dwight-Yorke.jpg',
            text:'Former Man Utd Star Yorke Named Coach Of Trinidad And Tobago',
            time:'22h'

        }
    ]
  return (
    <div className='min-h-[200px] w-full dark:text-white bg grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3 p-[20px] box-border'>
        {subpic.map((subpics,index)=>(
            <div key={index} className='min-h-[200px] '>
                <article className='min-h-[200px] w-full'>
                    <a href="#"><img src={subpics.pic} loading='lazy' height='100%' width='100%' alt={subpics.text} /></a>
                </article>
                <article className='min-h-[20px] w-full'>
                    <a href="#">
                    <h1 className='text-start text-[1.3rem] font-Custom dark:text-white font-bold hover:text-PrimaryColor'>{subpics.text}</h1>
                    </a>
                </article>
                <div>
                    <span>{subpics.time}</span>
                </div>

            </div>
        ))}

    </div>
  )
}

export default SportsComponent2