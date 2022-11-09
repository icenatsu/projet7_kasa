import React from "react";
import Header from "layout/Header";
import Footer from "layout/Footer";
import Router from "pages/";

const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
