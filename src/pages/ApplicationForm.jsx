import React, { useState } from "react";
import { X, Upload, Calendar } from "lucide-react";

const ApplicationForm = ({ onCancel, onSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        cityCountry: "",
        jobTitle: "",
        department: "",
        address: "",
        joiningDate: "",
        cv: null,
        coverLetter: null,
        interest1: "",
        linkedin: "",
        interest2: "",
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#0B055A] to-[#5A51D3] text-white p-6 rounded-t-3xl flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">Job Application Form</h2>
                        <p className="text-sm text-white/80 mt-1">Please fill in all required fields</p>
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
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Full Name"
                                    className="border rounded-lg p-3 w-full bg-white"
                                    onChange={handleChange}
                                    value={formData.fullName}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    className="border rounded-lg p-3 w-full bg-white"
                                    onChange={handleChange}
                                    value={formData.phoneNumber}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="border rounded-lg p-3 w-full bg-white"
                                    onChange={handleChange}
                                    value={formData.email}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="cityCountry" className="block text-sm font-medium text-gray-700 mb-2">
                                    City/Country
                                </label>
                                <input
                                    id="cityCountry"
                                    name="cityCountry"
                                    placeholder="City/Country"
                                    className="border rounded-lg p-3 w-full bg-white"
                                    onChange={handleChange}
                                    value={formData.cityCountry}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Position Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Position Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Job & Internship Title
                                </label>
                                <select
                                    id="jobTitle"
                                    name="jobTitle"
                                    className="border rounded-lg p-3 w-full bg-white"
                                    onChange={handleChange}
                                    value={formData.jobTitle}
                                >
                                    <option value="">Select Job & Internship Title</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="AI Intern">AI Intern</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Department
                                </label>
                                <select
                                    id="department"
                                    name="department"
                                    className="border rounded-lg p-3 w-full bg-white"
                                    onChange={handleChange}
                                    value={formData.department}
                                >
                                    <option value="">Preferred Department</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Research">Research</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    name="address"
                                    placeholder="Address"
                                    className="border rounded-lg p-3 w-full bg-white"
                                    onChange={handleChange}
                                    value={formData.address}
                                />
                            </div>

                            <div>
                                <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-700 mb-2">
                                    Joining Date
                                </label>
                                <div className="relative">
                                    <input
                                        id="joiningDate"
                                        name="joiningDate"
                                        type="date"
                                        className="border rounded-lg p-3 w-full bg-white"
                                        onChange={handleChange}
                                        value={formData.joiningDate}
                                    />
                                    <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Documents Upload */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Documents Upload</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload CV/Resume
                                </label>
                                <div className="flex items-center gap-3 border rounded-lg p-3 bg-white">
                                    <Upload className="text-gray-500 w-5 h-5" />
                                    <input
                                        id="cv"
                                        type="file"
                                        name="cv"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleChange}
                                        className="w-full text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload Cover Letter
                                </label>
                                <div className="flex items-center gap-3 border rounded-lg p-3 bg-white">
                                    <Upload className="text-gray-500 w-5 h-5" />
                                    <input
                                        id="coverLetter"
                                        type="file"
                                        name="coverLetter"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleChange}
                                        className="w-full text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Additional Info</h3>

                        <div className="border rounded-lg p-4 bg-white space-y-4">
                            <div>
                                <label htmlFor="interest1" className="block text-sm font-medium text-gray-700 mb-2">
                                    Why are you interested in this role?
                                </label>
                                <textarea
                                    id="interest1"
                                    name="interest1"
                                    rows={3}
                                    placeholder="Why are you interested in this role?"
                                    className="w-full border rounded-md p-3 bg-white resize-none"
                                    onChange={handleChange}
                                    value={formData.interest1}
                                />
                            </div>

                            <div>
                                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                                    LinkedIn Profile URL
                                </label>
                                <input
                                    id="linkedin"
                                    name="linkedin"
                                    placeholder="LinkedIn Profile URL"
                                    className="border rounded-lg p-3 w-full bg-white"
                                    onChange={handleChange}
                                    value={formData.linkedin}
                                />
                            </div>

                            <div>
                                <label htmlFor="interest2" className="block text-sm font-medium text-gray-700 mb-2">
                                    GitHub Profile URL
                                </label>
                                <textarea
                                    id="interest2"
                                    name="interest2"
                                    rows={3}
                                    placeholder="Why are you interested in this role?"
                                    className="w-full border rounded-md p-3 bg-white resize-none"
                                    onChange={handleChange}
                                    value={formData.interest2}
                                />
                            </div>
                        </div>
                    </div>

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
                            <span className="font-medium">Publishing Agreement</span>
                            <div className="text-gray-500">I agree that my review can be published on the website.</div>
                        </label>
                    </div>

                    {/* Submit Button */}
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

export default ApplicationForm;
