import React from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "@/_services";
import { useQuery } from "react-query";

const UserList = () => {
  let navigate = useNavigate();

  const { isLoading, isError, error, data } = useQuery("users", () =>
    userService.getAllUsers()
  );
  const users = data;

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading ....</div>;
  }
  return (
    <div className="mainContent grid">
      PokemonList
      <div className="">
        {users.data.map((user) => (
          <div
            onClick={(e) => navigate(`../edit/${user.id}`)}
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
