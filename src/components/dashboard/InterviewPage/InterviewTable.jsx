import React from "react";
import { Eye, Edit2, Trash2, ArrowUpDown } from "lucide-react";

const StatusBadge = ({ status }) => {
  const colors = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
};

const InterviewTable = ({ data, handleSort, onView, onEdit, onDelete }) => (
  <div className="w-full">
    {/* --- Desktop / Tablet Table View --- */}
    <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-[#080156]/10 text-[#080156] uppercase text-xs font-semibold">
          <tr>
            {[
              ["name", "Name"],
              ["position", "Position"],
              ["department", "Department"],
              ["date", "Date"],
              ["mode", "Mode"],
              ["status", "Status"],
            ].map(([key, label]) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                className="px-4 py-3 text-left cursor-pointer hover:text-[#080156]/80 select-none"
              >
                <div className="flex items-center gap-1">
                  {label}
                  <ArrowUpDown className="w-3 h-3 opacity-70" />
                </div>
              </th>
            ))}
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {data.length > 0 ? (
            data.map((i) => (
              <tr
                key={i.id}
                className="hover:bg-[#080156]/5 transition-all even:bg-gray-50"
              >
                <td className="px-4 py-3 font-medium">{i.name}</td>
                <td className="px-4 py-3">{i.position}</td>
                <td className="px-4 py-3">{i.department}</td>
                <td className="px-4 py-3">{i.date}</td>
                <td className="px-4 py-3">{i.mode}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={i.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="inline-flex gap-2">
                    <button
                      onClick={() => onView(i)}
                      className="p-2 bg-indigo-100 text-indigo-700 rounded-lg hover:scale-105 transition"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => onEdit(i)}
                      className="p-2 bg-amber-100 text-amber-700 rounded-lg hover:scale-105 transition"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(i)}
                      className="p-2 bg-red-100 text-red-700 rounded-lg hover:scale-105 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-6 text-gray-500">
                No interviews found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    {/* --- Mobile Card View --- */}
    <div className="block md:hidden space-y-4">
      {data.length > 0 ? (
        data.map((i) => (
          <div
            key={i.id}
            className="border border-gray-200 rounded-xl bg-white shadow-sm p-4 transition hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-[#080156] text-base">
                {i.name}
              </h3>
              <StatusBadge status={i.status} />
            </div>

            <div className="text-sm text-gray-700 space-y-1 mb-3">
              <p>
                <span className="font-medium text-gray-900">Position: </span>
                {i.position}
              </p>
              <p>
                <span className="font-medium text-gray-900">Department: </span>
                {i.department}
              </p>
              <p>
                <span className="font-medium text-gray-900">Date: </span>
                {i.date}
              </p>
              <p>
                <span className="font-medium text-gray-900">Mode: </span>
                {i.mode}
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => onView(i)}
                className="p-2 bg-indigo-100 text-indigo-700 rounded-lg hover:scale-105 transition"
              >
                <Eye size={16} />
              </button>
              <button
                onClick={() => onEdit(i)}
                className="p-2 bg-amber-100 text-amber-700 rounded-lg hover:scale-105 transition"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => onDelete(i)}
                className="p-2 bg-red-100 text-red-700 rounded-lg hover:scale-105 transition"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">No interviews found.</p>
      )}
    </div>
  </div>
);

export default InterviewTable;
