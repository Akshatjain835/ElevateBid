// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/index.jsx";
import ScrollToTop from "./routes/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
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
