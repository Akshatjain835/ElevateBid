import React from 'react'
import { CategorySlider, Hero, Process, ProductList, TopSeller, Trust } from '../../routes/common/AllRoutes.jsx'


const Home = () => {
  return (
    <>
    <Hero/>
    <CategorySlider/>
    <ProductList/>
    <TopSeller/>
    <Process/>
    <Trust/>
    </>
  )
}

export default Home