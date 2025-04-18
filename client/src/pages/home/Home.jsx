import React from 'react'
import { CategorySlider, Hero, Process, ProductList, TopCollection, TopSeller, Trust } from '../../routes/common/AllRoutes.jsx'


const Home = () => {
  return (
    <>
    <Hero/>
    <CategorySlider/>
    <ProductList/>
    <TopSeller/>
    <Process/>
    <Trust/>
    <TopCollection/>
    </>
  )
}

export default Home