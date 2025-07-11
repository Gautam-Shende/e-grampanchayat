import { Routes, Route } from "react-router-dom";
import UserDashboard from "../components/user/UserDashboard";
import UserProfile from "../components/user/UserProfile";
import ServiceSearch from "../components/user/ServiceSearch";
import ServiceApply from "../components/user/ServiceApply";
import ApplicationStatus from "../components/user/ApplicationStatus";
import UserRegister from "../components/user/UserRegister";
import UserLogin from "../components/user/UserLogin";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<UserDashboard />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="search" element={<ServiceSearch />} />
      <Route path="apply" element={<ServiceApply />} />
      <Route path="applications" element={<ApplicationStatus />} />
      <Route path="register" element={<UserRegister />} />
      <Route path="login" element={<UserLogin />} />
    </Routes>
  );
};

export default UserRoutes;
