import UserHeader from "./UserHeader";

const mockApplications = [
  { id: 1, service: "Birth Certificate", status: "Approved" },
  { id: 2, service: "Income Certificate", status: "Pending" },
  { id: 3, service: "Caste Certificate", status: "Rejected" },
  { id: 4, service: "Marriage Certificate", status: "In Review" },
  { id: 5, service: "Property Tax Receipt", status: "Approved" },
];

const ApplicationStatus = () => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "in review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <>
      <UserHeader />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Application Status
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {mockApplications.length} applications
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                <th className="p-3 pl-4 rounded-tl-lg">Service</th>
                <th className="p-3 rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockApplications.map((app) => (
                <tr
                  key={app.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="p-3 pl-4 text-gray-800 dark:text-gray-200 font-medium">
                    {app.service}
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>
    </>
  );
};

export default ApplicationStatus;
