import React from "react";
import { Route, Routes } from "react-router";

import LayoutPublic from "./LayoutPublic";
import { Home, Show, Contact, About } from "@/pages/public";
import Error from "@/_utils/Error";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutPublic />}>
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="show/:_id" element={<Show />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PublicRouter;
