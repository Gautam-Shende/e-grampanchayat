import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiAlertCircle, FiPlus, FiFilter, FiSearch } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MyTask = () => {
  // Sample tasks data
  const tasks = [
    {
      id: "TASK-001",
      title: "Review income certificate applications",
      priority: "high",
      status: "pending",
      dueDate: "Today, 3:00 PM",
      assignedBy: "Manager"
    },
    {
      id: "TASK-002",
      title: "Process pending domicile certificates",
      priority: "medium",
      status: "in-progress",
      dueDate: "Tomorrow, 10:00 AM",
      assignedBy: "System"
    },
    {
      id: "TASK-003",
      title: "Follow up with Rahul Sharma",
      priority: "high",
      status: "pending",
      dueDate: "Today, 4:30 PM",
      assignedBy: "Supervisor"
    },
    {
      id: "TASK-004",
      title: "Monthly performance report",
      priority: "medium",
      status: "completed",
      dueDate: "Nov 30, 5:00 PM",
      assignedBy: "Director"
    },
    {
      id: "TASK-005",
      title: "Training session on new policies",
      priority: "low",
      status: "upcoming",
      dueDate: "Dec 5, 2:00 PM",
      assignedBy: "HR"
    },
    {
      id: "TASK-006",
      title: "Team meeting preparation",
      priority: "medium",
      status: "in-progress",
      dueDate: "Tomorrow, 9:00 AM",
      assignedBy: "Team Lead"
    }
  ];

  const getStatusBadge = (status) => {
    const classes = {
      pending: "bg-[#FF5200]/10 text-[#FF5200]",
      "in-progress": "bg-blue-400/10 text-blue-400",
      completed: "bg-green-400/10 text-green-400",
      upcoming: "bg-purple-400/10 text-purple-400"
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${classes[status]}`}>
        {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const classes = {
      high: "bg-[#FF5200]/10 text-[#FF5200]",
      medium: "bg-amber-400/10 text-amber-400",
      low: "bg-gray-400/10 text-gray-400"
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
              <FaTasks className="text-[#FF5200]" /> My Tasks
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Manage your assigned tasks and track your progress
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-[#FF5200] hover:bg-[#FF5200]/90 text-white rounded-lg shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 flex items-center gap-2"
            >
              <FiPlus /> Create Task
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 flex items-center gap-2"
            >
              <FiFilter /> Filters
            </motion.button>
          </div>
        </motion.div>

        {/* Task Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Tasks
                </p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                  24
                </h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#FF5200]/10 text-[#FF5200] flex items-center justify-center">
                <FaTasks />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                6 new this week
              </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Completed
                </p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                  8
                </h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-400/10 text-green-400 flex items-center justify-center">
                <FiCheckCircle />
              </div>
            </div>
            <div className="mt-4 flex items-center text-green-400">
              <span className="text-sm font-medium">+3 this week</span>
              <svg
                className="w-4 h-4 ml-1"
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
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  In Progress
                </p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                  6
                </h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-400/10 text-blue-400 flex items-center justify-center">
                <FiClock />
              </div>
            </div>
            <div className="mt-4 flex items-center text-blue-400">
              <span className="text-sm font-medium">2 overdue</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  High Priority
                </p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                  5
                </h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#FF5200]/10 text-[#FF5200] flex items-center justify-center">
                <FiAlertCircle />
              </div>
            </div>
            <div className="mt-4 flex items-center text-[#FF5200]">
              <span className="text-sm font-medium">3 urgent</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Tasks Table */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300/50 dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-[#FF5200]/5 flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Your Assigned Tasks
            </h2>
            <div className="mt-3 md:mt-0 flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF5200] focus:border-[#FF5200]"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF5200] focus:border-[#FF5200]">
                <option>All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Task ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Priority
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Assigned By
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" dark:divide-gray-700">
                {tasks.map((task, index) => (
                  <motion.tr
                    key={task.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 * index }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-white">
                      {task.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {task.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getPriorityBadge(task.priority)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(task.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {task.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {task.assignedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-[#FF5200] hover:text-[#FF5200]/80 mr-3">
                        Edit
                      </button>
                      <button className="text-green-400 hover:text-green-400/80">
                        Complete
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
              <span className="font-medium">6</span> of{" "}
              <span className="font-medium">24</span> tasks
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
                3
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

export default MyTask;