import React, { useState } from "react";
import PoliticsFirstComponent from "./PoliticsFirstComponent";

function PoliticsData() {

//    const subpolitics=[
//     {
//         img: "https://www.channelstv.com/wp-content/uploads/2024/11/obaseki-okebholo.jpg",
//         time: "22h",
//         author: "emmanuel egbommandu",
//         heading: "Almost 500 Edo Govt Vehicles Still Missing, Says Okpebholo’s Spokesman",
//       },
//       {
//         img: "https://www.channelstv.com/wp-content/uploads/2024/11/NiMET_NGF.jpg",
//         time: "1d",
//         author: "opelumai akintayo",
//         heading: "NiMet, Governors To Sign MoU On Climate Change",
//       },
//   ]

  const politicsMain = [
    {
        id:0,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/katsina-1.jpg",
        heading:"Don’t Just Vote, Contest Elections, Katsina Gov’s Wife Tells Women"
    },
    {
        id:1,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Kwankwaso-Obj-Duke.jpg",
        heading:"Kwankwaso, Duke Meet Obasanjo In Abeokuta"
    },
    {
        id:2,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/10/APC-Flag.jpg",
        heading:"Ward Excos Suspend Ondo APC Chairman, Adetimehin"
    },
    {
        id:3,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Photo-combo-Gov-Mohammed_Tinubu.jpg",
        heading:"Shine Your Eyes, Gov Mohammed Urges Tinubu To Remove ‘Excess Baggage’ In Cabinet"
    },
    {
        id:4,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/04/Ganduje_.jpg",
        heading:"APC Determined To Get Rivers In 2027, Says Ganduje"
    },
    {
        id:5,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/12/Ogunwusi-Buhari.jpg",
        heading:"PHOTOS: Ooni Of Ife Visits Buhari In Katsina"
    },
    {
        id:6,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2024/05/Mudashiru-Obasa.jpg",
        heading:"Tinubu Working To Bring Smiles To The Faces Of Nigerians, Says Obasa"
    },
    {
        id:7,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/08/Obasanjo.jpg',
        heading:"‘Stop Making Jest Of Other Presidents’, Osinbajo’s Ex-Aide Advises Obasanjo"
    },
    {
        id:8,
        imgSrc:"https://www.channelstv.com/wp-content/uploads/2023/03/Labour-Party-1.png",
        heading:"Defection: LP Goes To Court, Wants Reps Seats Declared Vacant"
    },
    {
        id:9,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2023/07/Remi-Tinubu.jpg',
        heading:'Oluremi Tinubu Joins 16 Days of Activism Against Gender-Based Violence'
    },
    {
        id:10,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/PHOTOS_-Zulum-Assesses-Flood-Destruction-In-Borno-Distributes-Relief-Materials-To-Victims.jpg',
        heading:'PHOTOS: Zulum Assesses Flood Destruction In Borno, Distributes Relief  To Victims'
    },
    {
        id:11,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/10/Kola-Ologbondiyan.jpg',
        heading:'Subsidy Removal, Naira Floating Has Brought Nigeria To Its Knees — Ex-PDP Spokesman Ologbondiyan'
    },
    {
        id:12,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/04/Kogi.jpg',
        heading:'Ododo Convenes Emergency Meeting Over Alleged Fulani Killing, Vows Punishment For Perpetrators'
    },
    {
        id:13,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/09/Obaseki-2.jpg',
        heading:"Okpebholo Sets Up Panel To Probe Obaseki’s Govt"
    },
    {
        id:14,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors-1.jpg',
        heading:'PDP Govs Ask Tinubu To Review Economic Policies'
    },
    {
        id:15,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors-forum.jpg',
        heading:'PDP Govs Say Party Reviewing Ondo Poll, Fault Edo Election'
    },
    {
        id:16,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/08/Obasanjo.jpg',
        heading:"‘Stop Making Jest Of Other Presidents’, Osinbajo’s Ex-Aide Advises Obasanjo"
    },
    {
        id:17,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors.jpg',
        heading:"PDP Governors Meet, Pledge Better Governance For Nigerians"
    },
    {
        id:18,
        imgSrc:'https://www.channelstv.com/wp-content/uploads/2024/10/Kola-Ologbondiyan.jpg',
        heading:'Subsidy Removal, Naira Floating Has Brought Nigeria To Its Knees — Ex-PDP Spokesman Ologbondiyan'
    },
    
  ]

   // State for pagination
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 2; // Default for most sections
   const itemsPerPageMain = 9; // Specific for politicsMain
 
   // Paginate arrays based on itemsPerPage
   const paginateArray = (array, itemsPerPage) => {
     const indexOfLastItem = currentPage * itemsPerPage;
     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
     return array.slice(indexOfFirstItem, indexOfLastItem);
   };
 
//    const paginatedSubpolitics = paginateArray(subpolitics, itemsPerPage);
   const paginatedPoliticsMain = paginateArray(politicsMain, itemsPerPageMain);

    const totalItems = Math.max(
    // subpolitics.length,
    Math.ceil(politicsMain.length / itemsPerPageMain) * itemsPerPage
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

 
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <PoliticsFirstComponent
        // subpolitics={paginatedSubpolitics}
        politicsMain={paginatedPoliticsMain}
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate} />
    </div>
  );
}

export default PoliticsData;
