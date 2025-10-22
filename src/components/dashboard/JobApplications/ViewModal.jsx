import React from "react";
import { XCircle, Eye } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function ViewModal({ data, onClose }) {
  // Fields to display in modal (professional order)
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
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-[#080156] to-[#1b1b5f] rounded-t-2xl">
          <h2 className="text-lg font-semibold text-white">Application Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <XCircle className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map(([key, label]) => {
              const value = data[key];

              if (!value && value !== 0 && value !== false) return null;

              // Special handling for links and boolean
              if (key === "cv" || key === "coverLetter") {
                return (
                  <div key={key} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-wide">
                      {label}
                    </div>
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#080156] hover:underline text-sm font-medium"
                    >
                      <Eye className="w-4 h-4" /> View {label}
                    </a>
                  </div>
                );
              } else if (key === "linkedin" || key === "github") {
                return (
                  <div key={key} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-wide">
                      {label}
                    </div>
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm font-medium"
                    >
                      {value.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                );
              } else if (key === "agreement") {
                return (
                  <div key={key} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-wide">
                      {label}
                    </div>
                    <div className="font-semibold text-gray-800">{value ? "Yes" : "No"}</div>
                  </div>
                );
              }

              // Default display
              return (
                <div key={key} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-wide">
                    {label}
                  </div>
                  <div className="font-semibold text-gray-800">{value}</div>
                </div>
              );
            })}

            {/* Status */}
            <div className="md:col-span-2 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-wide">
                Status
              </div>
              <StatusBadge status={data.status} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
