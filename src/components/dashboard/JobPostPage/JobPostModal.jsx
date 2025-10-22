import React from "react";
import { X } from "lucide-react";

const JobPostModal = ({ title, onClose, onSubmit, formData, setFormData }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative max-h-[85vh] overflow-y-auto border border-[#080156]/10 transition-all duration-300">
    
      {/* Close Button */}
<button
  onClick={onClose}
  className="absolute top-4 right-4 text-[#F59C20] hover:text-[#080156] bg-[#080156]/10 hover:bg-[#F59C20]/10 rounded-full p-2 transition-all duration-300"
>
  <X size={20} strokeWidth={2.5} />
</button>


      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#080156] mb-6 border-b-2 border-[#F59C20] pb-2 text-center">
        {title}
      </h2>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {[
          "title",
          "company",
          "type",
          "duration",
          "experience",
          "location",
          "salary",
          "postedDate",
          "urgency",
          "category",
        ].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="text-sm font-semibold text-[#080156]/80 mb-1 capitalize">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="text"
              value={formData[field]}
              placeholder={`Enter ${field}`}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              className="border border-gray-300 focus:border-[#080156] focus:ring-2 focus:ring-[#F59C20]/30 rounded-lg px-3 py-2 outline-none transition-all"
            />
          </div>
        ))}

        {/* Textareas */}
        {[
          { name: "description", label: "Job Description" },
          { name: "responsibilities", label: "Responsibilities (one per line)" },
          { name: "requirements", label: "Requirements (one per line)" },
        ].map((area) => (
          <div key={area.name} className="col-span-2 flex flex-col">
            <label className="text-sm font-semibold text-[#080156]/80 mb-1">
              {area.label}
            </label>
            <textarea
              value={formData[area.name]}
              onChange={(e) =>
                setFormData({ ...formData, [area.name]: e.target.value })
              }
              placeholder={area.label}
              className="border border-gray-300 focus:border-[#080156] focus:ring-2 focus:ring-[#F59C20]/30 rounded-lg px-3 py-2 min-h-[80px] outline-none transition-all"
            />
          </div>
        ))}

        {/* Skills */}
        <div className="col-span-2 flex flex-col">
          <label className="text-sm font-semibold text-[#080156]/80 mb-1">
            Skills (comma separated)
          </label>
          <input
            type="text"
            value={formData.skills}
            placeholder="e.g. React, Node.js, TailwindCSS"
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
            className="border border-gray-300 focus:border-[#080156] focus:ring-2 focus:ring-[#F59C20]/30 rounded-lg px-3 py-2 outline-none transition-all"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex items-center gap-4 col-span-2 mt-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={formData.remote}
              onChange={(e) =>
                setFormData({ ...formData, remote: e.target.checked })
              }
              className="w-4 h-4 accent-[#080156]"
            />
            Remote
          </label>

          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({ ...formData, featured: e.target.checked })
              }
              className="w-4 h-4 accent-[#080156]"
            />
            Featured
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-2 mt-6 bg-[#080156] hover:bg-[#F59C20] text-white hover:text-[#080156] px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
        >
        Save Job
        </button>
      </form>
    </div>
  </div>
);

export default JobPostModal;
