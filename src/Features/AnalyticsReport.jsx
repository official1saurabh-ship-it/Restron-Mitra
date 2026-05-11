import React from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';



const AnalyticsReports = () => {
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
              Smart <span className="text-brand-600">Analytics & Reports</span>
            </h1>
            <p className="mt-6 text-slate-400 text-lg">
              Get real-time insights into your sales, performance, and customer trends to grow your restaurant.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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
          </div>

          {/* SIMPLE ANALYTICS PREVIEW */}
          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
            <div className="flex justify-between text-sm sm:text-base">
              <span>Total Sales</span>
              <span className="font-bold text-green-600">₹45,200</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Orders Today</span>
              <span className="font-bold">128</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Top Item</span>
              <span className="font-bold text-right ml-4">Paneer Butter Masala</span>
            </div>

            <div className="h-24 bg-brand-100 rounded-xl flex items-end gap-2 p-2">
              {[40, 60, 80, 50, 90].map((h, i) => (
                <div
                  key={i}
                  className="bg-brand-600 w-full rounded"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Running a Restaurant <span className="text-brand-600">Without Data</span> is Risky
            </h2>
            <p className="text-slate-500 mt-4 px-2">
              Lack of insights leads to poor decisions, wasted resources, and missed growth opportunities.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              {
                title: "No Sales Insights",
                desc: "You don’t know what’s performing and what’s not."
              },
              {
                title: "Guess-Based Decisions",
                desc: "Business decisions are made without real data."
              },
              {
                title: "No Performance Tracking",
                desc: "Hard to measure staff and operational efficiency."
              },
              {
                title: "Missed Opportunities",
                desc: "Growth chances are lost due to lack of analytics."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-brand-600/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-50 text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition">
                  ⚠️
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-600 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom line animation */}
                <div className="mt-4 h-[2px] w-0 bg-brand-600 group-hover:w-full transition-all duration-500" />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Powerful <span className="text-brand-600">Analytics</span> Features
            </h2>
            <p className="text-slate-500 mt-4">
              Understand your business with real-time data insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Real-Time Reports",
                desc: "View sales and performance instantly."
              },
              {
                title: "Sales Tracking",
                desc: "Track daily, weekly, and monthly sales."
              },
              {
                title: "Top Selling Items",
                desc: "Know which dishes generate the most revenue."
              },
              {
                title: "Customer Insights",
                desc: "Understand customer behavior and preferences."
              },
              {
                title: "Profit Analysis",
                desc: "Track profits and reduce unnecessary costs."
              },
              {
                title: "Custom Reports",
                desc: "Generate reports tailored to your needs."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-brand-600 text-2xl mb-4">📊</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-brand-600">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              How It <span className="text-brand-600">Works</span>
            </h2>
            <p className="text-slate-500 mt-4">
              From order to insight — everything is automated and seamless.
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 relative">

            {[
              {

                title: "Orders Recorded",
                desc: "Every order is automatically captured in the system."
              },
              {

                title: "Data Processed",
                desc: "System organizes and analyzes all transactions."
              },
              {

                title: "Reports Generated",
                desc: "Detailed reports are created instantly."
              },
              {

                title: "Insights Delivered",
                desc: "Get actionable insights to grow your business."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Step Number */}

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-brand-100 text-brand-600 rounded-xl mb-5 group-hover:bg-brand-600 group-hover:text-white transition">
                  ⚡
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-600 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Line */}
                <div className="mt-5 h-[2px] w-0 bg-brand-600 group-hover:w-full transition-all duration-500" />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-24 bg-slate-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Grow Smarter with Data</h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-12 mt-12">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-600">35%</h3>
              <p className="text-sm text-slate-500">Better Decisions</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-600">50%</h3>
              <p className="text-sm text-slate-500">Faster Insights</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-600">100%</h3>
              <p className="text-sm text-slate-500">Real-Time Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Make Data-Driven Decisions Today
          </h2>
          <button onClick={() => navigate("/contact")} className="mt-8 px-8 py-4 bg-white text-brand-600 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
};

export default AnalyticsReports;