import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Building,
  Award,
  Zap,
  Star,
  Shield,
  Heart,
  TrendingUp,
} from "lucide-react";
import { jobsData } from "./Jobs";
import ApplicationForm from "./ApplicationForm";
import { motion } from "framer-motion";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const job = jobsData.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#060145] to-[#0c008c] flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center text-white p-8 max-w-md"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Users className="w-12 h-12 text-[#298ade]" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Opportunity Not Found</h2>
          <p className="text-white/80 mb-8">
            This position has been filled or is no longer available.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/jobs")}
            className="px-8 py-4 bg-[#298ade] text-white font-bold rounded-2xl shadow-xl hover:bg-[#0c008c] transition-all duration-300"
          >
            Explore Open Positions
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    console.log("📨 Application Submitted:", formData);
    alert(`Application submitted for ${job.title}!`);
    setShowModal(false);
  };

  const handleSaveJob = () => setIsSaved(!isSaved);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      {/* Background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#298ade]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#060145]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-between items-center gap-4 mb-10"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg border border-white/20 hover:border-[#298ade]/40 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-[#060145] group-hover:text-[#298ade]" />
            <span className="font-semibold text-[#060145] group-hover:text-[#298ade]">
              Back to Jobs
            </span>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSaveJob}
            className={`p-3 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
              isSaved
                ? "bg-[#298ade]/20 border-[#298ade] text-[#298ade] shadow-lg"
                : "bg-white/80 border-white/20 text-[#060145] hover:border-[#298ade]/30"
            }`}
          >
            <Heart className={`w-6 h-6 ${isSaved ? "fill-current" : ""}`} />
          </motion.button>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#060145] to-[#0c008c] rounded-3xl p-8 sm:p-10 text-white shadow-2xl overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                      {job.icon && typeof job.icon !== "string" ? (
                        job.icon
                      ) : (
                        <Building className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        {job.title}
                      </h1>
                      <p className="text-lg sm:text-xl text-white/80 flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        {job.company}
                      </p>
                    </div>
                  </div>

                  {job.featured && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#298ade] text-white rounded-full font-bold">
                      <Star className="w-4 h-4 fill-current" /> Featured
                    </div>
                  )}
                </div>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8">
                  {job.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Stat icon={<Clock />} label="Type" value={job.type} />
                  <Stat icon={<MapPin />} label="Location" value={job.location} />
                  <Stat icon={<DollarSign />} label="Salary" value={job.salary} />
                  <Stat
                    icon={<TrendingUp />}
                    label="Experience"
                    value={job.experience}
                  />
                </div>
              </div>
            </motion.div>

            {/* Role & Requirements */}
            <div className="flex flex-col sm:flex-row w-full max-w-[900px] mx-auto px-2 py-5 gap-6 justify-center">
              <DetailsCard
                title="Your Role"
                icon={<Users className="text-[#060145]" />}
                color="[#060145]"
                items={job.responsibilities}
              />
              <DetailsCard
                title="Requirements"
                icon={<Award className="text-[#298ade]" />}
                color="[#298ade]"
                items={job.requirements}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:sticky lg:top-8">
            <ApplyCard job={job} setShowModal={setShowModal} />
            <PerksCard />
          </div>
        </div>
      </div>

      {showModal && (
        <ApplicationForm
          job={job}
          onCancel={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

// Subcomponents
const Stat = ({ icon, label, value }) => (
  <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
    <div className="w-6 h-6 mx-auto mb-2 text-[#298ade]">{icon}</div>
    <div className="text-sm text-white/80">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

const DetailsCard = ({ title, icon, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl p-8 shadow-xl border-4 border-gray-100 hover:border-[#298ade]/30 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-[#298ade]/10 rounded-xl">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold text-[#060145]">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-4 py- px-3 rounded-xl hover:bg-[#298ade]/5 transition-colors"
        >
          <div className="w-2 h-2 bg-[#298ade] rounded-full mt-2 flex-shrink-0" />
          <span className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ApplyCard = ({ job, setShowModal }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
  >
    <div className="text-center mb-6">
      <div className="w-16 h-16 mx-auto mb-4 bg-[#060145] rounded-2xl flex items-center justify-center">
        <Zap className="w-8 h-8 text-[#298ade]" />
      </div>
      <h3 className="text-2xl font-bold text-[#060145] mb-2">Ready to Apply?</h3>
      <p className="text-gray-600">Join this amazing opportunity today</p>
    </div>

    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setShowModal(true)}
      className="w-full py-4 bg-gradient-to-r from-[#060145] to-[#0c008c] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
    >
      Apply Now
    </motion.button>

    <div className="mt-6 p-4 bg-gray-50 rounded-2xl text-sm space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-600">Posted</span>
        <span className="font-semibold text-[#060145]">{job.postedDate}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Applicants</span>
        <span className="font-semibold text-[#060145]">{job.applicants}</span>
      </div>
    </div>
  </motion.div>
);

const PerksCard = () =>
(<motion.div initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="bg-gradient-to-br from-[#F59C20] to-[#ffb340] rounded-3xl p-8 text-white shadow-xl w-full" >
    <h4 className="text-xl font-bold mb-4 flex items-center gap-2"> <Shield className="w-5 h-5" /> Why You'll Love It </h4>
    <ul className="space-y-3">
        <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full" /> Competitive salary package </li>
        <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full" /> Flexible work arrangements </li>
        <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full" /> Career growth opportunities </li>
        <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full" /> Amazing team culture </li>
    </ul> </motion.div>);

export default JobDetail;
