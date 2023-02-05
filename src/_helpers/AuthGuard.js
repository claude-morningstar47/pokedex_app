import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account.service";

const AuthGuard = ({ children }) => {
  if (!accountService.isLoggedIn()) {
    return <Navigate to="/auth" />;
  }
  return children;
};
export default AuthGuard;
