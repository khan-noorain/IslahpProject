
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Componets/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Resources from "../Pages/Resources";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all pages with Layout */}
        <Route element={<Layout />}>
          {/* Default route (Home) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />                   
        </Route>

        {/* 404 Page */}
        <Route
          path="*"
          element={<div className="text-center text-2xl p-10">404 - Page Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
