import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiLock,
  FiBriefcase,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../pages/firebase";
import { useNavigate, NavLink } from "react-router-dom";

const auth = getAuth(app);

const StaffRequest = () => {
  const { registerStaff } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    password: "",
    accessLevel: "staff",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setIsSubmitting(true);
  try {
    // Validate form
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.position ||
      !formData.password
    ) {
      throw new Error("Please fill all required fields");
    }

    if (formData.password.length < 6) {
      throw new Error("Password should be at least 6 characters");
    }
    await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    setIsSuccess(true);

    // Register staff
    await registerStaff({
      name: formData.fullName,
      email: formData.email,
      position: formData.position,
      password: formData.password,
      accessLevel: formData.accessLevel,
    });

    // Reset form after success
    setFormData({
      fullName: "",
      email: "",
      position: "",
      password: "",
      accessLevel: "staff",
    });

    // Navigate after 5 seconds
    setTimeout(() => {
      navigate("/staff/dashboard");
    }, 10000);
  } catch (err) {
    setError(err.message || "Submission failed");
  } finally {
    setIsSubmitting(false);
  }
};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-full max-w-md mx-auto transition-colors duration-200 relative">
        <AnimatePresence>
          {isSuccess ? (
            <motion.div
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 h-max bg-white dark:bg-gray-800 rounded-lg flex flex-col border-gray-300 border-2 items-center justify-center p-6 z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="mb-4"
              >
                <FiCheckCircle className="text-green-500 text-5xl" />
              </motion.div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Request Submitted!
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Your staff request has been received. We'll contact you shortly.
                after 10 sec you will get your Dashboard
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
            >
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center justify-center gap-2">
                  <FiUser className="text-[#FF5200] text-lg" />
                  New Staff Request
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Fill in the required details
                </p>
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm rounded-lg"
                >
                  {error}
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="space-y-4">
                {/* Full Name */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <FiUser className="absolute left-3 text-gray-400 dark:text-gray-500" />
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FF5200] focus:border-[#FF5200] dark:bg-gray-700 dark:text-white transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <FiMail className="absolute left-3 text-gray-400 dark:text-gray-500" />
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FF5200] focus:border-[#FF5200] dark:bg-gray-700 dark:text-white transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Position */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Position
                  </label>
                  <div className="relative flex items-center">
                    <FiBriefcase className="absolute left-3 text-gray-400 dark:text-gray-500" />
                    <input
                      id="position"
                      type="text"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Position"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FF5200] focus:border-[#FF5200] dark:bg-gray-700 dark:text-white transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <FiLock className="absolute left-3 text-gray-400 dark:text-gray-500" />
                    <input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FF5200] focus:border-[#FF5200] dark:bg-gray-700 dark:text-white transition-colors"
                      required
                      minLength="6"
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Password must be at least 6 characters
                  </p>
                </div>

                {/* Access Level */}
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="accessLevel"
                    className="text-xs font-medium text-gray-600 dark:text-gray-300"
                  >
                    Access Level
                  </label>
                  <div className="relative flex items-center">
                    <FiLock className="absolute left-3 text-gray-400 dark:text-gray-500" />
                    <select
                      id="accessLevel"
                      value={formData.accessLevel}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white appearance-none transition-colors"
                      required
                    >
                      <option value="staff">Staff</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#FF5200] hover:bg-[#E04800] text-white text-sm font-medium rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF5200] focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-sm" />
                      Submit Request
                    </>
                  )}
                </button>
              </motion.div>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                alredy have account?{" "}
                <NavLink
                  to="/staff/login"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  sign in
                </NavLink>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StaffRequest;
