import React from 'react'
import ResourceContent from '../Componets/Resources/ResourceContent'
import Carts from '../Componets/Resources/Carts'
import Categories from '../Componets/Resources/Categories'
import List from '../Componets/Resources/List'


const Resources = () => {
  return (
    <>
    <div className='text-center ml-[230px]'>
    <ResourceContent/>
    <Carts/>
    <Categories/>
    <List/>
    </div>
    </>
  )
}

export default Resources