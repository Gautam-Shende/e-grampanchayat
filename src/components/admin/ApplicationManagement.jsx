import { useState } from 'react'
import { 
  FiUser, 
  FiFileText, 
  FiCheck, 
  FiX, 
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
  FiMenu,
  FiChevronUp,
  FiChevronRight
} from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Header } from './AdminDashboard'

const ApplicationManagement = () => {
  const [applications, setApplications] = useState([
    { 
      id: 201, 
      applicant: 'Rahul Kumar', 
      service: 'Birth Certificate', 
      status: 'Approved',
      date: '2023-06-15',
      priority: 'Normal'
    },
    { 
      id: 202, 
      applicant: 'Sita Verma', 
      service: 'Income Certificate', 
      status: 'Pending',
      date: '2023-06-16',
      priority: 'High'
    },
    { 
      id: 203, 
      applicant: 'Anil Singh', 
      service: 'Caste Certificate', 
      status: 'Rejected',
      date: '2023-06-17',
      priority: 'Normal'
    },
    { 
      id: 204, 
      applicant: 'Priya Sharma', 
      service: 'Residence Proof', 
      status: 'Pending',
      date: '2023-06-18',
      priority: 'Urgent'
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedRow, setExpandedRow] = useState(null)

  const updateStatus = (id, status) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status } : app
    ))
  }

  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedApplications = [...applications].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1
    }
    return 0
  })

  const filteredApplications = sortedApplications.filter(app => {
    const matchesSearch = 
      app.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.service.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = 
      filterStatus === 'All' || app.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Approved':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200">
            <FiCheckCircle className="mr-1" />
            Approved
          </span>
        )
      case 'Rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
            <FiAlertCircle className="mr-1" />
            Rejected
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
            <FiClock className="mr-1" />
            Pending
          </span>
        )
    }
  }

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'High':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">High</span>
      case 'Urgent':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">Urgent</span>
      default:
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">Normal</span>
    }
  }

  const toggleRowExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id)
  }

  return (
    <>
    <Header/>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto mt-4 sm:mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <FiFileText className="text-blue-600 dark:text-blue-400" />
              Application Management
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Review and manage all submitted applications
            </p>
          </div>
          <button 
            className="sm:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FiMenu className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:flex flex-col sm:flex-row gap-3`}>
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search applications..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full sm:w-auto">
            <select
              className="w-full pl-3 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('applicant')}
              >
                <div className="flex items-center">
                  <FiUser className="mr-2" />
                  Applicant
                  {sortConfig.key === 'applicant' && (
                    <span className="ml-1">
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('service')}
              >
                <div className="flex items-center">
                  <FiFileText className="mr-2" />
                  Service
                  {sortConfig.key === 'service' && (
                    <span className="ml-1">
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  Date
                  {sortConfig.key === 'date' && (
                    <span className="ml-1">
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Priority
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredApplications.length > 0 ? (
              filteredApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {app.applicant}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {app.service}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {app.date}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {getPriorityBadge(app.priority)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {getStatusBadge(app.status)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateStatus(app.id, 'Approved')}
                      className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white ${app.status === 'Approved' ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      disabled={app.status === 'Approved'}
                    >
                      <FiCheck className="mr-1" />
                      Approve
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateStatus(app.id, 'Rejected')}
                      className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white ${app.status === 'Rejected' ? 'bg-red-600' : 'bg-red-500 hover:bg-red-600'} focus:outline-none focus:ring-2 focus:ring-red-500`}
                      disabled={app.status === 'Rejected'}
                    >
                      <FiX className="mr-1" />
                      Reject
                    </motion.button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  No applications found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-3">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((app) => (
            <div 
              key={app.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div 
                className="p-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleRowExpand(app.id)}
              >
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{app.applicant}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{app.service}</p>
                </div>
                <div className="flex items-center">
                  {getStatusBadge(app.status)}
                  {expandedRow === app.id ? (
                    <FiChevronUp className="ml-2 text-gray-500" />
                  ) : (
                    <FiChevronRight className="ml-2 text-gray-500" />
                  )}
                </div>
              </div>
              
              {expandedRow === app.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 pb-3"
                >
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Date</p>
                      <p className="text-gray-900 dark:text-white">{app.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Priority</p>
                      <p>{getPriorityBadge(app.priority)}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateStatus(app.id, 'Approved')}
                      className={`flex-1 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white ${app.status === 'Approved' ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      disabled={app.status === 'Approved'}
                    >
                      <FiCheck className="inline mr-1" />
                      Approve
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateStatus(app.id, 'Rejected')}
                      className={`flex-1 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white ${app.status === 'Rejected' ? 'bg-red-600' : 'bg-red-500 hover:bg-red-600'} focus:outline-none focus:ring-2 focus:ring-red-500`}
                      disabled={app.status === 'Rejected'}
                    >
                      <FiX className="inline mr-1" />
                      Reject
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
            No applications found matching your criteria
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <div>
          Showing {filteredApplications.length} of {applications.length} applications
        </div>
        <div className="mt-2 sm:mt-0 flex">
          <button className="px-2 sm:px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700">
            1
          </button>
          <button className="px-2 sm:px-3 py-1 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
            2
          </button>
          <button className="px-2 sm:px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-r-md bg-white dark:bg-gray-700">
            3
          </button>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default ApplicationManagement