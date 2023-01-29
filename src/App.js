import "./App.css";
// Imported Routes ===>
import { Route, Routes } from "react-router";
import PublicRouter from "@/public/PublicRouter";
import AdminRouter from "@/admin/AdminRouter";
import AuthRouter from "@/auth/AuthRouter";
import AuthGuard from "@/_helpers/AuthGuard";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<PublicRouter />} />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route
        path="/admin/*"
        element={
          <AuthGuard>
            <AdminRouter />
          </AuthGuard>
        }
      />
    </Routes>
  );
}

export default App;
