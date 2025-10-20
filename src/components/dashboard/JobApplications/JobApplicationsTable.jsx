import React from "react";
import { Eye, Edit2, Trash2, ArrowUpDown } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function JobApplicationsTable({
  data,
  handleSort,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="w-full">
      {/* TABLE VIEW - visible on md and above */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-[#080156]/10 text-[#080156] uppercase text-xs font-semibold">
            <tr>
              {[
                ["name", "Name"],
                ["id", "ID"],
                ["applicationType", "Type"],
                ["positionTitle", "Title"],
                ["department", "Department"],
                ["date", "Date"],
                ["status", "Status"],
              ].map(([key, label]) => (
                <th
                  key={key}
                  onClick={() => handleSort && handleSort(key)}
                  className="px-4 py-3 text-left cursor-pointer hover:text-[#080156]/80 select-none"
                >
                  <div className="flex items-center gap-1">
                    {label}
                    <ArrowUpDown className="w-3 h-3 opacity-70" />
                  </div>
                </th>
              ))}
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#080156]/5 transition-all even:bg-gray-50 whitespace-nowrap"
              >
                <td className="px-4 py-3 font-medium">{row.name}</td>
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.applicationType}</td>
                <td className="px-4 py-3">{row.positionTitle}</td>
                <td className="px-4 py-3">{row.department}</td>
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="inline-flex items-center gap-2">
                    <button
                      onClick={() => onView(row)}
                      className="p-2 rounded-lg bg-[#080156]/10 text-[#080156] hover:bg-[#080156]/20 transition"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onEdit(row)}
                      className="p-2 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(row.id)}
                      className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-6 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden space-y-4">
        {data.length === 0 ? (
          <p className="text-center text-gray-500 text-sm py-4">
            No results found.
          </p>
        ) : (
          data.map((row) => (
            <div
              key={row.id}
              className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 space-y-3"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[#080156]">{row.name}</h3>
                <StatusBadge status={row.status} />
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <span className="font-semibold text-gray-700">ID:</span>{" "}
                  {row.id}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Type:</span>{" "}
                  {row.applicationType}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Title:</span>{" "}
                  {row.positionTitle}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Department:
                  </span>{" "}
                  {row.department}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Date:</span>{" "}
                  {row.date}
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => onView(row)}
                  className="p-2 rounded-lg bg-[#080156]/10 text-[#080156] hover:bg-[#080156]/20 transition"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onEdit(row)}
                  className="p-2 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(row.id)}
                  className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
