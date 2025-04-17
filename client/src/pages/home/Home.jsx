import React from 'react'
import { CategorySlider, Hero, ProductList, TopSeller } from '../../routes/common/AllRoutes.jsx'


const Home = () => {
  return (
    <>
    <Hero/>
    <CategorySlider/>
    <ProductList/>
    <TopSeller/>
    </>
  )
}

export default Home