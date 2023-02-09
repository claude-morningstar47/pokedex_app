import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account.service";
// import { createBrowserHistory } from "history";

// const hist = createBrowserHistory();

const AuthGuard = ({ children }) => {
  if (!accountService.isLoggedIn()) {
    if (localStorage.getItem("username") == null) {
      // hist.push("/auth");

      return <Navigate to="/auth" />;
    }
  }
  return children;
};
export default AuthGuard;
