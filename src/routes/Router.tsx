import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./RouteConfig";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteConfig />
    </BrowserRouter>
  );
}

export default Router;
