import React from 'react'
import EntertainmentFirstComponent from './EntertainmentFirstComponent'

function EntertainmentData() {
    const headEntertainment = [
        {
            img:'https://www.channelstv.com/wp-content/uploads/2024/11/Omotola-Jalade-Ekehinde.jpg',
            time:'15h',
            author:'Emmanuel EgboBiamadu',
            heading:"‘I Could Not Sit Up,’ Omotola Narrates Ordeal With Life-Threatening Sickness",
            about:'The 46-year-old said she was rushed to the emergency unit several times during the illness.'
        }

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
        }
    ]
     
    
  return (
    <div>
        <EntertainmentFirstComponent
        headEntertainment={headEntertainment}
        subEntertainment={subEntertainment}
        asideEntertainment={asideEntertainment}

        />
    </div>
  )
}

export default EntertainmentData