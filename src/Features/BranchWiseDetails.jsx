import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BranchWiseDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-brand-700/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-brand-600/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Manage All Your <br className="hidden sm:block" />
                <span className="text-brand-600">Branches in One Place</span>
              </h1>

              <p className="text-slate-400 text-lg max-w-xl">
                Track sales, monitor performance, and control operations across all your restaurant branches — all from a single dashboard.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://restaurants.biosoftech.in/register"
                  className="bg-saas-accent hover:bg-saas-accent/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95"
                >
                  Get Started
                </a>

                <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl backdrop-blur-md transition-all w-full sm:w-auto">
                  Book Demo
                </button>
              </div>

              {/* TRUST / STATS */}
              <div className="flex flex-wrap gap-6 md:gap-8 pt-6 text-sm text-slate-400">
                <div>
                  <p className="text-xl font-bold text-white">50+</p>
                  <p>Branches Managed</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-white">100%</p>
                  <p>Real-Time Sync</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-white">30%</p>
                  <p>Better Control</p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE - VISUAL */}
            <div className="relative flex justify-center mt-12 lg:mt-0">

              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">

                <div className="flex justify-between mb-4">
                  <span className="font-bold text-slate-800">Branch Overview</span>
                  <span className="text-sm text-slate-400">Live</span>
                </div>

                {/* Branch Cards */}
                <div className="space-y-4">
                  {[
                    { name: "Lucknow", sales: "₹25,000" },
                    { name: "Delhi", sales: "₹40,000" },
                    { name: "Mumbai", sales: "₹35,000" },
                  ].map((b, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-brand-50 transition"
                    >
                      <span className="font-medium text-sm sm:text-base">{b.name}</span>
                      <span className="font-bold text-brand-600 text-sm sm:text-base">{b.sales}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Floating Glow */}
              <div className="absolute -z-10 w-72 h-72 bg-brand-200 blur-3xl opacity-30 rounded-full top-10 right-10"></div>

            </div>

          </div>
        </section>




        <section className="py-16 md:py-28 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                Managing Multiple Branches is <span className="text-brand-600">Hard</span>
              </h2>
              <p className="text-slate-500 mt-4">
                Without centralized control, it becomes difficult to track performance and maintain consistency.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

              {[
                {
                  title: "No Central Control",
                  desc: "Each branch operates separately without visibility."
                },
                {
                  title: "Performance Confusion",
                  desc: "Difficult to compare branch performance."
                },
                {
                  title: "Data Fragmentation",
                  desc: "Reports are scattered across locations."
                },
                {
                  title: "Operational Gaps",
                  desc: "Hard to maintain standard operations everywhere."
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-6 bg-white rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 flex items-center justify-center rounded-lg mb-4">
                    ⚠️
                  </div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-brand-600">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                How It <span className="text-brand-600">Works</span>
              </h2>
              <p className="text-slate-500 mt-4">
                Manage all your branches from a single dashboard effortlessly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

              {[
                {
                  step: "01",
                  title: "Branches Connected",
                  desc: "All outlets are linked to one system."
                },
                {
                  step: "02",
                  title: "Data Collected",
                  desc: "Sales and operations data synced in real-time."
                },
                {
                  step: "03",
                  title: "Performance Compared",
                  desc: "Compare branch performance easily."
                },
                {
                  step: "04",
                  title: "Insights Generated",
                  desc: "Make better decisions using data."
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative p-8 bg-slate-50 rounded-2xl border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 mt-6 sm:mt-0"
                >

                  <div className="absolute -top-5 left-6 w-10 h-10 bg-brand-600 text-white flex items-center justify-center rounded-full font-bold">
                    {item.step}
                  </div>

                  <div className="w-12 h-12 bg-brand-100 text-brand-600 flex items-center justify-center rounded-xl mb-5 group-hover:bg-brand-600 group-hover:text-white transition">
                    🏢
                  </div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-brand-600">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm">{item.desc}</p>

                  <div className="mt-5 h-[2px] w-0 bg-brand-600 group-hover:w-full transition-all duration-500" />
                </div>
              ))}

            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

              <div className="flex justify-between mb-6">
                <span className="font-bold text-slate-800">Branch Overview</span>
                <span className="text-sm text-slate-500">Live Data</span>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

                {[
                  { name: "Lucknow", sales: "₹25,000" },
                  { name: "Delhi", sales: "₹40,000" },
                  { name: "Mumbai", sales: "₹35,000" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-6 bg-slate-50 rounded-xl hover:bg-brand-50 transition border border-transparent hover:border-brand-100"
                  >
                    <h4 className="font-semibold text-slate-900">{b.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mb-2">Sales</p>
                    <p className="text-xl sm:text-2xl font-bold text-brand-600">{b.sales}</p>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default BranchWiseDetails;
