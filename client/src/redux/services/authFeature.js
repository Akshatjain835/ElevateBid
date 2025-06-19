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
    const response=await axios.get(summaryApi.logout.url,userData)
    localStorage.removeItem('user')
    return response.data.message
}

const getLoginStatus=async()=>{
    const response=await axios.get(summaryApi.getLoginStatus.url,userData)
    return response.data.message
}

const getUserProfile=async()=>{
    const response=await axios.get(summaryApi.getUserProfile.url,userData)
    return response.data.message
}

const loginUserAsSeller=async()=>{
    const response=await axios.post(summaryApi.loginUserAsSeller.url,userData,{
        withCredentials:true
    })
    return response.data.message
}

const authService={
    register,
    login,
    logout,
    getLoginStatus,
    getUserProfile,
}

export default authService;
