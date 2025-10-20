import React from "react";
import { XCircle, Eye } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function ViewModal({ data, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-[#080156] to-[#1b1b5f] rounded-t-2xl">
          <h2 className="text-lg font-semibold text-white">Application Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <XCircle className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(data)
              .filter(([k]) =>
                [
                  "name",
                  "id",
                  "applicationType",
                  "positionTitle",
                  "department",
                  "date",
                  "email",
                  "phone",
                ].includes(k)
              )
              .map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                >
                  <div className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-wide">
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>
                  <div className="font-semibold text-gray-800">{value}</div>
                </div>
              ))}

            <div className="md:col-span-2 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-wide">
                Status
              </div>
              <StatusBadge status={data.status} />
            </div>

            <div className="md:col-span-2 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="text-xs uppercase text-gray-500 font-medium mb-1 tracking-wide">
                Resume
              </div>
              {data.resume ? (
                <a
                  href={data.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#080156] hover:underline text-sm font-medium"
                >
                  <Eye className="w-4 h-4" />
                  View Uploaded Resume
                </a>
              ) : (
                <p className="text-gray-500 text-sm">No resume uploaded.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
