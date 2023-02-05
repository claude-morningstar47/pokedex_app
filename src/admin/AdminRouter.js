import React from "react";
import { Route, Routes } from "react-router";

// Imported routes ===>
import Error from "@/_utils/Error";
import {
  // Dashboard,
  PokemonAdd,
  PokemonEdit,
  PokemonList,
  UserAdd,
  UserEdit,
  UserList,
  Listing,
  Body,
} from ".";
import AdminLayout from "./AdminLayout";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Body />} />

        <Route path="pokemon">
          7
          <Route path="list" element={<Listing />} />
          <Route index element={<PokemonList />} />
          <Route path="add" element={<PokemonAdd />} />
          <Route path="edit/:id" element={<PokemonEdit />} />
        </Route>

        <Route path="user">
          <Route path="list" element={<Listing />} />
          <Route index element={<UserList />} />
          <Route path="add" element={<UserAdd />} />
          <Route path="edit/:id" element={<UserEdit />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AdminRouter;
