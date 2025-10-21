import React, { useState } from "react";
import { X } from "lucide-react";

const AddEditModal = ({ data, onSave, onClose }) => {
  const safeData = data || {};

  const [form, setForm] = useState({
    id: safeData.id || null,
    name: safeData.name || "",
    position: safeData.position || "",
    department: safeData.department || "",
    date: safeData.date || "",
    mode: safeData.mode || "",
    status: safeData.status || "Pending",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  const inputClass =
    "border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-[#080156] text-sm sm:text-base";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="bg-white/95 p-5 sm:p-6 rounded-2xl w-full max-w-[500px] sm:w-[90%] md:w-[450px] shadow-2xl animate-fadeIn overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-lg sm:text-xl font-bold text-[#080156]">
            {safeData.id ? "Edit Interview" : "Schedule Interview"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Candidate Name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="text"
            name="position"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="text"
            name="mode"
            placeholder="Interview Mode (Online / On-site)"
            value={form.mode}
            onChange={handleChange}
            className={inputClass}
            required
          />

          {/* ✅ Show Status only in Edit mode */}
          {safeData.id && (
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          )}

          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 text-white rounded-lg font-medium bg-gradient-to-r from-[#080156] to-[#3434c5] hover:scale-105 transition-transform text-sm sm:text-base"
          >
            {form.id ? "Update Interview" : "Save Interview"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditModal;
