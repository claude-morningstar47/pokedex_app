import Axios from "./caller.service";

let login = (data, config) => {
  return Axios.post("/api/login", data, config);
};

let register = (data, config) => {
  return Axios.post("/api/register", data, config);
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
