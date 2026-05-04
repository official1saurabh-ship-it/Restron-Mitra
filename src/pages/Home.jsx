import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import laptop from "../assets/laptop-mobile.png";
import banner from "../assets/banner.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girl from "../assets/Girl.png";
import tables from "../assets/dashboard.png";
import overview from "../assets/overview.jpeg";
import { CheckCircle, TrendingUp, BarChart3, Users, Star, Quote, LayoutGrid, Smartphone, Coffee, ClipboardList, PieChart, ShieldCheck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageRef.current || !sectionRef.current) return;

      gsap.set(imageRef.current, {
        rotateY: -180,
        transformOrigin: "center center",
        transformPerspective: 1000,
      });

      gsap.to(imageRef.current, {
        rotateY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className=" bg-white pt-18 sm:pt-16 relative overflow-hidden">

      <main className="w-full  sm:pt-5 relative ">
        <img
          src={banner}
          alt="Cloud Illustration"
          className="w-full h-[95vh] "
        />
      </main>

      <div className="w-full text-center space-y-4 sm:space-y-6 pt-8 sm:pt-12 pb-8 sm:pb-16 md:pb-24 relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-black text-slate-900 leading-tight"
        >
          The Operating System for <br />
          <span className="text-purple-600">Modern Restaurants</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto px-2"
        >
          Ab orders, billing aur reports sab ek hi jagah — bina tension ke.
        </motion.div>
      </div>

      <div className="h-8 sm:h-12 md:h-16"></div>

      
        <img
         
          src={laptop}
          alt="Laptop Illustration"
          className="w-[95%] sm:w-[90%] md:w-[85%] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-contain origin-center will-change-transform"
        
        />
     

      <div className="w-full flex flex-col lg:flex-row items-center gap-8 sm:gap-12 relative z-10 py-8 sm:py-12 md:py-20">
        <div className="lg:w-5/12 space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left py-4 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-100/50 backdrop-blur-md border border-purple-200/50 text-xs sm:text-xs font-bold tracking-widest text-purple-700 w-fit"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 fill-purple-600" />
            <span>LOVED BY RESTAURANT OWNERS</span>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight text-slate-900">
              Why Our <span className="text-purple-600"> Clients</span> <br className="hidden sm:block" />
              <span className="text-slate-400">Love Us</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium max-w-xl leading-relaxed px-2">
              We don't just provide software; we become the <span className="underline decoration-purple-300 decoration-4 underline-offset-4">growth partner</span> for your restaurant's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {[
              { icon: CheckCircle, title: "Simplify Daily Operations", desc: "Manage tables, orders, and menu in a few clicks" },
              { icon: TrendingUp, title: "Increase Efficiency", desc: "Reduce manual work and save valuable time" },
              { icon: BarChart3, title: "Real-time Business Insights", desc: "Track sales, revenue and performance instantly" },
              { icon: Users, title: "Happy Customers", desc: "Better service leads to repeat business" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:border-purple-200 transition-all duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-base sm:text-lg text-slate-800 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
            {[
              { val: "500+", label: "Restaurants" },
              { val: "30%", label: "Avg. Efficiency" },
              { val: "40%", label: "Less Manual" },
              { val: "4.5/5", label: "Rating" }
            ].map((stat, i) => (
              <div key={i} className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg sm:text-2xl font-black text-slate-900">{stat.val}</div>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-4 sm:p-6 md:p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden group w-full"
          >
            <Quote className="absolute -right-4 -top-4 w-20 sm:w-24 md:w-32 h-20 sm:w-24 md:h-32 text-purple-50 rotate-12" />
            <p className="relative z-10 text-sm sm:text-base md:text-lg font-medium italic leading-relaxed text-slate-700 px-2">
              "Restaurant Mitra has completely transformed the way we manage our restaurant. It's smart, simple, and super effective!"
            </p>
            <div className="mt-4 sm:mt-6 flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-purple-100 to-pink-100 flex items-center justify-center font-bold border border-white shadow-inner text-purple-700 text-xs sm:text-base">
                AK
              </div>
              <div className="text-left">
                <div className="font-black text-slate-900 text-sm sm:text-base">Amit Kumar</div>
                <div className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Owner, Urban Tadka</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-7/12 relative w-full">
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[700px] flex items-end justify-center overflow-hidden rounded-3xl bg-slate-50/50 border border-slate-100 shadow-inner">
            {/* Background Image (Girl) */}
            <div className="absolute inset-0 animate-float">
              <img
                src={girl}
                alt="Happy Restaurant Owner"
                className="h-full w-full object-cover object-center opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </div>

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-3 sm:left-6 top-[10%] z-20 w-32 sm:w-40 md:w-56 rotate-[-5deg]"
            >
              <img
                src={tables}
                alt="Dashboard Preview"
                className="rounded-2xl shadow-2xl border-2 sm:border-4 border-white backdrop-blur-xl"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-3 sm:right-6 bottom-[10%] z-20 w-32 sm:w-40 md:w-56 rotate-[5deg]"
            >
              <img
                src={overview}
                alt="Analytics Preview"
                className="rounded-2xl shadow-2xl border-2 sm:border-4 border-white backdrop-blur-xl"
              />
            </motion.div>

            {/* Decorative Blooms */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] sm:w-[120%] h-[100%] sm:h-[120%] bg-purple-100/30 blur-[80px] sm:blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* What Do We Do Section */}
      <section className="w-full py-8 sm:py-12 md:py-24 relative z-10 overflow-hidden">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center space-y-4 mb-8 sm:mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900"
            >
              What Do <span className="text-purple-600">We Do</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto px-2"
            >
              Our ecosystem — empowering Restaurants through integrated solutions that simplify every aspect of your business.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
            {[
              {
                icon: LayoutGrid,
                title: "POS & Billing",
                desc: "Fast, secure, and easy-to-use billing system that works offline too. Manage payments and invoices effortlessly.",
                path: "/pos-billing"
              },
              {
                icon: Smartphone,
                title: "Online Ordering",
                desc: "Integrated online ordering system to accept direct orders from customers, reducing third-party commissions.",
                path: "/online-ordering"
              },
              {
                icon: Coffee,
                title: "Table Management",
                desc: "Real-time table status, reservations, and floor management to optimize seating and reduce wait times.",
                path: "/table-management"
              },
              {
                icon: ClipboardList,
                title: "Inventory & Stock",
                desc: "Track ingredient levels, manage suppliers, and get auto-restock alerts to minimize wastage.",
                path: "/inventory-stock"
              },
              {
                icon: PieChart,
                title: "Analytics & Reports",
                desc: "Comprehensive business insights with visual charts to track performance, sales trends, and profitability.",
                path: "/analytics-reports"
              },
              {
                icon: ShieldCheck,
                title: "Branch Wise Details",
                desc: "Role-based access control, attendance tracking, and secure logs to keep your business operations safe.",
                path: "/branch-details"
              },
              {
                icon: ShieldCheck,
                title: "Role Based Permission",
                desc: "Decide who can manage billing, orders, and inventory. Give limited access to staff and full control to admins for smooth and secure operations.",
                path: "/role-permissions"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full"
              >
                <Link
                  to={item.path}
                  className="group block p-4 sm:p-6 h-full rounded-[1.5rem] sm:rounded-[2rem] bg-white border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500 text-center sm:text-left"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-600 transition-colors duration-500 mx-auto sm:mx-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Capabilities Section */}
      <section className="w-full py-8 sm:py-12 md:py-24 relative z-10">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center space-y-4 mb-8 sm:mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-xs sm:text-xs font-bold uppercase tracking-widest"
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 fill-purple-600" />
              <span>Engineered for Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight"
            >
              What Our Solutions <br />
              <span className="text-purple-600">Can Do For You</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto px-2"
            >
              Streamline your workflow and maximize profits with tools built specifically for the modern food industry.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
            {[
              {
                icon: Zap,
                title: "Faster Operations",
                desc: "Manage orders, billing, and tables without delays — even during peak hours.",
                accent: "bg-purple-600"
              },
              {
                icon: BarChart3,
                title: "Real-Time Insights",
                desc: "Track sales, performance, and customer trends instantly from one dashboard.",
                accent: "bg-indigo-600"
              },
              {
                icon: ClipboardList,
                title: "Error-Free Billing",
                desc: "Automatic calculations ensure accurate bills every time, reducing manual errors.",
                accent: "bg-blue-600"
              },
              {
                icon: Users,
                title: "Staff Coordination",
                desc: "Sync orders between kitchen, billing, and staff seamlessly for better service.",
                accent: "bg-orange-600"
              },
              {
                icon: CreditCard,
                title: "Flexible Payments",
                desc: "Accept UPI, card, and cash — all integrated into one secure, reliable system.",
                accent: "bg-green-600"
              },
              {
                icon: TrendingUp,
                title: "Grow Your Business",
                desc: "Improve efficiency, serve more customers, and increase your monthly revenue.",
                accent: "bg-rose-600"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-4 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden text-center sm:text-left"
              >
                {/* Hover Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 sm:mb-8 group-hover:scale-110 group-hover:bg-slate-900 transition-all duration-500 mx-auto sm:mx-0">
                  <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-slate-600 group-hover:text-white transition-colors duration-500`} />
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2 sm:mb-4 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-8 sm:py-12 md:py-24 relative z-10">
        <div className="w-full px-4 sm:px-6">
          <div className="bg-slate-900 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row mx-4 sm:mx-6">
            {/* Left Side: Contact Info */}
            <div className="lg:w-5/12 p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col justify-between text-center lg:text-left">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight"
                >
                  Ready to Transform Your <br />
                  <span className="text-purple-200">Restaurant?</span>
                </motion.h2>
                <p className="text-purple-100 text-sm sm:text-base md:text-lg font-medium leading-relaxed opacity-90">
                  Join hundreds of successful owners who have simplified their operations with Restron Mitra.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12 space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-200" />
                  </div>
                  <span className="font-bold text-sm sm:text-base">Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-200" />
                  </div>
                  <span className="font-bold text-sm sm:text-base">24/7 Technical Support</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-200" />
                  </div>
                  <span className="font-bold text-sm sm:text-base">Setup in under 30 minutes</span>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 pt-6 sm:pt-12 border-t border-white/10">
                <p className="text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-purple-200 mb-2">Email us at</p>
                <p className="text-lg sm:text-xl md:text-2xl font-black">info@biosoftech.com</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-7/12 p-4 sm:p-6 md:p-12">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[8px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    placeholder="Amit Sharma"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Restaurant Name</label>
                  <input
                    type="text"
                    placeholder="Urban Tadka"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="amit@example.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[8px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">How can we help?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <div className="sm:col-span-2 pt-2 sm:pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl shadow-xl shadow-purple-600/20 transition-all text-sm sm:text-base md:text-lg"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;