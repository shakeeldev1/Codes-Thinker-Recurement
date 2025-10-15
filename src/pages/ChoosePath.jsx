import React from "react";
import { GraduationCap, Handshake } from "lucide-react";

const ChoosePath = () => {
  const paths = [
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: "Student Admission",
      description:
        "Apply online for courses, programs, and scholarships. Complete your registration quickly and receive instant confirmation for a seamless experience.",
      features: [
        "Fast online registration",
        "Upload documents easily",
        "Get instant confirmation",
      ],
      buttonText: "Apply Now",
      link: "/students-admission-form",
    },
    {
      icon: <Handshake className="w-12 h-12 text-white" />,
      title: "Jobs & Internships",
      description:
        "Explore all current job openings and exciting internship opportunities. Submit your CV and cover letter easily, and track your application status seamlessly.",
      features: [
        "View available roles",
        "Upload CV & cover letter",
        "Track your application status",
      ],
      buttonText: "Apply Now",
      link: "/jobs",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Choose <span className="text-[#0f00aa]">Your</span> Path
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group min-h-[300px] flex flex-col justify-between"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="p-5 rounded-full bg-gradient-to-r from-[#665be4] to-[#070052] bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500">
                  <div className="text-white group-hover:text-[#070052] transition-colors duration-500">
                    {path.icon}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {path.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {path.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="mr-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a84d2] to-[#070052]">
                      ✔
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Gradient Button */}
              <div className="text-center mt-auto">
                <a
                  href={path.link}
                  className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#544abe] to-[#070052] hover:from-[#070052] hover:to-[#1a84d2] transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  {path.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosePath;
