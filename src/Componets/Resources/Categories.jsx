import React from 'react'
import List from './List'

function Categories() {
  return (
   <>
      <div className='flex '>
      <div className='mt-[50px] ml-[20px] flex'>
          <div className='bg-[#E8F9FF] h-[300px] w-[250px] text-left '>
              <h5 className='m-[20px] text-left font-bold text-l pt-[60px] '>Articles & Reflections</h5>
                <ul className='pt-[-5px] ml-[20px] pb-[30px]'>
                  <li>Muslim political history</li>
                  <li>Self-reform and leadership</li>
                  <li>Constitution and justice</li>
                  <li>Alumni stories from the field</li>
                </ul>
              <p className='bg-[#E8F9FF] text-[#C5BAFF] pl-[20px]'>Video Now → </p>
          </div>

          <div className='bg-[#E8F9FF] h-[300px] w-[250px] text-left ml-[20px]'>
              <h4 className='m-[20px] text-left font-bold text-l pt-[60px] '>Talks & Audio</h4>
                <ul className='pt-[-5px] ml-[20px] pb-[30px]'>
                  <li>Guest mentors and scholars</li>
                  <li>Islah learning sessions</li>
                  <li>Conversations on adl, khidmah, and shura</li>
                </ul>
              <p className='bg-[#E8F9FF] text-[#C5BAFF] pl-[20px]'>Video Now → </p>
          </div>

          <div className='bg-[#E8F9FF] h-[300px] w-[250px] text-left ml-[20px]'>
              <h4 className='m-[20px] text-left font-bold text-l pt-[60px] '>Video & Session Clips</h4>
                <ul className='pt-[-5px] ml-[20px] pb-[50px]'>
                  <li>Online Series (excerpts)</li>
                  <li>Workshop highlights</li>
                  <li>Public speeches and storytelling</li>
                </ul>
              <p className='bg-[#E8F9FF] text-[#C5BAFF] pl-[20px]'>Video Now → </p>
          </div>

          <div className='bg-[#E8F9FF] h-[300px] w-[250px] text-left ml-[20px]'>
              <h4 className='m-[20px] text-left font-bold text-l pt-[60px] '>Campaign Toolkits</h4>
                <ul className='pt-[-5px] ml-[20px] pb-[30px]'>
                  <li>Designing political campaigns</li>
                  <li>Building volunteer teams</li>
                  <li>Writing public narratives</li>
                  <li>Running digital outreach</li>
                </ul>
              <p className='bg-[#E8F9FF] text-[#C5BAFF] pl-[20px]'>Video Now → </p>
          </div>
   </div>

   </div>

   <List/>
   </>
  )
}

export default Categories