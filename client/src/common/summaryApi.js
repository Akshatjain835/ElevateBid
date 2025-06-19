export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
    }
}
export default summaryApi;



