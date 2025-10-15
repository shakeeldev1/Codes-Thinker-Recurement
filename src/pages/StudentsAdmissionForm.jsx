import React, { useState } from "react";
import { X, Calendar } from "lucide-react";

const StudentAdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    course: "",
    class: "",
    gender: "",
    address: "",
    joiningDate: "",
    message: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-7">
      <div className="bg-white rounded-2xl shadow-md max-w-2xl w-full p-8 relative">
       

        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-8">
          Students <span className="text-[#1a0dab]">Admission</span> Form
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Select Courses</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
              >
                <option value="">Select Course</option>
                <option value="web-development">Web Development</option>
                <option value="app-development">App Development</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Class</label>
              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
              >
                <option value="">Select Class</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1">Joining Date</label>
              <input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
              />
              <Calendar
                className="absolute right-3 top-9 text-gray-500 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a0dab]"
              rows="3"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-600">
              Publishing Agreement <br />
              <span className="text-xs">
                I agree that my review can be published on the website.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#160ab9] to-[#070052]  hover:opacity-90 transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentAdmissionForm;
