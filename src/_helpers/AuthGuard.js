import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account.service";

const AuthGuard = ({ children }) => {
  if (!accountService.isLoggedIn()) {
    if (localStorage.getItem("username") == null) {
      return <Navigate to="/auth" />;
    }
  }
  return children;
};
export default AuthGuard;
