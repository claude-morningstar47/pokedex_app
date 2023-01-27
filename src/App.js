import "./App.css";
import { Route, Routes } from "react-router";
// Imported Routes ===>
import PublicRouter from "@/components/public/PublicRouter";
import AdminRouter from "@/components/admin/AdminRouter";
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
