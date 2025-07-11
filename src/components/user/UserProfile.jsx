import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Sidebar from "./UserHeader";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  // Get first letter for avatar
  const avatarLetter = user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <>
      <Sidebar />
      <div className="max-w-md mx-auto mt-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center mb-6">
          {/* Avatar with gradient background */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">
                {avatarLetter}
              </span>
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-6 h-6 border-2 border-white dark:border-gray-800 shadow-sm"></div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {user?.name}
          </h2>
          <p className="text-indigo-600 dark:text-indigo-400">{user?.role}</p>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Account Type
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-200 capitalize">
                  {user?.role}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
            <div className="flex items-center">
              <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Account Status
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Verified
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
          Edit Profile
        </button>
      </div>
    </>
  );
};

export default UserProfile;
