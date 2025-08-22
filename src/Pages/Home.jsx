import React from 'react'
import HomeContent from '../Componets/Home/HomeContent'
import WhyIslah from '../Componets/Home/WhyIslah'
import Framework from '../Componets/Home/Framework'
import Offer from '../Componets/Home/Offer'

const Home = () => {
  return (
   <>
   <div className=''>
    <HomeContent/>
    <WhyIslah/>
    <Framework/>
    <Offer/>
   </div>
   
   </>
  )
}

export default Home