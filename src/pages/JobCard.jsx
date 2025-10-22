import React, { useState } from "react";
import {
    Type,
    Award,
    MapPin,
    DollarSign,
    Calendar,
    Users,
    Globe,
    Bookmark,

} from "lucide-react";
import { motion } from "framer-motion";

const JobCard = ({ job, onClick }) => {



    return (
        <motion.div
            onClick={() => onClick(job)}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 30px rgba(0,0,0,0.12)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg shadow-amber-200  hover:border-[#F59C20]
      transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden 
      min-h-[500px] w-full max-w-[370px] sm:max-w-[400px] md:max-w-[430px] border-2 border-[#060145]"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#060145] via-[#060145] to-[#F59C20] text-white px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
                    <div className="w-full">
                        <h3 className="text-xl sm:text-2xl font-bold leading-tight break-words truncate">
                            {job.title}
                        </h3>
                        <p className="text-sm opacity-90">{job.company}</p>
                    </div>
                </div>


            </div>

            {/* Description & Info */}
            <div className="p-5  flex flex-col justify-between">
                <div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 line-clamp-2 min-h-[48px]">
                        {job.description}
                    </p>

                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 mb-5 py-2">
                        <Info icon={<Type />} label={job.type} />
                        <Info icon={<Award />} label={job.experience} />
                        <Info icon={<MapPin />} label={job.location} />
                        <Info icon={<DollarSign />} label={job.salary} />
                    </div>
                </div>

                <div className="flex gap-2 whitespace-nowrap">
                    {job.skills.slice(0, 3).map((skill, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-2 py-1 bg-[#060145]/10 text-[#060145] text-xs sm:text-sm font-medium rounded-md"
                        >
                            {skill}
                        </motion.span>
                    ))}
                    {job.skills.length > 3 && (
                        <span className="px-3 py-1 bg-[#F59C20]/10 text-[#F59C20] text-xs sm:text-sm font-medium rounded-md">
                            +{job.skills.length - 3}
                        </span>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-[#060145] flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-2 text-gray-600">
                <div className="flex flex-wrap items-center gap-3 text-white">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-300" />
                        <span>{job.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-300" />
                        <span>{job.applicants} applicants</span>
                    </div>
                </div>

                {job.remote && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-[#F59C20] text-[#060145] text-xs sm:text-sm font-semibold rounded-md self-start sm:self-auto">
                        <Globe className="w-3 h-3 text-gray-800" />
                        Remote
                    </div>
                )}
            </div>

            {/* Apply Button */}
            <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-[#060145] lg:mt-[-30px] mt-[-14px] md:mt-[-30px]"
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(job);
                    }}
                    className="w-full py-2.5 bg-[#F59C20] text-[#060145] font-semibold rounded-lg 
          hover:bg-[#060145] hover:text-[#F59C20] border border-[#F59C20] 
          transition-all duration-300 text-sm sm:text-base"
                >
                    Apply Now
                </button>
            </motion.div>
        </motion.div>
    );
};

const Info = ({ icon, label }) => (
    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
        <span className="text-gray-600 w-4 h-4 flex-shrink-0">{icon}</span>
        <span className="truncate">{label}</span>
    </div>
);

export default JobCard;
