import React from "react";
import Header from "layout/Header/Header";
import Footer from "layout/Footer/Footer";
import styles from "layout/Layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // <div className={styles.layout}>
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
    // </div>
  );
};

export default Layout;
