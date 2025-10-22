import React from "react";
import { X, MapPin, Briefcase, DollarSign, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const JobPostViewModal = ({ job, onClose }) => (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 overflow-y-auto max-h-[80vh] border-t-[6px] border-[#080156]"
    >
      {/* Close Button (fixed layering + styled) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 group transition-all duration-300"
      >
        <div className="p-2 rounded-full bg-[#080156]/10 group-hover:bg-[#080156]/20 shadow-sm transition-all">
          <X
            size={22}
            className="text-[#080156] group-hover:rotate-90 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </button>

      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6 pt-8 relative z-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-2xl font-bold text-[#080156] flex items-center gap-2">
            {job.title}
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm bg-[#080156]/10 text-[#080156] font-semibold px-3 py-1 rounded-full">
              {job.category}
            </span>
            {job.featured && (
              <span className="text-xs bg-yellow-100 text-yellow-700 font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            {job.urgency && (
              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  job.urgency === "high"
                    ? "bg-red-100 text-red-700"
                    : job.urgency === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {job.urgency.charAt(0).toUpperCase() + job.urgency.slice(1)} Priority
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-700 mb-6">
        <p className="flex items-center gap-2">
          <Briefcase size={16} className="text-[#080156]" />
          <strong>Company:</strong> {job.company}
        </p>
        <p className="flex items-center gap-2">
          <Calendar size={16} className="text-[#080156]" />
          <strong>Posted:</strong> {job.postedDate || "—"}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={16} className="text-[#080156]" />
          <strong>Location:</strong> {job.location}
        </p>
        <p className="flex items-center gap-2">
          <DollarSign size={16} className="text-[#080156]" />
          <strong>Salary:</strong> {job.salary}
        </p>
        <p>
          <strong>Type:</strong> {job.type} ({job.duration})
        </p>
        <p>
          <strong>Remote:</strong>{" "}
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              job.remote
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {job.remote ? "Yes" : "No"}
          </span>
        </p>
        <p>
          <strong>Applicants:</strong> {job.applicants || 0}
        </p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#080156] mb-2">
          Job Description
        </h3>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#080156] mb-2">
          Responsibilities
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {job.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#080156] mb-2">
          Requirements
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {job.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-lg font-semibold text-[#080156] mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-[#080156]/10 text-[#080156] px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default JobPostViewModal;
