import React from "react";
import { X } from "lucide-react";

const InterviewDeleteModal = ({ data, onConfirm, onClose }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
    <div className="bg-white/95 p-5 sm:p-6 rounded-2xl w-full max-w-[400px] sm:w-[90%] md:w-[400px] shadow-2xl animate-fadeIn">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-lg sm:text-xl font-bold text-red-600">
          Delete Interview
        </h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-red-600 transition"
        >
          <X size={22} />
        </button>
      </div>

      {/* Message */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Are you sure you want to delete{" "}
        <b className="text-[#080156]">{data?.name}</b>’s interview?
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5">
        <button
          onClick={onConfirm}
          className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-transform hover:scale-105 w-full sm:w-auto"
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg hover:bg-gray-300 transition-transform hover:scale-105 w-full sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default InterviewDeleteModal;
