import axios from "axios";
import summaryApi from "../../common/summaryApi.js";

const createCategory=async(formData)=>{
    const response=await axios.post(summaryApi.createCategory.url,formData)
    return response.data
}

const getCategory=async()=>{
    const response=await axios.get(summaryApi.getCategory.url,formData)
    return response.data
}

const categoryService={
    createCategory
}

export default categoryService;