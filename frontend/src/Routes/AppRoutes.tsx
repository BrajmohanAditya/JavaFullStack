import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Random from "../components/Random";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="w-full h-16">
          <Header />
          <Routes> 
            <Route path="**" element={<Random/>}/>,
            <Route path="/about" element={<Random/>}/>,
            <Route path="/contact" element={<Random/>}/>
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
