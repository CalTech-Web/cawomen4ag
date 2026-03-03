"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const mailtoBody = `Name: ${form.name}%0APhone: ${form.phone}%0A%0A${form.message}`;
    const mailtoLink = `mailto:statecwa@gmail.com?subject=${encodeURIComponent(form.subject || "Website Contact")}&body=${mailtoBody}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus("sent");
    }, 600);
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple/30 focus:border-cwa-purple text-[15px] font-sans transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 font-sans">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 font-sans">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5 font-sans">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(916) 555-0100"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5 font-sans">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a topic</option>
            <option value="Membership Inquiry">Membership Inquiry</option>
            <option value="Chapter Information">Chapter Information</option>
            <option value="Event Information">Event Information</option>
            <option value="Scholarship Information">Scholarship Information</option>
            <option value="Sponsorship Opportunity">Sponsorship Opportunity</option>
            <option value="Media Inquiry">Media Inquiry</option>
            <option value="General Question">General Question</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 font-sans">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="w-full bg-cwa-gold hover:bg-cwa-gold/90 disabled:opacity-60 text-cwa-dark font-sans font-semibold text-base px-6 py-4 rounded-full transition-all duration-200"
      >
        {status === "sending"
          ? "Opening Mail Client..."
          : status === "sent"
          ? "Message Ready to Send!"
          : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="text-cwa-green text-sm text-center font-semibold font-sans">
          Your email client has been opened. Please send the email to complete your message.
        </p>
      )}
    </form>
  );
}
