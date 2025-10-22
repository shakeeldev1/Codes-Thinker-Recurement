import React, { useState } from "react";
import { Plus } from "lucide-react";
import JobPostTable from "../../components/dashboard/JobPostPage/JobPostTable";
import JobPostModal from "../../components/dashboard/JobPostPage/JobPostModal";
import JobPostViewModal from "../../components/dashboard/JobPostPage/JobPostViewModal";
import JobPostDeleteModal from "../../components/dashboard/JobPostPage/JobPostDeleteModal";

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
      urgency: "High",
      category: "Engineering",
    },
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [selectedJob, setSelectedJob] = useState(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
    applyLink: "",
    postedDate: "",
    applicants: 0,
    remote: false,
    featured: false,
    urgency: "",
    category: "",
  });

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

  const handleDeleteJob = () => {
    setJobs(jobs.filter((job) => job.id !== selectedJob.id));
    setIsDeleteModalOpen(false);
  };

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

  const resetForm = () =>
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
      urgency: "",
      category: "",
    });

  return (
    <div className="p-4 sm:p-6 lg:p-10 mt-20 lg:ml-64 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#060145] text-center sm:text-left">
          Jobs & Internship Posts
        </h1>

        <button
          className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#F59C20] hover:bg-[#060145] text-[#060145] hover:text-[#F59C20] px-5 py-2 rounded-lg font-semibold transition-all"
          onClick={() => {
            resetForm();
            setIsAddModalOpen(true);
          }}
        >
          <Plus size={20} /> New Post
        </button>
      </div>

      {/* Table Section */}
      <div className="w-full overflow-hidden">
        <JobPostTable
          jobs={jobs}
          onView={openViewModal}
          onEdit={openEditModal}
          onDelete={(job) => {
            setSelectedJob(job);
            setIsDeleteModalOpen(true);
          }}
        />
      </div>

      {/* Modals */}
      {isAddModalOpen && (
        <JobPostModal
          title="Add New Job"
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddJob}
          formData={jobForm}
          setFormData={setJobForm}
        />
      )}

      {isEditModalOpen && (
        <JobPostModal
          title="Edit Job"
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditJob}
          formData={jobForm}
          setFormData={setJobForm}
        />
      )}

      {isViewModalOpen && selectedJob && (
        <JobPostViewModal
          job={selectedJob}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}

      {isDeleteModalOpen && selectedJob && (
        <JobPostDeleteModal
          job={selectedJob}
          onDelete={handleDeleteJob}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default JobPostPage;
