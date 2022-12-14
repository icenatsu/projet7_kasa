// import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "pages/Home/Home";
import About from "pages/About/About";
import HouseDetails from "pages/HouseDetails/HouseDetails";
import NotFound from "pages/NotFound/NotFound";
import Layout from "./layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/acco/:id",
        element: <HouseDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
