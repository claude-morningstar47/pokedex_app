import React from "react";
import { Route, Routes } from "react-router";

// Imported routes ===>
import Error from "@/_utils/Error";
import { Dashboard, PokemonAdd, PokemonEdit, PokemonList } from ".";
import Listing from "./components/listing_section/Listing";
import AdminLayout from "./AdminLayout";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="list" element={<Listing />} />

        <Route path="pokemon">
          <Route path="index" element={<PokemonList />} />
          <Route path="add" element={<PokemonAdd />} />
          <Route path="edit/:id" element={<PokemonEdit />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AdminRouter;
