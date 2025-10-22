import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import ApplicationForm from "../../pages/ApplicationForm";

const ApplicationFormModal = ({ open, onClose, onSubmit }) => {
  if (!open) return null;

  // ✅ When form submits
  const handleSubmit = (formData) => {
    if (onSubmit) onSubmit(formData);
    toast.success("✅ Application submitted successfully!");
    onClose();
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center 
                 bg-black/50 backdrop-blur-sm overflow-y-auto animate-fadeIn"
    >
      <div
        className="relative bg-white w-full 
                   max-w-4xl my-8 mx-4 rounded-2xl shadow-2xl border border-gray-200
                   transition-all duration-300 overflow-hidden"
      >
        {/* --- Close Button --- */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 
                     active:scale-95 transition duration-200 z-50"
        >
          <X size={22} />
        </button>

        {/* --- Modal Content (Form) --- */}
        <div className="p-6 sm:p-8 font-sans text-gray-800 max-h-[90vh] overflow-y-auto">
          {/* ✅ Pass both cancel and submit handlers */}
          <ApplicationForm onCancel={onClose} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ApplicationFormModal;
