import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Innovatech Solutions",
      location: "Remote",
      type: "Full-time",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "React.js Engineer",
      company: "CodeSync Labs",
      location: "Lahore, Pakistan",
      type: "Hybrid",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "UI/UX Designer",
      company: "VisionX Studio",
      location: "Karachi, Pakistan",
      type: "On-site",
      gradient: "from-indigo-500 to-cyan-400",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gray-50 text-gray-800 overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-cyan-100/20 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Jobs
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-12"
        >
          Explore some of the top opportunities curated for developers looking
          to grow, innovate, and make an impact.
        </motion.p>

        {/* Job Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white shadow-md hover:shadow-xl border border-gray-100 rounded-2xl p-6 text-left hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient Accent Bar */}
              <div
                className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${job.gradient}`}
              ></div>

              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-500" />
                  {job.title}
                </h3>
                <p className="text-gray-700 font-medium">{job.company}</p>
              </div>

              <div className="mt-4 flex items-center gap-3 text-gray-500 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>

              <div className="mt-2 flex items-center gap-3 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>{job.type}</span>
              </div>

              <button
                className={`mt-6 w-full py-2.5 font-semibold text-white rounded-lg bg-gradient-to-r ${job.gradient} shadow-md hover:shadow-lg transition-all`}
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
