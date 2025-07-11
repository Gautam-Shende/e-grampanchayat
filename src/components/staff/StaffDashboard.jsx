import { motion } from "framer-motion";
import {
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiUser,
  FiAlertCircle,
  FiSearch,
  FiCalendar,
  FiDollarSign,
  FiAward,
  FiBarChart2,
} from "react-icons/fi";
import { FaChartPie, FaUserTie, FaFileUpload, FaTasks, FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const StaffDashboard = () => {
  const { user } = useContext(AuthContext);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Staff information
  const staffInfo = {
    name: user.name,
    position: "Senior Service Officer",
    department: "Public Services",
    employeeId: "EMP-2021-0456",
    joinDate: "15 March 2021",
    salary: "$4,850",
    nextPayday: "30 November 2023",
    leaveBalance: "18 days",
    performanceRating: "4.7/5.0"
  };

  // Work statistics
  const workStats = [
    {
      title: "Working Days",
      value: "22",
      icon: <FaRegCalendarAlt />,
      change: "+2 from last month",
      trend: "up",
    },
    {
      title: "Avg. Processing Time",
      value: "2.4 days",
      icon: <IoMdTime />,
      change: "-0.8 days",
      trend: "up",
    },
    {
      title: "Tasks Completed",
      value: "143",
      icon: <FaTasks />,
      change: "12 today",
      trend: "up",
    },
    {
      title: "Performance Score",
      value: "94%",
      icon: <FiAward />,
      change: "+2%",
      trend: "up",
    },
  ];

  // Application statistics
  const stats = [
    {
      title: "Total Applications",
      value: "142",
      icon: <FiFileText />,
      change: "+8%",
      trend: "up",
    },
    {
      title: "Approved",
      value: "98",
      icon: <FiCheckCircle />,
      change: "12 today",
      trend: "up",
    },
    {
      title: "Pending Review",
      value: "32",
      icon: <FiClock />,
      change: "5 urgent",
      trend: "alert",
    },
    {
      title: "Rejected",
      value: "12",
      icon: <FiAlertCircle />,
      change: "-2%",
      trend: "down",
    },
  ];

  const recentApplications = [
    {
      id: "#PAN-2023-0456",
      name: "Rahul Sharma",
      service: "Income Certificate",
      status: "pending",
      date: "10 min ago",
      priority: "high"
    },
    {
      id: "#PAN-2023-0455",
      name: "Priya Patel",
      service: "Caste Certificate",
      status: "approved",
      date: "25 min ago",
      priority: "normal"
    },
    {
      id: "#PAN-2023-0454",
      name: "Amit Kumar",
      service: "Domicile Certificate",
      status: "rejected",
      date: "1 hour ago",
      priority: "normal"
    },
    {
      id: "#PAN-2023-0453",
      name: "Neha Gupta",
      service: "Birth Certificate",
      status: "pending",
      date: "2 hours ago",
      priority: "medium"
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "Monthly report submission",
      due: "Today, 4:00 PM",
      status: "pending"
    },
    {
      id: 2,
      title: "Team meeting",
      due: "Tomorrow, 10:00 AM",
      status: "pending"
    },
    {
      id: 3,
      title: "Training session - New regulations",
      due: "Nov 28, 2:00 PM",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Performance review",
      due: "Dec 5, 11:00 AM",
      status: "upcoming"
    }
  ];

  const getStatusBadge = (status) => {
    const classes = {
      pending: "bg-[#FF5200]/10 text-[#FF5200]",
      approved: "bg-green-400/10 text-green-400",
      rejected: "bg-red-400/10 text-red-400",
      upcoming: "bg-blue-400/10 text-blue-400"
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${classes[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const classes = {
      high: "bg-[#FF5200]/10 text-[#FF5200]",
      medium: "bg-amber-400/10 text-amber-400",
      normal: "bg-green-400/10 text-green-400"
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${classes[priority]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <FaUserTie className="text-[#FF5200]" /> Staff Dashboard
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {formattedDate} • Manage applications, assist citizens, and coordinate services.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <NavLink to="/staff/applications">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-[#FF5200] hover:bg-[#FF5200]/90 text-white rounded-lg shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 flex items-center gap-2"
              >
                <FaFileUpload /> New Application
              </motion.button>
            </NavLink>
            <NavLink to="/staff/tasks">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 flex items-center gap-2"
              >
                <FaTasks /> My Tasks
              </motion.button>
            </NavLink>
          </div>
        </motion.div>

        {/* Staff Profile Summary */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[#FF5200]/10 text-[#FF5200] flex items-center justify-center text-2xl">
                {staffInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{staffInfo.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{staffInfo.position}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-grow">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg shadow-sm shadow-gray-200/50 dark:shadow-gray-800/50">
                <p className="text-sm text-gray-500 dark:text-gray-400">Employee ID</p>
                <p className="font-medium text-gray-900 dark:text-white">{staffInfo.employeeId}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg shadow-sm shadow-gray-200/50 dark:shadow-gray-800/50">
                <p className="text-sm text-gray-500 dark:text-gray-400">Department</p>
                <p className="font-medium text-gray-900 dark:text-white">{staffInfo.department}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg shadow-sm shadow-gray-200/50 dark:shadow-gray-800/50">
                <p className="text-sm text-gray-500 dark:text-gray-400">Salary</p>
                <p className="font-medium text-gray-900 dark:text-white">{staffInfo.salary}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg shadow-sm shadow-gray-200/50 dark:shadow-gray-800/50">
                <p className="text-sm text-gray-500 dark:text-gray-400">Leave Balance</p>
                <p className="font-medium text-gray-900 dark:text-white">{staffInfo.leaveBalance}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards - Work Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {workStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#FF5200]/10 text-[#FF5200] flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span
                  className={`text-sm font-medium ${
                    stat.trend === "up"
                      ? "text-green-400"
                      : stat.trend === "down"
                      ? "text-red-400"
                      : "text-[#FF5200]"
                  }`}
                >
                  {stat.change}
                </span>
                {stat.trend === "up" && (
                  <svg
                    className="w-4 h-4 ml-1 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                )}
                {stat.trend === "down" && (
                  <svg
                    className="w-4 h-4 ml-1 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards - Application Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#FF5200]/10 text-[#FF5200] flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span
                  className={`text-sm font-medium ${
                    stat.trend === "up"
                      ? "text-green-400"
                      : stat.trend === "down"
                      ? "text-red-400"
                      : "text-[#FF5200]"
                  }`}
                >
                  {stat.change}
                </span>
                {stat.trend === "up" && (
                  <svg
                    className="w-4 h-4 ml-1 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                )}
                {stat.trend === "down" && (
                  <svg
                    className="w-4 h-4 ml-1 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Upcoming Tasks */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-[#FF5200]/5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <FiCalendar className="text-[#FF5200]" /> Upcoming Tasks
              </h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {upcomingTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{task.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                        <IoMdTime /> {task.due}
                      </p>
                    </div>
                    {getStatusBadge(task.status)}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 text-center">
              <button className="text-[#FF5200] hover:text-[#FF5200]/80 text-sm font-medium">
                View All Tasks
              </button>
            </div>
          </motion.div>

          {/* Salary & Benefits */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-green-400/5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <FiDollarSign className="text-green-400" /> Salary & Benefits
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Salary</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{staffInfo.salary}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Next Payday</p>
                    <p className="font-medium text-gray-900 dark:text-white">{staffInfo.nextPayday}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tax Year</p>
                    <p className="font-medium text-gray-900 dark:text-white">2023-2024</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Performance Bonus</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-[#FF5200] h-2.5 rounded-full" 
                        style={{ width: `${parseFloat(staffInfo.performanceRating) / 5 * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {staffInfo.performanceRating}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Leave Balance</p>
                    <p className="font-medium text-gray-900 dark:text-white">{staffInfo.leaveBalance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Medical Benefits</p>
                    <p className="font-medium text-gray-900 dark:text-white">Active</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 w-full px-4 py-2 bg-green-400 hover:bg-green-400/90 text-white rounded-lg shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 flex items-center justify-center gap-2">
                <FiBarChart2 /> View Payslips
              </button>
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-[#FF5200]/5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <FiBarChart2 className="text-[#FF5200]" /> Performance
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Application Processing</p>
                    <span className="text-sm font-medium text-[#FF5200]">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-[#FF5200] h-2.5 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Customer Satisfaction</p>
                    <span className="text-sm font-medium text-green-400">91%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">On-Time Completion</p>
                    <span className="text-sm font-medium text-[#FF5200]">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-[#FF5200] h-2.5 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Team Collaboration</p>
                    <span className="text-sm font-medium text-green-400">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-[#FF5200]/5 rounded-lg">
                <h4 className="font-medium text-[#FF5200] dark:text-[#FF5200]/90 mb-2">Performance Summary</h4>
                <p className="text-sm text-[#FF5200]/80 dark:text-[#FF5200]/70">
                  You're performing better than 92% of your peers. Keep up the good work!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Applications */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-green-400/5 flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <FaChartPie className="text-green-400" /> Recent Applications
            </h2>
            <div className="mt-3 md:mt-0 flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search applications..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-400 focus:border-green-400"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-400 focus:border-green-400">
                <option>All Status</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Application ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Service
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Priority
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" dark:divide-gray-700">
                {recentApplications.map((app, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 * index }}
                    className="hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-white">
                      {app.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <FiUser className="text-gray-400" /> {app.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {app.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {getPriorityBadge(app.priority)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {app.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-[#FF5200] hover:text-[#FF5200]/80 mr-3">
                        Review
                      </button>
                      <button className="text-green-400 hover:text-green-400/80">
                        Details
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">4</span> of{" "}
              <span className="font-medium">32</span> applications
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-[#FF5200]/10 text-[#FF5200] text-sm font-medium">
                1
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                2
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StaffDashboard;