import React from "react";
import { Building, Type, Award, MapPin, DollarSign, Calendar, Users } from "lucide-react";

const JobCard = ({ job, onClick }) => {
  return (
    <div
      className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
      onClick={() => onClick(job)}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0096]/5 to-[#0e009e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0d0096] to-[#0e009e] text-white group-hover:scale-110 transition-transform duration-300">
              {job.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#0d0096] transition-colors duration-300">
                {job.title}
              </h3>
              <p className="text-gray-600 flex items-center gap-1 text-sm">
                <Building className="w-4 h-4" />
                {job.company}
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">{job.description}</p>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="p-1.5 rounded-lg bg-[#0d0096]/10">
              <Type className="w-3.5 h-3.5 text-[#0d0096]" />
            </div>
            <span className="font-medium">{job.type}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="p-1.5 rounded-lg bg-[#0d0096]/10">
              <Award className="w-3.5 h-3.5 text-[#0d0096]" />
            </div>
            <span className="font-medium">{job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="p-1.5 rounded-lg bg-[#0d0096]/10">
              <MapPin className="w-3.5 h-3.5 text-[#0d0096]" />
            </div>
            <span className="font-medium">{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="p-1.5 rounded-lg bg-[#0d0096]/10">
              <DollarSign className="w-3.5 h-3.5 text-[#0d0096]" />
            </div>
            <span className="font-medium">{job.salary}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-gradient-to-r from-[#0d0096]/10 to-[#0e009e]/10 text-[#0d0096] rounded-xl text-sm font-semibold border border-[#0d0096]/20 group-hover:from-[#0d0096]/20 group-hover:to-[#0e009e]/20 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-semibold">
              +{job.skills.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {job.postedDate}
          </span>
          <span className="text-gray-500 flex items-center gap-1">
            <Users className="w-4 h-4" />
            {job.applicants}
          </span>
        </div>

        {/* Remote Badge */}
        {job.remote && (
          <div className="absolute bottom-4 right-4">
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              🌍 Remote
            </span>
          </div>
        )}
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0d0096]/20 transition-all duration-500" />
    </div>
  );
};

export default JobCard;