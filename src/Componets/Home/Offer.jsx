import React from 'react'
import Rectangle from '../../assets/Rectangle.svg'

function Offer() {
  return (
    <>
      <div className="h-auto w-full py-10">
        <p className="text-center text-lg">What We Offer</p>
        <p className="text-center text-3xl font-bold mb-10">Our Programs</p>

        <div className="flex justify-center gap-10 ">
          <div className="bg-[#E8F9FF] h-[350px] w-[290px] rounded-2xl shadow-md hover:bg-blue-200 transition duration-300">
            <div className="flex justify-center pt-6">
              <img src={Rectangle} alt="Example" className="w-60 h-60 -mt-14 -mb-10" />
            </div>
            <div className="px-5 mt-4">
              <p className="text-xl font-semibold mb-2">Residential Workshop</p>
              <p className="text-sm mb-4 text-[#707070]">
                3-day intensive to awaken conscience, develop strategy, and build ethical political presence.
              </p>
              <p className=" text-black border text-center rounded-full py-1 cursor-pointer">
                Learn More
              </p>
            </div>
          </div>

 <div className="bg-[#E8F9FF] h-[350px] w-[290px] rounded-2xl shadow-md hover:bg-blue-200 transition duration-300">
            <div className="flex justify-center pt-6">
              <img src={Rectangle} alt="Example" className="w-60 h-60 -mt-14 -mb-10" />
            </div>
            <div className="px-5 mt-4">
              <p className="text-xl font-semibold mb-2">Online Learning Series</p>
              <p className="text-sm mb-4 text-[#707070]">
                Explore Constitution, political communication, and Islamic thought - all online.
              </p>
              <p className=" text-black border text-center rounded-full py-1 cursor-pointer">
               Learn More
              </p>
            </div>
          </div>

           <div className="bg-[#E8F9FF] h-[350px] w-[290px] rounded-2xl shadow-md hover:bg-blue-200 transition duration-300">
            <div className="flex justify-center pt-6">
              <img src={Rectangle} alt="Example" className="w-60 h-60 -mt-14 -mb-10" />
            </div>
            <div className="px-5 mt-4">
              <p className="text-xl font-semibold mb-2">Immersion Program</p>
              <p className="text-sm mb-4 text-[#707070]">
                Visit bastis, Parliament, and grassroots communities. Learn where power lives - and where it fails.
              </p>
              <p className=" text-black border text-center rounded-full py-1 cursor-pointer">
                Learn More
              </p>
            </div>
          </div>         
        </div>
      </div>
    </>
  )
}

export default Offer
