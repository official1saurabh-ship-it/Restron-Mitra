import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Zap,
  ShieldAlert,
  Clock,
  CheckCircle2,
  Smartphone,
  Printer,
  Laptop,
  Split,
  WifiOff,
  CreditCard,
  BarChart3,
  ChevronRight,
  Monitor
} from 'lucide-react';
import laptopMobile from "../assets/laptop-mobile.png";
import dashboard from "../assets/dashboard.png";

const Pos_Billing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-orange-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-widest">Back to Home</span>
          </button>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] md:text-xs font-bold tracking-widest uppercase"
              >
                <Zap className="w-4 h-4 fill-orange-500" />
                <span>Lightning Fast Checkout</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight"
              >
                Fast & Error-Free <br />
                <span className="text-orange-500">POS Billing</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                The ultimate restaurant checkout experience. Speed through orders, manage complex bills, and print receipts in milliseconds—even when offline.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <button className="px-6 md:px-8 py-3 md:py-4 bg-orange-500 hover:bg-orange-400 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 text-sm md:text-base">
                  Get Started Free
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black rounded-2xl backdrop-blur-md transition-all text-sm md:text-base">
                  Book a Demo
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative w-full max-w-2xl mx-auto"
            >
              <div className="relative z-10 p-2 md:p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 backdrop-blur-sm shadow-2xl">
                <img
                  src={laptopMobile}
                  alt="POS Mockup"
                  className="rounded-xl md:rounded-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em]">The Challenge</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">Stop Losing Revenue to <br />Legacy Billing Systems</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Clock, title: "Long Checkout Queues", desc: "Slow billing during peak hours leads to frustrated customers and lost table turns." },
              { icon: ShieldAlert, title: "Manual Calculation Errors", desc: "Handwritten KOTs and manual bill splitting cause costly pricing leaks and disputes." },
              { icon: WifiOff, title: "Internet Dependency", desc: "Most cloud systems stop working when the Wi-Fi drops, halting your entire business." }
            ].map((item, i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto text-slate-400 group-hover:text-orange-500 transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em]">The Solution</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">One Smart Interface for <br />Every Transaction</h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              We've combined speed with intelligence. Our POS handles everything from one-tap billing to complex ingredient-level stock depletion, ensuring your staff spends less time at the counter and more time with guests.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {['Single-tap "Quick Bill" mode', 'Automated tax & discount engine', 'Real-time kitchen synchronization'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-slate-800 bg-white px-8 py-4 rounded-[2rem] border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em]">Core Features</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">Built for Modern Hospitality</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[

              { icon: Split, title: "Advanced Bill Splitting", desc: "Split by item, by percentage, or by seat with a single drag-and-drop gesture." },
              { icon: CreditCard, title: "Integrated Payments", desc: "Support for UPI, cards, wallets, and cash with instant reconciliation." },
              { icon: Printer, title: "Multi-Printer Support", desc: "Route orders to kitchen, bar, and billing printers simultaneously." },
              { icon: BarChart3, title: "Live Sales Tracking", desc: "Watch your revenue grow in real-time from your mobile or dashboard." },
              { icon: ShieldAlert, title: "Theft Prevention", desc: "Void track, audit logs, and role-based permissions to secure your cash drawer." }
            ].map((feat, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 group">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500">
                  <feat.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{feat.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em]">The Workflow</h2>
            <h3 className="text-3xl md:text-5xl font-black">5 Steps to Faster Service</h3>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {[
                { step: "01", title: "Select Table", desc: "Tap on the digital floor map to open a new bill." },
                { step: "02", title: "Add Items", desc: "Punch in items with rapid-search or custom modifiers." },
                { step: "03", title: "Instant KOT", desc: "Kitchen instantly gets the ticket on display or printer." },
                { step: "04", title: "Process Pay", desc: "Choose payment mode and apply discounts automatically." },
                { step: "05", title: "Digital Receipt", desc: "Print or send receipt via WhatsApp/Email instantly." }
              ].map((item, i) => (
                <div key={i} className="space-y-6 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-orange-500 font-black text-2xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Device Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em]">Device Agnostic</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Run Your Entire <br />Business on Any Hardware</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Whether you prefer a traditional POS terminal, a sleek laptop, or an Android mobile device, Restaurant Mitra adapts perfectly. Our system works seamlessly with all thermal printers and barcode scanners.
              </p>
              <div className="flex gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Monitor className="w-8 h-8 text-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Desktop</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Smartphone className="w-8 h-8 text-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Android</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Printer className="w-8 h-8 text-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Thermal</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-inner">
                <img src={laptopMobile} alt="Multi-device support" className="w-full h-auto drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16">The Restaurant Mitra Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, val: "40%", label: "Faster Checkout Speed", desc: "Proprietary quick-search engine reduces bill time by nearly half." },
              { icon: ShieldAlert, val: "0.0%", label: "Calculation Errors", desc: "Automated tax engines ensure 100% accurate invoices every time." },
              { icon: CheckCircle2, val: "25%", label: "Increase in Table Turns", desc: "Faster billing means faster customer rotation and higher daily revenue." }
            ].map((item, i) => (
              <div key={i} className="p-8 space-y-4">
                <div className="text-4xl font-black text-orange-600">{item.val}</div>
                <h4 className="text-xl font-bold text-slate-900">{item.label}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/10 blur-[120px]" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Ready to Upgrade Your <br />Billing Experience?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Join 500+ restaurants that have switched to a smarter POS.
              No credit card required. Setup in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <button className="px-10 py-5 bg-orange-500 hover:bg-orange-400 text-white font-black rounded-2xl shadow-2xl shadow-orange-500/30 transition-all hover:scale-105">
                Start My Free Trial
              </button>
              <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl backdrop-blur-md border border-white/10 transition-all">
                Speak to Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pos_Billing;
