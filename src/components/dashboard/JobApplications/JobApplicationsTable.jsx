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
  const fields = [
    ["id", "ID"],
    ["name", "Name"],
    ["email", "Email"],
    ["phoneNumber", "Phone"],
    ["cityCountry", "City/Country"],
    ["address", "Address"],
    ["positionTitle", "Title"],
    ["department", "Department"],
    ["applicationType", "Type"],
    ["linkedin", "LinkedIn"],
    ["github", "GitHub"],
    ["cv", "CV"],
    ["coverLetter", "Cover Letter"],
    ["agreement", "Agreement"],
    ["joiningDate", "Joining Date"],
    ["date", "Application Date"],
    ["status", "Status"],
  ];

  return (
    <div className="w-full">
      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-[#080156]/10 text-[#080156] uppercase text-xs font-semibold">
            <tr>
              {fields.map(([key, label]) => (
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
                {fields.map(([key]) => (
                  <td key={key} className="px-4 py-3 font-medium">
                    {key === "status" ? (
                      <StatusBadge status={row[key]} />
                    ) : key === "agreement" ? (
                      row[key] ? "Yes" : "No"
                    ) : key === "cv" || key === "coverLetter" ? (
                      row[key] ? (
                        <a
                          href={row[key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {key.toUpperCase()}
                        </a>
                      ) : (
                        "N/A"
                      )
                    ) : key === "linkedin" || key === "github" ? (
                      row[key] ? (
                        <a
                          href={row[key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {row[key]?.replace(/^https?:\/\//, "") || "N/A"}
                        </a>
                      ) : (
                        "N/A"
                      )
                    ) : (
                      row[key] || "N/A"
                    )}
                  </td>
                ))}

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
                <td
                  colSpan={fields.length + 1}
                  className="px-4 py-6 text-center text-gray-500"
                >
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
                <h3 className="font-semibold text-[#080156]">
                  {row.name || "N/A"}
                </h3>
                <StatusBadge status={row.status} />
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                {fields
                  .filter(([key]) => key !== "status")
                  .map(([key, label]) => (
                    <p key={key}>
                      <span className="font-semibold text-gray-700">
                        {label}:
                      </span>{" "}
                      {key === "agreement" ? (
                        row[key] ? "Yes" : "No"
                      ) : key === "cv" || key === "coverLetter" ? (
                        row[key] ? (
                          <a
                            href={row[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {key.toUpperCase()}
                          </a>
                        ) : (
                          "N/A"
                        )
                      ) : key === "linkedin" || key === "github" ? (
                        row[key] ? (
                          <a
                            href={row[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {row[key]?.replace(/^https?:\/\//, "") || "N/A"}
                          </a>
                        ) : (
                          "N/A"
                        )
                      ) : (
                        row[key] || "N/A"
                      )}
                    </p>
                  ))}
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
