import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../components/admin/AdminDashboard";
import ServiceManagement from "../components/admin/ServiceManagement";
import ApplicationManagement from "../components/admin/ApplicationManagement";
import AdminLogin from "../components/admin/AdminLogin";
import AdminRegister from "../components/admin/AdminRegister";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="services" element={<ServiceManagement />} />
      <Route path="applications" element={<ApplicationManagement />} />
      <Route path="login" element={<AdminLogin />} />
      <Route path="register" element={<AdminRegister />} />
    </Routes>
  );
};

export default AdminRoutes;
