import React, { useEffect } from 'react'
import { CategorySlider, Hero, Process, ProductList, TopCollection, TopSeller, Trust } from '../../routes/common/AllRoutes.jsx'
import { useRedirectLoggedOutUser } from '../../hooks/useRedirectLoggedOutUser.js'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, getAllProductOfUser } from '../../redux/features/productSlice.js'


const Home = () => {
  useRedirectLoggedOutUser('/login')

  const dispatch=useDispatch()
  const {products}=useSelector((state)=>state.product)

  useEffect(()=>{
    dispatch(getAllProduct())
  },[dispatch])

  return (
    <>
    <Hero/>
    <CategorySlider/>
    <ProductList products={products}/>
    <TopSeller/>
    <Process/>
    <Trust/>
    <TopCollection/>
    </>
  )
}

export default Home