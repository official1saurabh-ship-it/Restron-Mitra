import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BranchWiseDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute right-4 sm:right-6 top-4 sm:top-12 p-3 rounded-full bg-slate-50 hover:bg-purple-600 hover:text-white text-slate-600 transition-all duration-300 shadow-sm hover:shadow-lg group z-10"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>



        <section className="py-12 md:py-24 bg-gradient-to-br from-orange-50 via-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Manage All Your <br className="hidden sm:block" />
                <span className="text-orange-500">Branches in One Place</span>
              </h1>

              <p className="text-slate-500 text-lg max-w-xl">
                Track sales, monitor performance, and control operations across all your restaurant branches — all from a single dashboard.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:scale-105 transition w-full sm:w-auto">
                  Get Started
                </button>

                <button className="px-6 py-3 border border-slate-300 rounded-xl hover:border-orange-500 hover:text-orange-500 transition w-full sm:w-auto">
                  Book Demo
                </button>
              </div>

              {/* TRUST / STATS */}
              <div className="flex flex-wrap gap-6 md:gap-8 pt-6 text-sm text-slate-500">
                <div>
                  <p className="text-xl font-bold text-slate-900">50+</p>
                  <p>Branches Managed</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-slate-900">100%</p>
                  <p>Real-Time Sync</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-slate-900">30%</p>
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
                      className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-orange-50 transition"
                    >
                      <span className="font-medium text-sm sm:text-base">{b.name}</span>
                      <span className="font-bold text-orange-500 text-sm sm:text-base">{b.sales}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Floating Glow */}
              <div className="absolute -z-10 w-72 h-72 bg-orange-200 blur-3xl opacity-30 rounded-full top-10 right-10"></div>

            </div>

          </div>
        </section>




        <section className="py-16 md:py-28 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                Managing Multiple Branches is <span className="text-orange-500">Hard</span>
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
                  <div className="w-12 h-12 bg-orange-100 text-orange-500 flex items-center justify-center rounded-lg mb-4">
                    ⚠️
                  </div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-orange-500">
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
                How It <span className="text-orange-500">Works</span>
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

                  <div className="absolute -top-5 left-6 w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold">
                    {item.step}
                  </div>

                  <div className="w-12 h-12 bg-orange-100 text-orange-500 flex items-center justify-center rounded-xl mb-5 group-hover:bg-orange-500 group-hover:text-white transition">
                    🏢
                  </div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-orange-500">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm">{item.desc}</p>

                  <div className="mt-5 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-500" />
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
                    className="p-4 sm:p-6 bg-slate-50 rounded-xl hover:bg-orange-50 transition border border-transparent hover:border-orange-100"
                  >
                    <h4 className="font-semibold text-slate-900">{b.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mb-2">Sales</p>
                    <p className="text-xl sm:text-2xl font-bold text-orange-500">{b.sales}</p>
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
