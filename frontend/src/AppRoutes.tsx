import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { Home } from "./pages/Home";
import AuthCallbackPages from "./pages/AuthCallbackPages";
import { UserProfile } from "./pages/UserProfile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPages />} />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfile />
          </Layout>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
