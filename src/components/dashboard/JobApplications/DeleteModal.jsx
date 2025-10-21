import React from "react";

export default function DeleteModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 sm:px-6">
      <div className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl p-6 sm:p-8 shadow-2xl border-t-4 border-red-600 animate-fadeIn">
        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Confirm Delete
        </h2>

        {/* Message */}
        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Are you sure you want to delete this application?{" "}
          <span className="font-semibold text-red-600">
            This action cannot be undone.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg w-full sm:w-auto transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
