import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import authService from "../services/authFeature.js";


const initialState = {
    user:JSON.parse(localStorage.getItem('user')) || null,
    users:[],
    isLoggedIn:false,
    income:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
}

export const register=createAsyncThunk('auth/register',async(userData,thunkAPI)=>{
    try{
        const response= await authService.register(userData)
        localStorage.setItem('user',JSON.stringify(response))
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const login=createAsyncThunk('auth/login',async(userData,thunkAPI)=>{
    try{
        const response= await authService.login(userData)
        localStorage.setItem('user',JSON.stringify(response))
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout=createAsyncThunk('auth/logout',async(thunkAPI)=>{
    try{
        const response= await authService.logout()
        localStorage.removeItem('user')
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        toast.error(message)
    }
})

export const getLoginStatus=createAsyncThunk('auth/status',async(thunkAPI)=>{
    try{
        const response= await authService.getLoginStatus()
        return await authService.getLoginStatus()
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        toast.error(message)
    }
})

export const getUserProfile=createAsyncThunk('auth/profile',async(thunkAPI)=>{
    try{
        const response= await authService.getUserProfile()
        return await authService.getUserProfile()
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        toast.error(message)
    }   
})

export const loginUserAsSeller=createAsyncThunk('auth/login-as-seller',async(userData,thunkAPI)=>{
    try{
        const response= await authService.loginUserAsSeller(userData)
        localStorage.setItem('user',JSON.stringify(response))
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        toast.error(message)
    }
})

export const getUserIncome=createAsyncThunk('auth/get-income',async(thunkAPI)=>{
    try{
        const response= await authService.getUserIncome()
        return await authService.getUserIncome()
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        toast.error(message)
    }
})

export const getIncome=createAsyncThunk('auth/get-income-of-admin',async(thunkAPI)=>{
    try{
        const response= await authService.getIncome()
        return await authService.getIncome()
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        toast.error(message)
    }
})

export const getAllUser=createAsyncThunk('auth/getallusers',async(thunkAPI)=>{
    try{
        const response= await authService.getAllUser()
        return await authService.getAllUser()
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        toast.error(message)
    }
})

const authSlice = createSlice({ 
    name: "auth",
    initialState,
    reducers: {
        RESET(state){
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=false;
            state.message='';
            state.user=null;
            
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isLoggedIn=true
            state.user=action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false   
            state.isError=true
            state.message=action.payload
            state.user=null
            toast.error(action.payload)
            
        })
        .addCase(login.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
            state.isLoggedIn=true
            toast.success(action.payload)

        })  
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.user=null
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(logout.pending,(state)=>{
            state.isLoading=true
            
        })
        .addCase(logout.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isLoggedIn=false
            state.user=null
            state.message=action.payload
            toast.success(action.payload)
        })  
        .addCase(logout.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
         
            state.message=action.payload
            toast.error(action.payload)
        })  

        .addCase(getLoginStatus.pending,(state)=>{
            state.isLoading=true
            state.isLoggedIn=false
            state.isSuccess=false
            state.isError=false
            state.message=''


        })
        .addCase(getLoginStatus.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isLoggedIn=true
            state.user=action.payload
            toast.success(action.payload)
        })  
        .addCase(getLoginStatus.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.user=null
            state.message=action.payload
            toast.error(action.payload)
        })  
        .addCase(getUserProfile.pending,(state)=>{
            state.isLoading=true
            state.isLoggedIn=false
            state.isSuccess=false
            state.isError=false
            state.message=''
        })
        .addCase(getUserProfile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isLoggedIn=true
            state.user=action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
            toast.success(action.payload)
        })
        .addCase(getUserProfile.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
          
            state.message=action.payload
            localStorage.removeItem('user')
            state.isLoggedIn=true
            toast.error(action.payload)
        })

        .addCase(loginUserAsSeller.pending,(state)=>{
            state.isLoading=true
            state.isLoggedIn=false
            state.isSuccess=false
            state.isError=false
            state.message=''
        })
        .addCase(loginUserAsSeller.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true

            state.user=action.payload
            state.isLoggedIn=true
            localStorage.setItem('user',JSON.stringify(action.payload))
            toast.success("You are now logged in as a seller")
        })  
        .addCase(loginUserAsSeller.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.user=null
            state.isLoggedIn=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(getUserIncome.pending,(state)=>{
            state.isLoading=true
            state.isLoggedIn=false
            state.isSuccess=false
            state.isError=false
            state.message=''
        })
        .addCase(getUserIncome.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isLoggedIn=true
            state.user=action.payload
            state.income=action.payload
            toast.success(action.payload)
        })
        .addCase(getUserIncome.rejected,(state,action)=>{   
            state.isLoading=false
            state.isError=true
            state.user=null
            state.message=action.payload
            state.isLoggedIn=true
            toast.error(action.payload)
        })

        .addCase(getIncome.pending,(state)=>{
            state.isLoading=true
            state.isLoggedIn=false
            state.isSuccess=false
            state.isError=false
            state.message=''
        })

        .addCase(getIncome.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isLoggedIn=true
            state.income=action.payload
            toast.success(action.payload)
        })
        .addCase(getIncome.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.user=null
            state.message=action.payload
            state.isLoggedIn=true
            toast.error(action.payload)
        })

        .addCase(getAllUser.pending,(state)=>{
            state.isLoading=true
            state.isLoggedIn=false
            state.isSuccess=false
            state.isError=false
            state.message=''
        })
        .addCase(getAllUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isLoggedIn=true
            state.users=action.payload
            state.totalUsers=action.payload?.length
            toast.success(action.payload)
        })  
        .addCase(getAllUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.user=null
            state.message=action.payload
            state.isLoggedIn=true
            toast.error(action.payload)
        })
    }
})


export const {RESET}=authSlice.actions;

export const selectIsLoggedIn=state=>state.auth.isLoggedIn
export const selectUser=state=>state.auth.user
export const selectIsSuccess=state=>state.auth.isSuccess



export default authSlice.reducer;