import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";
import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", project: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", project: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <PageTransition>
      <div className="pt-40 px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <h1 className="text-7xl md:text-9xl font-display font-medium uppercase tracking-tighter mb-12">
              Hello.
            </h1>
            <p className="text-2xl opacity-60 mb-12">
              {status === "success" 
                ? "Inquiry received. We will contact you shortly." 
                : "Whether you have a fully formed vision or just the seed of an idea, we're here to help you form it."}
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-meta opacity-40 mb-2">New Projects</h3>
                <a href="mailto:hello@forme.agency" className="text-2xl hover:underline">hello@forme.agency</a>
              </div>
              <div>
                <h3 className="text-meta opacity-40 mb-2">Social</h3>
                <div className="flex gap-6">
                  <a href="#" className="text-lg hover:italic">Instagram</a>
                  <a href="#" className="text-lg hover:italic">LinkedIn</a>
                  <a href="#" className="text-lg hover:italic">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="group border-b border-noir-white/20 focus-within:border-noir-white transition-colors duration-500">
                <span className="text-meta block mb-4">My Name is</span>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Type here..."
                  required
                  className="w-full bg-transparent text-4xl md:text-6xl font-display uppercase tracking-tight focus:outline-none placeholder:opacity-10 py-4"
                />
              </div>

              <div className="group border-b border-noir-white/20 focus-within:border-noir-white transition-colors duration-500">
                <span className="text-meta block mb-4">My Email is</span>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="email@example.com"
                  required
                  className="w-full bg-transparent text-4xl md:text-6xl font-display uppercase tracking-tight focus:outline-none placeholder:opacity-10 py-4"
                />
              </div>

              <div className="group border-b border-noir-white/20 focus-within:border-noir-white transition-colors duration-500">
                <span className="text-meta block mb-4">I'm looking for</span>
                <textarea 
                  value={formState.project}
                  onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                  placeholder="Tell us about your vision..."
                  rows={2}
                  required
                  className="w-full bg-transparent text-4xl md:text-6xl font-display uppercase tracking-tight focus:outline-none placeholder:opacity-10 py-4 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "sending"}
                className={`px-12 py-6 border border-noir-white text-meta hover:bg-noir-white hover:text-noir-black transition-all duration-500 uppercase font-bold tracking-[0.3em] w-full md:w-auto ${
                  status === "sending" ? "opacity-30 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
