import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RoleBasedPermission = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-brand-700/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-brand-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Secure Access with <br />
              <span className="text-brand-600">Role-Based Permissions</span>
            </h1>

            <p className="text-slate-400 text-lg">
              Control who can access what — from billing to reports — and keep your restaurant operations secure and organized.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://restaurants.biosoftech.in/register"
                className="bg-saas-accent hover:bg-saas-accent/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95"
              >
                Get Started
              </a>
              <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl backdrop-blur-md transition-all">
                Book Demo
              </button>
            </div>

            <div className="flex gap-8 pt-6 text-sm text-slate-400">
              <div>
                <p className="text-xl font-bold text-white">100%</p>
                <p>Secure Access</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Role-Based</p>
                <p>Control System</p>
              </div>
            </div>
          </div>

          {/* VISUAL */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-auto">
            <h3 className="font-bold mb-4">User Roles</h3>

            {[
              { role: "Admin", access: "Full Access" },
              { role: "Manager", access: "Orders + Reports" },
              { role: "Staff", access: "Orders Only" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between p-3 bg-slate-50 rounded-lg mb-3"
              >
                <span>{item.role}</span>
                <span className="text-brand-600 text-sm">{item.access}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">
            Without Access Control, Everything Gets Messy
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Anyone can access sensitive data",
              "No control over staff actions",
              "Data misuse risk",
              "Operational confusion",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
              >
                ⚠️ {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Powerful Permission Controls</h2>
            <p className="text-slate-500 mt-4">
              Manage access smartly and keep your operations secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Roles",
                desc: "Create roles based on your business needs.",
              },
              {
                title: "Access Control",
                desc: "Control who can access which features.",
              },
              {
                title: "Secure Data",
                desc: "Protect sensitive information from misuse.",
              },
              {
                title: "Staff Management",
                desc: "Assign permissions easily to employees.",
              },
              {
                title: "Activity Control",
                desc: "Restrict actions like editing or deleting data.",
              },
              {
                title: "Flexible Permissions",
                desc: "Modify access anytime as needed.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition"
              >
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 bg-slate-50 text-center">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
          {[
            "Create Roles",
            "Assign Permissions",
            "Users Login",
            "Access Controlled",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold">Why It Matters</h2>

        <div className="flex justify-center gap-12 mt-12">
          <div>
            <h3 className="text-3xl font-bold text-brand-600">100%</h3>
            <p className="text-sm text-slate-500">Data Security</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-brand-600">50%</h3>
            <p className="text-sm text-slate-500">Less Errors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-brand-600">3x</h3>
            <p className="text-sm text-slate-500">Better Control</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Control Your Restaurant with Confidence
        </h2>
        <button onClick={() => navigate("/contact")} className="mt-6 px-6 py-3 bg-white text-brand-600 rounded-xl">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default RoleBasedPermission;