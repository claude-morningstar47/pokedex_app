import Axios from "./caller.service";

let login = (data, config) => {
  return Axios.post("/api/login", data, config);
};

let register = (data, config) => {
  return Axios.post("/api/register", data, config);
};

let saveToken = (token) => {
  localStorage.setItem("authToken", token);
};

let logout = () => {
  localStorage.removeItem("authToken");
};

let isLogged = () => {
  let token = localStorage.getItem("authToken");
  return !!token;
};

let getToken = () => {
  return localStorage.getItem("authToken", "your-token-here");
};

export const accountService = {
  saveToken,
  logout,
  isLogged,
  login,
  register,
  getToken,
};
