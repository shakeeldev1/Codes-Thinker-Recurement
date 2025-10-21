import React from "react";
import { X } from "lucide-react";

const InterviewViewModal = ({ data, onClose }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
    <div className="bg-white/95 p-5 sm:p-6 rounded-2xl w-full max-w-[450px] sm:w-[90%] md:w-[400px] shadow-2xl overflow-y-auto max-h-[90vh] animate-fadeIn">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-lg sm:text-xl font-bold text-[#080156]">
          Interview Details
        </h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-red-600 transition"
        >
          <X size={22} />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3 sm:space-y-2 text-sm sm:text-base">
        {Object.entries(data).map(([key, val]) => (
          <div
            key={key}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 p-2 rounded-lg shadow-sm"
          >
            <strong className="capitalize text-[#080156]">
              {key.replace(/_/g, " ")}:
            </strong>
            <span className="text-gray-700 break-words text-sm sm:text-base">
              {val}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default InterviewViewModal;
