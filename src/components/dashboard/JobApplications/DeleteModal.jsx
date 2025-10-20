import React from "react";

export default function DeleteModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Confirm Delete
        </h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete this application? This action cannot
          be undone.
        </p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
