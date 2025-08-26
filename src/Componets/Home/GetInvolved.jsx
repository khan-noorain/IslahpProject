import React from 'react'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import logo3 from '../../assets/logo3.svg'
import logo4 from '../../assets/logo4.svg'


const GetInvolved = () => {
 const cards = [
    {
      id: 1,
      logo: logo1,
      title: "Apply for the Next Workshop",
      desc: "Join our ethical leadership cohort.",
    },
    {
      id: 2,
      logo: logo2,
      title: "Volunteer Your Skills",
      desc: "We need skilled volunteers in media, logistics, mentorship, and more.",
    },
    {
      id: 3,
      logo: logo3,
      title: "Bring Islah to Your Campus or City",
      desc: "Host a workshop or immersion event.",
    },
    {
      id: 4,
      logo: logo4,
      title: "Support the Cause",
      desc: "Fund scholarships and outreach.",
    },
  ];


  return (
    <>

    <div className='text-center h-100 w-full pt-20'>
        <div className='text center'>
            <p className='text-center text-2xl'>Get Involved</p>
            <p className='text-center text-5xl'>Step In. Serve With Us.</p>
            <p className='text-center text-xl text-[#707070]'>Be part of a growing network of youth who lead with conscience.</p>
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mt-30 ml-50 mr-50 space-x-10 rounded-2xl">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-black text-white rounded-2xl p-6 flex flex-col items-start shadow-lg  hover:text-[#FFE600] duration-300"
        >
          <img src={card.logo} alt={card.title} className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-sm ">{card.desc}</p>
        </div>
      ))}
      <div className='pt-10 ml-110'>
      <button className='bg-black text-white rounded-4xl w-60 h-13  p-3 text-center '>See All Opportunities</button>
      </div>
    </div>
    </>
  )
}

export default GetInvolved