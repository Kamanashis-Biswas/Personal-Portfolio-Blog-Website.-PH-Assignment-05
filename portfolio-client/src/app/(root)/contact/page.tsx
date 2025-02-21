"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `https://ph-assignment-5-gamma.vercel.app/api/v1/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      toast("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-12 px-1 sm:px-2 ms:px-4 pt-24 transition-all">
      <div className="relative bg-blue-600 dark:bg-blue-900 text-white dark:text-gray-200 py-20 mb-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold uppercase">Contact Us</h2>
          <p className="mt-4 text-lg">
            We are here to assist you with any questions or feedback!
          </p>
        </div>
      </div>

      <div className="md:container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="p-8 dark:bg-gray-800 border-primary shadow-lg transition-all transform hover:scale-105 duration-300">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate__animated animate__fadeIn">
              Contact With Me
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#f9004d] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#f9004d] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <a
                    href="tel:+8801345678956"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#f9004d] transition-colors"
                  >
                    +8801345678956
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#f9004d] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@kamanashisbiwas.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#f9004d] transition-colors"
                  >
                    contact@kamanashisbiwas.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-gray-800 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Find me on
              </h3>
              <div className="flex space-x-4">
                {[
                  ["https://github.com", Github],
                  ["https://twitter.com", Twitter],
                  ["https://linkedin.com", Linkedin],
                ].map(([link, Icon], i) => (
                  <Link
                    key={i}
                    href={link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-400 hover:bg-[#f9004d] hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8 bg-white dark:bg-gray-900 border-primary shadow-lg transition-all transform hover:scale-105 duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:ring-[#f9004d] focus:border-[#f9004d] transition-all"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:ring-[#f9004d] focus:border-[#f9004d] transition-all"
              />

              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:ring-[#f9004d] focus:border-[#f9004d] transition-all"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 focus:ring-[#f9004d] focus:border-[#f9004d] transition-all"
              />
              <Button
                type="submit"
                className="w-full bg-[#f9004d] hover:bg-[#d0003f] text-white font-semibold py-3 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
