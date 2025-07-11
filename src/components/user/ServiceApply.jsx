import { useState } from "react";
import { FaFileAlt, FaUpload, FaTrash, FaCheckCircle } from "react-icons/fa";
import { MdAssignment, MdDescription } from "react-icons/md";
import UserHeader from "./UserHeader";

const ServiceApply = () => {
  const [formData, setFormData] = useState({
    serviceName: "",
    details: "",
    attachments: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...Array.from(e.target.files)],
    }));
  };

  const removeAttachment = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        serviceName: "",
        details: "",
        attachments: [],
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <UserHeader />
      <div className="max-w-3xl mx-auto mt-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/50 mb-4">
              <FaCheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Application Submitted!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Thank you for your submission. We'll process your request shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-4">
                <MdAssignment className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                Apply for Service
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below to submit your application
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="serviceName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Service Required
                </label>
                <div className="relative">
                  <select
                    id="serviceName"
                    name="serviceName"
                    className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white appearance-none"
                    value={formData.serviceName}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="Birth Certificate">Birth Certificate</option>
                    <option value="Death Certificate">Death Certificate</option>
                    <option value="Income Certificate">
                      Income Certificate
                    </option>
                    <option value="Caste Certificate">Caste Certificate</option>
                    <option value="Residence Proof">Residence Proof</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaFileAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Application Details
                </label>
                <div className="relative">
                  <textarea
                    id="details"
                    name="details"
                    rows="4"
                    placeholder="Please provide all necessary details for your application..."
                    className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all"
                    value={formData.details}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="absolute top-3 left-3 pl-1">
                    <MdDescription className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Supporting Documents
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaUpload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PDF, DOC, JPG, PNG (MAX. 5MB each)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {formData.attachments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Selected files:
                    </p>
                    <ul className="space-y-2">
                      {formData.attachments.map((file, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center">
                            <FaFileAlt className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm text-gray-800 dark:text-gray-200 truncate max-w-xs">
                              {file.name}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="text-red-500 hover:text-red-700 dark:hover:text-red-400 p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <FaTrash className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-medium text-gray-700 dark:text-gray-300"
                  >
                    I certify that all information provided is accurate
                  </label>
                  <p className="text-gray-500 dark:text-gray-400">
                    By submitting, you agree to our terms of service
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full group relative flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ServiceApply;
