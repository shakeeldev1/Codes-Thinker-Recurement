import React, { useState, useMemo } from "react";
import {
  Plus,
  Search,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import InterviewDeleteModal from "../../components/dashboard/InterviewPage/InterviewDeleteModal";
import InterviewViewModal from "../../components/dashboard/InterviewPage/InterviewViewModal";
import InterviewTable from "../../components/dashboard/InterviewPage/InterviewTable";
import AddEditModal from "../../components/dashboard/InterviewPage/AddEditModal";

const brand = "#080156";

const initialInterviews = [
  {
    id: 1,
    name: "Aisha Ahmed",
    position: "Internship",
    department: "Web Development",
    date: "2025-10-07",
    mode: "Online (Zoom)",
    status: "Pending",
  },
  {
    id: 2,
    name: "Hamza Khan",
    position: "Internship",
    department: "UI UX Designer",
    date: "2025-10-10",
    mode: "On Site",
    status: "Approved",
  },
  {
    id: 3,
    name: "Sara Malik",
    position: "Frontend Developer",
    department: "Web Development",
    date: "2025-10-15",
    mode: "Online (Zoom)",
    status: "Rejected",
  },
  {
    id: 4,
    name: "Ali Raza",
    position: "Backend Developer",
    department: "Web Development",
    date: "2025-10-18",
    mode: "On Site",
    status: "Pending",
  },
];

const InterviewPage = () => {
  const [interviews, setInterviews] = useState(initialInterviews);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    mode: "",
    department: "",
  });
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [showModal, setShowModal] = useState(null);
  const [selected, setSelected] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sorting logic
  const handleSort = (key) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  // Filtered + Sorted data
  const filteredData = useMemo(() => {
    let data = [...interviews];
    if (filters.search)
      data = data.filter((i) =>
        i.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    if (filters.status) data = data.filter((i) => i.status === filters.status);
    if (filters.mode) data = data.filter((i) => i.mode === filters.mode);
    if (filters.department)
      data = data.filter((i) => i.department === filters.department);

    if (sortKey)
      data.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
        return 0;
      });

    return data;
  }, [interviews, filters, sortKey, sortAsc]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1)
      setCurrentPage((p) => p - 1);
    else if (direction === "next" && currentPage < totalPages)
      setCurrentPage((p) => p + 1);
  };

  // Save Interview
  const handleSave = (data) => {
    if (data.id) {
      setInterviews((prev) => prev.map((i) => (i.id === data.id ? data : i)));
    } else {
      setInterviews((prev) => [
        ...prev,
        { ...data, id: prev.length + 1, status: "Pending" },
      ]);
    }
    setShowModal(null);
  };

  // Delete Interview
  const handleDelete = (id) => {
    setInterviews((prev) => prev.filter((i) => i.id !== id));
    setShowModal(null);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 mt-20 bg-gray-50 min-h-screen lg:ml-64">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
        <h1
          className="md:text-3xl text-2xl font-bold tracking-tight"
          style={{ color: brand }}
        >
          Interview Management
        </h1>
        <button
          onClick={() => {
            setSelected(null);
            setShowModal("add");
          }}
          className="flex items-center px-5 py-2.5 rounded-lg text-white font-medium shadow-lg transition-transform hover:scale-105 bg-gradient-to-r from-[#080156] to-[#3434c5]"
        >
          <Plus className="mr-2" size={18} /> Schedule Interview
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-5 mb-6 flex flex-wrap gap-3 items-center">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 flex-1 min-w-[200px]">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by candidate name..."
            className="outline-none w-full text-sm bg-transparent"
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
          />
        </div>

        <div className="flex gap-3 flex-wrap">
          {["status", "mode", "department"].map((key) => (
            <select
              key={key}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={filters[key]}
              onChange={(e) =>
                setFilters({ ...filters, [key]: e.target.value })
              }
            >
              {key === "status" && (
                <>
                  <option value="">All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </>
              )}
              {key === "mode" && (
                <>
                  <option value="">All Modes</option>
                  <option>Online (Zoom)</option>
                  <option>On Site</option>
                </>
              )}
              {key === "department" && (
                <>
                  <option value="">All Departments</option>
                  <option>Web Development</option>
                  <option>UI UX Designer</option>
                </>
              )}
            </select>
          ))}
        </div>

        <button
          onClick={() =>
            setFilters({ search: "", status: "", mode: "", department: "" })
          }
          className="text-sm text-red-500 font-medium hover:underline ml-auto"
        >
          Clear Filters
        </button>
      </div>

      {/* Table */}
      <InterviewTable
        data={paginatedData}
        handleSort={handleSort}
        sortKey={sortKey}
        sortAsc={sortAsc}
        onView={(i) => {
          setSelected(i);
          setShowModal("view");
        }}
        onEdit={(i) => {
          setSelected(i);
          setShowModal("edit");
        }}
        onDelete={(i) => {
          setSelected(i);
          setShowModal("delete");
        }}
      />

      {/* Pagination (same as Jobs Application style) */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-600 gap-3">
        <p className="text-center sm:text-left">
          Showing {(currentPage - 1) * itemsPerPage + 1}–
          {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="p-2 border rounded-lg disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className="p-2 border rounded-lg disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modals */}
      {showModal === "view" && (
        <InterviewViewModal data={selected} onClose={() => setShowModal(null)} />
      )}
      {(showModal === "add" || showModal === "edit") && (
        <AddEditModal
          data={selected}
          onSave={handleSave}
          onClose={() => setShowModal(null)}
        />
      )}
      {showModal === "delete" && (
        <InterviewDeleteModal
          data={selected}
          onConfirm={() => handleDelete(selected.id)}
          onClose={() => setShowModal(null)}
        />
      )}
    </div>
  );
};

export default InterviewPage;
