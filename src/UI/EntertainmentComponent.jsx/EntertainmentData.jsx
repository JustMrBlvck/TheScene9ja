import React, { useState } from 'react'
import EntertainmentFirstComponent from './EntertainmentFirstComponent'

function EntertainmentData() {
    
    const asideEntertainment = [
        { 
            img:'https://www.channelstv.com/wp-content/uploads/2024/09/EMMYS.jpg',
            time:'3d',
            author:'khadijat lawal',
            heading:"Manga Adaptation ‘Drops Of God’ Nets International Emmy Award"
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Grammy-Awards.jpg',
            time:'3d',
            author:'Khadijat lawal',
            heading:'Biggest Predictions For The 67th Annual Grammy Awards'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Grammy-Awards.jpg',
            time:'3d',
            author:'Khadijat lawal',
            heading:'Biggest Predictions For The 67th Annual Grammy Awards'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/09/EMMYS.jpg',
            time:'3d',
            author:'khadijat lawal',
            heading:"Manga Adaptation ‘Drops Of God’ Nets International Emmy Award"
        }
    ]

    const mainEntertainment = [
        {
            id:0,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/12/AFP__20241209__36PY9MB__v2__Preview__82ndGoldenGlobeAwardsNominationsAnnouncement.jpg',
            heading:"‘Emilia Perez’ Tops Golden Globes Nominations"
        },
        {
            id:1,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Katsina-protesters.jpg",
            heading:"Katsina DJ Operators Protest Eight-Month Ban By Hisbah"
        },
        {
            id:2,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/AFP__20241209__36PW8CB__v1__Preview__FilesEntertainmentUsJapanFilmTolkien.jpg",
            heading:"‘Lord Of The Rings’ Gets Anime Makeover With ‘War Of The Rohirrim’ Film"
        },
        {
            id:3,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241121__36MY7LA__v1__Preview.jpg',
            heading:'Banana Taped To A Wall Sells For $6.2 Million In New York',
        },
        {
            id:4,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/Rust-Movie-Premiere.jpg',
            heading:'Alec Baldwin’s ‘Rust’ Premieres Three Years After On-Set Shooting'
        },
        {
            id:5,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/Barry-Jenkins-1.jpg',
            heading:'VIDEO: ‘Mufasa’ Will Be First Experience Of Africa For Some People, Says Director'
        },
        {
            id:5,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241120__36MW8Q8__v1__Preview__PolandUsEntertainmentFilm.jpg',
            heading:'‘Rust’ To premiere At Polish Film Festival Three Years After On-Set Shooting'
        },
        {
            id:6,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/Denzel_Washington-1.jpg',
            heading:'Denzel Washington Confirms Two More Equaliser Movies'
        },
        {
            id:7,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/Renes-Painting.jpg',
            heading:'Rene Magritte’s Painting Sells For Record $121 Million'
        },
        {
            id:8,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241121__36MU29V__v1__Preview__FilesFranceMediaInternetCinemaBook.jpg',
            heading:'French YouTuber Takes On Manga After Conquering Everest'
        },
        {
            id:9,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/12/AFP__20241204__36PB87C__v1__Preview__FilesSafricaArtKouoh.jpg',
            heading:"Cameroon Curator Kouoh Becomes First African Woman To Lead Venice Biennale",
        },
        {
            id:10,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2020/11/Netflix-Logo.jpg",
            heading:"We Are Not Exiting Nigeria, Says Netflix"
        },
        {
            id:11,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/Barry-Jenkins-1.jpg',
            heading:'VIDEO: ‘Mufasa’ Will Be First Experience Of Africa For Some People, Says Director'
        },
        {
            id:12,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241120__36MW8Q8__v1__Preview__PolandUsEntertainmentFilm.jpg',
            heading:'‘Rust’ To premiere At Polish Film Festival Three Years After On-Set Shooting'
        },
        {
            id:13,
            imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/Denzel_Washington-1.jpg',
            heading:'Denzel Washington Confirms Two More Equaliser Movies'
        },
        {
            id:14,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/AFP__20241208__36PU8HK__v1__Preview__FilesUsEntertainmentMusicSwift.jpg",
            heading:"Taylor Swift Delivers Final Performance In Record-Breaking ‘Eras’ Tour"
        },
        {
            id:15,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/US-rapper-Jay-Z-arrives-for-the-Los-Angeles-Special-Screening-of-Netflixs-The-Harder-They-Fall-300x1-1.jpg",
            heading:"Jay-Z Accused Of Raping Teen With Diddy In Civil Suit — Court Filing"
        },
        {
            id:16,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Kunle-Afolayan.png",
            heading:"We Need Grants From Govt To Help Movie Industry – Kunle Afolayan"
        },
         {
            id:17,
            imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Kunle-Afolayan.png",
            heading:"We Need Grants From Govt To Help Movie Industry – Kunle Afolayan"
        }
    ]


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerHeadPage=1
    const itemsPerPage = 2;
    const itemsPerPageMain=9;

    function paginateArray(array , itemsPerPage) {
        const lastPostIndex = currentPage * itemsPerPage;
        const firstPostIndex = lastPostIndex - itemsPerPage;
       return array.slice(firstPostIndex, lastPostIndex);
        
    }
    // const paginateSubEntertainment= paginateArray(entertainmentRight,itemsPerPage);
    const paginateAsideEntertainment = paginateArray(asideEntertainment,itemsPerPage);
    const paginateMainEntertainment = paginateArray(mainEntertainment,itemsPerPageMain);

    const totalItems = Math.max(
        // Math.ceil(headEntertainment.length/itemsPerHeadPage),
        // entertainmentRight.length,
        // asideEntertainment.length,
        Math.ceil(mainEntertainment.length/itemsPerPageMain)*itemsPerPage
    )

    const totalPages =Math.ceil(totalItems/itemsPerPage)

    const paginate=(pageNumber)=>setCurrentPage(pageNumber)



  return (
    <div>
        <EntertainmentFirstComponent
            asideEntertainment={paginateAsideEntertainment}
            mainEntertainment={paginateMainEntertainment}
            paginate={paginate}
            totalPages={totalPages}
            currentPage={currentPage}
        />
    </div>
  )
}

export default EntertainmentData