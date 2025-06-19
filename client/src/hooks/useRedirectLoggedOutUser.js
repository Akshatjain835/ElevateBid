import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../redux/services/authFeature.js";

export const useRedirectLoggedOutUser = (path) => {

  const { user, isLoggedIn } = useSelector((state) => state.auth);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
      let isLoggedIn;

      const redirectLoggedOutUser=async()=>{
          try{
             isLoggedIn=await authService.getLoginStatus()
          }catch(error){
            console.log(error.message)
          }

          if(!isLoggedIn){
            navigate(path)
            return
          }
      }

      redirectLoggedOutUser()
    },[navigate,path])


};
