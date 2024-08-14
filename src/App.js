import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Products from "./components/products/Products";
import Office from "./pages/Office";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
            {/* different layout for mobile screens */}
            {!isMobile && <SideBar />}
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/office" element={<Office />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
