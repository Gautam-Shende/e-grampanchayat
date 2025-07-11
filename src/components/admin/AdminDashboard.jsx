import { motion } from 'framer-motion'
import { 
  FiSettings, 
  FiUsers, 
  FiPieChart, 
  FiShield, 
  FiPlus, 
  FiFileText, 
  FiServer, 
  FiSliders,
  FiChevronRight,
  FiClock
} from 'react-icons/fi'
import { 
  FaUserShield, 
  FaChartLine,
  FaRegBell
} from 'react-icons/fa'
import { 
  RiUserAddLine, 
  RiDashboardLine,
  RiArrowUpLine,
  RiArrowDownLine
} from 'react-icons/ri'
import { IoMdAlert } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
      <>
       <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <RiDashboardLine className="text-2xl text-white/80" />
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Admin Dashboard
              </h1>
            </div>
            <p className="text-blue-100 dark:text-gray-300">
              Manage services and oversee system operations
            </p>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <NavLink to="/admin/dashboard">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white text-sm border border-white/20 dark:text-yellow-500"
            > 
              <RiDashboardLine />
              Dashboard
            </motion.button>
            </NavLink>
             <NavLink to="/admin/services" className="flex items-center gap-2 px-4 py-2 bg">
              <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="md:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm border border-white/20 dark:text-yellow-500"
            >
              Servic Managment
            </motion.button>
            </NavLink>
            <NavLink to="/admin/applications">
              <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mdwhites-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm border border-white/20 dark:text-yellow-500"
            >
              Application
            </motion.button>
            </NavLink>
          </div>
        </div>
      </motion.div>
      </>
    )
  }

const AdminDashboard = () => {
  // Stats data
  const stats = [
    { 
      title: "Total Users", 
      value: "1,248", 
      icon: <FiUsers className="text-xl" />, 
      change: "+12%", 
      trend: "up",
      color: "text-emerald-500"
    },
    { 
      title: "Services", 
      value: "24", 
      icon: <FiSettings className="text-xl" />, 
      change: "+2", 
      trend: "up",
      color: "text-blue-500"
    },
    { 
      title: "Active Sessions", 
      value: "86", 
      icon: <FiPieChart className="text-xl" />, 
      change: "-4%", 
      trend: "down",
      color: "text-amber-500"
    },
    { 
      title: "Security Alerts", 
      value: "3", 
      icon: <FiShield className="text-xl" />, 
      change: "1 new", 
      trend: "alert",
      color: "text-rose-500"
    }
  ]

  const quickActions = [
    { 
      name: 'Add User', 
      icon: <RiUserAddLine className="text-2xl" />, 
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
      hover: "hover:from-blue-600 hover:to-blue-700"
    },
    { 
      name: 'View Reports', 
      icon: <FaChartLine className="text-2xl" />, 
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
      hover: "hover:from-purple-600 hover:to-purple-700"
    },
    { 
      name: 'Manage Services', 
      icon: <FiServer className="text-2xl" />, 
      bg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      hover: "hover:from-emerald-600 hover:to-emerald-700"
    },
    { 
      name: 'Settings', 
      icon: <FiSliders className="text-2xl" />, 
      bg: "bg-gradient-to-br from-amber-500 to-amber-600",
      hover: "hover:from-amber-600 hover:to-amber-700"
    }
  ]

  const recentActivities = [
    { 
      event: "New user registration", 
      time: "2 min ago", 
      user: "Rahul Sharma", 
      icon: <FiPlus />,
      color: "bg-blue-100 dark:bg-blue-900/50",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    { 
      event: "Service request approved", 
      time: "15 min ago", 
      user: "Priya Patel", 
      icon: <FiFileText />,
      color: "bg-emerald-100 dark:bg-emerald-900/50",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    { 
      event: "System update completed", 
      time: "1 hour ago", 
      user: "System", 
      icon: <FiSettings />,
      color: "bg-purple-100 dark:bg-purple-900/50",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    { 
      event: "Security alert resolved", 
      time: "3 hours ago", 
      user: "Admin", 
      icon: <FaUserShield />,
      color: "bg-rose-100 dark:bg-rose-900/50",
      iconColor: "text-rose-600 dark:text-rose-400"
    }
  ]

  return (
    <motion.div
      className="max-w-7xl mx-auto p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <Header/>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gray-50 dark:bg-gray-700/50"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${stat.color.replace('text', 'bg')}/10`}>
                  {stat.icon}
                </div>
              </div>
              
              <div className="flex items-center mt-4">
                <span className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </span>
                {stat.trend === "up" && (
                  <RiArrowUpLine className={`ml-1 ${stat.color}`} />
                )}
                {stat.trend === "down" && (
                  <RiArrowDownLine className={`ml-1 ${stat.color}`} />
                )}
                {stat.trend === "alert" && (
                  <IoMdAlert className={`ml-1 ${stat.color}`} />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <FiSettings className="text-blue-500" />
            <span>Quick Actions</span>
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            View all
            <FiChevronRight className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.name}
              className={`${action.bg} ${action.hover} rounded-xl p-5 flex flex-col items-center gap-3 transition-all text-white`}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            >
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                {action.icon}
              </div>
              <span className="font-medium">{action.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <FiClock className="text-blue-500" />
            <span>Recent Activity</span>
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            View all
            <FiChevronRight className="ml-1" />
          </button>
        </div>
        
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={index}
              className="flex items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors cursor-pointer group"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
            >
              <div className={`flex-shrink-0 p-3 rounded-xl ${activity.color} ${activity.iconColor}`}>
                {activity.icon}
              </div>
              
              <div className="ml-4 flex-1">
                <p className="font-medium text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {activity.event}
                </p>
                <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <span>{activity.time}</span>
                  <span className="mx-2">•</span>
                  <span>by {activity.user}</span>
                </div>
              </div>
              
              <FiChevronRight className="text-gray-400 group-hover:text-blue-500 ml-2 mt-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AdminDashboard