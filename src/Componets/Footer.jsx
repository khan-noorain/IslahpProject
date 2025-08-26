import React from 'react'
import Islahlogo from '../assets/Islahlogo.svg'
import sicons from '../assets/sicons.svg'

const Footer = () => {
  return (
    <>
      <div className="bg-white h-250 relative overflow-hidden pt-40">
        
        {/* curve top */}
        <div className="bg-[#C4D9FF] w-full h-50 rounded-b-[50%] relative z-10">
          <div className="bg-white w-full h-40 rounded-b-[50%]"></div>
        </div>

        {/* footer main */}
        <div className="bg-[#C5BAFF] h-200 w-full absolute top-50 left-0 z-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
            
            {/* Logo + Social */}
            <div>
              <img src={Islahlogo} alt="Islah Logo" className="mb-3 w-20" />
              <img src={sicons} alt="Social Icons" className="w-22" />
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About</li>
                <li>Programs</li>
                <li>Get Involved</li>
                <li>Join Now</li>
                <li>Resources</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Communities */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Communities</h3>
              <ul className="space-y-2">
                <li>MM Communities</li>
                <li>MM Forum</li>
                <li>MM Chat</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>+123 456 7890</li>
                <li>support@islah.com</li>
              </ul>
            </div>
          </div>
        </div>
        {/* bottom bar */}
            <div className="bg-[#C5BAFF] absolute bottom-0 w-full pb-50">
              <div className="border-t border-white">
                <div className="max-w-7xl mx-auto px-10 py-4 flex flex-col md:flex-row justify-between items-center text-white text-sm space-y-2 md:space-y-0">
                  <p>© 2025 Islah. All rights reserved.</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Legal</a>
                    <a href="#">Site Map</a>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </>
  )
}

export default Footer
