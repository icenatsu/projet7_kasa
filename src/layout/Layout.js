import React from "react";
import Header from "layout/Header";
import Footer from "layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
