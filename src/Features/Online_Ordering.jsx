import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Smartphone,
  Globe,
  Coins,
  Database,
  CheckCircle2,
  ShoppingCart,
  Bell,
  Edit3,
  Users,
  Truck,
  Zap,
  BarChart3,
  Monitor,
  Tablet,
  Star
} from 'lucide-react';
import laptopMobile from "../assets/laptop-mobile.png";
import laptopbagplate from "../assets/laptop-bag-plate.png";

const Online_Ordering = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-brand-700/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-brand-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-[45%] space-y-6 md:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-600 text-[10px] md:text-xs font-bold tracking-widest uppercase"
              >
                <Globe className="w-4 h-4" />
                <span>Zero Commission Ordering</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight"
              >
                Accept Orders Directly, <br />
                <span className="text-brand-600">Without Commissions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Stop losing 30% of your revenue to third-party apps. Launch your own branded ordering website and keep 100% of your profits and customer data.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <a
                  href="https://restaurants.biosoftech.in/register"
                  className="bg-saas-accent hover:bg-saas-accent/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95"
                >
                  Start Accepting Orders
                </a>
                <button onClick={() => navigate("/contact")} className="px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black rounded-2xl backdrop-blur-md transition-all text-sm md:text-base">
                  Book a Demo
                </button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-[55%] relative flex items-center justify-center w-full max-w-2xl mx-auto mt-12 lg:mt-0"
            >
              <div className="relative z-10 w-full lg:scale-110 transition-transform duration-500">
                <img src={laptopbagplate} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-brand-600 uppercase tracking-[0.3em]">The Problem</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">Why Third-Party Apps <br />Are Hurting Your Business</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Coins, title: "High Commission Fees", desc: "Paying 25-30% on every order significantly eats into your profit margins and sustainability." },
              { icon: Database, title: "Loss of Customer Data", desc: "You never know who your customers are. The platforms keep the data, making remarketing impossible." },
              { icon: Smartphone, title: "Heavy Dependency", desc: "Being reliant on external apps means you're at the mercy of their algorithm changes and fee hikes." }
            ].map((item, i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto text-slate-400">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section (Centered text, no image) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-sm font-black text-brand-600 uppercase tracking-[0.3em]">The Solution</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Your Branded Ordering <br />Ecosystem</h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Take back control with a direct-to-consumer ordering system. Provide a seamless experience on your own domain, collect valuable customer insights, and manage everything from a single dashboard.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {[
                'Custom branded ordering website',
                'Total control over menu & pricing',
                'Direct ownership of customer profiles',
                'Seamless POS Synchronization'
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 font-bold text-slate-800 bg-white px-8 py-4 rounded-[2rem] border border-slate-200 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-brand-600 uppercase tracking-[0.3em]">Core Features</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">Powerful Tools for Growth</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Direct Ordering Website", desc: "A beautiful, mobile-optimized ordering site that reflects your brand identity." },
              { icon: Bell, title: "Real-Time Notifications", desc: "Get instant alerts on your POS, tablet, or mobile as soon as an order is placed." },
              { icon: Edit3, title: "Menu & Price Control", desc: "Update items, descriptions, and prices instantly across all your digital channels." },
              { icon: Users, title: "Customer Data Collection", desc: "Build your own database. Track preferences, visit frequency, and lifetime value." },
              { icon: Truck, title: "Order Tracking", desc: "Keep customers informed with real-time status updates from prep to delivery." },
              { icon: Zap, title: "Integration with POS system", desc: "Orders flow directly into your Restron Mitra POS—no manual entry needed." }
            ].map((feat, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/5 transition-all duration-500 group">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-500">
                  <feat.icon className="w-7 h-7 text-brand-700 group-hover:text-white transition-colors duration-500" />
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
            <h2 className="text-sm font-black text-brand-600 uppercase tracking-[0.3em]">How It Works</h2>
            <h3 className="text-3xl md:text-5xl font-black">From Click to Kitchen</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {[
              { step: "01", title: "Visit Ordering Link", desc: "Customer visits your branded link from social media or your site." },
              { step: "02", title: "Selects Items", desc: "Browse through a beautiful digital menu with categories and photos." },
              { step: "03", title: "Places Order", desc: "Secure checkout with multiple payment options and zero hidden fees." },
              { step: "04", title: "Receive Instantly", desc: "Restaurant gets an instant alert on the dashboard and kitchen printer." },
              { step: "05", title: "Order Processed", desc: "Order is packed and delivered. Profit stays 100% with you." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-600 font-black text-2xl">
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
      </section>

      {/* Multi-Platform Experience */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-sm font-black text-brand-600 uppercase tracking-[0.3em]">Multi-Platform Experience</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">One System, <br />Every Device</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Whether your customer is ordering from their phone or your manager is tracking sales on a laptop, everything is synchronized in real-time. Experience zero lag between order placement and kitchen fulfillment.
              </p>
              <div className="flex gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Smartphone className="w-8 h-8 text-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Customer</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Tablet className="w-8 h-8 text-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">POS/Tablet</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Monitor className="w-8 h-8 text-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Dashboard</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-inner">
                <img src={laptopMobile} alt="Multi-device ordering" className="w-full h-auto drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16">Why Direct Ordering Wins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Coins, label: "Increase Profits", desc: "Keep 100% of your order value. No commissions to third parties." },
              { icon: Zap, label: "Faster Handling", desc: "Automated workflow reduces prep delay by nearly 30%." },
              { icon: Users, label: "Customer Relationship", desc: "Build loyalty by knowing exactly who your regulars are." },
              { icon: BarChart3, label: "More Repeat Orders", desc: "Use direct marketing to bring customers back more often." }
            ].map((item, i) => (
              <div key={i} className="p-8 space-y-4">
                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center mx-auto text-white shadow-lg shadow-brand-600/20">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{item.label}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-brand-600 text-brand-600" />)}
          </div>
          <p className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
            "Restron Mitra gave us the freedom to serve our customers directly. Our profit margins have improved by 25% since we stopped paying commissions."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200" />
            <div className="text-left">
              <p className="font-bold text-slate-900">Vikram Singh</p>
              <p className="text-sm font-medium text-slate-500">Director, Foodies Hub</p>
            </div>
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs pt-8">Trusted by 500+ Restaurants Pan India</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-700/10 blur-[120px]" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Start Taking Direct <br />Orders Today</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Join the revolution of direct-to-consumer restaurant business.
              No commissions. No middlemen. Just pure growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a
                href="https://restaurants.biosoftech.in/register"
                className="bg-saas-accent hover:bg-saas-accent/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95"
              >
                Start Accepting Orders
              </a>
              <button onClick={() => navigate("/contact")} className="px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black rounded-2xl backdrop-blur-md transition-all text-sm md:text-base">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Online_Ordering;
