import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { Home } from "./pages/Home";
import AuthCallbackPages from "./pages/AuthCallbackPages";
import { UserProfile } from "./pages/UserProfile";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <Home />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPages />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
      </Route>

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
