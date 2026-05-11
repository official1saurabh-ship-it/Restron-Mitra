import React from "react";
import { useNavigate } from "react-router-dom";

const InventoryStock = () => {
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Smart <span className="text-brand-600">Inventory & Stock</span> Management
            </h1>
            <p className="mt-6 text-slate-400 text-lg">
              Track ingredients, avoid shortages, and manage your kitchen inventory in real time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://restaurants.biosoftech.in/register"
                className="bg-saas-accent hover:bg-saas-accent/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95"
              >
                Get Free Trial
              </a>
              <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl backdrop-blur-md transition-all w-full sm:w-auto">
                Book Demo
              </button>
            </div>
          </div>

          {/* SIMPLE INVENTORY PREVIEW */}
          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
            {[
              { name: "Rice", qty: "10kg", status: "ok" },
              { name: "Tomato", qty: "2kg", status: "low" },
              { name: "Oil", qty: "5L", status: "ok" },
              { name: "Paneer", qty: "1kg", status: "low" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm sm:text-base">
                <span>{item.name}</span>
                <span className="text-sm">{item.qty}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${item.status === "low"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                    }`}
                >
                  {item.status === "low" ? "Low Stock" : "In Stock"}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Running Out of Ingredients Should Never Be a Surprise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 max-w-6xl mx-auto">
            {[
              "Stock runs out unexpectedly",
              "Manual tracking errors",
              "Food wastage",
              "No visibility of inventory",
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl hover:bg-brand-50 transition-colors">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Powerful <span className="text-brand-600">Inventory Features</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto px-2">
              Everything you need to manage stock efficiently and avoid shortages.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {[
              {
                title: "Real-Time Tracking",
                desc: "Monitor your stock levels instantly across all items."
              },
              {
                title: "Low Stock Alerts",
                desc: "Get notified before ingredients run out."
              },
              {
                title: "Auto Updates",
                desc: "Stock updates automatically with every order."
              },
              {
                title: "Supplier Management",
                desc: "Manage vendors and restocking with ease."
              },
              {
                title: "Usage Insights",
                desc: "Track which ingredients are used the most."
              },
              {
                title: "Waste Reduction",
                desc: "Reduce food wastage with smart tracking."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >

                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-50 text-brand-600 text-2xl mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                  ⚡
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>

                {/* Learn More */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-300 group-hover:text-brand-600 transition-colors">
                  <span>LEARN MORE</span>
                  <div className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-brand-600 transition-all duration-500" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-brand-600/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mt-12">
            {[
              "Order Placed",
              "Ingredients Used",
              "Stock Updated",
              "Alerts Generated",
            ].map((step, i) => (
              <div key={i} className="p-6 bg-white shadow-lg rounded-xl w-full max-w-[250px]">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-24 bg-slate-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Restaurants Love It</h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-12 mt-12">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-600">40%</h3>
              <p className="text-sm text-slate-500">Less Wastage</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-600">25%</h3>
              <p className="text-sm text-slate-500">Better Control</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-600">100%</h3>
              <p className="text-sm text-slate-500">Real-Time Tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Never Run Out of Ingredients Again</h2>
          <button onClick={() => navigate("/contact")} className="mt-8 px-8 py-4 bg-white text-brand-600 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
};

export default InventoryStock;