import React from "react";
import Navbar from "../components/CssPage/Navbar";
import Sidebar from "../components/CssPage/Sidebar";
import Footer from "../components/CssPage/Footer";
import Sections from "../components/CssPage/Sections";
import  '../components/CssPage/mainCss.css';

const CssSecond = () => (
  <div className="view">
    <Navbar />
    <Sidebar />
    <Sections /> 
    <Footer />
  </div>  
);  

export default CssSecond