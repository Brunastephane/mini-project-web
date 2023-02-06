import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Index";
import Books from "../pages/Books/Index";

function RouteConfig() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/books" element={<Books />} />
      <Route path="*" element={"error 404"} />
    </Routes>
  );
}

export default RouteConfig;
