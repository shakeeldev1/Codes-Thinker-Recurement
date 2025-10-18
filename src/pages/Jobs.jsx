import React, { useState } from "react";
import { Search, Filter,Code,Smartphone,Palette,Megaphone, Building, Users, Calendar, Sparkles, Briefcase } from "lucide-react";
import ApplicationForm from "../components/Jobs/ApplicationForm";
import JobDetail from "../components/Jobs/JObDetail";
import JobCard from "../components/Jobs/JObCard";


const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "all",
    experience: "all",
    location: "all"
  });

 const jobs = [
    {
      id: 1,
      icon: <Code className="w-6 h-6" />,
      title: "Senior Frontend Developer",
      company: "TechInnovate Inc.",
      type: "Full-time",
      duration: "Permanent",
      experience: "3-5 Years",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      description: "We're looking for an experienced Frontend Developer to join our growing team. You'll be responsible for building responsive, high-performance web applications using modern technologies.",
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with design and backend teams",
        "Write clean, maintainable code and conduct code reviews",
        "Optimize applications for maximum speed and scalability",
        "Implement new features and fix bugs"
      ],
      requirements: [
        "3+ years of experience in frontend development",
        "Proficiency in React.js, TypeScript, and modern CSS",
        "Experience with state management (Redux, Context API)",
        "Knowledge of testing frameworks (Jest, Cypress)",
        "Familiarity with CI/CD pipelines and agile methodologies"
      ],
      skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
      applyLink: "#apply",
      postedDate: "2 days ago",
      applicants: 24,
      remote: true,
      featured: true,
      urgency: "high"
    },
    {
      id: 2,
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Developer",
      company: "AppCraft Studios",
      type: "Full-time",
      duration: "Permanent",
      experience: "2-4 Years",
      location: "Remote",
      salary: "$100,000 - $130,000",
      description: "Join our mobile team to create stunning cross-platform applications that reach millions of users worldwide.",
      responsibilities: [
        "Develop cross-platform mobile applications",
        "Collaborate with UX/UI designers",
        "Implement clean and efficient code",
        "Perform testing and debugging",
        "Publish applications to app stores"
      ],
      requirements: [
        "2+ years of mobile development experience",
        "Proficiency in React Native or Flutter",
        "Experience with native iOS/Android development",
        "Knowledge of RESTful APIs and mobile architecture",
        "Understanding of mobile app design principles"
      ],
      skills: ["React Native", "Flutter", "Firebase", "iOS", "Android"],
      applyLink: "#apply",
      postedDate: "1 week ago",
      applicants: 18,
      remote: true,
      featured: false,
      urgency: "medium"
    },
    {
      id: 3,
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Designer",
      company: "DesignHub",
      type: "Contract",
      duration: "6 Months",
      experience: "2+ Years",
      location: "New York, NY",
      salary: "$45 - $65/hr",
      description: "Create beautiful and intuitive user experiences for our enterprise clients and internal products.",
      responsibilities: [
        "Design user interfaces and experiences",
        "Create wireframes, prototypes, and mockups",
        "Conduct user research and testing",
        "Collaborate with development teams",
        "Maintain design systems and style guides"
      ],
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio showcasing design work",
        "Understanding of user-centered design principles",
        "Experience with design systems"
      ],
      skills: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Design Systems"],
      applyLink: "#apply",
      postedDate: "3 days ago",
      applicants: 32,
      remote: false,
      featured: true,
      urgency: "low"
    },
    {
      id: 4,
      icon: <Briefcase className="w-6 h-6" />,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      type: "Internship",
      duration: "3 Months",
      experience: "0-1 Years",
      location: "Remote",
      salary: "$25 - $35/hr",
      description: "Perfect opportunity for aspiring developers to gain hands-on experience in a fast-paced startup environment.",
      responsibilities: [
        "Assist in frontend and backend development",
        "Learn and apply modern development practices",
        "Participate in code reviews and team meetings",
        "Build and test new features",
        "Document code and processes"
      ],
      requirements: [
        "Basic knowledge of web development",
        "Familiarity with JavaScript and at least one framework",
        "Understanding of databases and APIs",
        "Strong learning attitude and teamwork skills",
        "Portfolio or GitHub profile showing projects"
      ],
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      applyLink: "#apply",
      postedDate: "5 days ago",
      applicants: 45,
      remote: true,
      featured: false,
      urgency: "high"
    },
    {
      id: 5,
      icon: <Megaphone className="w-6 h-6" />,
      title: "DevOps Engineer",
      company: "CloudSystems",
      type: "Full-time",
      duration: "Permanent",
      experience: "4+ Years",
      location: "Austin, TX",
      salary: "$130,000 - $160,000",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines for maximum reliability and efficiency.",
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement CI/CD pipelines",
        "Monitor system performance and reliability",
        "Automate deployment and scaling processes",
        "Ensure security best practices"
      ],
      requirements: [
        "4+ years of DevOps experience",
        "Proficiency with AWS, Docker, and Kubernetes",
        "Experience with infrastructure as code (Terraform)",
        "Knowledge of monitoring tools and logging",
        "Strong scripting skills (Bash, Python)"
      ],
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      applyLink: "#apply",
      postedDate: "1 day ago",
      applicants: 12,
      remote: true,
      featured: true,
      urgency: "high"
    },
    {
      id: 6,
      icon: <Code className="w-6 h-6" />,
      title: "Backend Developer",
      company: "DataSystems Pro",
      type: "Full-time",
      duration: "Permanent",
      experience: "3+ Years",
      location: "Chicago, IL",
      salary: "$110,000 - $140,000",
      description: "Build scalable backend systems and APIs that power our data-intensive applications.",
      responsibilities: [
        "Develop and maintain backend services",
        "Design and optimize databases",
        "Create RESTful and GraphQL APIs",
        "Implement authentication and authorization",
        "Performance tuning and optimization"
      ],
      requirements: [
        "3+ years of backend development experience",
        "Proficiency in Node.js, Python, or Java",
        "Experience with SQL and NoSQL databases",
        "Knowledge of API design and security",
        "Understanding of microservices architecture"
      ],
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      applyLink: "#apply",
      postedDate: "4 days ago",
      applicants: 28,
      remote: false,
      featured: false,
      urgency: "medium"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = filters.type === "all" || job.type === filters.type;
    const matchesExperience = filters.experience === "all" || job.experience === filters.experience;
    const matchesLocation = filters.location === "all" || 
                           (filters.location === "remote" && job.remote) ||
                           (filters.location === "onsite" && !job.remote);

    return matchesSearch && matchesType && matchesExperience && matchesLocation;
  });

  const handleApplicationSubmit = (formData) => {
    console.log('Application submitted:', formData);
    setShowApplicationForm(false);
    setSelectedJob(null);
    // Handle form submission here (API call, etc.)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <header className="relative bg-gradient-to-r from-[#0d0096] to-[#0e009e] text-white py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Discover Your Next Career Move</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Dream Job
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Explore exciting opportunities with top companies. Grow your career with roles that match your skills and ambitions.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 -mt-8 relative z-20">
        {showApplicationForm && (
          <ApplicationForm
            job={selectedJob}
            onCancel={() => setShowApplicationForm(false)}
            onSubmit={handleApplicationSubmit}
          />
        )}

        {selectedJob && !showApplicationForm ? (
          <JobDetail
            job={selectedJob}
            onBack={() => setSelectedJob(null)}
            onApply={() => setShowApplicationForm(true)}
          />
        ) : (
          <>
            {/* Enhanced Search and Filters */}
            <div className="mb-12 bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Search Bar */}
                <div className="lg:col-span-2 relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#0d0096] focus:border-[#0d0096] transition-all duration-200 hover:bg-white"
                  />
                </div>

                {/* Filters */}
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                  className="px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#0d0096] focus:border-[#0d0096] transition-all duration-200 hover:bg-white"
                >
                  <option value="all">All Job Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>

                <select
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#0d0096] focus:border-[#0d0096] transition-all duration-200 hover:bg-white"
                >
                  <option value="all">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">On-site</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Available
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span>Sorted by: Latest</span>
              </div>
            </div>

            {/* Enhanced Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredJobs.map(job => (
                <JobCard
                  key={job.id} 
                  job={job} 
                  onClick={setSelectedJob}
                />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-[#0d0096]/10 to-[#0e009e]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-12 h-12 text-[#0d0096]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No jobs found</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Try adjusting your search criteria or browse all available positions.
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Jobs; 
