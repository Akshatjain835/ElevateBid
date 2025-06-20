import axios from "axios";
import summaryApi from "../../common/summaryApi.js";

const createCategory=async(formData)=>{
    const response=await axios.post(summaryApi.createCategory.url,formData)
    return response.data
}

const getAllCategory=async()=>{
    const response=await axios.get(summaryApi.getAllCategory.url,formData)
    return response.data
}

const deleteCategory=async(id)=>{
    const response=await axios.delete(`${summaryApi.deleteCategory.url}/${id}`)
    return response.data
}

const updateCategory=async(id,formData)=>{
    const response=await axios.put(`${summaryApi.updateCategory.url}/${id}`,formData)
    return response.data
}

const categoryService={
    createCategory,
    getAllCategory,
    deleteCategory,
    updateCategory
}

export default categoryService;