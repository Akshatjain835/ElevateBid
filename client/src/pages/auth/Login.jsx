import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, RESET  } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../routes/common/AllRoutes";
import { commonClassNameOfInput } from "../../components/common/Design";
import { toast } from "react-toastify";
import { Loader } from "../../components/common/Loader";

const initialState={
  email:"",
  password:""
}


export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [justLoggedIn, setJustLoggedIn] = useState(false);

  const {email,password}=formData
  const {user,isLoading,isError,isSuccess,message,isLoggedIn}=useSelector((state)=>state.auth)
// console.log(user)
   
const handleInputChange = (e) => {
  const {name,value}=e.target
  setFormData({ 
    ...formData,
     [name]: value 
    });
}

const handleLogin = async (e) => {
  e.preventDefault();
  
  if(!email || !password){
    toast.error("Please fill all fields")
    return
  }
  if(password.length < 8){
    toast.error("Password must be at least 8 characters long")
    return
  }


  const userData={
    email,
    password
  }
  dispatch(login(userData))
  setJustLoggedIn(true)
  
  
};

useEffect(()=>{
  if(isSuccess && justLoggedIn){
    dispatch(RESET())
    navigate("/")
    toast.success("Login successfull")
    setJustLoggedIn(false)
  }
  if(isError && justLoggedIn){
    dispatch(RESET())
    toast.error(message || "Something went wrong")
    setJustLoggedIn(false)
  }
},[navigate,isError,isSuccess,justLoggedIn])

  return (
    <>
    {isLoading && <Loader/>}
      <section className="regsiter pt-16 relative">
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
        <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
          <Container>
            <div>
              <Title level={3} className="text-white">
                Log In
              </Title>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-green font-normal text-xl">
                  Home
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  /
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  Log In
                </Title>
              </div>
            </div>
          </Container>
        </div>
        <form className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl" onSubmit={handleLogin}>
          <div className="text-center">
            <Title level={5}>New Member</Title>
            <p className="mt-2 text-lg">
              Do you already have an account? <CustomNavLink href="/register">Signup Here</CustomNavLink>
            </p>
          </div>

          <div className="py-5 mt-8">
            <Caption className="mb-2">Enter Your Email *</Caption>
            <input type="email" name="email" className={commonClassNameOfInput} placeholder="Enter Your Email" required value={email} onChange={handleInputChange} />
          </div>
          <div>
            <Caption className="mb-2">Password *</Caption>
            <input type="password" name="password" className={commonClassNameOfInput} placeholder="Enter Your Password" required value={password} onChange={handleInputChange} />
          </div>
          <div className="flex items-center gap-2 py-4">
            <input type="checkbox" />
            <Caption>I agree to the Terms & Policy</Caption>
          </div>
          <PrimaryButton className="w-full rounded-none my-5" disabled={isLoading}>LOGIN</PrimaryButton>
          <div className="text-center border py-4 rounded-lg mt-4">
            <Title>OR SIGNIN WITH</Title>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
                <FaGoogle />
                <p className="text-sm">SIGNIN WHIT GOOGLE</p>
              </button>
              <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
                <FaFacebook />
                <p className="text-sm">SIGNIN WHIT FACEBOOK</p>
              </button>
            </div>
          </div>
          <p className="text-center mt-5">
            By clicking the signup button, you create a Cobiro account, and you agree to Cobiros <span className="text-green underline">Terms & Conditions</span> &
            <span className="text-green underline"> Privacy Policy </span> .
          </p>
          {isError && <div className="text-red-500 mt-5">{message}</div>}
        </form>
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
      </section>
    </>
  );
};
