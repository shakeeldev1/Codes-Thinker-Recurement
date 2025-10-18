import React from "react";
import {
  ArrowLeft,
  Building,
  Type,
  Award,
  MapPin,
  DollarSign,
  Target,
  TrendingUp,
  Shield,
  CheckCircle,
  Sparkles,
  Star,
  Briefcase,
  Calendar,
  Users,
  Send
} from "lucide-react";

const JobDetail = ({ job, onBack, onApply }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-br from-[#0d0096] via-[#0e009e] to-[#1a00cc] text-white p-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 hover:gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Jobs
            </button>
            <div className="flex items-center gap-3">
              {job.remote && (
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2">
                  🌍 Remote Available
                </span>
              )}
              {job.featured && (
                <span className="px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  Featured
                </span>
              )}
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="p-5 bg-white/20 backdrop-blur-sm rounded-3xl">
                {job.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-3">{job.title}</h1>
                <p className="text-xl text-white/80 flex items-center gap-3">
                  <Building className="w-6 h-6" />
                  {job.company}
                  <span className="text-lg text-white/60">• {job.location}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Job Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
              <div className="text-center">
                <div className="p-3 rounded-2xl bg-[#0d0096]/10 inline-flex mb-3">
                  <Type className="w-6 h-6 text-[#0d0096]" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Job Type</div>
                <div className="font-bold text-gray-900 text-lg">{job.type}</div>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-2xl bg-[#0d0096]/10 inline-flex mb-3">
                  <Award className="w-6 h-6 text-[#0d0096]" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Experience</div>
                <div className="font-bold text-gray-900 text-lg">{job.experience}</div>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-2xl bg-[#0d0096]/10 inline-flex mb-3">
                  <MapPin className="w-6 h-6 text-[#0d0096]" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Location</div>
                <div className="font-bold text-gray-900 text-lg">{job.location}</div>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-2xl bg-[#0d0096]/10 inline-flex mb-3">
                  <DollarSign className="w-6 h-6 text-[#0d0096]" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Salary</div>
                <div className="font-bold text-gray-900 text-lg">{job.salary}</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-[#0d0096]" />
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#0d0096]" />
                Key Responsibilities
              </h2>
              <ul className="space-y-4">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="p-2 rounded-xl bg-[#0d0096]/10 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-[#0d0096]" />
                    </div>
                    <span className="text-lg leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#0d0096]" />
                Requirements
              </h2>
              <ul className="space-y-4">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="p-2 rounded-xl bg-[#0d0096]/10 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-[#0d0096]" />
                    </div>
                    <span className="text-lg leading-relaxed">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-gray-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0d0096]" />
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-3 bg-gradient-to-r from-[#0d0096] to-[#0e009e] text-white rounded-2xl text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Job Info */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-gray-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0d0096]" />
                Job Information
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center p-3 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-gray-600 font-medium">Posted</span>
                  <span className="font-semibold text-gray-900">{job.postedDate}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-gray-600 font-medium">Applicants</span>
                  <span className="font-semibold text-gray-900">{job.applicants}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-gray-600 font-medium">Duration</span>
                  <span className="font-semibold text-gray-900">{job.duration}</span>
                </div>
              </div>
            </div>

            {/* Enhanced Apply Button */}
            <button
              onClick={onApply}
              className="w-full bg-gradient-to-r from-[#0d0096] via-[#0e009e] to-[#1a00cc] text-white py-5 px-6 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a00cc] via-[#0e009e] to-[#0d0096] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Apply Now</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;