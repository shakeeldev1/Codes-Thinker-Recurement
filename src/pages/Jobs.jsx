import React from "react";
import {
    Briefcase,
    Code,
    Smartphone,
    Palette,
    Megaphone,
    MapPin,
    Clock,
    Type
} from "lucide-react";

const Jobs = () => {
    const jobs = [
        {
            icon: <Code className="w-8 h-8 text-indigo-600" />,
            title: "Web Development Intern",
            type: "Internship",
            duration: "3 Months",
            location: "Remote / On-site",
            description: "Join our web team to build responsive, dynamic websites using React, Tailwind CSS, and modern APIs.",
            skills: ["React.js", "HTML", "CSS", "JavaScript"],
            applyLink: "#web-dev-apply",
        },
        {
            icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
            title: "App Development Intern",
            type: "Internship",
            duration: "3 Months",
            location: "Remote",
            description: "Work with experienced developers to create modern Android and iOS apps using Flutter or React Native.",
            skills: ["Flutter", "React Native", "Firebase"],
            applyLink: "#app-dev-apply",
        },
        {
            icon: <Palette className="w-8 h-8 text-indigo-600" />,
            title: "UI/UX Design Intern",
            type: "Internship",
            duration: "2–3 Months",
            location: "Remote / Hybrid",
            description: "Collaborate with our design team to create intuitive, user-friendly interfaces and design systems.",
            skills: ["Figma", "Adobe XD", "User Research"],
            applyLink: "#design-apply",
        },
        {
            icon: <Megaphone className="w-8 h-8 text-indigo-600" />,
            title: "Digital Marketing Intern",
            type: "Internship",
            duration: "3 Months",
            location: "Remote / On-site",
            description: "Assist in SEO, social media marketing, and content campaigns to boost our brand reach and engagement.",
            skills: ["SEO", "Social Media", "Content Writing"],
            applyLink: "#marketing-apply",
        },
        {
            icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
            title: "AI Research Assistant",
            type: "Job",
            duration: "Full-time",
            location: "Bahawalpur Campus",
            description: "Work on cutting-edge AI research projects involving machine learning, neural networks, and data analysis.",
            skills: ["Python", "TensorFlow", "Scikit-learn"],
            applyLink: "#ai-research-apply",
        },
    ];

    const JobCard = ({ job }) => (
        <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            {/* Icon Header */}
            <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition-colors duration-300">
                    {job.icon}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    {job.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {job.description}
                </p>

                {/* Job Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <Type className="w-4 h-4 mr-2 text-indigo-500" />
                        <span><strong className="text-gray-700">{job.type}</strong></span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                        <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                        <span>{job.location}</span>
                    </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {job.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors duration-200"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Apply Button */}
            <a
                href={job.applyLink}
                className="mt-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                Apply Now
            </a>
        </div>
    );

    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Career Opportunities</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Join our team and work on exciting projects that make a real impact.
                        Grow your skills with hands-on experience and mentorship.
                    </p>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {jobs.map((job, index) => (
                        <JobCard
                            key={`job-${index}-${job.title.replace(/\s+/g, '-').toLowerCase()}`}
                            job={job}
                        />
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">
                        Can't find what you're looking for?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
                    >
                        Contact Us
                        <Briefcase className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Jobs;