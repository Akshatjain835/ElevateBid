export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const summaryApi={
    register:{
        url:`${BACKEND_URL}/api/users/register`,
        method:'post'
    },
    login:{
        url:`${BACKEND_URL}/api/users/login`,
        method:'post'
    },
    logout:{
        url:`${BACKEND_URL}/api/users/logout`,
        method:'get'
    },
    getLoginStatus:{
        url:`${BACKEND_URL}/api/users/loggedin`,
        method:'get'
    },
    getUserProfile:{
        url:`${BACKEND_URL}/api/users/getuser`,
        method:'get'
    },
    loginUserAsSeller:{
        url:`${BACKEND_URL}/api/users/seller`,
        method:'post'
    },
    getUserIncome:{
        url:`${BACKEND_URL}/api/users/sell-amount`,
        method:'get'
    },

    //only for admin's
    getIncome:{
        url:`${BACKEND_URL}/api/admin/estimate-income`,
        method:'get'
    },
    getAllUser:{
        url:`${BACKEND_URL}/api/admin/getalluser`,
        method:'get'
    },
    

    //category's
    createCategory:{
        url:`${BACKEND_URL}/api/category/`,
        method:'post'
    },
    getAllCategory:{
        url:`${BACKEND_URL}/api/category/`,
        method:'get'
    },
    deleteCategory:{
        url:`${BACKEND_URL}/api/category/`,
        method:'delete'
    },
    updateCategory:{
        url:`${BACKEND_URL}/api/category/`,
        method:'put'
    },

    //product
  
    getAllProduct:{
        url:`${BACKEND_URL}/api/product/users`,
        method:'get'
    },
    getAllProductOfUser:{
        url:`${BACKEND_URL}/api/product/users`,
        method:'get'
    },
    getAllWonedProductOfUser:{
        url:`${BACKEND_URL}/api/product/users`,
        method:'get'
    },
    getProduct:{
          url:`${BACKEND_URL}/api/product/users`,
        method:'get'
    },
    
    //product seller
    createProduct:{
        url:`${BACKEND_URL}/api/product/seller`,
        method:'post'
    },
    deleteProduct:{
        url:`${BACKEND_URL}/api/product/seller`,
        method:'delete'
    },
    updateProduct:{
        url:`${BACKEND_URL}/api/product/seller`,
         method:'put'
     },

    //admin
   
    updateProductByAdmin:{
        url:`${BACKEND_URL}/api/admin/product`,   
        method:'put'
    },
    deleteProductByAdmin:{
        url:`${BACKEND_URL}/api/admin/product`,
        method:'delete'
    },
    getProductByAdmin:{
         url:`${BACKEND_URL}/api/admin/product`,
        method:'delete'
    },

    //bidding
    placeBid:{
        url:`${BACKEND_URL}/api/bidding/`,
        method:'post'
    },
    fetchBiddingHistory:{
        url:`${BACKEND_URL}/api/bidding/`,
        method:'get'
    },
    sellproductsbyuser:{
        url:`${BACKEND_URL}/api/bidding/sell`,
        method:'post'
    }

}
export default summaryApi;