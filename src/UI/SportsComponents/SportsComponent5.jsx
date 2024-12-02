import React from 'react'

function SportsComponent5() {
    const tennisdisplay = [
        {
            pics:'https://www.channelstv.com/wp-content/uploads/2024/07/Sinner.jpg',
            text:"world no 1 sinner out of paris with 'virus' "
        },
        {
            pics:'https://www.channelstv.com/wp-content/uploads/2024/01/Naomi-Osaka.jpg',
            text:"Naoimi Osaka's season over because of injury"
        }
    ]
    const subtennisdisplay =[
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2022/06/Serena-Williams-tennis-1.jpg',
            text:'serena williams has graperfruit-siezed cyst removed from neck'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/10/Sinner.jpg',
            text:'sinner wins shanggai masters to deny djokovic 100th career title'
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/10/Sabalenka-1.jpg',
            text: "sablenka beat local hero zheng to win third wuhan open title"
        },
        {
            pic:'https://www.channelstv.com/wp-content/uploads/2024/10/Novak-Djokovic.jpg',
            text:'djovick to face sinner in blockbuster shangai masters final'
        }
    ]
  return (
    <div>
        <div className='min-h-[200px] w-full bg p-[20px] box-border'>
            <div>
                <h1 className='font-Custom font-semibold text-[1.7rem] text-[#00000095] dark:text-white'>Tennis</h1>
                <hr className='' />
            </div>
            <div className=' min-h-[200px] bg- grid grid-cols-1 lg:grid-cols-2  mt-10 gap-4'>
                {tennisdisplay.map((tenniss,index)=>(
                    <div key={index} className='min-h-[200px] w-full  bg- '>
                        <article>
                            <a href="#"><img src={tenniss.pics} height='100%' loading='lazy' width='100%' alt="" /></a>
                        </article>

                        <article>
                            <a href="#">  <h1 className='text-start text-[1.5rem] capitalize  md:text-[1.9em]  text-[#00000095] font-Custom dark:text-white font-medium hover:text-PrimaryColor'>{tenniss.text}</h1></a>
                        </article>
                    </div>
                    
                

                ))}

            </div>

                    {/* CONTENTS BELOW TENNIS AREA !! */}

            <div className='min-h-[200px] bg- grid grid-cols-1 lg:grid-cols-4  mt-10 gap-4'>
                {subtennisdisplay.map((subtennisdisplays,index)=>(
                    <div key={index} className='min-h-[200px] w-full  bg- '>
                        <article>
                            <a href="#"><img src={subtennisdisplays.pic} height='100%' loading='lazy' width='100%' alt="" /></a>
                        </article>

                        <article>
                            <a href="#">  <h1 className='text-start capitalize text-[1.2rem]  md:text-[1.5em]  text-[#00000095] font-Custom dark:text-white font-medium hover:text-PrimaryColor'>{subtennisdisplays.text}</h1></a>
                        </article>
                    </div>
                    
                

                ))}

            </div>

        </div>
    </div>
  )
}

export default SportsComponent5