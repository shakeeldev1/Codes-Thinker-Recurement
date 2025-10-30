import React, { useState } from "react";
import { motion } from "framer-motion";
import {  MapPin, Send, MessageCircle,MessageSquare, Users, Zap, Globe } from "lucide-react";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

 

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
          Get Your <span className="bg-gradient-to-r from-[#298ade] to-cyan-500 bg-clip-text text-transparent">Benefits Started</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-3 sm:mt-4 text-base sm:text-lg">
          Take one small step — and we'll handle the rest. No stress, no endless forms, no waiting on hold.
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
             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: Users,
                                        text: "Expert Team",
                                        progress: 95
                                    },
                                    {
                                        icon: Zap,
                                        text: "Fast Delivery",
                                        progress: 90
                                    },
                                    {
                                        icon: Globe,
                                        text: "Global Reach",
                                        progress: 85
                                    },
                                    {
                                        icon: MessageSquare,
                                        text: "24/7 Support",
                                        progress: 98
                                    },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/10 rounded-2xl p-4 border border-white/5"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-r from-[#298ade] to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                                            <feature.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-white font-semibold text-sm mb-2">{feature.text}</h3>
                                        <div className="w-full bg-white/20 rounded-full h-1.5 mb-1">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${feature.progress}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                className="bg-gradient-to-r from-[#298ade] to-cyan-500 h-1.5 rounded-full"
                                            ></motion.div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-cyan-300 text-xs font-bold">{feature.progress}%</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

            {/* Office Locations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Offices</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#298ade] to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Regional Office</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Bartle House, 9 Oxford Court<br />
                      Manchester M2 3WQ, UK
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#298ade] to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Global Delivery Center</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Hassan Manzil Basement<br />
                      Goheer Town, Bahawalpur, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#298ade] to-cyan-500 flex items-center justify-center mr-4 shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                <p className="text-gray-300 text-sm">We'll get back to you within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="+44 1234 567890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-[#0c0934ef]">Select a subject</option>
                    <option value="web-development" className="bg-[#0c0934ef]">Web Development</option>
                    <option value="mobile-app" className="bg-[#0c0934ef]">Mobile App</option>
                    <option value="consultation" className="bg-[#0c0934ef]">Consultation</option>
                    <option value="support" className="bg-[#0c0934ef]">Support</option>
                    <option value="other" className="bg-[#0c0934ef]">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#298ade] to-cyan-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;