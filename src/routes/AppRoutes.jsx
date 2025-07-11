import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserRoutes from "./UserRoutes";
import StaffRoutes from "./StaffRoutes";
import AdminRoutes from "./AdminRoutes";
import UserLogin from "../components/user/UserLogin";
import StaffLogin from "../components/staff/StaffLogin";
import AdminLogin from "../components/admin/AdminLogin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Logins */}
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/staff/login" element={<StaffLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Nested role-based routes */}
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/staff/*" element={<StaffRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
