// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/index.jsx";
import ScrollToTop from "./routes/common/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import { getLoginStatus } from "./redux/features/authSlice.js";
import { useEffect } from "react";

function App() {
  const dispatch=useDispatch()
  const {isLoggedIn, user} = useSelector((state)=>state.auth)

  // console.log("App.jsx - Initial state:", { isLoggedIn, user })
  // console.log("App.jsx - localStorage user:", JSON.parse(localStorage.getItem('user')))

  useEffect(()=>{
    // console.log("App.jsx - Calling getLoginStatus")
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
