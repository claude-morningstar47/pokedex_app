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

let isLoggedIn = () => {
  let token = localStorage.getItem("authToken");
  return !!token;
};

let getToken = () => {
  return localStorage.getItem("authToken", "your-token-here");
};

export const accountService = {
  saveToken,
  logout,
  isLoggedIn,
  login,
  register,
  getToken,
};

// import Axios from "./caller.service";

// const accountService = {
//   saveToken: (token) => localStorage.setItem("authToken", token),
//   logout: () => localStorage.removeItem("authToken"),
//   isLogged: () => localStorage.getItem("authToken") !== null,
//   login: (data, config) => Axios.post("/api/login", data, config),
//   register: (data, config) => Axios.post("/api/register", data, config),
//   getToken: () => localStorage.getItem("authToken"),
// };

// export default accountService;
