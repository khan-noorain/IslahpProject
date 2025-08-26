import React from 'react'
import frame1 from '../../assets/frame1.svg'
import frame2 from '../../assets/frame2.svg'
import frame3 from '../../assets/frame3.svg'
import frame4 from '../../assets/frame4.svg'

const Gallery = () => {
     const divData = [
    {
      title: "Spiritual Moments",
      text: "Peaceful moments of spiritual connection during tahajjud prayers",
      image: frame1,
    },
    {
      title: "Advocacy in Action",
      text: "Passionate voices shaping our future through meaningful dialogue",
      image: frame2,
    },
    {
      title: "Campaign Creation",
      text: "Creativity and conviction coming together through grassroots activism",
      image: frame3,
    },
    {
      title: "Youth Leadership",
      text: "The next generation of leaders taking their place in parliament.",
      image: frame4,
    },
  ];

  return (
   <>
   <div className='bg-[#C5BAFF] h-200 w-full mt-30'>
   <div className='text-center h-100 w-full pt-30'>
        <div className='text center'>
            <p className='text-center text-2xl'>Visual Gallery</p>
            <p className='text-center text-4xl'>Moments of Reflection, Action & Hope</p>
            <p className='text-center text-l text-[#707070]'>A visual journey through impactful moments of change and community</p>
        </div>
     </div>
     <div className="grid grid-cols-4 gap-4 ml-50 mr-50 justify-items-start -mt-30 ">
      {divData.map((item, index) => (
        <div
          key={index}
          className="bg-[#E8F9FF] shadow-lg rounded-2xl p-4 flex flex-col items-center hover:bg-[#FFE600] duration-300">
          <h2 className="text-xl font-bold mt-4 -ml-10 text-left">{item.title}</h2>
          <p className="text-gray-600 mt-2 text-sm">{item.text}</p>
          <img src={item.image} alt={item.title} className="w-60 h-60 rounded-lg" />
        </div>

        
      ))}
    </div>
        <div className='justify-items-center pt-10 ml-168'>
          <button className='bg-black text-white rounded-4xl w-60 h-13  p-3 text-center '>Load more visual</button>
        </div>
   </div>  
    </>
  );
};


export default Gallery