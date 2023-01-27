import Axios from "./caller.service";

let login = (credentials) => {
  return Axios.post("/api/login", credentials);
};

let register = (credentials) => {
  return Axios.post("/api/register", credentials);
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let logout = () => {
  localStorage.removeItem("token");
};

let isLogged = () => {
  let token = localStorage.getItem("token");

  return !!token;
};

let getToken = () => {
  return localStorage.getItem("token");
};

export const accountService = {
  saveToken,
  logout,
  isLogged,
  login,
  register,
  getToken,
};
