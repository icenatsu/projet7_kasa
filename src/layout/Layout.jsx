import React from "react";
import Header from "layout/Header/Header";
import Footer from "layout/Footer/Footer";
import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* <ToastContainer /> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
