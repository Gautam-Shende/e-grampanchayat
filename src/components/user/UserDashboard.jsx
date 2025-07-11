import UserHeader from "./UserHeader";
import { motion } from "framer-motion";
import { FiActivity, FiCalendar, FiInbox, FiSettings } from "react-icons/fi";

const UserDashboard = () => {
  const stats = [
    {
      title: "Active Projects",
      value: "12",
      icon: <FiActivity className="text-blue-500" size={24} />,
      color: "bg-blue-100",
    },
    {
      title: "Upcoming Tasks",
      value: "8",
      icon: <FiCalendar className="text-purple-500" size={24} />,
      color: "bg-purple-100",
    },
    {
      title: "New Messages",
      value: "5",
      icon: <FiInbox className="text-green-500" size={24} />,
      color: "bg-green-100",
    },
    {
      title: "Pending Items",
      value: "3",
      icon: <FiSettings className="text-amber-500" size={24} />,
      color: "bg-amber-100",
    },
  ];

  const recentActivities = [
    { action: "Completed project proposal", time: "2 hours ago" },
    { action: "Received client feedback", time: "5 hours ago" },
    { action: "Team sync meeting", time: "Yesterday" },
    { action: "Updated project timeline", time: "2 days ago" },
  ];

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 bg-gray-100">
      <UserHeader />
      <motion.main
        className="flex-1 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <motion.h1
              className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              Dashboard Overview
            </motion.h1>
            <p className="text-lg text-gray-500">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:border-none transition-all hover:shadow-md`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-800 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-gray-400">{stat.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <motion.div
              className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Activities
                </h2>
                <button className="text-sm text-blue-400 font-bold hover:text-blue-500">
                  View All
                </button>
              </div>

              <div className="space-y-6">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 text-blue-600 mr-4">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Quick Actions
              </h2>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-200 dark:bg-gray-900 rounded-xl transition-colors"
                >
                  <span className="text-blue-600 font-medium">
                    Create New Project
                  </span>
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600">+</span>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-200 dark:bg-gray-900 rounded-xl transition-colors"
                >
                  <span className="text-purple-600 font-medium">
                    Schedule Meeting
                  </span>
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <FiCalendar className="text-purple-600" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 dark:bg-gray-900 rounded-xl transition-colors"
                >
                  <span className="text-green-600 font-medium">
                    Generate Report
                  </span>
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <FiActivity className="text-green-600" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default UserDashboard;
