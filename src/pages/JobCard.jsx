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
    Share2,
} from "lucide-react";
import { motion } from "framer-motion";

const JobCard = ({ job, onClick }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmark = (e) => {
        e.stopPropagation();
        setIsBookmarked(!isBookmarked);
    };

    const handleShare = (e) => {
        e.stopPropagation();
        console.log("Share job:", job.id);
    };

    return (
        <motion.div
            onClick={() => onClick(job)}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-transparent hover:border-[#F59C20] transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
        >
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-[#060145] via-[#060145] to-[#F59C20] text-white px-2.5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">

                    <div className="w-[310px]">
                        <h3 className="text-2xl font-bold leading-tight">{job.title}</h3>
                        <p className="text-sm opacity-90 flex items-center gap-1">
                            {job.company}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleBookmark}
                        className="p-2 hover:bg-white/10 rounded-full transition"
                    >
                        <Bookmark
                            className={`w-5 h-5 ${isBookmarked
                                ? "fill-gray-300 text-gray-300"
                                : "text-gray-200"
                                }`}
                        />
                    </button>
                    <button
                        onClick={handleShare}
                        className="p-2 hover:bg-white/10 rounded-full transition"
                    >
                        <Share2 className="w-5 h-5 text-gray-200" />
                    </button>
                </div>
            </div>

            {/* Description */}
            <div className="p-5 flex-grow">
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {job.description}
                </p>

                {/* Job Info Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <Info icon={<Type className="text-gray-600" />} label={job.type} />
                    <Info icon={<Award className="text-gray-600" />} label={job.experience} />
                    <Info icon={<MapPin className="text-gray-600" />} label={job.location} />
                    <Info icon={<DollarSign className="text-gray-600" />} label={job.salary} />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 3).map((skill, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-[#060145]/10 text-[#060145] text-xs font-medium rounded-md"
                        >
                            {skill}
                        </span>
                    ))}
                    {job.skills.length > 3 && (
                        <span className="px-3 py-1 bg-[#F59C20]/10 text-[#F59C20] text-xs font-medium rounded-md">
                            +{job.skills.length - 3}
                        </span>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 bg-[#060145] flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-300" />
                        <span className="text-white">{job.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-300" />
                        <span className="text-white">{job.applicants} applicants</span>
                    </div>
                </div>

                {job.remote && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-[#F59C20] text-[#060145] text-xs font-semibold rounded-md">
                        <Globe className="w-3 h-3 text-gray-800" />
                        Remote
                    </div>
                )}
            </div>

            {/* Apply Button */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-5 bg-[#060145]"
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(job);
                    }}
                    className="w-full py-2.5 bg-[#F59C20] text-[#060145] font-semibold rounded-lg hover:bg-[#060145] hover:text-[#F59C20] border border-[#F59C20] transition-all duration-300"
                >
                    Apply Now
                </button>
            </motion.div>
        </motion.div>
    );
};

const Info = ({ icon, label }) => (
    <div className="flex items-center gap-2 text-sm text-gray-700">
        <span className="text-gray-600 w-4 h-4">{icon}</span>
        <span>{label}</span>
    </div>
);

export default JobCard;
