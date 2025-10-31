import React from "react";
import {
  XCircle,
  FileText,
  Link2,
  User,
  Briefcase,
  GraduationCap,
  ClipboardList,
  Paperclip,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function ViewModal({ data, onClose }) {
  const renderValue = (key, value, label) => {
    if (!value && value !== false) return "—";

    if (["linkedin", "github", "portfolio", "viewJobPostSource", "reference"].includes(key)) {
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <Link2 className="w-4 h-4" /> {value.replace(/^https?:\/\//, "")}
        </a>
      );
    }

    if (["cv", "coverLetter"].includes(key)) {
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#080156] font-medium hover:underline flex items-center gap-1"
        >
          <FileText className="w-4 h-4" /> View {label}
        </a>
      );
    }

    if (key === "agreement") {
      return (
        <span
          className={`font-semibold ${value ? "text-green-600" : "text-red-600"}`}
        >
          {value ? "Yes" : "No"}
        </span>
      );
    }

    return value;
  };

  const Section = ({ icon: Icon, title, children }) => (
    <section className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-4">
      <div className="flex items-center gap-2 mb-3 border-b pb-2">
        <Icon className="w-4 h-4 text-[#080156]" />
        <h3 className="text-base font-semibold text-[#080156]">{title}</h3>
      </div>
      {children}
    </section>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3">
      <div className="bg-gray-50 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-3 border-b bg-gradient-to-r from-[#080156] to-[#1b1b5f]">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-white" />
            Applicant Overview
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <XCircle className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 max-h-[75vh] overflow-y-auto custom-scrollbar space-y-4">
          {/* Personal Details */}
          <Section icon={User} title="Personal Details">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["fullName", "Full Name"],
                ["email", "Email"],
                ["phoneNumber", "Phone Number"],
                ["country", "Country"],
                ["city", "City"],
                ["agreement", "Agreement"],
              ].map(([key, label]) => (
                <div key={key}>
                  <p className="text-xs uppercase text-gray-500 mb-0.5">
                    {label}
                  </p>
                  <p className="font-medium text-gray-800 text-sm">
                    {renderValue(key, data[key], label)}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Job Information */}
          <Section icon={Briefcase} title="Job Information">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["jobTitle", "Job Title"],
                ["department", "Department"],
                ["experienceLevel", "Experience Level"],
                ["expectedJoiningDate", "Expected Joining Date"],
                ["expectedSalary", "Expected Salary"],
                ["viewJobPostSource", "Job Post Source"],
                ["date", "Application Date"],
                ["status", "Status"],
              ].map(([key, label]) => (
                <div key={key}>
                  <p className="text-xs uppercase text-gray-500 mb-0.5">
                    {label}
                  </p>
                  {key === "status" ? (
                    <StatusBadge status={data[key]} />
                  ) : (
                    <p className="font-medium text-gray-800 text-sm">
                      {renderValue(key, data[key], label)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section icon={GraduationCap} title="Education">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["degree", "Degree"],
                ["skills", "Skills"],
                ["additionalInfo", "Additional Info"],
              ].map(([key, label]) => (
                <div key={key}>
                  <p className="text-xs uppercase text-gray-500 mb-0.5">
                    {label}
                  </p>
                  <p className="font-medium text-gray-800 text-sm">
                    {renderValue(key, data[key], label)}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Links */}
          <Section icon={Link2} title="Links">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["portfolio", "Portfolio"],
                ["linkedin", "LinkedIn"],
                ["github", "GitHub"],
                ["reference", "Reference"],
              ].map(([key, label]) => (
                <div key={key}>
                  <p className="text-xs uppercase text-gray-500 mb-0.5">
                    {label}
                  </p>
                  <p className="font-medium text-gray-800 text-sm">
                    {renderValue(key, data[key], label)}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Attachments */}
          <Section icon={Paperclip} title="Attachments">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["cv", "CV / Resume"],
                ["coverLetter", "Cover Letter"],
              ].map(([key, label]) => (
                <div key={key}>
                  <p className="text-xs uppercase text-gray-500 mb-0.5">
                    {label}
                  </p>
                  <p className="font-medium text-gray-800 text-sm">
                    {renderValue(key, data[key], label)}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t bg-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#080156] text-white rounded-lg hover:bg-[#0a017d] transition text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
