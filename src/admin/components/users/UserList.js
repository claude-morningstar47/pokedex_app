import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { userService } from "@/_services";

const UserList = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery("users", () => userService.getAllUsers());

  if (isLoading) return <div>Loading ....</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="mainContent grid">
      PokemonList
      <div className="">
        {users.data.data.map((user) => (
          <div
            onClick={() => navigate(`./edit/${user.id}`)}
            key={user.id}
            className="singleItem"
          >
            <h2>Id: {user.id}</h2>
            <h2>Username: {user.username}</h2>
            <h2>Create: {Date(user.createdAt)}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
