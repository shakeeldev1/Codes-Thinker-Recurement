import React, { useState } from "react";
import { Eye, Edit2, Trash2, Plus } from "lucide-react";

const JobPostPage = () => {
  const initialJobs = [
    {
      id: 1,
      icon: "💻",
      title: "Senior Frontend Developer",
      company: "TechInnovate Inc.",
      type: "Full-time",
      duration: "Permanent",
      experience: "3-5 Years",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      description:
        "We're looking for an experienced Frontend Developer to join our team. You'll build responsive, high-performance web apps.",
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with design and backend teams",
        "Write clean, maintainable code and conduct code reviews",
        "Optimize applications for maximum speed and scalability",
        "Implement new features and fix bugs",
      ],
      requirements: [
        "3+ years experience in frontend development",
        "Proficiency in React.js, TypeScript, modern CSS",
        "Experience with state management (Redux, Context API)",
        "Knowledge of testing frameworks (Jest, Cypress)",
        "Familiarity with CI/CD pipelines and agile methodologies",
      ],
      skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
      applyLink: "#apply",
      postedDate: "2 days ago",
      applicants: 24,
      remote: true,
      featured: true,
      urgency: "high",
      category: "Engineering",
    },
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [jobForm, setJobForm] = useState({
    icon: "",
    title: "",
    company: "",
    type: "",
    duration: "",
    experience: "",
    location: "",
    salary: "",
    description: "",
    responsibilities: "",
    requirements: "",
    skills: "",
    postedDate: "",
    applicants: 0,
    remote: false,
    featured: false,
    category: "",
  });

  // ADD JOB
  const handleAddJob = (e) => {
    e.preventDefault();
    const newJob = {
      ...jobForm,
      id: jobs.length + 1,
      responsibilities: jobForm.responsibilities.split("\n"),
      requirements: jobForm.requirements.split("\n"),
      skills: jobForm.skills.split(",").map((s) => s.trim()),
    };
    setJobs([newJob, ...jobs]);
    setIsAddModalOpen(false);
    resetForm();
  };

  // EDIT JOB
  const handleEditJob = (e) => {
    e.preventDefault();
    const updatedJob = {
      ...jobForm,
      responsibilities: jobForm.responsibilities.split("\n"),
      requirements: jobForm.requirements.split("\n"),
      skills: jobForm.skills.split(",").map((s) => s.trim()),
    };
    setJobs(jobs.map((job) => (job.id === jobForm.id ? updatedJob : job)));
    setIsEditModalOpen(false);
    resetForm();
  };

  // DELETE JOB
  const handleDeleteJob = () => {
    setJobs(jobs.filter((job) => job.id !== selectedJob.id));
    setIsDeleteModalOpen(false);
  };

  // OPEN MODALS
  const openViewModal = (job) => {
    setSelectedJob(job);
    setIsViewModalOpen(true);
  };

  const openEditModal = (job) => {
    setJobForm({
      ...job,
      responsibilities: job.responsibilities.join("\n"),
      requirements: job.requirements.join("\n"),
      skills: job.skills.join(", "),
    });
    setIsEditModalOpen(true);
  };

  const resetForm = () => {
    setJobForm({
      icon: "",
      title: "",
      company: "",
      type: "",
      duration: "",
      experience: "",
      location: "",
      salary: "",
      description: "",
      responsibilities: "",
      requirements: "",
      skills: "",
      applyLink: "",
      postedDate: "",
      applicants: 0,
      remote: false,
      featured: false,
      category: "",
    });
  };

  return (
    <div className="p-6 lg:ml-64 mt-20 lg:p-10 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#060145]"> Jobs & Internship Posts
            
        </h1>
        <button
          className="flex items-center gap-2 bg-[#F59C20] hover:bg-[#060145] text-[#060145] hover:text-[#F59C20] px-6 py-2 rounded-lg font-semibold transition-all"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus size={20} /> New Post
        </button>
      </div>

      {/* Jobs Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-[#060145] text-white">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Company</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-center">Remote</th>
              <th className="px-4 py-3 text-center">Featured</th>
              <th className="px-4 py-3 text-center">Skills</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={job.id}
                className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 whitespace-nowrap`}
              >
                <td className="px-4 py-3">{job.title}</td>
                <td className="px-4 py-3">{job.company}</td>
                <td className="px-4 py-3">{job.type}</td>
                <td className="px-4 py-3">{job.location}</td>
                <td className="px-4 py-3 text-center">
                  {job.remote ? (
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Yes
                    </span>
                  ) : (
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                      No
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  {job.featured && (
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="text-xs font-medium">{job.skills.join(", ")}</span>
                </td>
              
                <td className="px-4 py-3 text-center flex justify-center gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => openViewModal(job)}
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    className="text-yellow-500 hover:text-yellow-700"
                    onClick={() => openEditModal(job)}
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => {
                      setSelectedJob(job);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {isAddModalOpen && (
        <Modal
          title="Add New Job"
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddJob}
          formData={jobForm}
          setFormData={setJobForm}
        />
      )}

      {isEditModalOpen && (
        <Modal
          title="Edit Job"
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditJob}
          formData={jobForm}
          setFormData={setJobForm}
        />
      )}

      {isViewModalOpen && selectedJob && (
        <ViewModal job={selectedJob} onClose={() => setIsViewModalOpen(false)} />
      )}

      {isDeleteModalOpen && selectedJob && (
        <DeleteModal job={selectedJob} onDelete={handleDeleteJob} onClose={() => setIsDeleteModalOpen(false)} />
      )}
    </div>
  );
};

// Reusable Add/Edit Modal
const Modal = ({ title, onClose, onSubmit, formData, setFormData }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 max-h-[80vh] overflow-y-auto relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
        onClick={onClose}
      >
        X
      </button>
      <h2 className="text-xl font-semibold mb-4 text-[#060145]">{title}</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Inputs */}
        <input
          type="text"
          placeholder="Icon"
          value={formData.icon}
          onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Duration"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Experience"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Salary"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full col-span-2"
        />
        <textarea
          placeholder="Responsibilities (one per line)"
          value={formData.responsibilities}
          onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full col-span-2"
        />
        <textarea
          placeholder="Requirements (one per line)"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full col-span-2"
        />
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Apply Link"
          value={formData.applyLink}
          onChange={(e) => setFormData({ ...formData, applyLink: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Posted Date"
          value={formData.postedDate}
          onChange={(e) => setFormData({ ...formData, postedDate: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="number"
          placeholder="Applicants"
          value={formData.applicants}
          onChange={(e) => setFormData({ ...formData, applicants: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Urgency (high/medium/low)"
          value={formData.urgency}
          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="border px-3 py-2 rounded-lg w-full"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.remote}
            onChange={(e) => setFormData({ ...formData, remote: e.target.checked })}
            className="w-4 h-4"
          />
          Remote
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.featured}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="w-4 h-4"
          />
          Featured
        </label>
        <button
          type="submit"
          className="mt-4 bg-[#F59C20] hover:bg-[#060145] text-[#060145] hover:text-[#F59C20] px-6 py-2 rounded-lg font-semibold transition-all col-span-2"
        >
          Save
        </button>
      </form>
    </div>
  </div>
);

// View Modal
const ViewModal = ({ job, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 relative max-h-[80vh] overflow-y-auto">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
        onClick={onClose}
      >
        X
      </button>
      <h2 className="text-xl font-semibold mb-4 text-[#060145]">{job.title} - {job.company}</h2>
      <p><strong>Type:</strong> {job.type} | <strong>Duration:</strong> {job.duration}</p>
      <p><strong>Location:</strong> {job.location} | <strong>Remote:</strong> {job.remote ? "Yes" : "No"}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Urgency:</strong> {job.urgency}</p>
      <p><strong>Category:</strong> {job.category}</p>
      <p className="mb-4"><strong>Description:</strong> {job.description}</p>
      <div className="mb-4">
        <strong>Responsibilities:</strong>
        <ul className="list-disc list-inside">{job.responsibilities.map((r,i)=><li key={i}>{r}</li>)}</ul>
      </div>
      <div className="mb-4">
        <strong>Requirements:</strong>
        <ul className="list-disc list-inside">{job.requirements.map((r,i)=><li key={i}>{r}</li>)}</ul>
      </div>
      <p><strong>Skills:</strong> {job.skills.join(", ")}</p>
      <p><strong>Applicants:</strong> {job.applicants}</p>
      <p><strong>Apply Link:</strong> <a href={job.applyLink} className="text-blue-500 underline">{job.applyLink}</a></p>
    </div>
  </div>
);

// Delete Modal
const DeleteModal = ({ job, onDelete, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
        onClick={onClose}
      >
        X
      </button>
      <h2 className="text-xl font-semibold mb-4 text-[#060145]">Delete Job</h2>
      <p>Are you sure you want to delete <strong>{job.title}</strong> at <strong>{job.company}</strong>?</p>
      <div className="flex justify-end gap-4 mt-6">
        <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
      </div>
    </div>
  </div>
);

export default JobPostPage;
