import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import biddingService from "../services/biddingService";
import { toast } from "react-toastify";

const initialState={
    history:[],
    bidding:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''

}

export const placeBid=createAsyncThunk('bid/create',async({price,productId},thunkAPI)=>{
    try {
        return await biddingService.placeBid({price,productId})
    } catch (error) {
        const errorMessage=error.response.data.message || error.message || 'An error occurred'
        return thunkAPI.rejectWithValue(errorMessage)
    }
})

export const fetchBiddingHistory=createAsyncThunk('bid/get',async(productId,thunkAPI)=>{
    try {
        return await biddingService.fetchBiddingHistory(productId)
    } catch (error) {
        const errorMessage=error.response.data.message || error.message || 'An error occurred'
        return thunkAPI.rejectWithValue(errorMessage)
    }
})

export const sellproductsbyuser=createAsyncThunk('bid/sell',async(productId,thunkAPI)=>{
    try {
        return await biddingService.sellproductsbyuser(productId)
    } catch (error) {
        const errorMessage=error.response.data.message || error.message || 'An error occurred'
        return thunkAPI.rejectWithValue(errorMessage)
    }
})

const biddingSlice=createSlice({   
    name:'bidding',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(placeBid.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(placeBid.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            toast.success("Bid placed successfully")
            state.bidding=action.payload
        })
        .addCase(placeBid.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
        })

        .addCase(fetchBiddingHistory.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchBiddingHistory.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.history=action.payload
            
        })
        .addCase(fetchBiddingHistory.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(sellproductsbyuser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(sellproductsbyuser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.bidding=action.payload


        })  
        .addCase(sellproductsbyuser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.payload

        })
    }
    
})  

export const {}=biddingSlice.actions
export default biddingSlice.reducer