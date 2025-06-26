import { useDispatch } from "react-redux";
import { useRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser.js";
import { Caption, PrimaryButton, Title ,commonClassNameOfInput} from "../../routes/common/AllRoutes.jsx";
import { useNavigate } from "react-router-dom";
import { createCategory, getAllCategory } from "../../redux/features/categorySlice.js";
import { useState } from "react";


export const CreateCategory = () => {
      
    // useRedirectLoggedOutUser('/login')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [error,setError]=useState("")

    const handleInputChange=(e)=>{
        setTitle(e.target.value)
        setError('')
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(title.trim()===''){
            setError('Title is required')
            return
        }
        
        try {
            setError('')
            await dispatch(createCategory({title}).unwrap())
            await dispatch(getAllCategory()).unwrap()
            navigate('/category')
        } catch (error) {
            setError("Failed to create category. Please try again.")
            // toast.error(error.message)
        }
    }

  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Create Category
        </Title>
        <form onSubmit={handleSubmit}>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input type="text" value={title} onChange={handleInputChange} className={`${commonClassNameOfInput}`} placeholder="Title" required />
          </div>

          <PrimaryButton type="submit" className="rounded-none my-5">
            CREATE
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};