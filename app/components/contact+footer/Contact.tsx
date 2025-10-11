"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  toast.loading("Sending message...");
  
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.dismiss();
      toast.success("Message sent successfully!");
      setFormData({ userName: "", userEmail: "", userMessage: "" });
    } else {
      toast.dismiss();
      toast.error("Failed to send message. Try again.");
    }
  } catch (error) {
    toast.dismiss();
    toast.error("Network error. Try again later.");
  }
};


  return (
    <section className="w-full mx-auto">
        <h2 className="font-ekamai pt-24 text-[45px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#C1E899]">
            CONTACT ME
        </h2>

      {/* ✅ Side-by-side layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="userName" className="text-white">Name</label>
            <input
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="userEmail" className="text-white">Email</label>
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              value={formData.userEmail}
              onChange={handleChange}
              className=" font-bold w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="userMessage" className="text-white">Message</label>
            <textarea
              id="userMessage"
              name="userMessage"
              rows={4}
              value={formData.userMessage}
              onChange={handleChange}
              className="font-bold w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#C1E899] hover:bg-[#71A95A] text-[#1B1B1B] rounded py-2 px-4 font-bold transition-all duration-200"
          >
            Send
          </button>
        </form>

        {/* Contact Info (side section) */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <div>
            <h3 className="font-bold text-2xl text-[#C1E899] mb-2">Let's Connect</h3>
            <p className="font-bold text-gray-300">Feel free to reach out for collaborations or just a friendly chat!</p>
          </div>

          <div>
            <p><strong>Email:</strong> <a href="mailto:constantinolilianam@gmail.com" className="text-[#C1E899] hover:underline">constantinolilianam@gmail.com</a></p>
            <p><strong>Location:</strong> California, USA</p>
            <Link target="_blank" href="https://www.linkedin.com/in/liliana-constantino/">
              <Icon icon="hugeicons:linkedin-01" />
            </Link>
            <Link target="_blank" href="https://github.com/lilianaconstantino">
              <Icon icon="hugeicons:github" />
            </Link>    
          </div>
        </div>
      </div>
    </section>
  );
}
