import React from "react";
import styles from "pages/Main.module.scss";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import AccommodationSheet from "pages/AccomodationSheet";
import Error from "pages/NotFound";

const index = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="acco/:id" element={<AccommodationSheet />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default index;
