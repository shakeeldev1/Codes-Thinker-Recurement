import React from "react";
import { GraduationCap, Handshake } from "lucide-react";

const ChoosePath = () => {
    const paths = [
        {
            icon: <GraduationCap className="w-10 h-10 text-indigo-600" />,
            title: "Student Admission",
            description:
                "Apply online for courses, programs, and scholarships. Complete your registration quickly and receive instant confirmation for a seamless experience.",
            features: [
                "Fast online registration",
                "Upload documents easily",
                "Get instant confirmation",
            ],
            buttonText: "Apply Now",
            link: "#",
        },
        {
            icon: <Handshake className="w-10 h-10 text-indigo-600" />,
            title: "Jobs & Internships",
            description:
                "Explore all current job openings and exciting internship opportunities. Submit your CV and cover letter easily, and track your application status seamlessly.",
            features: [
                "View available roles",
                "Upload CV & cover letter",
                "Track your application status",
            ],
            buttonText: "Apply Now",
            link: "#",
        },
    ];

    return (
        <section className="bg-gray-50 py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
                    Choose <span className="text-indigo-600">Your</span> Path
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {paths.map((path, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-left hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-4 bg-gray-100 rounded-full">{path.icon}</div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">
                                {path.title}
                            </h3>
                            <p className="text-gray-600 mb-6 text-center">
                                {path.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {path.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <span className="text-indigo-600 mr-2">✔</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="text-center">
                                <a
                                    href={path.link}
                                    className="bg-indigo-700 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-800 transition-all"
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
