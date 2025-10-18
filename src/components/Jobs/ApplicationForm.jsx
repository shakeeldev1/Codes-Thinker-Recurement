import React, { useState } from "react";
import { X, User, Mail, Phone, Linkedin, Github, Globe, FileText, Send } from "lucide-react";

const ApplicationForm = ({ job, onCancel, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    coverLetter: "",
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Enhanced Header */}
        <div className="relative bg-gradient-to-r from-[#0d0096] to-[#0e009e] text-white p-8 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Apply for {job.title}</h2>
                <p className="text-white/80 mt-2 text-lg">{job.company}</p>
              </div>
              <button
                onClick={onCancel}
                className="text-white/80 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-2xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Full Name *", icon: User, type: "text", key: "fullName", required: true },
              { label: "Email Address *", icon: Mail, type: "email", key: "email", required: true },
              { label: "Phone Number *", icon: Phone, type: "tel", key: "phone", required: true },
              { label: "LinkedIn Profile", icon: Linkedin, type: "url", key: "linkedin" },
              { label: "GitHub Profile", icon: Github, type: "url", key: "github" },
              { label: "Portfolio Website", icon: Globe, type: "url", key: "portfolio" }
            ].map(({ label, icon: Icon, type, key, required }) => (
              <div key={key}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  {label}
                </label>
                <div className="relative">
                  <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  <input
                    type={type}
                    required={required}
                    value={formData[key]}
                    onChange={(e) => setFormData({...formData, [key]: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#0d0096] focus:border-[#0d0096] transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder={`Enter your ${label.toLowerCase().replace(' *', '')}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Cover Letter *
            </label>
            <textarea
              required
              value={formData.coverLetter}
              onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
              rows="5"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#0d0096] focus:border-[#0d0096] transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none"
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Upload Resume *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-[#0d0096] transition-all duration-300 bg-gray-50/50 hover:bg-white group">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4 group-hover:text-[#0d0096] transition-colors duration-300" />
              <p className="text-gray-600 text-lg mb-2">Drop your resume here or click to browse</p>
              <p className="text-gray-500 text-sm mb-4">Supports: PDF, DOC, DOCX (Max: 5MB)</p>
              <input
                type="file"
                required
                onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                className="hidden"
                id="resume"
                accept=".pdf,.doc,.docx"
              />
              <label
                htmlFor="resume"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#0d0096] to-[#0e009e] text-white rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Choose File
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-[#0d0096] to-[#0e009e] text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Submit Application
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;