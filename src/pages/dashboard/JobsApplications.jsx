import React, { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

import DeleteModal from "../../components/dashboard/JobApplications/DeleteModal";
import EditModal from "../../components/dashboard/JobApplications/EditModal";
import ViewModal from "../../components/dashboard/JobApplications/ViewModal";
import JobApplicationsTable from "../../components/dashboard/JobApplications/JobApplicationsTable";
import ApplicationFormModal from "../../components/common/ApplicationFormModal";

const initialData = [
  {
    id: "#ST-245",
    fullName: "Aisha Ahmed",
    email: "aisha@applicant.com",
    phoneNumber: "+92 300 1111111",
    country: "Pakistan",
    city: "Karachi",
    jobTitle: "Front-End Developer Intern",
    experienceLevel: "Mid Level",
    expectedJoiningDate: "2025-11-01",
    expectedSalary: "80,000 PKR/month",
    viewJobPostSource: "LinkedIn",
    degree: "Bachelor's in Computer Science",
    department: "Web Development",
    skills: "React, Tailwind CSS, JavaScript",
    portfolio: "https://aisha-portfolio.com",
    linkedin: "https://linkedin.com/in/aisha",
    github: "https://github.com/aisha",
    cv: "/resumes/aisha.pdf",
    coverLetter: "/coverletters/aisha.pdf",
    additionalInfo: "Passionate about clean UI and responsive design.",
    reference: "LinkedIn referral from TechVision",
    agreement: true,
    date: "2025-10-01",
    status: "Pending",
  },
  {
    id: "#ST-246",
    fullName: "Hamza Khan",
    email: "hamza@applicant.com",
    phoneNumber: "+92 300 2222222",
    country: "Pakistan",
    city: "Lahore",
    jobTitle: "Full Stack Developer",
    experienceLevel: "Expert Level",
    expectedJoiningDate: "2025-11-15",
    expectedSalary: "150,000 PKR/month",
    viewJobPostSource: "Company Website",
    degree: "Master’s in Software Engineering",
    department: "Software Engineering",
    skills: "Node.js, React, MongoDB, Express.js, TypeScript",
    portfolio: "https://hamza-dev.com",
    linkedin: "https://linkedin.com/in/hamza",
    github: "https://github.com/hamza",
    cv: "/resumes/hamza.pdf",
    coverLetter: "/coverletters/hamza.pdf",
    additionalInfo: "Excited to mentor junior developers.",
    reference: "Tech mentor from Innovatech",
    agreement: false,
    date: "2025-10-02",
    status: "Approved",
  },
];


export default function JobsApplications() {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [viewing, setViewing] = useState(null);
  const [editing, setEditing] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const itemsPerPage = 20;

  // ✅ Clear filters
  const handleClearFilters = () => {
    setQuery("");
    setFilterType("All");
    setJobType("All");
    setCurrentPage(1);
  };

  // ✅ Filter logic with memoization
  const filteredResults = useMemo(() => {
    return data.filter((row) => {
      const matchesQuery =
        query === "" ||
        row.name.toLowerCase().includes(query.toLowerCase()) ||
        row.id.toLowerCase().includes(query.toLowerCase()) ||
        row.positionTitle.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filterType === "All" || row.status === filterType;
      const matchesJob = jobType === "All" || row.applicationType === jobType;
      return matchesQuery && matchesFilter && matchesJob;
    });
  }, [data, query, filterType, jobType]);

  // ✅ Pagination
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const paginatedData = filteredResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ✅ Delete
  const handleDelete = (id) => {
    setData((d) => d.filter((r) => r.id !== id));
    setShowConfirmDelete(null);
  };

  // ✅ Save edit
  const handleSaveEdit = (updated) => {
    setData((prev) =>
      prev.map((r) => (r.id === updated.id ? { ...updated } : r))
    );
    setEditing(null);
  };

// ✅ Add new application (fixed mapping)
const handleAdd = (newApp) => {
  const newApplication = {
    id: `#ST-${Math.floor(Math.random() * 1000)}`,
    fullName: newApp.fullName || "N/A",
    email: newApp.email || "N/A",
    phoneNumber: newApp.phoneNumber || "N/A",
    country: newApp.country || "N/A",
    city: newApp.city || "N/A",
    jobTitle: newApp.jobTitle || "N/A",
    experienceLevel: newApp.experienceLevel || "N/A",
    expectedJoiningDate: newApp.expectedJoiningDate || "N/A",
    expectedSalary: newApp.expectedSalary || "N/A",
    viewJobPostSource: newApp.viewJobPostSource || "N/A",
    degree: newApp.degree || "N/A",
    department: newApp.department || "N/A",
    skills: newApp.skills || "N/A",
    portfolio: newApp.portfolio || "",
    linkedin: newApp.linkedin || "",
    github: newApp.github || "",
    cv: newApp.cv ? newApp.cv.name : "N/A",
    coverLetter: newApp.coverLetter ? newApp.coverLetter.name : "N/A",
    additionalInfo: newApp.additionalInfo || "",
    reference: newApp.reference || "",
    agreement: newApp.agreement || false,
    date: new Date().toISOString().split("T")[0],
    status: "Pending",
  };

  setData((prev) => [...prev, newApplication]);
  setIsFormOpen(false);
};




  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen lg:ml-64 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#080156] text-left">
          Jobs & Internship Applications
        </h1>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-4 sm:p-6">
          {/* Filters + Add Button */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-6">
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {/* Status Filter */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Status
                </label>
                <select
                  className="border rounded-lg px-3 py-2 text-sm w-full sm:w-40"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Type
                </label>
                <select
                  className="border rounded-lg px-3 py-2 text-sm w-full sm:w-40"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="All">All Types</option>
                  <option value="Job">Job</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Search
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    className="border rounded-lg pl-10 pr-3 py-2 text-sm w-full sm:w-56"
                    placeholder="Search applicants..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={handleClearFilters}
                className="text-sm text-red-500 font-medium hover:underline ml-auto lg:mt-5"
              >
                Clear Filters
              </button>
            </div>

            {/* Add New Application */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#080156] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#0b037a] transition w-full sm:w-auto"
            >
              + New Application
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <JobApplicationsTable
              data={paginatedData}
              onView={setViewing}
              onEdit={setEditing}
              onDelete={setShowConfirmDelete}
            />
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-600 gap-3">
            <p>
              Showing {(currentPage - 1) * itemsPerPage + 1}–
              {Math.min(currentPage * itemsPerPage, filteredResults.length)} of{" "}
              {filteredResults.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 border rounded-lg disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 border rounded-lg disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modals */}
      {viewing && <ViewModal data={viewing} onClose={() => setViewing(null)} />}
      {editing && (
        <EditModal
          data={editing}
          onClose={() => setEditing(null)}
          onSave={handleSaveEdit}
        />
      )}
      {showConfirmDelete && (
        <DeleteModal
          onClose={() => setShowConfirmDelete(null)}
          onConfirm={() => handleDelete(showConfirmDelete)}
        />
      )}
      {isFormOpen && (
        <ApplicationFormModal
          onSubmit={handleAdd}
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}
