"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        // REPLACE THESE VALUES WITH YOUR ACTUAL EMAILJS ID's
        const serviceID = "service_4bwmq6n";
        const templateID = "template_yno5ape";
        const publicKey = "lYwuaiPk6nZ5sFbkL";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setStatus("success");
                setFormData({ name: "", email: "", message: "" }); // Clear form
                setTimeout(() => setStatus(""), 5000); // Reset status after 5 sec
            })
            .catch((err) => {
                console.log("FAILED...", err);
                setStatus("error");
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-sm"
        >
            <form onSubmit={handleSubmit} className="space-y-6 text-left">

                {/* Name Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Message Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                        placeholder="I'd like to work with you..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${status === "sending"
                        ? "bg-gray-700 cursor-not-allowed text-gray-400"
                        : "bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white shadow-lg hover:shadow-teal-500/25"
                        }`}
                >
                    {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                    <p className="text-green-400 text-center text-sm mt-2">Message sent successfully!</p>
                )}
                {status === "error" && (
                    <p className="text-red-400 text-center text-sm mt-2">Something went wrong. Please try again.</p>
                )}
            </form>
        </motion.div>
    );
}