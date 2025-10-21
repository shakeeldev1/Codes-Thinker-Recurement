import React, { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

import DeleteModal from "../../components/dashboard/JobApplications/DeleteModal";
import EditModal from "../../components/dashboard/JobApplications/EditModal";
import ViewModal from "../../components/dashboard/JobApplications/ViewModal";
import JobApplicationsTable from "../../components/dashboard/JobApplications/JobApplicationsTable";
import AddModal from "../../components/dashboard/JobApplications/AddModal";

const initialData = [
  {
    id: "#ST-245",
    name: "Aisha Ahmed",
    applicationType: "Internship",
    positionTitle: "Front-End Developer Intern",
    department: "Web Development",
    date: "2025-10-01",
    status: "Pending",
    email: "aisha@applicant.com",
    phone: "+92 300 1111111",
    resume: "/resumes/aisha.pdf",
  },
  {
    id: "#ST-246",
    name: "Hamza Khan",
    applicationType: "Job",
    positionTitle: "Full Stack Developer",
    department: "Software Engineering",
    date: "2025-10-02",
    status: "Approved",
    email: "hamza@applicant.com",
    phone: "+92 300 2222222",
    resume: "/resumes/hamza.pdf",
  },
  {
    id: "#ST-247",
    name: "Sara Malik",
    applicationType: "Internship",
    positionTitle: "UI/UX Design Intern",
    department: "Design",
    date: "2025-10-03",
    status: "Rejected",
    email: "sara@applicant.com",
    phone: "+92 300 3333333",
    resume: "/resumes/sara.pdf",
  },
  {
    id: "#ST-248",
    name: "Ali Raza",
    applicationType: "Job",
    positionTitle: "Backend Developer",
    department: "Software Engineering",
    date: "2025-10-04",
    status: "Pending",
    email: "ali@applicant.com",
    phone: "+92 300 4444444",
    resume: "/resumes/ali.pdf",
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
  const [showAddModal, setShowAddModal] = useState(false); // ✅ NEW

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filtering logic
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

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const paginatedData = filteredResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleDelete = (id) => {
    setData((d) => d.filter((r) => r.id !== id));
    setShowConfirmDelete(null);
  };

  const handleSaveEdit = (updated) => {
    setData((prev) =>
      prev.map((r) => (r.id === updated.id ? { ...updated } : r))
    );
    setEditing(null);
  };

  const handleAdd = (newApp) => {
    setData((prev) => [...prev, newApp]);
    setShowAddModal(false);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen lg:ml-64 mt-15">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#080156]">
          Jobs & Internship Applications
        </h1>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
          {/* Filters + Add Button */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
            <div className="flex flex-wrap items-end gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Status
                </label>
                <select
                  className="border rounded-lg px-3 py-2 text-sm"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Type
                </label>
                <select
                  className="border rounded-lg px-3 py-2 text-sm"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="All">All Types</option>
                  <option value="Job">Job</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Search
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    className="border rounded-lg pl-10 pr-3 py-2 text-sm w-64"
                    placeholder="Search applicants..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* ➕ Add New Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-[#080156] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#0b037a] transition"
            >
              + New Application
            </button>
          </div>

          {/* Table */}
          <JobApplicationsTable
            data={paginatedData}
            onView={setViewing}
            onEdit={setEditing}
            onDelete={setShowConfirmDelete}
          />

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
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

      {/* Modals */}
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
      {showAddModal && (
        <AddModal onClose={() => setShowAddModal(false)} onAdd={handleAdd} />
      )}
    </div>
  );
}
