import React from 'react'
import HomeContent from '../Componets/Home/HomeContent'
import WhyIslah from '../Componets/Home/WhyIslah'
import Framework from '../Componets/Home/Framework'
import Offer from '../Componets/Home/Offer'
import Testimonials from '../Componets/Home/Testimonials'
import GetInvolved from '../Componets/Home/GetInvolved'
import Events from '../Componets/Home/Events'
import Gallery from '../Componets/Home/Gallery'

const Home = () => {
  return (
   <>
   <div className=''>
    <HomeContent/>
    <WhyIslah/>
    <Framework/>
    <Offer/>
    <Testimonials/>
    <GetInvolved/>
    <Events/>
    <Gallery/>
   </div>
   
   </>
  )
}

export default Home