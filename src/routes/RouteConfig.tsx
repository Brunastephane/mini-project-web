import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Books from "../pages/Books/Books";
import Book from "../pages/Books/Book";
import Contact from "../pages/Contact/Contact";

function RouteConfig() {
  return (
    <Routes>
      <Route index path="/mini-project-web" element={<Main />} />
      <Route path="/mini-project-web/books" element={<Books />} />
      <Route path="/mini-project-web/book/:id" element={<Book />} />
      <Route path="/mini-project-web/contact" element={<Contact />} />
      <Route path="*" element={"error 404"} />
    </Routes>
  );
}

export default RouteConfig;
