import React from 'react'
import { CategorySlider, Hero, Process, ProductList, TopSeller } from '../../routes/common/AllRoutes.jsx'


const Home = () => {
  return (
    <>
    <Hero/>
    <CategorySlider/>
    <ProductList/>
    <TopSeller/>
    <Process/>
    </>
  )
}

export default Home