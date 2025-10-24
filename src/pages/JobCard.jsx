import React from "react";
import {
  Type,
  Award,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const JobCard = ({ job, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick(job)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 30px rgba(6, 1, 69, 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white/90 rounded-2xl shadow-md border border-[#E5E7EB] hover:border-[#0c008c]/40 
      cursor-pointer flex flex-col overflow-hidden w-full h-full max-w-sm mx-auto 
      backdrop-blur-sm transition-all duration-300"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#060145] to-[#0a067d] text-white px-5 py-6">
        <h3 className="text-lg sm:text-xl font-bold truncate">{job.title}</h3>
        <p className="text-sm text-blue-100 truncate">{job.company}</p>
      </div>

      {/* Body */}
      <div className="px-5 py-5 flex flex-col justify-between flex-grow">
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-3 mb-4">
          <Info icon={<Type />} label={job.type} />
          <Info icon={<Award />} label={job.experience} />
          <Info icon={<MapPin />} label={job.location} />
          <Info icon={<DollarSign />} label={job.salary} />
        </div>

        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="px-2 py-1 bg-blue-100 text-[#060145] text-xs font-medium rounded-md"
            >
              {skill}
            </motion.span>
          ))}
          {job.skills.length > 3 && (
            <span className="px-2 py-1 bg-[#F59C20]/10 text-[#F59C20] text-xs font-medium rounded-md">
              +{job.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-gray-50 text-gray-700 text-xs sm:text-sm flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>{job.postedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-blue-600" />
            <span>{job.applicants} applied</span>
          </div>
        </div>

        {job.remote && (
          <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-[#060145] text-[10px] sm:text-xs font-semibold rounded-md">
            <Globe className="w-3 h-3" />
            Remote
          </div>
        )}
      </div>

      {/* Apply Button */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="p-4 bg-gradient-to-r from-[#060145] to-[#0c008c]"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(job);
          }}
          className="w-full py-2.5 bg-gradient-to-r from-[#0c008c] to-[#298ade] 
          text-white font-semibold rounded-lg border border-transparent 
          hover:from-[#F59C20] hover:to-[#f7b942] hover:text-[#060145]
          transition-all duration-300 text-sm sm:text-base shadow-[0_0_10px_rgba(0,0,0,0.2)]"
        >
          Apply Now
        </button>
      </motion.div>
    </motion.div>
  );
};

const Info = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-sm text-gray-700 w-[48%] sm:w-auto truncate">
    <span className="text-[#0c008c] w-4 h-4 flex-shrink-0">{icon}</span>
    <span className="truncate">{label}</span>
  </div>
);

export default JobCard;
