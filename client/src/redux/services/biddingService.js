import axios from "axios";
import { summaryApi } from "../../common/summaryApi.js";

const placeBid=async(formData)=>{
    const response=await axios.post(summaryApi.placeBid.url,formData)
    return response.data
}

const fetchBiddingHistory=async(id)=>{
    const response=await axios.get(`${summaryApi.fetchBiddingHistory.url}/${id}`)
    return response.data
}

const sellproductsbyuser=async(productId)=>{
    const response=await axios.post(summaryApi.sellProductsbyuser.url,productId)
    return response.data
}

const biddingService={
    placeBid,
    fetchBiddingHistory,
    sellproductsbyuser
}

export default bidService;
