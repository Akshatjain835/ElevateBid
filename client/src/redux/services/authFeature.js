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
    
    return response.data
}

const getLoginStatus=async()=>{
    // console.log("authService - getLoginStatus called")
    // console.log("authService - URL:", summaryApi.getLoginStatus.url)
    try {
        const response=await axios.get(summaryApi.getLoginStatus.url, {
            withCredentials: true
        })
        // console.log("authService - getLoginStatus response:", response)
        return response.data
    } catch (error) {
        // console.log("authService - getLoginStatus error:", error)
        throw error
    }
}

const getUserProfile=async()=>{
    const response=await axios.get(summaryApi.getUserProfile.url)
    return response.data
}

const loginUserAsSeller=async(userData)=>{
    const response=await axios.post(summaryApi.loginUserAsSeller.url,userData,{
        withCredentials:true
    })
    return response.data
}

const getUserIncome=async()=>{
    const response=await axios.get(summaryApi.getUserIncome.url)
    return response.data.message
}

//only for admin's

const getIncome=async()=>{
    const response=await axios.get(summaryApi.getIncome.url)
    return response.data
}

const getAllUser=async()=>{
    const response=await axios.get(summaryApi.getAllUser.url)
    return response.data
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
