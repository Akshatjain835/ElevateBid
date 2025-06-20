import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/categoryService";
import { toast } from "react-toastify";

const initialState={
   categorys:[],
   category:null,
   isLoading:false,
   isError:false,
   isSuccess:false,
   income:null,
   message:''
}

export const createCategory=createAsyncThunk('category/create',async(formData,thunkAPI)=>{
    try{
        const response=await categoryService.createCategory(formData)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)    
    }
})

export const getAllCategory=createAsyncThunk('category/getall',async(formData,thunkAPI)=>{
    try{
        const response=await categoryService.getAllCategory(formData)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)    
    }
})

export const deleteCategory=createAsyncThunk('category/delete',async(id,thunkAPI)=>{
    try{
        const response=await categoryService.deleteCategory(id)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)    
    }
})

export const updateCategory=createAsyncThunk('category/update',async(id,formData,thunkAPI)=>{
    try{
        const response=await categoryService.updateCategory(id,formData)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)    
    }
})

const categorySlice=createSlice({   
    name:'category',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createCategory.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(createCategory.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            // state.categorys.push(action.payload)
            toast.success('Category created successfully')
            toast.success(action.payload)
        })
        .addCase(createCategory.rejected,(state,action)=>{  
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(getAllCategory.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(getAllCategory.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.categorys=action.payload
            toast.success(action.payload)
        })
        .addCase(getAllCategory.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })  

        .addCase(deleteCategory.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(deleteCategory.fulfilled,(state,action)=>{
            state.isLoading=false   
            state.isSuccess=true
            state.isError=false
           
            toast.success('Category deleted successfully')
        })
        .addCase(deleteCategory.rejected,(state,action)=>{
            state.isLoading=false   
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(updateCategory.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(updateCategory.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            toast.success('Category updated successfully')
            toast.success(action.payload)
        })
        .addCase(updateCategory.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })
    }
})  

export const {}=categorySlice.actions
export default categorySlice.reducer