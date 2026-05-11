import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  LayoutGrid,
  Users,
  Clock,
  Zap,
  CheckCircle2,
  Calendar,
  Layers,
  BarChart3,
  Smartphone,
  Table as TableIcon,
  Timer,
  MousePointer2,
  Settings,
  Star,
  Activity,
  Maximize2,
  TrendingUp,
  Heart,
  Eye,
  ChevronRight,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import tablesImg from "../assets/tables.png";


const Table_Management = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[70%] bg-brand-700/15 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-brand-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-600 text-xs font-bold tracking-widest uppercase"
              >
                <TableIcon className="w-4 h-4" />
                <span>Premium Table Management</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
              >
                Smart Table <br />
                <span className="text-brand-600">Management</span> <br />
                for Modern Restaurants
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium"
              >
                Optimize your dining room with real-time tracking, intuitive floor plans, and intelligent seating logic designed for maximum efficiency.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-5"
              >
                <a
                  href="https://restaurants.biosoftech.in/register"
                  className="bg-saas-accent hover:bg-saas-accent/90 text-white px-6 py-4.5 rounded-xl font-bold text-sm shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95"
                >
                  Get Started for Free
                </a>
                <button onClick={() => navigate("/contact")} className="px-12 py-6 bg-white/10 hover:bg-white/20 text-white font-black rounded-[1.5rem] backdrop-blur-md border border-white/10 transition-all">
                  Request a Demo
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 p-2 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
                <img
                  src={tablesImg}
                  alt="Restron Mitra Dashboard"
                  className="w-full h-auto rounded-[2rem] shadow-inner"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Benefits Section (Card Layout) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black text-brand-600 uppercase tracking-[0.3em]">Advantages</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Explore Key Benefits</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Reduced Wait Times", desc: "Automated seating logic and live turnover tracking cut guest wait times by up to 30%." },
              { icon: MousePointer2, title: "Smarter Seating Decisions", desc: "Instantly identify the best available table for any group size to optimize capacity." },
              { icon: Heart, title: "Better Guest Experience", desc: "Provide accurate wait times and personalized service with integrated guest profiles." },
              { icon: Eye, title: "Improved Operational Visibility", desc: "Get a high-level view of your entire floor's pulse from any device, anywhere." },
              { icon: Zap, title: "Faster Service Flow", desc: "Seamless communication between hosts and servers ensures tables are cleared and reset faster." },
              { icon: TrendingUp, title: "Increased Revenue", desc: "Maximize covers per shift by eliminating dead-time between parties and manual errors." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-300 group hover:bg-white hover:shadow-2xl hover:shadow-brand-600/10"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-brand-700 group-hover:text-white" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{benefit.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Capabilities Section (Detailed Content) */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black text-brand-600 uppercase tracking-[0.3em]">Core Platform</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Powerful Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
            {[
              { icon: Activity, title: "Real-time table tracking", desc: "Live status updates for every table. Monitor occupancy, order progress, and billing status in a single unified view." },
              { icon: LayoutGrid, title: "Floor plan visualization", desc: "Design an exact digital twin of your restaurant. Drag-and-drop table layouts that reflect your physical dining space perfectly." },
              { icon: Calendar, title: "Reservation management", desc: "Sync online bookings and walk-ins seamlessly. Auto-assign tables based on group size and server availability." },
              { icon: Users, title: "Staff coordination", desc: "Assign sections to servers and track workload in real-time. Boost teamwork with instant notifications and status changes." },
              { icon: BarChart3, title: "Analytics and reporting", desc: "Access deep insights into turnover rates, peak hours, and server performance to optimize your daily operations." },
              { icon: Smartphone, title: "Mobile Optimized", desc: "Control your floor from anywhere. Fully responsive dashboard accessible on tablets and mobile devices for staff-on-the-go." }
            ].map((cap, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="shrink-0 w-16 h-16 bg-white rounded-[1.25rem] border border-slate-200 flex items-center justify-center text-brand-700 shadow-sm group-hover:border-brand-200 transition-colors">
                  <cap.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-black text-slate-900">{cap.title}</h4>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature Deep Dive Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-32">

          {/* Deep Dive 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Visual Floor Plan Architect</h3>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Build your digital dining room in minutes. Our intuitive drag-and-drop editor allows you to create sections, arrange tables, and define booth layouts that match your physical restaurant.
              </p>
              <ul className="space-y-4">
                {['Custom table shapes and sizes', 'Multi-floor and patio support', 'One-tap table merging'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-brand-600/5 rounded-[3rem] blur-2xl group-hover:bg-brand-600/10 transition-all" />
              <div className="relative p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-xl">
                <img src={tablesImg} alt="Floor Plan Architect" className="w-full h-auto rounded-2xl shadow-sm" />
              </div>
            </div>
          </div>

          {/* Deep Dive 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Intelligent Waitlist Control</h3>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Take the guesswork out of wait times. Restron Mitra uses historical data and real-time turnover speeds to provide accurate quotes to your guests, keeping them informed and happy.
              </p>
              <div className="p-8 bg-slate-900 rounded-[2rem] border border-white/10 space-y-6">
                <div className="flex justify-between items-center text-white">
                  <span className="font-bold">Average Wait Time</span>
                  <span className="text-brand-600 font-black text-2xl">12 Mins</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    className="h-full bg-brand-600"
                  />
                </div>
                <p className="text-slate-400 text-sm font-medium">Waitlist performance improved by 22% this week.</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="p-10 bg-brand-600 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">{i + 1}</div>
                        <div>
                          <p className="font-black text-slate-900">Guest Party {i + 2}</p>
                          <p className="text-xs font-bold text-slate-500">4 Guests • Est. 15m</p>
                        </div>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-green-50 text-green-600 font-black text-xs uppercase tracking-widest">Seating Soon</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Mini Dashboard Preview Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 blur-full rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-black text-white">Live Floor Pulse</h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed">
                  A real-time snapshot of your dining room. Manage availability at a glance and ensure no table sits empty for long.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Total Tables", val: "48", icon: TableIcon, color: "text-white" },
                  { label: "Occupied", val: "32", icon: Users, color: "text-brand-600" },
                  { label: "Available", val: "16", icon: CheckCircle2, color: "text-green-500" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-4`} />
                    <div className="text-3xl font-black text-white mb-1">{stat.val}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { id: '1', s: 'o' }, { id: '2', s: 'a' }, { id: '3', s: 'o' }, { id: '4', s: 'o' },
                  { id: '5', s: 'r' }, { id: '6', s: 'o' }, { id: '7', s: 'a' }, { id: '8', s: 'a' },
                  { id: '9', s: 'o' }, { id: '10', s: 'o' }, { id: '11', s: 'o' }, { id: '12', s: 'r' },
                  { id: '13', s: 'a' }, { id: '14', s: 'o' }, { id: '15', s: 'a' }, { id: '16', s: 'a' }
                ].map((t) => (
                  <div key={t.id} className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 border transition-all ${t.s === 'o' ? 'bg-brand-600/20 border-brand-600/40 text-brand-600' :
                    t.s === 'a' ? 'bg-green-500/20 border-green-500/40 text-green-500' :
                      'bg-brand-500/20 border-brand-500/40 text-brand-500'
                    }`}>
                    <span className="text-[10px] font-black opacity-50">{t.id}</span>
                    <TableIcon className="w-5 h-5" />
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-green-500" /> Available
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-brand-600" /> Occupied
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-brand-500" /> Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonial Section */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6 space-y-10 md:space-y-12">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-brand-600 text-brand-600" />)}
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.3] md:leading-[1.2]"
          >
            "Restron Mitra has completely transformed how we manage our rush hours. The visual layout is so intuitive that even new staff can master seating in minutes."
          </motion.blockquote>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-200 border-4 border-slate-50 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-black text-xl md:text-2xl uppercase">RK</div>
            </div>
            <div>
              <p className="text-lg md:text-xl font-black text-slate-900">Rohan Kapoor</p>
              <p className="font-bold text-brand-700 uppercase tracking-widest text-[10px] md:text-xs">Director, Spice Garden</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action Section */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-700/10 blur-[120px]" />

          <div className="relative z-10 space-y-8 md:space-y-10">
            <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">Start Managing Your <br className="hidden md:block" />Tables Smarter</h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Join hundreds of restaurants using Restron Mitra to optimize their floor operations and increase profitability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <a
                href="https://restaurants.biosoftech.in/register"
                className="w-full sm:w-auto bg-saas-accent hover:bg-saas-accent/90 text-white px-8 py-4 md:py-5 rounded-xl font-bold text-sm md:text-base shadow-lg shadow-saas-accent/20 transition-all hover:scale-105 active:scale-95"
              >
                Get Started for Free
              </a>
              <button 
                onClick={() => navigate("/contact")} 
                className="w-full sm:w-auto px-8 py-4 md:py-5 bg-white/10 hover:bg-white/20 text-white font-black rounded-xl md:rounded-[1.5rem] backdrop-blur-md border border-white/10 transition-all"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table_Management;
