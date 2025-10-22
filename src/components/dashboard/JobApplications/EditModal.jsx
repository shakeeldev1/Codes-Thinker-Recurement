import React, { useState } from "react";
import { XCircle } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function EditModal({ data, onSave, onClose }) {
  const [status, setStatus] = useState(data.status);

  // Important read-only fields
  const readOnlyFields = [
    ["id", "Application ID"],
    ["name", "Full Name"],
    ["email", "Email"],
    ["phoneNumber", "Phone"],
    ["positionTitle", "Position Title"],
    ["department", "Department"],
    ["applicationType", "Application Type"],
  ];

  // Optional links or documents
  const documentFields = [
    ["linkedin", "LinkedIn"],
    ["github", "GitHub"],
    ["cv", "CV"],
    ["coverLetter", "Cover Letter"],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-2 sm:p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#080156] to-[#1b1b5f] rounded-t-2xl">
          <h2 className="text-lg font-semibold text-white">Application Details</h2>
          <button onClick={onClose} className="p-1 hover:text-gray-300 transition">
            <XCircle className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Important Info (Read-Only) */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-4 border-b pb-2">
              Applicant Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {readOnlyFields.map(([key, label]) => (
                <div
                  key={key}
                  className="bg-gray-50 p-4 rounded-xl border border-gray-100"
                >
                  <div className="text-xs uppercase text-gray-500 font-medium mb-1">
                    {label}
                  </div>
                  <div className="font-medium text-gray-800">{data[key]}</div>
                </div>
              ))}
            </div>
          </div>

        
        

          {/* Status Update */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 pb-2">
              Update Status
            </h3>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-[#080156]/40 focus:border-[#080156]/50"
            >
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 px-6 py-4 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-100 w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ ...data, status })}
            className="px-5 py-2 rounded-lg text-sm font-medium bg-[#080156] text-white hover:bg-[#0a0488] w-full sm:w-auto"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
