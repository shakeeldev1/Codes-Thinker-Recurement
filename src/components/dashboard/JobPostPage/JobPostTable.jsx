import React from "react";
import { Eye, Edit2, Trash2, MapPin, Briefcase } from "lucide-react";

const JobPostTable = ({ jobs, onView, onEdit, onDelete }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    {/* ===== Desktop Table ===== */}
    <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-[#060145] text-white">
          <tr>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Company</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Location</th>
            <th className="px-4 py-3 text-center">Remote</th>
            <th className="px-4 py-3 text-center">Featured</th>
            <th className="px-4 py-3 text-center">Skills</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr
              key={job.id}
              className={`${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition-all whitespace-nowrap`}
            >
              <td className="px-4 py-3 font-semibold text-[#060145]">
                {job.title}
              </td>
              <td className="px-4 py-3">{job.company}</td>
              <td className="px-4 py-3">{job.type}</td>
              <td className="px-4 py-3">{job.location}</td>
              <td className="px-4 py-3 text-center">
                {job.remote ? (
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Yes
                  </span>
                ) : (
                  <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    No
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-center">
                {job.featured && (
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-center text-xs font-medium">
                {job.skills.join(", ")}
              </td>
              <td className="px-4 py-3 text-center flex justify-center gap-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => onView(job)}
                >
                  <Eye size={18} />
                </button>
                <button
                  className="text-yellow-500 hover:text-yellow-700"
                  onClick={() => onEdit(job)}
                >
                  <Edit2 size={18} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDelete(job)}
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ===== Mobile Card View ===== */}
    <div className="block md:hidden space-y-4 p-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-[#060145] text-lg">{job.title}</h3>
            {job.featured && (
              <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-1 font-medium">
            {job.company}
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-gray-700 mb-3">
            <span className="flex items-center gap-1">
              <Briefcase size={14} /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {job.location}
            </span>
            {job.remote && (
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                Remote
              </span>
            )}
          </div>

          <div className="text-xs text-gray-600 mb-3">
            <strong>Skills:</strong>{" "}
            <span className="text-gray-800">{job.skills.join(", ")}</span>
          </div>

          <div className="flex justify-end gap-3">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => onView(job)}
            >
              <Eye size={18} />
            </button>
            <button
              className="text-yellow-500 hover:text-yellow-700"
              onClick={() => onEdit(job)}
            >
              <Edit2 size={18} />
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => onDelete(job)}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default JobPostTable;
