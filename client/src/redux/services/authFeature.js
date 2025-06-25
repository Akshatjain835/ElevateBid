import axios from "axios";
import { summaryApi } from "../../common/summaryApi.js";



const register=async(userData)=>{
    const response=await axios.post(summaryApi.register.url,userData)
    // console.log(response)
    return response.data
}

const login=async(userData)=>{
    const response=await axios.post(summaryApi.login.url,userData)
    return response.data
}

const logout=async()=>{
    const response=await axios.get(summaryApi.logout.url)
    
    return response.data.message
}

const getLoginStatus=async()=>{
    const response=await axios.get(summaryApi.getLoginStatus.url)
    return response.data
}

const getUserProfile=async()=>{
    const response=await axios.get(summaryApi.getUserProfile.url)
    return response.data.message
}

const loginUserAsSeller=async(userData)=>{
    const response=await axios.post(summaryApi.loginUserAsSeller.url,userData,{
        withCredentials:true
    })
    return response.data.message
}

const getUserIncome=async()=>{
    const response=await axios.get(summaryApi.getUserIncome.url)
    return response.data.message
}

//only for admin's

const getIncome=async()=>{
    const response=await axios.get(summaryApi.getIncome.url)
    return response.data.message
}

const getAllUser=async()=>{
    const response=await axios.get(summaryApi.getAllUser.url)
    return response.data.message
}

const authService={
    register,
    login,
    logout,
    getLoginStatus,
    getUserProfile,
    loginUserAsSeller,
    getUserIncome,
    getIncome,
    getAllUser
}

export default authService;
