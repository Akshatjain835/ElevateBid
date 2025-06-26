import { useDispatch, useSelector } from "react-redux";
import { useRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser.js";
import { PrimaryButton,Caption, commonClassNameOfInput, Title } from "../../routes/common/AllRoutes.jsx";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCategory, getAllCategory } from "../../redux/features/categorySlice.js";


export const UpdateCategory = () => {
       
    // useRedirectLoggedOutUser('/login')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [title,setTitle]=useState('')
   
    const {id}=useParams()

     const {isSuccess}=useSelector((state)=>state.category)

     const handleSubmit=async(e)=>{
        e.preventDefault()
        
         const formData={
            title:title
         }

         await dispatch(createCategory({formData,id}))
         await dispatch(getAllCategory())
          
         if(isSuccess){
            navigate('/category')
         }

     }
  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Update Category
        </Title>

        <form onSubmit={handleSubmit}>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} className={`${commonClassNameOfInput}`} />
          </div>

          <PrimaryButton type="submit" className="rounded-none my-5">
            Update
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};