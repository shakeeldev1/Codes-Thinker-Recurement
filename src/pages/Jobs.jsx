import React from "react";
import {
    Briefcase,
    Code,
    Smartphone,
    Palette,
    Megaphone,
    MapPin,
    Clock,
    Type,
} from "lucide-react";

const Jobs = () => {
    const primary = "#0B055A"; // deep blue
    const secondary = "#5A51D3"; // vibrant purple

    const jobs = [
        {
            icon: <Code className="w-8 h-8" style={{ color: secondary }} />,
            title: "Web Development Intern",
            type: "Internship",
            duration: "3 Months",
            location: "Remote / On-site",
            description:
                "Join our web team to build responsive, dynamic websites using React, Tailwind CSS, and modern APIs.",
            skills: ["React.js", "HTML", "CSS", "JavaScript"],
            applyLink: "#web-dev-apply",
        },
        {
            icon: <Smartphone className="w-8 h-8" style={{ color: secondary }} />,
            title: "App Development Intern",
            type: "Internship",
            duration: "3 Months",
            location: "Remote",
            description:
                "Work with experienced developers to create modern Android and iOS apps using Flutter or React Native.",
            skills: ["Flutter", "React Native", "Firebase"],
            applyLink: "#app-dev-apply",
        },
        {
            icon: <Palette className="w-8 h-8" style={{ color: secondary }} />,
            title: "UI/UX Design Intern",
            type: "Internship",
            duration: "2–3 Months",
            location: "Remote / Hybrid",
            description:
                "Collaborate with our design team to create intuitive, user-friendly interfaces and design systems.",
            skills: ["Figma", "Adobe XD", "User Research"],
            applyLink: "#design-apply",
        },
        {
            icon: <Megaphone className="w-8 h-8" style={{ color: secondary }} />,
            title: "Digital Marketing Intern",
            type: "Internship",
            duration: "3 Months",
            location: "Remote / On-site",
            description:
                "Assist in SEO, social media marketing, and content campaigns to boost our brand reach and engagement.",
            skills: ["SEO", "Social Media", "Content Writing"],
            applyLink: "#marketing-apply",
        },
        {
            icon: <Briefcase className="w-8 h-8" style={{ color: secondary }} />,
            title: "AI Research Assistant",
            type: "Job",
            duration: "Full-time",
            location: "Bahawalpur Campus",
            description:
                "Work on cutting-edge AI research projects involving machine learning, neural networks, and data analysis.",
            skills: ["Python", "TensorFlow", "Scikit-learn"],
            applyLink: "#ai-research-apply",
        },
    ];

    const JobCard = ({ job }) => (
        <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            {/* Icon Header */}
            <div className="flex items-center justify-center mb-6">
                <div
                    className="p-3 rounded-xl transition-colors duration-300"
                    style={{ backgroundColor: "#F4F3FF" }}
                >
                    {job.icon}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    {job.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {job.description}
                </p>

                {/* Job Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <Type className="w-4 h-4 mr-2" style={{ color: secondary }} />
                        <span>
                            <strong className="text-gray-700">{job.type}</strong>
                        </span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" style={{ color: secondary }} />
                        <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" style={{ color: secondary }} />
                        <span>{job.location}</span>
                    </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {job.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 text-sm font-medium rounded-full border transition-colors duration-200"
                            style={{
                                backgroundColor: "#F9F9FF",
                                color: primary,
                                borderColor: "#E5E4FA",
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Apply Button */}
            <a
                href={job.applyLink}
                className="mt-auto text-white px-6 py-3 rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                    background: `linear-gradient(90deg, ${primary}, ${secondary})`,
                }}
            >
                Apply Now
            </a>
        </div>
    );

    return (
        <section
            className="py-20 px-4 min-h-screen"
            style={{
                background: "linear-gradient(135deg, #F6F6FF 0%, #EEEFFF 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-5xl font-bold mb-4"
                        style={{
                            color: primary,
                        }}
                    >
                        Explore{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: `linear-gradient(90deg, ${primary}, ${secondary})`,
                            }}
                        >
                            Career Opportunities
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Join our team and work on exciting projects that make a real
                        impact. Grow your skills with hands-on experience and mentorship.
                    </p>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {jobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">
                        Can't find what you're looking for?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-3 font-semibold rounded-xl transition-all duration-300"
                        style={{
                            border: `2px solid ${secondary}`,
                            color: secondary,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(90deg, ${primary}, ${secondary})`;
                            e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = secondary;
                        }}
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
