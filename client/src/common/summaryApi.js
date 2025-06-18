export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const summaryApi={
    register:{
        url:`${BACKEND_URL}/api/users/register`,
        method:'post'
    },
    login:{
        url:`${BACKEND_URL}/users`,
        method:'post'
    }
}
export default summaryApi;



