import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, selectIsLoggedIn } from "../redux/features/authSlice";
import { useEffect } from "react";

export const useUserProfile=()=>{

    const dispatch=useDispatch()
    
    const isLoggedIn=useSelector(selectIsLoggedIn)
    const {user,isloading}=useSelector((state)=>state.auth)
    const [role,setRole]=useState(()=>user?.role || JSON.parse(localStorage.getItem('user')))

    useEffect(()=>{
        if(isloading && !user){
            dispatch(getUserProfile())
        }else if(user){
            setRole(user.role)
        }
    },[dispatch,isloading,user])

    useEffect(()=>{
        if(user){
            setRole(user.role)
        }
    },[user])

    return {role,isloading,isLoggedIn}   
    
    

}