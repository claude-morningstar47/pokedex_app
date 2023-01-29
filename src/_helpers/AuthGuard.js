import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account.service.js";

const AuthGuard = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/auth" />;
  }
  return children;
};
export default AuthGuard;
