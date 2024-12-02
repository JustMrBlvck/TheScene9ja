import React from 'react'

function SportsComponent7() {
    const basketball = [
        {
            pic:"https://www.channelstv.com/wp-content/uploads/2024/10/NBA.jpg",
            text:"NBA Nike extend partnership deal for 12 years ",
            time:'12d'
        },
        {
            pic:"https://www.channelstv.com/wp-content/uploads/2022/12/Curry-1-e1671289402551.jpg",
            text:"currysigns new contract extensions with warriors",
            time:'August 29,2024, 6:44pm'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/08/dtigress-.jpg',
            text:"D'Tigress makes history as first african team to break into FIBA top 10",
            time:"August 29,2024, 4:28pm"
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2023/08/rena-wakama-.jpg',
            text:'olympic:tinubu celebrates rena wakama for winning best coach prize',
            time:"August 12,2024, 12:16pm"
        },
       
    ]
  return (
    <div>
        <div className='min-h-[200px]  w-full p-[20px] box-border'>
            <div>
                <h1 className='font-Custom font-semibold text-[1.7rem] capitalize text-[#00000095] dark:text-white'>Basketball</h1>
                <hr className='' />
            </div>
            <div className='min-h-[200px] bg grid grid-cols-1 lg:grid-cols-4  mt-10 gap-4'>
                {basketball.map((basketballs,index)=>(
                    <div key={index} className='min-h-[200px] w-full  bg- '>
                        <article>
                            <a href="#"><img src={basketballs.pic} height='100%' loading='lazy' width='100%' alt="" /></a>
                        </article>

                        <article>
                            <a href="#">  <h1 className='text-start capitalize text-[1.2rem]  md:text-[1.5em]  text-[#00000095] font-Custom dark:text-white font-medium hover:text-PrimaryColor'>{basketballs.text}</h1></a>
                        </article>
                        <div>
                            <span>{basketballs.time}</span>
                        </div>
                    </div>
                    
                

                ))}

            </div>

        </div>
    </div>
  )
}

export default SportsComponent7