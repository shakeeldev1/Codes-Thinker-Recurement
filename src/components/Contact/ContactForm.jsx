import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError("");

    emailjs
      .send(
        "service_bygzb4h", // 🔹 replace with your EmailJS Service ID
       "template_6fxamir" , // 🔹 replace with your Template ID
       {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Fd3ILeTUAspSe9E-A" // 🔹 replace with your Public Key
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          setFormData({ name: "", email: "", subject: "", message: "" });

          // Hide success message after 4 seconds
          setTimeout(() => setIsSent(false), 4000);
        },
        (err) => {
          setIsSending(false);
          setError("Failed to send message. Please try again later.");
          console.error("EmailJS error:", err);
        }
      );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 space-y-6"
    >
      <h2 className="text-2xl font-bold text-white text-center mb-4">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-200 mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-200 mb-2">Subject *</label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
          placeholder="Your Subject"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-200 mb-2">Message *</label>
        <textarea
          name="message"
          rows="6"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none resize-none"
          placeholder="Write your message here..."
        ></textarea>
      </div>

      {error && <p className="text-red-400 text-center">{error}</p>}
      {isSent && (
        <p className="text-green-400 text-center">
          ✅ Message sent successfully!
        </p>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSending}
        className="w-full bg-gradient-to-r from-[#298ade] to-cyan-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-70"
      >
        <Send className="w-5 h-5" />
        <span>
          {isSending
            ? "Sending..."
            : isSent
            ? "Message Sent ✅"
            : "Send Message"}
        </span>
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
