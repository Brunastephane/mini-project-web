import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Books from "../pages/Books/Books";
import Book from "../pages/Books/Book";

function RouteConfig() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/books" element={<Books />} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="*" element={"error 404"} />
    </Routes>
  );
}

export default RouteConfig;
