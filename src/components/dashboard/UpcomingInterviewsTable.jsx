import React from "react";

const interviews = [
  {
    name: "Fatima Khan",
    jobTitle: "UI/UX Designer",
    date: "2025-10-22",
    time: "11:00 AM",
  },
  {
    name: "Sara Ahmed",
    jobTitle: "MERN Stack Intern",
    date: "2025-10-21",
    time: "02:30 PM",
  },
  {
    name: "Ali Raza",
    jobTitle: "Front-End Developer (React.js)",
    date: "2025-10-23",
    time: "10:00 AM",
  },
  {
    name: "Zainab Malik",
    jobTitle: "Back-End Developer (Node.js)",
    date: "2025-10-24",
    time: "01:00 PM",
  },
];

const UpcomingInterviewsTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between">
      <div>
        <h2 className="font-semibold text-gray-800 mb-4">
          Upcoming Interviews
        </h2>

        {/* Table for tablet/laptop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[600px]">
            <thead className="bg-gradient-to-r from-[#080156] to-[#3B3BBF] text-white rounded">
              <tr>
                <th className="py-3 px-3 font-semibold">Name</th>
                <th className="px-3 font-semibold">Job Title</th>
                <th className="px-3 font-semibold">Date</th>
                <th className="px-3 font-semibold">Time</th>
              </tr>
            </thead>
            <tbody>
              {interviews.map((interview, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition text-gray-700"
                >
                  <td className="py-3 px-3 font-medium text-gray-800">
                    {interview.name}
                  </td>
                  <td className="px-3">{interview.jobTitle}</td>
                  <td className="px-3">{interview.date}</td>
                  <td className="px-3 font-semibold text-gray-700">
                    {interview.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {interviews.map((interview, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">
                  {interview.name}
                </h3>
                <span className="text-sm text-gray-500">{interview.time}</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{interview.jobTitle}</p>
              <p className="text-sm text-gray-500">{interview.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="text-[#080156] font-medium hover:underline">
          View All
        </button>
      </div>
    </div>
  );
};

export default UpcomingInterviewsTable;
