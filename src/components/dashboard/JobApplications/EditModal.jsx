import React, { useState } from "react";
import { XCircle } from "lucide-react";

export default function EditModal({ data, onSave, onClose }) {
  const [status, setStatus] = useState(data.status);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden animate-fadeIn
                      max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-[#080156] text-white">
          <h2 className="text-base sm:text-lg font-semibold">
            Edit Application
          </h2>
          <button
            onClick={onClose}
            className="hover:text-gray-300 transition-colors"
          >
            <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
          {/* Applicant Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-2">
              Applicant Details
            </h3>

            {/* Two-column layout (even on small screens) */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase">Full Name</p>
                <p className="font-medium text-gray-800 break-words">{data.name}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">
                  Application Type
                </p>
                <p className="font-medium text-gray-800 break-words">
                  {data.applicationType}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Position Title</p>
                <p className="font-medium text-gray-800 break-words">
                  {data.positionTitle}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Submission Date</p>
                <p className="font-medium text-gray-800">{data.date}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Email</p>
                <p className="font-medium text-gray-800 break-words">
                  {data.email}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Phone</p>
                <p className="font-medium text-gray-800 break-words">
                  {data.phone}
                </p>
              </div>
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
        <div className="flex flex-col sm:flex-row justify-end gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ ...data, status })}
            className="px-5 py-2 rounded-lg text-sm font-medium bg-[#080156] text-white hover:bg-[#0a0488] transition-colors w-full sm:w-auto"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
