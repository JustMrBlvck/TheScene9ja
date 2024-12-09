import React from "react";

function TechnologyFirstComponent() {
  const newsdetails = [
    {
      id: 1,
      image:
        "https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/11/HBB-PRESS-PHOTO-3.jpg?resize=750%2C462&ssl=1",
    },
    {
      id: 2,
      image:
        "https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/10/ENVI-2.jpg?resize=750%2C492&ssl=1",
    },
    {
      id: 3,
      image:
        "https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/09/SAIL-FULL-scaled.jpg?resize=750%2C750&ssl=1",
    },
    {
      id: 4,
      image:
        "https://i0.wp.com/sunrise.ng/wp-content/uploads/2024/09/Seyi-Lawal.jpeg?resize=750%2C1001&ssl=1",
    },
  ];

  return (
    <div>
      <div className="min-h-[480px] w-full bg-green-300 flex justify-center">
        <div className="h-[480px] w-[95%] md:w-[90%] lg:w-[85%] bg-red-200 grid md:grid-cols-4 gap-3 grid-rows-2">
          {/* First grid item - spans two columns and two rows */}
          <div className="bg-orange-800 col-span-2 row-span-2 overflow-hidden tech-container1" >
            <div className=" lg:w-[700px]">
            <img
              src={newsdetails[0].image}
              alt={`News ${newsdetails[0].id}`}
              className="w-full h-[470px] lg:ml-[-100px] object-cover tech-box1"
            />
            </div>
          </div>

          {/* Second grid item */}
          <div className="bg-orange-800 col-span-2 overflow-hidden tech-container2">
            <div className=" lg:w-[600px]">
            <img
                  src={newsdetails[1].image}
                  alt={`News ${newsdetails[1].id}`}
                  className="w-full h-[240px] lg:ml-[-35px] object-cover tech-box2"
                />
            </div>
          </div>

          {/* Third grid item */}
          <div className="bg-orange-800 overflow-hidden tech-container3">
           <div className=" lg:w-[400px]">
           <img
              src={newsdetails[2].image}
              alt={`News ${newsdetails[2].id}`}
              className="w-full h-full object-cover lg:ml-[-130px] tech-box3"
            />
           </div>
          </div>

          {/* Fourth grid item */}
          <div className="bg-orange-800 overflow-hidden tech-container4">
            <img
              src={newsdetails[3].image}
              alt={`News ${newsdetails[3].id}`}
              className="w-full h-full object-cover tech-box4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyFirstComponent;
