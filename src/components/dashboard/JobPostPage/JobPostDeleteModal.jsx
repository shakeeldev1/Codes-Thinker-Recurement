import React from "react";

const JobPostDeleteModal = ({ job, onDelete, onClose }) => (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
     <button
  onClick={onClose}
  className="absolute top-4 right-4 bg-[#080156] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md 
  hover:bg-[#0a0678] hover:scale-110 transition-all duration-300"
>
  ✕
</button>

      <h2 className="text-xl font-semibold mb-4 text-[#060145]">Delete Job</h2>
      <p>
        Are you sure you want to delete <strong>{job.title}</strong> at{" "}
        <strong>{job.company}</strong>?
      </p>
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default JobPostDeleteModal;
