import React from "react";
import Header from "layout/Header/Header";
import Footer from "layout/Footer/Footer";
import { Outlet } from "react-router-dom";
import NotificationsProvider from "Notifications/NotificationsProvider";

// Layout possédant les composants Header/Footer et Enfants de la propriété Children du RouterProvider
// => (Home, HouseDetails, About, NotFound)
/******************************************************************************************************/
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
