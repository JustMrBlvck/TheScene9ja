import React, { useState } from "react";
import PoliticsFirstComponent from "./PoliticsFirstComponent";

function PoliticsData() {
  const politicsHead = [
    {
      img: "https://www.channelstv.com/wp-content/uploads/2023/08/Francis-Nwifuru.png",
      time: "2h",
      author: "opeluwami akintayo",
      heading: "Ebonyi gov suspends two commissioners, others over alleged misconduct",
      about:
        "He directed the indefinite suspension of the Commissioner for Housing and Urban Development, Engineer Francis Ori, and a three-month suspension for his counterpart Dr. Moses Ekuma, Commissioner for Health and Social Development.",
    },
    
  ];

  const politicsNews = [
    {
      img: "https://www.channelstv.com/wp-content/uploads/2024/11/Okpebholo_Portrait.png",
      time: "4h",
      author: "opeluwami akintayo",
      heading: "Ebonyi gov suspends two commissioners, others over alleged misconduct",
      about: "Data Breach: Gov Okpebholo Orders Urgent Review Of E-Governance Platform",
    },
    {
      img: "https://www.channelstv.com/wp-content/uploads/2024/11/Abaribe-new.jpg",
      time: "14h",
      author: "donatus anuchebe",
      heading: "Nigeria Would Probably Have Been Better If Peter Obi Won 2023 Election - Sen Abaribe",
    },
    {
        img: "https://www.channelstv.com/wp-content/uploads/2024/11/Okpebholo_Portrait.png",
        time: "4h",
        author: "opeluwami akintayo",
        heading: "Ebonyi gov suspends two commissioners, others over alleged misconduct",
        about: "Data Breach: Gov Okpebholo Orders Urgent Review Of E-Governance Platform",
      },
      {
        img: "https://www.channelstv.com/wp-content/uploads/2024/11/Abaribe-new.jpg",
        time: "14h",
        author: "donatus anuchebe",
        heading: "Nigeria Would Probably Have Been Better If Peter Obi Won 2023 Election - Sen Abaribe",
      },

  ];
   const subpolitics=[
    {
        img: "https://www.channelstv.com/wp-content/uploads/2024/11/obaseki-okebholo.jpg",
        time: "22h",
        author: "emmanuel egbommandu",
        heading: "Almost 500 Edo Govt Vehicles Still Missing, Says Okpebholo’s Spokesman",
      },
      {
        img: "https://www.channelstv.com/wp-content/uploads/2024/11/NiMET_NGF.jpg",
        time: "1d",
        author: "opelumai akintayo",
        heading: "NiMet, Governors To Sign MoU On Climate Change",
      },
  ]

  const politicsMain=[
    {
        img:'https://www.channelstv.com/wp-content/uploads/2023/07/Remi-Tinubu.jpg',
        about:'Oluremi Tinubu Joins 16 Days of Activism Against Gender-Based Violence'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/11/PHOTOS_-Zulum-Assesses-Flood-Destruction-In-Borno-Distributes-Relief-Materials-To-Victims.jpg',
        about:'PHOTOS: Zulum Assesses Flood Destruction In Borno, Distributes Relief  To Victims'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/10/Kola-Ologbondiyan.jpg',
        about:'Subsidy Removal, Naira Floating Has Brought Nigeria To Its Knees — Ex-PDP Spokesman Ologbondiyan'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/04/Kogi.jpg',
        about:'Ododo Convenes Emergency Meeting Over Alleged Fulani Killing, Vows Punishment For Perpetrators'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/09/Obaseki-2.jpg',
        about:"Okpebholo Sets Up Panel To Probe Obaseki’s Govt"
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors-1.jpg',
        about:'PDP Govs Ask Tinubu To Review Economic Policies'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors-forum.jpg',
        about:'PDP Govs Say Party Reviewing Ondo Poll, Fault Edo Election'
    },
    {


        img:'https://www.channelstv.com/wp-content/uploads/2024/08/Obasanjo.jpg',
        about:"‘Stop Making Jest Of Other Presidents’, Osinbajo’s Ex-Aide Advises Obasanjo"
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors.jpg',
        about:"PDP Governors Meet, Pledge Better Governance For Nigerians"
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2023/07/Remi-Tinubu.jpg',
        about:'Oluremi Tinubu Joins 16 Days of Activism Against Gender-Based Violence'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/11/PHOTOS_-Zulum-Assesses-Flood-Destruction-In-Borno-Distributes-Relief-Materials-To-Victims.jpg',
        about:'PHOTOS: Zulum Assesses Flood Destruction In Borno, Distributes Relief  To Victims'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/10/Kola-Ologbondiyan.jpg',
        about:'Subsidy Removal, Naira Floating Has Brought Nigeria To Its Knees — Ex-PDP Spokesman Ologbondiyan'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/04/Kogi.jpg',
        about:'Ododo Convenes Emergency Meeting Over Alleged Fulani Killing, Vows Punishment For Perpetrators'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/09/Obaseki-2.jpg',
        about:"Okpebholo Sets Up Panel To Probe Obaseki’s Govt"
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors-1.jpg',
        about:'PDP Govs Ask Tinubu To Review Economic Policies'
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors-forum.jpg',
        about:'PDP Govs Say Party Reviewing Ondo Poll, Fault Edo Election'
    },
    {


        img:'https://www.channelstv.com/wp-content/uploads/2024/08/Obasanjo.jpg',
        about:"‘Stop Making Jest Of Other Presidents’, Osinbajo’s Ex-Aide Advises Obasanjo"
    },
    {
        img:'https://www.channelstv.com/wp-content/uploads/2024/11/PDP-governors.jpg',
        about:"PDP Governors Meet, Pledge Better Governance For Nigerians"
    }
    
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
 
   const paginatedPoliticsHead = paginateArray(politicsHead, itemsPerPage);
   const paginatedPoliticsNews = paginateArray(politicsNews, itemsPerPage);
   const paginatedSubpolitics = paginateArray(subpolitics, itemsPerPage);
   const paginatedPoliticsMain = paginateArray(politicsMain, itemsPerPageMain);

    const totalItems = Math.max(
    politicsHead.length,
    politicsNews.length,
    subpolitics.length,
    Math.ceil(politicsMain.length / itemsPerPageMain) * itemsPerPage
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

 
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <PoliticsFirstComponent politicsHead={paginatedPoliticsHead}
        politicsNews={paginatedPoliticsNews}
        subpolitics={paginatedSubpolitics}
        politicsMain={paginatedPoliticsMain}
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate} />
    </div>
  );
}

export default PoliticsData;
