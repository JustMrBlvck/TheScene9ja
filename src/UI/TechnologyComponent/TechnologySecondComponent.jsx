import React from 'react'
// import { Link } from 'react-daisyui'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BiSolidMessageAdd } from "react-icons/bi";

function TechnologySecondComponent() {
    const news=[
        {
            id:1,
            newstag:'EDUCATION',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/09/NSE-.jpg?resize=309%2C368&ssl=1',
            newshead:'Female leadership a panacea to Africa’s underdevelopment – Oguntala',
            subheading:'The President of the Nigerian Society of Engineers (NSE), Mrs. Margaret Oguntala, has advocated capacity building for the female professionals...',
            newsdate:'SEPTEMBER 12, 2024',
            reporter:'SCENE 9JA'
        },

        {
            id:2,
            newstag:'TECHNOLOGY',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2022/11/NCC-CORRECT-OFFICIAL-LOGO.jpg?resize=350%2C250&ssl=1',
            newshead:'ITU ranks Nigeria high in 5G digital transformation readiness',
            subheading:'A new report of the International Telecommunications Union (ITU), has ranked Nigeria very high at 71 per cent, in comparative...',
            newsdate:'JULY 24, 2024',
            reporter:'SCENE 9JA'
        },

        {
            id:3,
            newstag:'NEWS',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/07/smart-Router-new-image.png?resize=350%2C250&ssl=1',
            newshead:'Airtel launches smart router, offering Smart TV experience on regular TVs',
            subheading:'Leading telecommunications service provider, Airtel Nigeria, has launched a new device called Airtel Smart Router, a 4G router capable of...',
            newsdate:'JULY 11, 2024',
            reporter:'SCENE 9JA'
        },

        {
            id:4,
            newstag:'TECHNOLOGY',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/07/ITREALMS-15.jpg?resize=350%2C250&ssl=1',
            newshead:'Ojo, Adebayo, Nnamani, Ekuwem, others join DigitalSENSE Hall of Fame',
            subheading:'Sunrise News, July 8, 2024, Lagos, Nigeria: The Executive Director, Media Rights Agenda, Mr. Edetaen Ojo alongside the chairman, Association...',
            newsdate:'JULY 8, 2024',
            reporter:'SCENE 9JA'
        },

        {
            id:5,
            newstag:'TECHNOLOGY',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/07/ITRealms-2.jpg?resize=350%2C250&ssl=1',
            newshead:'DigitalSENSE Africa honours Ekuwem, Odusote, Nwannenna, Adebayo, Uzor, others',
            subheading:'By Demilade Adeniyi Sunrise News - July 1, 2024: The immediate past Secretary to the Government of Akwa-Ibom State, Dr. Emmanuel...',
            newsdate:'JULY 1, 2024',
            reporter:'SCENE 9JA'
        },

        {
            id:6,
            newstag:'BUSSINESS',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/04/HQUBE.jpeg?resize=350%2C250&ssl=1',
            newshead:'Cybercrimes: EFCC, Cyber Security experts tasks Nigerians on data protection',
            subheading:'To curb the huge losses incurred by Nigerians owing to the sharp practices prevalent in the digital space, Economic and...',
            newsdate:'APRIL 21, 2024',
            reporter:'SCENE 9JA'
        },

        {
            id:7,
            newstag:'TECHNOLOGY',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/03/Undersea-Cable.jpg?resize=303%2C167&ssl=1',
            newshead:'Voice, Data Services Affected by Undersea Cable Cuts Restored',
            subheading:'Following the disruption on March 14, 2024, which affected data and voice services due to cuts in undersea fibre optics...',
            newsdate:'MARCH 18, 2024',
            reporter:'SCENE 9JA'
        },

        {
            id:8,
            newstag:'NEWS',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2023/12/NIMECHE.jpg?resize=350%2C250&ssl=1',
            newshead:'Mechanical engineers begin construction of tech advancement academy in Ogun',
            subheading:'The Nigerian Institution of Mechanical Engineers (NIMechE), on Thursday, conducted the ground breaking ceremony for its Mechanical Engineering Technology Advancement...',
            newsdate:'DECEMBER 15, 2023',
            reporter:'SCENE 9JA'
        },

        {
            id:9,
            newstag:'BUSSINESS',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2023/12/Brick.jpg?resize=350%2C250&ssl=1',
            newshead:'Experts task bricklayers on technology adoption',
            subheading:'Some experts in the construction sector have advised bricklayers to embrace new technologies for durable constructions that would boost production...',
            newsdate:'DECEMBER 15, 2023',
            reporter:'SCENE 9JA'
        },

        {
            id:10,
            newstag:'BUSSINESS',
            image:'https://i0.wp.com/sunrise.ng/wp-content/uploads/2023/12/Award-scaled.jpg?resize=350%2C250&ssl=1',
            newshead:'Gibeon & Ajalon Global Concepts Limited Shines at NIEE’s 2023 International Conference/AGM',
            subheading:'The Nigerian Institution of Environmental Engineers a Division of Nigerian Society of Engineers has given an award of excellence to...',
            newsdate:'DECEMBER 15, 2023',
            reporter:'SCENE 9JA'
        }
    ]
  return (
    <div>
        <div className=" min-h-[400px] w-full bg-[] flex justify-center ">
            <div className="min-h-[300px] w-[95%] md:w-[90%] lg:w-[90%] grid grid-cols-1 lg:grid-cols-[60%,40%] ">
            <div className="min-h-[300px] md:min-h-[300px] bg-[]">
                <div className=" h-[100px] w-[80%] md:w-[40%] bg-[]">
                    <div className=" h-[50px] bg-[] flex items-center text-[#303030]">
                    <Link><section className=' flex items-center hover:text-PrimaryColor'> Home</section></Link> <section className=' flex items-center pt-1'><MdKeyboardArrowRight /></section>
                    <Link><section className=' flex items-center hover:text-PrimaryColor'>Category</section></Link> <section className=' flex items-center pt-1'><MdKeyboardArrowRight /> </section>
                        <section className=' flex items-center text-[gray]'>Tecnology</section>
                    </div>
                    <div className=" h-[50px] bg-[] text-[28px] md:text-[30px] font-bold ">
                        <h1>Technology</h1>
                    </div>
                </div>

                    <div className="  min-h-[200px] md:min-h-[300px] mt-3 w-full grid grid-cols-1 gap-4 md:gap-0">

                    {
                        news.map((news)=>(
                            <div key={news.id} className=" md:min-h-[300px] h-[160px] mb-3  w-full bg-[] grid grid-cols-2 md:grid-cols-[40%,50%,10%] lg:grid-cols-2 gap-3 md:gap-3">

                            <div className=" bg-[] h-[300px] relative">
                            <aside className=' h-[30px] min-w-[80px] text-[10px] absolute top-3 left-3  bg-PrimaryColor text-white flex justify-center items-center'>
                                <p>{news.newstag}</p>
                            </aside>
                            <img src={news.image}  alt="" />
                        </div>
                        <div className=" bg-[] md:min-h-[350px]">
                            <section className=' font-bold text-[17px] md:text-[22px] hover:text-PrimaryColor '>
                                <p>{news.newshead}</p>
                            </section>
    
                            <section className=' hidden md:inline-block mt-3 text-[gray] '>
                                <p>{news.subheading}</p>
                            </section>
    
                            <section className=' w-full flex  items-center text-[10px] font-semibold gap-2 mt-3'>
                                <p className=' flex gap-1 text-[gray]'>BY <span className=' text-PrimaryColor'>{news.reporter}</span></p>
                                <p className=' text-[gray]'>{news.newsdate}</p>
                                <span className=' hidden md:inline-block'><BiSolidMessageAdd /></span>
                            </section>
    
                            <section className=' hidden  md:inline-block mt-3'>
                                <button className=' h-[32px] w-[120px] bg-white ' style={{boxShadow:'0 0 3px black'}}>READ MORE</button>
                            </section>
                        </div>
                    </div>  
                        ))
                    }

</div>
               

            </div>



            <div className="min-h-[300px] bg-orange-300"></div>
            </div>
       
        </div>
      
    </div>
  )
}

export default TechnologySecondComponent
