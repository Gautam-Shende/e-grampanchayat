import { useState } from "react";
import UserHeader from "./UserHeader";

const mockServices = [
  "Birth Certificate",
  "Death Certificate",
  "Caste Certificate",
  "Income Certificate",
  "Residence Proof",
  "Marriage Certificate",
  "Property Tax Receipt",
  "Trade License",
  "Water Connection",
  "Electricity Bill Copy",
];

const ServiceSearch = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredServices = mockServices.filter((service) =>
    service.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <UserHeader />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-1">
            Discover Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Search from our available government services
          </p>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search services..."
            className={`w-full p-4 pl-12 pr-6 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 border-2 rounded-xl transition-all duration-200 ${
              isFocused
                ? "border-indigo-500 shadow-md"
                : "border-gray-300 dark:border-gray-600 hover:border-indigo-300"
            } focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 hover:border-indigo-300 dark:hover:border-indigo-500 group"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <svg
                        className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Government issued certificate
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                No services found
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>

        {filteredServices.length > 0 && (
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
            Showing {filteredServices.length} of {mockServices.length} services
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceSearch;
