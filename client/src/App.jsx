// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/index.jsx";
import ScrollToTop from "./routes/common/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import { getLoginStatus } from "./redux/features/authSlice.js";

function App() {
  const dispatch=useDispatch()

  // const {isLoggedIn}=useSelector((state)=>state.auth.isLoggedIn)
  // // console.log(isLoggedIn)
  useEffect(()=>{
    dispatch(getLoginStatus())


    
    
  },[dispatch])

  return (
    <BrowserRouter>
    <ToastContainer />
      <ScrollToTop />
      <Routes>
        {
        routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
