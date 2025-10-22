import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Briefcase, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";

export const jobsData = [{ id: 1, icon: '💻', title: "Senior Frontend Developer", company: "TechInnovate Inc.", type: "Full-time", duration: "Permanent", experience: "3-5 Years", location: "San Francisco, CA", salary: "$120,000 - $150,000", description: "We're looking for an experienced Frontend Developer to join our growing team. You'll be responsible for building responsive, high-performance web applications using modern technologies.", responsibilities: ["Develop and maintain responsive web applications", "Collaborate with design and backend teams", "Write clean, maintainable code and conduct code reviews", "Optimize applications for maximum speed and scalability", "Implement new features and fix bugs"], requirements: ["3+ years of experience in frontend development", "Proficiency in React.js, TypeScript, and modern CSS", "Experience with state management (Redux, Context API)", "Knowledge of testing frameworks (Jest, Cypress)", "Familiarity with CI/CD pipelines and agile methodologies"], skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"], applyLink: "#apply", postedDate: "2 days ago", applicants: 24, remote: true, featured: true, urgency: "high", category: "Engineering" }, { id: 2, icon: '📱', title: "Mobile App Developer", company: "AppCraft Studios", type: "Full-time", duration: "Permanent", experience: "2-4 Years", location: "Remote", salary: "$100,000 - $130,000", description: "Join our mobile team to create stunning cross-platform applications that reach millions of users worldwide.", responsibilities: ["Develop cross-platform mobile applications", "Collaborate with UX/UI designers", "Implement clean and efficient code", "Perform testing and debugging", "Publish applications to app stores"], requirements: ["2+ years of mobile development experience", "Proficiency in React Native or Flutter", "Experience with native iOS/Android development", "Knowledge of RESTful APIs and mobile architecture", "Understanding of mobile app design principles"], skills: ["React Native", "Flutter", "Firebase", "iOS", "Android"], applyLink: "#apply", postedDate: "1 week ago", applicants: 18, remote: true, featured: false, urgency: "medium", category: "Engineering" }, { id: 3, icon: '🎨', title: "UI/UX Designer", company: "DesignHub", type: "Contract", duration: "6 Months", experience: "2+ Years", location: "New York, NY", salary: "$45 - $65/hr", description: "Create beautiful and intuitive user experiences for our enterprise clients and internal products.", responsibilities: ["Design user interfaces and experiences", "Create wireframes, prototypes, and mockups", "Conduct user research and testing", "Collaborate with development teams", "Maintain design systems and style guides"], requirements: ["2+ years of UI/UX design experience", "Proficiency in Figma, Sketch, or Adobe XD", "Strong portfolio showcasing design work", "Understanding of user-centered design principles", "Experience with design systems"], skills: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Design Systems"], applyLink: "#apply", postedDate: "3 days ago", applicants: 32, remote: false, featured: true, urgency: "low", category: "Design" }, { id: 4, icon: '🚀', title: "Full Stack Developer", company: "StartupXYZ", type: "Internship", duration: "3 Months", experience: "0-1 Years", location: "Remote", salary: "$25 - $35/hr", description: "Perfect opportunity for aspiring developers to gain hands-on experience in a fast-paced startup environment.", responsibilities: ["Assist in frontend and backend development", "Learn and apply modern development practices", "Participate in code reviews and team meetings", "Build and test new features", "Document code and processes"], requirements: ["Basic knowledge of web development", "Familiarity with JavaScript and at least one framework", "Understanding of databases and APIs", "Strong learning attitude and teamwork skills", "Portfolio or GitHub profile showing projects"], skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"], applyLink: "#apply", postedDate: "5 days ago", applicants: 45, remote: true, featured: false, urgency: "high", category: "Engineering" }, { id: 5, icon: '⚙️', title: "DevOps Engineer", company: "CloudSystems", type: "Full-time", duration: "Permanent", experience: "4+ Years", location: "Austin, TX", salary: "$130,000 - $160,000", description: "Manage and optimize our cloud infrastructure and deployment pipelines for maximum reliability and efficiency.", responsibilities: ["Design and maintain cloud infrastructure", "Implement CI/CD pipelines", "Monitor system performance and reliability", "Automate deployment and scaling processes", "Ensure security best practices"], requirements: ["4+ years of DevOps experience", "Proficiency with AWS, Docker, and Kubernetes", "Experience with infrastructure as code (Terraform)", "Knowledge of monitoring tools and logging", "Strong scripting skills (Bash, Python)"], skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"], applyLink: "#apply", postedDate: "1 day ago", applicants: 12, remote: true, featured: true, urgency: "high", category: "Engineering" }, { id: 6, icon: '🔧', title: "Backend Developer", company: "DataSystems Pro", type: "Full-time", duration: "Permanent", experience: "3+ Years", location: "Chicago, IL", salary: "$110,000 - $140,000", description: "Build scalable backend systems and APIs that power our data-intensive applications.", responsibilities: ["Develop and maintain backend services", "Design and optimize databases", "Create RESTful and GraphQL APIs", "Implement authentication and authorization", "Performance tuning and optimization"], requirements: ["3+ years of backend development experience", "Proficiency in Node.js, Python, or Java", "Experience with SQL and NoSQL databases", "Knowledge of API design and security", "Understanding of microservices architecture"], skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"], applyLink: "#apply", postedDate: "4 days ago", applicants: 28, remote: false, featured: false, urgency: "medium", category: "Engineering" }];

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        type: "all",
        experience: "all",
        location: "all",
        category: "all",
    });
    const [showFilters, setShowFilters] = useState(false);

    const filteredJobs = useMemo(() => {
        return jobsData.filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.skills.some((skill) =>
                    skill.toLowerCase().includes(searchTerm.toLowerCase())
                );

            const matchesType = filters.type === "all" || job.type === filters.type;
            const matchesCategory =
                filters.category === "all" || job.category === filters.category;
            const matchesLocation =
                filters.location === "all" ||
                (filters.location === "remote" && job.remote) ||
                (filters.location === "onsite" && !job.remote);

            return matchesSearch && matchesType && matchesCategory && matchesLocation;
        });
    }, [searchTerm, filters]);

    const jobTypes = [...new Set(jobsData.map((job) => job.type))];
    const categories = [...new Set(jobsData.map((job) => job.category))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
            {/* Header with animation */}
            <motion.header
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative bg-gradient-to-r from-[#060145] via-[#0c047e] to-[#060145] text-white py-20 overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm mb-6"
                    >
                        <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        Discover Your Next <span className="text-[#F59C20]">Career Move</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                        Connect with top companies and find opportunities that match your
                        skills and ambitions
                    </p>
                </div>

                {/* Decorative background circles */}
                <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </motion.header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-12 -mt-8 relative">
                {/* Search and Filters Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 backdrop-blur-sm bg-white/95"
                >
                    <div className="mb-6">
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search jobs, companies, or skills..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border-2 border-[#1d158b] rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Filters Toggle */}
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-white bg-[#060145] rounded-xl hover:bg-blue-950 transition-colors duration-200 font-medium text-sm sm:text-base"
                        >
                            <Filter className="w-4 h-4" />
                            {showFilters ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>

                    {/* Animated Filters */}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: showFilters ? "auto" : 0,
                            opacity: showFilters ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Job Type
                                </label>
                                <select
                                    value={filters.type}
                                    onChange={(e) =>
                                        setFilters({ ...filters, type: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                >
                                    <option value="all">All Job Types</option>
                                    {jobTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Category
                                </label>
                                <select
                                    value={filters.category}
                                    onChange={(e) =>
                                        setFilters({ ...filters, category: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Location
                                </label>
                                <select
                                    value={filters.location}
                                    onChange={(e) =>
                                        setFilters({ ...filters, location: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                >
                                    <option value="all">All Locations</option>
                                    <option value="remote">Remote</option>
                                    <option value="onsite">On-site</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Results Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                        {filteredJobs.length} Job
                        {filteredJobs.length !== 1 ? "s" : ""} Found
                    </h2>
                    <span className="text-sm text-gray-500">Sorted by relevance</span>
                </div>

                {/* Jobs Grid with animation */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:gap-6 md:px-2 md:gap-6"
                >
                    {filteredJobs.map((job) => (
                        <motion.div
                            key={job.id}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className="block"
                        >
                            <Link
                                to={`/jobs/${job.id}`}
                                className="block transition-transform duration-300 hover:scale-[1.02]"
                            >
                                <JobCard job={job} />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredJobs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-10 sm:w-12 h-10 sm:h-12 text-blue-500" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            No jobs found
                        </h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-6 px-4 text-sm sm:text-base">
                            Try adjusting your search criteria or filters to find more
                            opportunities.
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setFilters({
                                    type: "all",
                                    experience: "all",
                                    location: "all",
                                    category: "all",
                                });
                            }}
                            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 font-medium text-sm sm:text-base"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}
            </main>
        </div>
    );
};

export default Jobs;
