import React from "react";
import Header from "layout/Header/Header";
import Footer from "layout/Footer/Footer";
import { Outlet } from "react-router-dom";
import NotificationsProvider from "Notifications/NotificationsProvider";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <NotificationsProvider>
          <Outlet />
        </NotificationsProvider>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
