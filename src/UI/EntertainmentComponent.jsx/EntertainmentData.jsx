import React, { useState } from 'react'
import EntertainmentFirstComponent from './EntertainmentFirstComponent'

function EntertainmentData() {
    const headEntertainment = [
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Omotola-Jalade-Ekehinde.jpg',
            time:'15h',
            author:'Emmanuel EgboBiamadu',
            heading:"‘I Could Not Sit Up,’ Omotola Narrates Ordeal With Life-Threatening Sickness",
            about:'The 46-year-old said she was rushed to the emergency unit several times during the illness.'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Omotola-Jalade-Ekehinde.jpg',
            time:'15h',
            author:'Emmanuel EgboBiamadu',
            heading:"‘I Could Not Sit Up,’ Omotola Narrates Ordeal With Life-Threatening Sickness",
            about:'The 46-year-old said she was rushed to the emergency unit several times during the illness.'
        },

    ]
      
    const subEntertainment=[
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-5.17.42-PM.jpeg',
            time:'3d',
            author:'Emmanuel  Egbobiamadu',
            heading:"Nigeria Is The Cultural Capital Of The World – Wanle Akinboboye"
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241125__36N89F2__v1__Preview__OpeningNightOfLaCageAuxFolles.jpg',
            time:'3d',
            heading:"Bestselling ‘Woman Of Substance’ Author Barbara Taylor Bradford Dies At 91",
            author:'Khadijat lawal'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-5.17.42-PM.jpeg',
            time:'3d',
            author:'Emmanuel  Egbobiamadu',
            heading:"Nigeria Is The Cultural Capital Of The World – Wanle Akinboboye"
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241125__36N89F2__v1__Preview__OpeningNightOfLaCageAuxFolles.jpg',
            time:'3d',
            heading:"Bestselling ‘Woman Of Substance’ Author Barbara Taylor Bradford Dies At 91",
            author:'Khadijat lawal'
        }
    ]
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
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/phyna-BBNaija-2.jpg',
            heading:'BBN’s Phyna Sent Out From Restaurant Over Indecent Dressing'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/09/Basketmouth-Victoria-Eze.jpg',
            heading:'Basketmouth’s First Feature Film ‘A Ghetto Love Story’ To Hit Cinemas Nov 22'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241121__36MU29V__v1__Preview__FilesFranceMediaInternetCinemaBook.jpg',
            heading:'French YouTuber Takes On Manga After Conquering Everest'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241121__36MY7LA__v1__Preview.jpg',
            heading:'Banana Taped To A Wall Sells For $6.2 Million In New York',
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Rust-Movie-Premiere.jpg',
            heading:'Alec Baldwin’s ‘Rust’ Premieres Three Years After On-Set Shooting'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Barry-Jenkins-1.jpg',
            heading:'VIDEO: ‘Mufasa’ Will Be First Experience Of Africa For Some People, Says Director'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241120__36MW8Q8__v1__Preview__PolandUsEntertainmentFilm.jpg',
            heading:'‘Rust’ To premiere At Polish Film Festival Three Years After On-Set Shooting'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Denzel_Washington-1.jpg',
            heading:'Denzel Washington Confirms Two More Equaliser Movies'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Renes-Painting.jpg',
            heading:'Rene Magritte’s Painting Sells For Record $121 Million'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241121__36MU29V__v1__Preview__FilesFranceMediaInternetCinemaBook.jpg',
            heading:'French YouTuber Takes On Manga After Conquering Everest'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241121__36MY7LA__v1__Preview.jpg',
            heading:'Banana Taped To A Wall Sells For $6.2 Million In New York',
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Rust-Movie-Premiere.jpg',
            heading:'Alec Baldwin’s ‘Rust’ Premieres Three Years After On-Set Shooting'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Barry-Jenkins-1.jpg',
            heading:'VIDEO: ‘Mufasa’ Will Be First Experience Of Africa For Some People, Says Director'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/AFP__20241120__36MW8Q8__v1__Preview__PolandUsEntertainmentFilm.jpg',
            heading:'‘Rust’ To premiere At Polish Film Festival Three Years After On-Set Shooting'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Denzel_Washington-1.jpg',
            heading:'Denzel Washington Confirms Two More Equaliser Movies'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Renes-Painting.jpg',
            heading:'Rene Magritte’s Painting Sells For Record $121 Million'
        },
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/phyna-BBNaija-2.jpg',
            heading:'BBN’s Phyna Sent Out From Restaurant Over Indecent Dressing'
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
    const paginateHeadEntertainment = paginateArray(headEntertainment, itemsPerHeadPage);
    const paginateSubEntertainment= paginateArray(subEntertainment,itemsPerPage);
    const paginateAsideEntertainment = paginateArray(asideEntertainment,itemsPerPage);
    const paginateMainEntertainment = paginateArray(mainEntertainment,itemsPerPageMain);

    const totalItems = Math.max(
        Math.ceil(headEntertainment.length/itemsPerHeadPage),
        subEntertainment.length,
        asideEntertainment.length,
        Math.ceil(mainEntertainment.length/itemsPerPageMain)*itemsPerPage
    )

    const totalPages =Math.ceil(totalItems/itemsPerPage)

    const paginate=(pageNumber)=>setCurrentPage(pageNumber)



  return (
    <div>
        <EntertainmentFirstComponent
        headEntertainment={paginateHeadEntertainment}
        subEntertainment={paginateSubEntertainment}
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