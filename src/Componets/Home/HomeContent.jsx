import React from 'react'

const HomeContent = () => {
  return (
    <>
    <div className='bg-[#FBFBFB] h-[700px] w-full p-80 text-center' >
        <h1 className='text-5xl'>Reforming the Self.</h1><br/>
        <h1 className='text-5xl ml-53 flex' >Rebuilding the<p className='text-[#C5BAFF]'>Society.</p></h1>
        <div className='h-200 w-150 ml-40 p-5 '>
            <p className='pb-2'>A movement to cultivate ethical Muslim youth leadership through inner 
                transformation, civic education, and community action.</p>
        <div className='flex space-x-4'>
                 <button className="appearance-none border text-[#C5BAFF] border-gray-400 rounded-full px-4 py-2 ml-5 ">
                     Join the Movement
            </button> 
             <button className="appearance-none border  border-gray-400 rounded-full px-4 py-2  text-[#C5BAFF]">
                     Apply Now
            </button> 
             <button className="bg-[#FFE600]  rounded-full px-4 py-2 ">
                     Volunteer with Us
            </button>
        </div> 
    </div>
 </div>
    </>
  )
}

export default HomeContent