import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get("/api/users");
};

let getUser = (uid) => {
  return Axios.get("/api/users/" + uid);
};

let addUser = (user) => {
  return Axios.post("/api/register", user);
};

let updateUser = (user) => {
  return Axios.put("/api/users/" + user.id, user);
};

let deleteUser = (uid) => {
  return Axios.delete("/api/users/" + uid);
};

export const userService = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
};
