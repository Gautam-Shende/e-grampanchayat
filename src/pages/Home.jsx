import { motion } from "framer-motion";
import { FaUsers, FaUserShield, FaUserTie } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";

const Home = () => {
  const { isAdminAuthenticated, isStaffAuthenticated, isUserAuthenticated } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePortalClick = (card, e) => {
    e.preventDefault();

    // Check authentication based on card type
    if (card.title.includes("Admin") && !isAdminAuthenticated) {
      setError("Please login as Admin first");
      navigate("/admin/login");
    } else if (card.title.includes("Staff") && !isStaffAuthenticated) {
      setError("Please login as Staff first");
      navigate("/staff/login");
    } else if (card.title.includes("User") && !isUserAuthenticated) {
      setError("Please login as User first");
      navigate("/user/login");
    } else {
      // If authenticated, navigate to dashboard
      if (card.title.includes("Admin")) {
        navigate("/admin/dashboard");
      } else if (card.title.includes("Staff")) {
        navigate("/staff/dashboard");
      } else if (card.title.includes("User")) {
        navigate("/user/dashboard");
      }
    }
  };

  const serviceCards = [
    {
      title: "User Services",
      description:
        "Register and apply for various government services and certificates.",
      icon: <FaUsers className="text-4xl" />,
      path: isUserAuthenticated ? "/user/dashboard" : "/user/login",
      gradient: "from-green-500 to-emerald-600",
      darkGradient: "from-green-600 to-emerald-700",
    },
    {
      title: "Staff Panel",
      description: "Review, verify and manage applications submitted by users.",
      icon: <FaUserTie className="text-4xl" />,
      path: isStaffAuthenticated ? "/staff/dashboard" : "/staff/login",
      gradient: "from-blue-500 to-cyan-600",
      darkGradient: "from-blue-600 to-cyan-700",
    },
    {
      title: "Admin Portal",
      description: "Manage services, users and oversee application workflows.",
      icon: <FaUserShield className="text-4xl" />,
      path: isAdminAuthenticated ? "/admin/dashboard" : "/admin/login",
      gradient: "from-purple-500 to-violet-600",
      darkGradient: "from-purple-600 to-violet-700",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-5 md:py-10">
        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded max-w-2xl mx-auto"
            role="alert"
          >
            <p>{error}</p>
          </motion.div>
        )}

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Welcome to{" "}
            <span className="text-green-600 dark:text-green-400">
              Digital e-Gram Panchayat
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming rural governance through digital empowerment. Access
            government services, apply for certificates, and track applications
            seamlessly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`block h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-transparent hover:border-white/20 transition-all duration-300 group`}
              >
                <div
                  className={`h-2 bg-gradient-to-r ${card.gradient} dark:${card.darkGradient}`}
                ></div>
                <div className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${card.gradient} dark:${card.darkGradient} text-white group-hover:scale-110 transition-transform`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {card.description}
                  </p>
                  <button
                    onClick={(e) => handlePortalClick(card, e)}
                    className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-800 dark:text-white font-medium transition-colors"
                  >
                    {card.title.includes("Admin") && isAdminAuthenticated
                      ? "Admin Dashboard"
                      : card.title.includes("Staff") && isStaffAuthenticated
                      ? "Staff Dashboard"
                      : card.title.includes("User") && isUserAuthenticated
                      ? "User Dashboard"
                      : "Access Portal"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Register",
                desc: "Create your account with basic details",
              },
              {
                title: "Apply",
                desc: "Submit applications for required services",
              },
              {
                title: "Track",
                desc: "Monitor your application status in real-time",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
