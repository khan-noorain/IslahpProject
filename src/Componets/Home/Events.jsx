import React from 'react'
import event1 from "../../assets/event1.svg";   // if file is .svg
import event2 from "../../assets/event2.svg";   // if file is .jpg
import event3 from "../../assets/event3.svg";   // if file is .png



const Events = () => {
const events = [
    {
      id: 1,
      title: "Residential Workshop – Lucknow (Aug 15–17, 2025)",
      desc: "Immerse yourself in a transformative residential workshop in Lucknow, focusing on leadership and community engagement.",
      img: event1,
    },
    {
      id: 2,
      title: "Online Series: Constitution & Minorities (July 22, 2025)",
      desc: "Join our online series exploring the constitutional framework and rights of minority communities.",
      img: event2,
    },
    {
      id: 3,
      title: "Parliament Immersion Trip (Sept 2025)",
      desc: "Experience the inner workings of parliament with our immersive trip, offering insights into legislative processes.",
      img: event3,
    },
  ]

  return (
    <>
    <div className='text-center h-100 w-full pt-50'>
        <div className='text center'>
            <p className='text-center text-2xl'>Upcoming Events</p>
            <p className='text-center text-5xl'>Mark Your Calendar</p>
            <p className='text-center text-xl text-[#707070]'>Upcoming events you won't want to miss.</p>
        </div>
     </div>

       <div className="space-y-10 justify-items-center">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex items-center justify-between  p-8 rounded-2xl"
        >
          {/* Left - Text */}
          <div className="max-w-md">
            <h4 className="font-bold mb-3">{event.title}</h4>
            <p className="text-gray-600 mb-5 text-sm">{event.desc}</p>
            <button className="px-5 py-2 bg-[#C4D9FF] text-white font-semibold rounded-full ">
              Apply Now
            </button>
          </div>

          {/* Right - Image */}
          <div className="pl-30 w-100 h-40">
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      ))}
     <div className='text-center'>
          <button className='bg-[#C5BAFF] text-white rounded-4xl w-70 h-13  p-3 text-center '>Full Event Calendar</button>
     </div>

    </div>
     </>
  );
};


export default Events