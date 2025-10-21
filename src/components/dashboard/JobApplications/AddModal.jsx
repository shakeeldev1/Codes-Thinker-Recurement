import React, { useState } from "react";
import { X } from "lucide-react";

export default function AddModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    type: "Full-time",
    department: "Engineering",
    level: "Mid Level",
    experience: "",
    location: "",
    salary: "",
    description: "",
    responsibilities: "",
    requirements: "",
    skills: "",
    applyLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.company || !formData.description) {
      alert("Please fill all required fields!");
      return;
    }

    const newJob = {
      ...formData,
      id: Math.floor(Math.random() * 10000),
      postedDate: "Just now",
      applicants: 0,
      icon: "💼",
      responsibilities: formData.responsibilities
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      requirements: formData.requirements
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      skills: formData.skills
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
    };

    onAdd(newJob);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 overflow-y-auto max-h-[90vh] border-t-4 border-[#080156]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#080156]">
            Add New Job Post
          </h2>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 rounded-full p-1 transition"
          >
            <X className="w-6 h-6 text-gray-500 hover:text-[#080156]" />
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-5">
        {/* Job Title & Company in one row */}
<div className="col-span-2 grid grid-cols-2 gap-5">
  <div>
    <label className="text-sm font-medium text-gray-700">
      Job Title
    </label>
    <input
      name="title"
      placeholder="e.g. Front-End Developer"
      value={formData.title}
      onChange={handleChange}
      className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156] focus:outline-none"
    />
  </div>

  <div>
    <label className="text-sm font-medium text-gray-700">
      Company Name
    </label>
    <input
      name="company"
      placeholder="e.g. OpenAI"
      value={formData.company}
      onChange={handleChange}
      className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156]"
    />
  </div>
</div>


          {/* Type */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Job Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156]"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156]"
            >
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Product</option>
              <option>Human Resources</option>
              <option>Finance</option>
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Job Level
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156]"
            >
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
              <option>Manager</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              name="experience"
              placeholder="e.g. 2-4 Years"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156]"
            />
          </div>

         {/* Location & Salary in one row */}
<div className="col-span-2 grid grid-cols-2 gap-5">
  <div>
    <label className="text-sm font-medium text-gray-700">
      Location
    </label>
    <input
      name="location"
      placeholder="e.g. Lahore, Pakistan"
      value={formData.location}
      onChange={handleChange}
      className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156]"
    />
  </div>

  <div>
    <label className="text-sm font-medium text-gray-700">
      Salary Range
    </label>
    <input
      name="salary"
      placeholder="e.g. PKR 60,000 – 100,000"
      value={formData.salary}
      onChange={handleChange}
      className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156]"
    />
  </div>
</div>


          {/* Description */}
          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              name="description"
              placeholder="Describe the job role and purpose..."
              value={formData.description}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full h-24 focus:ring-2 focus:ring-[#080156]"
            />
          </div>

          {/* Responsibilities */}
          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Responsibilities (comma-separated)
            </label>
            <textarea
              name="responsibilities"
              placeholder="e.g. Write clean code, Manage deployments"
              value={formData.responsibilities}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full h-20 focus:ring-2 focus:ring-[#080156]"
            />
          </div>

          {/* Requirements */}
          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Requirements (comma-separated)
            </label>
            <textarea
              name="requirements"
              placeholder="e.g. Bachelor's in CS, 2+ years experience"
              value={formData.requirements}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full h-20 focus:ring-2 focus:ring-[#080156]"
            />
          </div>

          {/* Skills */}
          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Skills (comma-separated)
            </label>
            <input
              name="skills"
              placeholder="e.g. React, Tailwind, Node.js"
              value={formData.skills}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#080156]"
            />
          </div>

         
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#080156] hover:bg-[#0a038a] text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
}
