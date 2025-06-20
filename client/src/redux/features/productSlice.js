import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../services/productService.js";
import { toast } from "react-toastify";

const initialState={
    products:[],
    userproducts:[],
    wonedproducts:[],
    product:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
}

export const createProduct=createAsyncThunk('product/create',async(formData,thunkAPI)=>{
    try{
        const response=await productService.createProduct(formData)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllProductOfUser=createAsyncThunk('product/get-user-products',async(_,thunkAPI)=>{
    try{
        const response=await productService.getAllProductOfUser()
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllProduct=createAsyncThunk('product/public/get-products',async(_,thunkAPI)=>{
    try{
        const response=await productService.getAllProduct()
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllWonedProductOfUser=createAsyncThunk('product/public/get-woned-user-products',async(_,thunkAPI)=>{
    try{
        const response=await productService.getAllWonedProductOfUser()
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteProduct=createAsyncThunk('product/delete',async(id,thunkAPI)=>{  
    try{
        const response=await productService.deleteProduct(id)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateProduct=createAsyncThunk('product/user/update',async({id,formData},thunkAPI)=>{
    try{
        const response=await productService.updateProduct(id,formData)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getProduct=createAsyncThunk('product/public/get-product',async(id,thunkAPI)=>{
    try{
        const response=await productService.getProduct(id,formData)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateProductByAdmin=createAsyncThunk('product/admin/update',async({id,formData},thunkAPI)=>{
    try{
        const response=await productService.updateProductByAdmin(id,formData)
        return response
    }catch(error){
        const message=error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createProduct.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(createProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.products.push(action.payload)
            toast.success('Product created successfully')
            toast.success(action.payload)
        })
        .addCase(createProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(getAllProductOfUser.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(getAllProductOfUser.fulfilled,(state,action)=>{
            state.isLoading=false   
            state.isSuccess=true
            state.isError=false
            state.userproducts=action.payload
        })
        .addCase(getAllProductOfUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(getAllProduct.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.products=action.payload
        })
        .addCase(getAllProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(getAllWonedProductOfUser.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(getAllWonedProductOfUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.wonedproducts=action.payload
        })
        .addCase(getAllWonedProductOfUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true  
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(deleteProduct.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            
            toast.success('Product deleted successfully')
        })
        .addCase(deleteProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(updateProduct.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(updateProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
         
            toast.success('Product updated successfully')
        })
        .addCase(updateProduct.rejected,(state,action)=>{
            state.isLoading=false   
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(getProduct.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.product=action.payload
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            toast.error(action.payload)
        })

        .addCase(updateProductByAdmin.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(updateProductByAdmin.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            toast.success('Product updated successfully')
        })
        .addCase(updateProductByAdmin.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.payload
            toast.error(action.payload)
        })
    }
})

export const {}=productSlice.actions

export const selectProduct=(state)=>state.product.products

export default productSlice.reducer