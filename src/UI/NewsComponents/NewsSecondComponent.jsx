import React from 'react'
import { Link } from 'react-router-dom'

function NewsSecondComponent() {

    const News = [
        {
          id:1,
          Image: "https://theshaderoom.com/wp-content/uploads/2024/10/LeBron-James-His-Son-Bronny-Are-Reportedly-Being-Sued-scaled.jpg",
          Subject:"Bronny & LeBron James Are Reportedly Being Sued"
        }, {
          id:2,
          Image: "https://theshaderoom.com/wp-content/uploads/2024/10/UPDATE-Los-Angeles-County-District-Attorney-Shares-Decision-On-Whether-The-Menendez-Brothers-Will-Be-Resentenced-scaled.jpg",
          Subject:"UPDATE: Los Angeles County District Attorney Decision On Whether The Menendez Brothers Will Be Resenteced"
        }, {
          id:3,
          Image: "https://www.lindaikejisblog.com/photos/shares/bob_1730021187.jpg",
          Subject:"Bobrisky May Face Fresh Criminal Charges As Investigation Panel Indicts Four Prison Officers"
        }, {
          id:4,
          Image: "https://www.icirnigeria.org/wp-content/uploads/2021/01/Goodluck-Ebele-Jonathan-GEJ-3.jpg",
          Subject:"I Felt Like The World Was Against Me When i Lost Election In 2015 - Jonathan"
        }, {
          id:5,
          Image: "https://theshaderoom.com/wp-content/uploads/2024/10/Channel-Yonko-Faces-Charges-For-Allegedly-Dropping-Hannah-Yonko-From-Third-Floor-Hotel-Balcony-scaled-e1729802334715.jpg",
          Subject:"Texas Mother Faces Charges For Allegedly Dropping Her Toddler From Third-Floor Hotel Balcony"
        }, {
          id:6,
          Image: "https://www.lindaikejisblog.com/photos/shares/delta_1730013028.png",
          Subject:"Delta Police Arrest Woman For S3x Trafficking Her 15-Year-Old Daughter"
        }, {
          id:7,
          Image: "https://www.naijaloaded.com.ng/wp-content/uploads/2024/01/Asiwaju-Bola-Tinubu-2-255x180.jpg",
          Subject:'"Lead By Example" - Northern Groups Tells Tinubu Amid Ecomonic Hardship'
        }, {
          id:8,
          Image: "https://www.naijaloaded.com.ng/wp-content/uploads/2024/10/header-65-255x180.jpg",
          Subject:'You Will Find The Trouble You Are Looking For - Falz Tells Very Dark man'
        }, {
          id:9,
          Image: "https://theshaderoom.com/wp-content/uploads/2024/10/Top-10-U.S.-Bank-BUSTED-For-Drug-Related-Money-Laundering-TSR-Newz-scaled.jpg",
          Subject:'Top 10 U.S Bank BUSTED For Drug- Related Money Laundering! | TSja NEWS'
        }, {
          id:10,
          Image: "https://www.channelstv.com/wp-content/uploads/2024/02/King-Charles-.jpg",
          Subject:'King Charles To Resume Foreign Tours After Cancer Diagnosis'
        },
      ]
    
      const LatestNews = [
        {
          id:1,
          Image:"https://theshaderoom.com/wp-content/uploads/2024/10/Social-Media-Speculates-Dej-Loaf-Is-Calling-For-Lil-Durks-Freedom-After-She-Dropped-THIS-Bold-Message.png",
          PostHead:"Hol's Up! Social Media Thinks Dej Loaf May Have Shared A Now-Delected Message About Lil Durk",
          Time:""
        }, {
          id:2,
          Image:"https://www.lindaikejisblog.com/photos/shares/AYRA%20STARR%201_1729846972.jpg",
          PostHead:"Ayar Starr Becomes The Official Face of Infinix's HOT Series",
           Time:""
        }, {
          id:3,
          Image:"https://theshaderoom.com/wp-content/uploads/2024/10/Okay-Angel-Reese-Shares-Major-Update-After-Going-Viral-For-Saying-Her-WNBA-Salary-Doesnt-Cover-All-Of-Her-Bills-scaled.jpg",
          PostHead:"Okay! Angel Reese Shares Major Update After Going Viral For Saying Her WNBA Salary Doesn't Cover All Of Her Bills",
           Time:""
        }, {
          id:4,
          Image:"https://theshaderoom.com/wp-content/uploads/2024/10/Social-Media-Goes-IN-On-Shaquille-O-Neal-For-His-Outfit-Advice-To-Angel-Reese.png",
          PostHead:"Whew! Social Media Goes IN On Shequille O'Neal For His Outfit Advice To Angel Reese (WATCH)",
           Time:""
        }, {
          id:5,
          Image:"https://theshaderoom.com/wp-content/uploads/2024/10/Exclusive-Xaviaer-DuRosseau-Reacts-Beyonce-Fan-Receipts-Dissing-Fox-News-Live-TV-scaled-e1730233491950.jpg",
          PostHead:"Whew! Social Media Goes IN On Shequille O'Neal For His Outfit Advice To Angel Reese (WATCH)",
           Time:""
        }, {
          id:6,
          Image:"https://theshaderoom.com/wp-content/uploads/2024/10/Oop-Barack-Obama-Sparks-Reactions-After-Sharing-A-Message-About-Stimulus-Checks-Donald-Trump-scaled.jpg",
          PostHead:"Oops! Barack Obama Sparks Reaction After Sharing A Massage About Stimulus Checks & Donald Trump",
         Time:""
        }
      ]
  return (
    <div>
 
       <h1 className='font-bold text-PrimaryColor text-2xl border-l-[4px] border-[#D7AE61] p-2 mx-5 mt-5 md:mt-0 lg:mx-28 lg:mt-0'>NEWS</h1>
           
           <div className='min-h-[100vh] bg-[] grid grid-cols-1 mx-5 md:grid md:grid-cols-[65%,35%] md:mt-0 lg:grid lg:grid-cols-[65%,35%] lg:mx-28 lg:mt-5'>
              
               <div className='bg-[] grid gap-5 grid-rows-1'>
                 {News.map((NewsS, index)=>(
                        <Link key={index} className='h-[350px] bg-[] border-b-[.2px] border-[#8080802f] grid grid-cols-1 md:h-[200px] md:grid md:grid-cols-[30%,70%] lg:h-[220px] lg:grid lg:grid-cols-[40%,60%]'>
                            <Link className='bg-[] flex items-center'>
                                  <img src={NewsS.Image} className='h-[220px] w-[350px] md:h-[150px] md:w-[140px] lg:h-[220px] lg:w-[270px]'/>
                            </Link>
  
                            <div className='flex items-center justify-center'>
                               <Link className='text-[18px] text-start font-Custom font-bold md:text-[16px] lg:text-[17px] hover:text-PrimaryColor duration-75'>{NewsS.Subject}</Link>
                            </div>
                        </Link>
                     ))}
                </div>
              

                <div className='bg-[]'>
                <div className='h-[400px]'>
                     <a href="">
                        <img src={"https://www.lindaikejisblog.com/advertss/1681299059.png"}/>
                     </a>
                </div>

              <div className='h-[724px] bg-[]'>
                <h1 className='font-Custom font-bold text-[25px] ml-[25px]'>Latest Posts</h1>
                    {LatestNews.map((LatestNewsS, index)=>(
                      <div key={index} className='h-[120px] bg-[] border-b-[2px] border-[#8080802f] grid grid-cols-[30%,70%] md:h-[240px] md:grid md:grid-cols-[30%,70%] md:border-b-[.2px] md:border-[#8080802f] lg:h-[100px] lg:grid lg:grid-cols-[25%,75%] lg:mt-4 lg:border-b-[.2px] lg:border-[#8080802f]'>
                          <Link className='flex items-center justify-start bg-[]'>
                                <img src={LatestNewsS.Image} className='h-[80px] w-[100px] bg-[]'/>
                          </Link>

                          <div className='flex items-center bg-[]'>
                              <Link className='text-[15px] pl-3 font-Custom font-medium lg:text-[15px] hover:text-PrimaryColor'>{LatestNewsS.PostHead}</Link>
                          </div>

                          <p className='font-medium'>{LatestNewsS.Date}</p>
                      </div>
                    ))}
                  </div>

              <div className='h-[300px] bg-[gold]'></div>
            </div>


         </div>
    </div>
  )
}

export default NewsSecondComponent