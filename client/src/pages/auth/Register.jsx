import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../routes/common/AllRoutes";
import { commonClassNameOfInput } from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { register, RESET } from "../../redux/features/authSlice";
import { Loader } from "../../components/common/Loader";

const initialState={
  name:"",
  email:"",
  password:"",
  confirmPassword:""
}

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [justRegistered, setJustRegistered] = useState(false);

  const {name,email,password,confirmPassword}=formData
  const {user,isLoading,isError,isSuccess,message,isLoggedIn}=useSelector((state)=>state.auth)

// Console logs for debugging
console.log("🔍 Register Component State:", {
  isLoading,
  isSuccess,
  isError,
  isLoggedIn,
  justRegistered,
  hasUser: !!user
});
   
const handleInputChange = (e) => {
  const {name,value}=e.target
  setFormData({ 
    ...formData,
     [name]: value 
    });
}

const handleRegister = async e => {
  e.preventDefault();
  
  console.log("🚀 Signup process started");
  console.log("📝 Form data:", { name, email });
  
  if(!name || !email || !password || !confirmPassword){
    console.log("❌ Validation failed: Missing fields");
    toast.error("Please fill all fields")
    return
  }
  if(password.length < 8){
    console.log("❌ Validation failed: Password too short");
    toast.error("Password must be at least 8 characters long")
    return
  }
  if(password !== confirmPassword){
    console.log("❌ Validation failed: Passwords don't match");
    toast.error("Passwords do not match")
    return
  }

  const userData={
    name,
    email,
    password
  }
  
  console.log("✅ Validation passed, dispatching register action");
  console.log("👤 User data being sent:", { name: userData.name, email: userData.email });
  
  dispatch(register(userData))
  setJustRegistered(true)
  
  console.log("📤 Register action dispatched successfully");
};

useEffect(()=>{
  if(isSuccess && justRegistered){
    console.log("🎉 Registration successful!");
    console.log("👤 User data:", user);
    console.log("🔄 Redirecting to home page...");
    
    dispatch(RESET())
    navigate("/") // Changed from "/login" to "/" (home page)
    toast.success("Registration successful! Welcome to ElevateBid!")
    setJustRegistered(false)
    
    console.log("✅ Redirect completed");
  }
  if(isError && justRegistered){
    console.log("❌ Registration failed");
    console.log("💬 Error message:", message);
    
    dispatch(RESET())
    toast.error(message || "Something went wrong")
    setJustRegistered(false)
  }
},[isSuccess,navigate,dispatch,isError,message,user,justRegistered])




  return (
    <>
    {isLoading && <Loader/>}
      <section className="regsiter pt-16 relative">
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
        <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
          <Container>
            <div>
              <Title level={3} className="text-white">
                Sign Up
              </Title>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-green font-normal text-xl">
                  Home
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  /
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  Sign Up
                </Title>
              </div>
            </div>
          </Container>
        </div>
        <form onSubmit={handleRegister} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
          <div className="text-center">
            <Title level={5}>Sign Up</Title>
            <p className="mt-2 text-lg">
              Do you already have an account? <CustomNavLink href="/login">Log In Here</CustomNavLink>
            </p>
          </div>
          <div className="py-5">
            <Caption className="mb-2">Username *</Caption>
            <input type="text" name="name" className={commonClassNameOfInput} placeholder="First Name" required value={name} onChange={handleInputChange} />
          </div>
          <div className="py-5">
            <Caption className="mb-2">Enter Your Email *</Caption>
            <input type="email" name="email" className={commonClassNameOfInput} placeholder="Enter Your Email" required value={email} onChange={handleInputChange} />  
          </div>
          <div>
            <Caption className="mb-2">Password *</Caption>
            <input type="password" name="password" className={commonClassNameOfInput} placeholder="Enter Your Password" required value={password} onChange={handleInputChange} />
          </div>
          <div>
            <Caption className="mb-2 block">Confirm Password *</Caption>
            <input type="password" name="confirmPassword" className={commonClassNameOfInput} placeholder="Confirm password" value={confirmPassword} onChange={handleInputChange} />
          </div>
          <div className="flex items-center gap-2 py-4">
            <input type="checkbox" />
            <Caption>I agree to the Terms & Policy</Caption>
          </div>
          <PrimaryButton className="w-full rounded-none my-5">CREATE ACCOUNT</PrimaryButton>
          <div className="text-center border py-4 rounded-lg mt-4">
            <Title>OR SIGNUP WITH</Title>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
                <FaGoogle />
                <p className="text-sm">SIGNUP WHIT GOOGLE</p>
              </button>
              <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
                <FaFacebook />
                <p className="text-sm">SIGNUP WHIT FACEBOOK</p>
              </button>
            </div>
          </div>
          <p className="text-center mt-5">
            By clicking the signup button, you create a Cobiro account, and you agree to Cobiros <span className="text-green underline">Terms & Conditions</span> &
            <span className="text-green underline"> Privacy Policy </span> .
          </p>
        </form>
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
      </section>
    </>
  );
};