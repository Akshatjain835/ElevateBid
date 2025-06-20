import axios from "axios";
import { summaryApi } from "../../common/summaryApi.js";

const createProduct=async(formData)=>{
    const response=await axios.post(summaryApi.createProduct.url,formData)
    return response.data
}

const getAllProductOfUser=async()=>{
    const response=await axios.get(`${summaryApi.getAllProductOfUser.url}/user`)
    return response.data
}

const getAllProduct=async()=>{
    const response=await axios.get(summaryApi.getAllProduct.url)
    return response.data
}

const getAllWonedProductOfUser=async()=>{
    const response=await axios.get(`${summaryApi.getAllWonedProductOfUser.url}/won-products`)
    return response.data
}

const deleteProduct=async(id)=>{
    const response=await axios.delete(`${summaryApi.deleteProduct.url}/${id}`)
    return response.data
}

const getProduct=async(id)=>{
    const response=await axios.get(`${summaryApi.getProduct.url}/${id}`)
    return response.data
}

const updateProduct=async(id,formData)=>{
    const response=await axios.put(`${summaryApi.updateProduct.url}/${id}`,formData)
    return response.data
}

//admin

const updateProductByAdmin=async(id,formData)=>{
    const response=await axios.put(`${summaryApi.updateProductByAdmin.url}/admin/product-verified/${id}`,formData)
    return response.data
}

const deleteProductByAdmin=async(id)=>{ 
  const response=await axios.delete(`${summaryApi.deleteProductByAdmin.url}/admin/products/${id}`)
  return response.data
}

const productService={
  createProduct,
  getAllProductOfUser,
  getAllProduct,
  getAllWonedProductOfUser,
  deleteProduct,
  getProduct,
  updateProduct,
  updateProductByAdmin

}

export default productService;