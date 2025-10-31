import React from "react";
import { motion } from "framer-motion";
import { MapPin, MessageSquare, Users, Zap, Globe } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0c0934ef] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl pt-8 font-bold text-white">
          Get Your{" "}
          <span className="bg-gradient-to-r from-[#298ade] to-cyan-500 bg-clip-text text-transparent">
            Benefits Started
          </span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-3 sm:mt-4 text-base sm:text-lg">
          Take one small step — and we'll handle the rest. No stress, no endless
          forms, no waiting on hold.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Features Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, text: "Expert Team", progress: 95 },
                  { icon: Zap, text: "Fast Delivery", progress: 90 },
                  { icon: Globe, text: "Global Reach", progress: 85 },
                  { icon: MessageSquare, text: "24/7 Support", progress: 98 },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 rounded-2xl p-4 border border-white/5"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-[#298ade] to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2">
                      {feature.text}
                    </h3>
                    <div className="w-full bg-white/20 rounded-full h-1.5 mb-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${feature.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-[#298ade] to-cyan-500 h-1.5 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="text-right">
                      <span className="text-cyan-300 text-xs font-bold">
                        {feature.progress}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Offices
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#298ade] to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Regional Office</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Bartle House, 9 Oxford Court
                      <br />
                      Manchester M2 3WQ, UK
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#298ade] to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Global Delivery Center
                    </h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Hassan Manzil Basement
                      <br />
                      Goheer Town, Bahawalpur, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (EmailJS Component) */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
