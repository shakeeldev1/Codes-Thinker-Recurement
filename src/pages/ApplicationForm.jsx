import React, { useState } from "react";
import { X, Upload, Calendar } from "lucide-react";

const ApplicationForm = ({ onCancel, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    country: "",
    city: "",
    jobTitle: "",
    experienceLevel: "",
    expectedJoiningDate: "",
    expectedSalary: "",
    viewJobPostSource: "",
    degree: "",
    department: "",
    skills: "",
    portfolio: "",
    linkedin: "",
    github: "",
    cv: null,
    coverLetter: null,
    additionalInfo: "",
    reference: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#0B055A] to-[#5A51D3] text-white p-6 rounded-t-3xl flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Job & Internship Application Form</h2>
            <p className="text-sm text-white/80 mt-1">Please fill in all required fields carefully</p>
          </div>
          <button
            onClick={onCancel}
            aria-label="Close"
            className="p-2 hover:bg-white/10 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Personal Information */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Full Name" name="fullName" required value={formData.fullName} onChange={handleChange} />
              <InputField label="Phone Number" name="phoneNumber" required value={formData.phoneNumber} onChange={handleChange} />
              <InputField label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} />
              <InputField label="Country" name="country" value={formData.country} onChange={handleChange} />
              <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
            </div>
          </section>

          {/* Job Details */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Job Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
              <SelectField
                label="Experience Level"
                name="experienceLevel"
                options={["Mid Level", "Expert Level"]}
                value={formData.experienceLevel}
                onChange={handleChange}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Joining Date
                </label>
                <div className="relative">
                  <input
                    id="expectedJoiningDate"
                    name="expectedJoiningDate"
                    type="date"
                    className="border rounded-lg p-3 w-full bg-white"
                    onChange={handleChange}
                    value={formData.expectedJoiningDate}
                  />
                  <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <InputField label="Expected Salary" name="expectedSalary" placeholder="e.g., 100,000 PKR/month" value={formData.expectedSalary} onChange={handleChange} />
              <InputField label="Where did you see this job post?" name="viewJobPostSource" placeholder="e.g., LinkedIn, Website, Referral" value={formData.viewJobPostSource} onChange={handleChange} />
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Degree" name="degree" placeholder="e.g., Bachelor's, Master's" value={formData.degree} onChange={handleChange} />
              <InputField label="Department / Major" name="department" placeholder="e.g., Computer Science" value={formData.department} onChange={handleChange} />
            </div>
          </section>

          {/* Skills & Links */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Skills & Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Skills" name="skills" placeholder="e.g., React, Node.js, Python" value={formData.skills} onChange={handleChange} />
              <InputField label="Portfolio Link" name="portfolio" value={formData.portfolio} onChange={handleChange} />
              <InputField label="LinkedIn Link" name="linkedin" value={formData.linkedin} onChange={handleChange} />
              <InputField label="GitHub (Optional)" name="github" value={formData.github} onChange={handleChange} />
            </div>
          </section>

          {/* Upload Documents */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileUpload label="Upload CV / Resume" name="cv" onChange={handleChange} />
              <FileUpload label="Upload Cover Letter" name="coverLetter" onChange={handleChange} />
            </div>
          </section>

          {/* Additional Info */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <textarea
              name="additionalInfo"
              rows={4}
              placeholder="Any additional information you'd like to share..."
              className="w-full border rounded-md p-3 bg-white resize-none"
              onChange={handleChange}
              value={formData.additionalInfo}
            />
            <textarea
              name="reference"
              rows={3}
              placeholder="Provide any reference (optional)"
              className="w-full border rounded-md p-3 bg-white resize-none mt-4"
              onChange={handleChange}
              value={formData.reference}
            />
          </section>

          {/* Agreement */}
          <div className="flex items-start gap-3">
            <input
              id="agreement"
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="w-5 h-5 accent-[#110C61] mt-1"
            />
            <label htmlFor="agreement" className="text-gray-700 text-sm">
              <span className="font-medium">Declaration</span>
              <div className="text-gray-500">
                I confirm that the information provided above is accurate to the best of my knowledge.
              </div>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#110C61] text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* Helper Components */
const InputField = ({ label, name, type = "text", required, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder || label}
      className="border rounded-lg p-3 w-full bg-white"
      onChange={onChange}
      value={value}
      required={required}
    />
  </div>
);

const SelectField = ({ label, name, options, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      id={name}
      name={name}
      className="border rounded-lg p-3 w-full bg-white"
      onChange={onChange}
      value={value}
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const FileUpload = ({ label, name, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <div className="flex items-center gap-3 border rounded-lg p-3 bg-white">
      <Upload className="text-gray-500 w-5 h-5" />
      <input
        id={name}
        type="file"
        name={name}
        accept=".pdf,.doc,.docx"
        onChange={onChange}
        className="w-full text-sm"
      />
    </div>
  </div>
);

export default ApplicationForm;
