import React from "react";

const applications = [
  {
    name: "Ali Raza",
    program: "Front-End Developer (React.js)",
    date: "2025-10-15",
    status: "Under Review",
  },
  {
    name: "Fatima Khan",
    program: "UI/UX Designer",
    date: "2025-10-13",
    status: "Shortlisted",
  },
  {
    name: "Ahmed Malik",
    program: "Node.js Backend Developer",
    date: "2025-10-12",
    status: "Rejected",
  },
  {
    name: "Sara Ahmed",
    program: "MERN Stack Intern",
    date: "2025-10-10",
    status: "Interview Scheduled",
  },
];

const RecentApplicationsTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800 text-lg">
          Recent Applications
        </h2>
        <button className="hidden md:block text-[#080156] font-medium hover:underline">
          View All
        </button>
      </div>

      {/* ----- DESKTOP / TABLET TABLE VIEW ----- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[600px]">
          <thead className="bg-gradient-to-r from-[#080156] to-[#3B3BBF] text-white">
            <tr>
              <th className="py-3 px-3 font-semibold">Name</th>
              <th className="px-3 font-semibold">Position</th>
              <th className="px-3 font-semibold">Date</th>
              <th className="px-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition text-gray-700"
              >
                <td className="py-3 px-3 font-medium text-gray-800">
                  {app.name}
                </td>
                <td className="px-3">{app.program}</td>
                <td className="px-3">{app.date}</td>
                <td
                  className={`px-3 font-semibold ${
                    app.status === "Shortlisted"
                      ? "text-blue-600"
                      : app.status === "Rejected"
                      ? "text-red-500"
                      : app.status === "Interview Scheduled"
                      ? "text-yellow-500"
                      : "text-gray-600"
                  }`}
                >
                  {app.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ----- MOBILE CARD VIEW ----- */}
      <div className="md:hidden space-y-4">
        {applications.map((app, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow transition bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-[#080156]">{app.name}</h3>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  app.status === "Shortlisted"
                    ? "bg-blue-100 text-blue-700"
                    : app.status === "Rejected"
                    ? "bg-red-100 text-red-700"
                    : app.status === "Interview Scheduled"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {app.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-700">Position:</span>{" "}
              {app.program}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium text-gray-700">Date:</span> {app.date}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="flex justify-end mt-4 md:hidden">
        <button className="text-[#080156] font-medium hover:underline">
          View All
        </button>
      </div>
    </div>
  );
};

export default RecentApplicationsTable;
