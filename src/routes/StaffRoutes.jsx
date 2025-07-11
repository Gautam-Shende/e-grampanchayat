import { Routes, Route } from "react-router-dom";
import StaffDashboard from "../components/staff/StaffDashboard";
import StaffApplications from "../components/staff/StaffApplications";
import StaffRequest from "../components/staff/StaffRequest";
import MyTask from "../components/staff/MyTask";

const StaffRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<StaffDashboard />} />
      <Route path="applications" element={<StaffApplications />} />
      <Route path="request" element={<StaffRequest />} />
      <Route path="tasks" element={<MyTask />} />
    </Routes>
  );
};

export default StaffRoutes;
