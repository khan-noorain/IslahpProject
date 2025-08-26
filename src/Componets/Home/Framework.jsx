import React from "react";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg"


const Framework = () => {
  return (
    <section className="bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#0f0f0f] text-white py-16 px-6">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[#C5BAFF]">Our Framework</p>
        <h1 className="text-[#C5BAFF] text-3xl font-bold mt-2">
          Head. Heart. Hands. Soul. Community.
        </h1>
        <p className="text-[#C5BAFF] mt-2">
          Leadership is not a skillset – it is a holistic journey.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center pt-16 space-y-8">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Qalb */}
          <div className="flex items-center gap-4 border border-gray-600 rounded-[50px] w-[440px] h-[90px] hover:border-yellow-500 duration-300 shadow-lg">
            <span className="flex items-center justify-center w-25 h-25 rounded-full mr-1 bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#0f0f0f] shadow-lg hover:bg-yellow-500 transition -ml-[2px]">
              <img src={img1} alt="icon" className="w-15 h-15" />
            </span>
            <div>
              <h3 className="font-semibold">Qalb (Heart)</h3>
              <p className="text-sm text-gray-400">
                Reflection, Pain sharing, Story-mapping
              </p>
            </div>
          </div>

          {/* Mind */}
          <div className="flex items-center gap-4 border border-gray-600 rounded-[50px] w-[440px] h-[90px]  hover:border-yellow-500 duration-300 shadow-lg">
            <span className="flex items-center justify-center w-25 h-25 rounded-full mr-1 bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#0f0f0f] shadow-lg -ml-[2px] ">
              <img src={img2} alt="icon" className="w-15 h-15" />
            </span>
            <div>
              <h3 className="font-semibold">Mind (Aql)</h3>
              <p className="text-sm text-gray-400">
                Political analysis, Systems thinking
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Hands */}
          <div className="flex items-center gap-4 border border-gray-600 rounded-[50px] w-[440px] h-[90px] hover:border-yellow-500 duration-300 shadow-lg">
            <span className="flex items-center justify-center w-25 h-25 rounded-full mr-1 bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#0f0f0f]shadow-lg -ml-[2px]">
              <img src={img3} alt="icon" className="w-15 h-15" />
            </span>
            <div>
              <h3 className="font-semibold">Hands (Action)</h3>
              <p className="text-sm text-gray-400">
                Campaign design, Speech practice, Tasks
              </p>
            </div>
          </div>

          {/* Ruh */}
          <div className="flex items-center gap-4 border border-gray-600 rounded-[50px] w-[440px] h-[90px]  hover:border-yellow-500 duration-300 shadow-lg">
            <span className="flex items-center justify-center w-25 h-25 rounded-full mr-1 bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#0f0f0f] shadow-lg -ml-[2px]">
              <img src={img4} alt="icon" className="w-15 h-15" />
            </span>
            <div>
              <h3 className="font-semibold">Ruh (Soul)</h3>
              <p className="text-sm text-gray-400">
                Qur’anic introspection, Duas, Tahajjud
              </p>
            </div>
          </div>
        </div>

        {/* Row 3 - Full Width */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4 border border-gray-600 rounded-[50px] w-[440px] h-[90px]  hover:border-yellow-500 duration-300 shadow-lg">
            <span className="flex items-center justify-center w-25 h-25 rounded-full mr-1 bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#0f0f0f]shadow-lg -ml-[2px] ">
              <img src={img5} alt="icon" className="w-15 h-15" />
            </span>
            <div>
              <h3 className="font-semibold">Community (Ummah)</h3>
              <p className="text-sm text-gray-400">
                Peer circles, Amaanat closing ritual
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
