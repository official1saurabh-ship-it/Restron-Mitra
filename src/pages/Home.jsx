import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import laptop from "../assets/laptop-mobile.png";
import banner from "../assets/banner.png";
import Banner from "../components/Banner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import girl from "../assets/Girl.png";
import tables from "../assets/dashboard.png";
import overview from "../assets/overview.jpeg";
import { CheckCircle, TrendingUp, BarChart3, Users, Star, Quote, LayoutGrid, Smartphone, Coffee, ClipboardList, PieChart, ShieldCheck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { Zap } from 'lucide-react';
import { useState } from "react";
import emailjs from "@emailjs/browser";

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

  const [formData, setFormData] = useState({
    owner_name: "",
    restaurant_name: "",
    user_email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.owner_name || !formData.user_email) {
      alert("Please fill required fields");
      return;
    }

    console.log(formData);

    try {
      await emailjs.send(
        "service_aucq40n",
        "template_syq0z0f",
        formData,
        "_BvVYthvunvaw0XJF"
      );

      await emailjs.send(
        "service_aucq40n",
        "template_5kk87er",
        formData,
        "_BvVYthvunvaw0XJF"
      );

      alert("Form submitted successfully 🚀");

      setFormData({
        owner_name: "",
        restaurant_name: "",
        user_email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      console.log("FULL ERROR:", error);
      alert("Error sending email ❌");
    }
  };

  return (
    <div className="bg-white pt-20 relative overflow-hidden">

      {/* ==================== HERO BANNER ==================== */}
      <Banner
        image={""}
        title={<>The Operating System for <br className="hidden sm:block" /> <span className="text-brand-400">Modern Restaurants</span></>}
        subtitle="Ab orders, billing aur reports sab ek hi jagah — bina tension ke."
        ctaText="Get Started for Free"
        ctaLink="#contact"
      />





      {/* What Do We Do Section */}
      <section className="w-full py-20 sm:py-32 relative z-10 overflow-hidden bg-slate-50/50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center space-y-6 mb-16 sm:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-slate-900"
            >
              What Do <span className="text-brand-600">We Do</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-500 font-medium max-w-3xl mx-auto"
            >
              Our ecosystem — empowering Restaurants through integrated solutions that simplify every aspect of your business.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: LayoutGrid, title: "POS & Billing", desc: "Fast, secure, and easy-to-use billing system that works offline too. Manage payments and invoices effortlessly.", path: "/pos-billing" },
              { icon: Smartphone, title: "Online Ordering", desc: "Integrated online ordering system to accept direct orders from customers, reducing third-party commissions.", path: "/online-ordering" },
              { icon: Coffee, title: "Table Management", desc: "Real-time table status, reservations, and floor management to optimize seating and reduce wait times.", path: "/table-management" },
              { icon: ClipboardList, title: "Inventory & Stock", desc: "Track ingredient levels, manage suppliers, and get auto-restock alerts to minimize wastage.", path: "/inventory-stock" },
              { icon: PieChart, title: "Analytics & Reports", desc: "Comprehensive business insights with visual charts to track performance, sales trends, and profitability.", path: "/analytics-reports" },
              { icon: ShieldCheck, title: "Branch Wise Details", desc: "Role-based access control, attendance tracking, and secure logs to keep your business operations safe.", path: "/branch-details" },
              { icon: ShieldCheck, title: "Role Based Permission", desc: "Decide who can manage billing, orders, and inventory. Give limited access to staff and full control to admins for smooth and secure operations.", path: "/role-permissions" }
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
                  className="group block p-10 h-full rounded-[2.5rem] bg-white border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-colors duration-500">
                    <item.icon className="w-8 h-8 text-brand-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Solution Capabilities Section */}
      <section className="w-full py-20 sm:py-32 relative z-10 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center space-y-6 mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-widest"
            >
              <Zap className="w-4 h-4 fill-brand-600" />
              <span>Engineered for Excellence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
            >
              What Our Solutions <br className="hidden sm:block" />
              <span className="text-brand-600">Can Do For You</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-500 font-medium max-w-3xl mx-auto"
            >
              Streamline your workflow and maximize profits with tools built specifically for the modern food industry.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
              { icon: Zap, title: "Faster Operations", desc: "Manage orders, billing, and tables without delays — even during peak hours.", accent: "bg-brand-600" },
              { icon: BarChart3, title: "Real-Time Insights", desc: "Track sales, performance, and customer trends instantly from one dashboard.", accent: "bg-brand-600" },
              { icon: ClipboardList, title: "Error-Free Billing", desc: "Automatic calculations ensure accurate bills every time, reducing manual errors.", accent: "bg-brand-600" },
              { icon: Users, title: "Staff Coordination", desc: "Sync orders between kitchen, billing, and staff seamlessly for better service.", accent: "bg-brand-700" },
              { icon: CreditCard, title: "Flexible Payments", desc: "Accept UPI, card, and cash — all integrated into one secure, reliable system.", accent: "bg-green-600" },
              { icon: TrendingUp, title: "Grow Your Business", desc: "Improve efficiency, serve more customers, and increase your monthly revenue.", accent: "bg-rose-600" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 sm:p-14 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-slate-900 transition-all duration-500">
                  <item.icon className={`w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-500`} />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Rest of your code remains exactly the same */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10 py-16 sm:py-24">
        <div className="lg:w-1/2 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/50 backdrop-blur-md border border-brand-200/50 text-xs font-bold tracking-widest text-brand-700 w-fit"
          >
            <Star className="w-4 h-4 text-brand-600 fill-brand-600" />
            <span>LOVED BY RESTAURANT OWNERS</span>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
              Why Our <span className="text-brand-600"> Clients</span> <br className="hidden lg:block" />
              <span className="text-slate-400">Love Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl leading-relaxed">
              We don't just provide software; we become the <span className="underline decoration-brand-200 decoration-4 underline-offset-4">growth partner</span> for your restaurant's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
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
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:border-brand-200 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-brand-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 w-full">
            {[
              { val: "500+", label: "Restaurants" },
              { val: "30%", label: "Avg. Efficiency" },
              { val: "40%", label: "Less Manual" },
              { val: "4.5/5", label: "Rating" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xl sm:text-2xl font-black text-slate-900">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 sm:p-12 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden group w-full"
          >
            <Quote className="absolute -right-4 -top-4 w-32 h-32 text-brand-50 rotate-12" />
            <p className="relative z-10 text-lg sm:text-xl font-medium italic leading-relaxed text-slate-700">
              "Restron Mitra has completely transformed the way we manage our restaurant. It's smart, simple, and super effective!"
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-100 to-pink-100 flex items-center justify-center font-bold border border-white shadow-inner text-brand-700 text-lg">
                AK
              </div>
              <div className="text-left">
                <div className="font-black text-slate-900 text-lg">Amit Kumar</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Owner, Urban Tadka</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative w-full px-4 lg:px-0">
          <div className="relative w-full aspect-[4/5] sm:aspect-square lg:h-[800px] flex items-end justify-center overflow-hidden rounded-[2.5rem] sm:rounded-[4rem] bg-slate-50/50 border border-slate-100 shadow-inner">
            <div className="absolute inset-0 animate-float">
              <img
                src={girl}
                alt="Happy Restaurant Owner"
                className="h-full w-full object-cover object-center opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 sm:left-12 top-[15%] z-20 w-32 sm:w-56 lg:w-64 rotate-[-5deg]"
            >
              <img
                src={tables}
                alt="Dashboard Preview"
                className="rounded-2xl shadow-2xl border-4 border-white backdrop-blur-xl"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-6 sm:right-12 bottom-[15%] z-20 w-32 sm:w-56 lg:w-64 rotate-[5deg]"
            >
              <img
                src={overview}
                alt="Analytics Preview"
                className="rounded-2xl shadow-2xl border-4 border-white backdrop-blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="w-full py-20 sm:py-32 relative z-10 lg:px-12">
        <div className="max-w-full mx-auto bg-slate-900 rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-5/12 p-12 sm:p-20 lg:p-24 bg-gradient-to-br from-brand-600 to-brand-800 text-white flex flex-col justify-between text-center lg:text-left">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight"
              >
                Ready to Transform Your <br />
                <span className="text-brand-200">Restaurant?</span>
              </motion.h2>
              <p className="text-brand-100 text-lg sm:text-xl font-medium leading-relaxed opacity-90">
                Join hundreds of successful owners who have simplified their operations with Restron Mitra.
              </p>
            </div>

            <div className="mt-12 space-y-8 flex flex-col items-center lg:items-start">
              {[
                "Free 14-day trial",
                "24/7 Technical Support",
                "Setup in under 30 minutes"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-brand-200" />
                  </div>
                  <span className="font-bold text-xl">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-16 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-200 mb-3">Email us at</p>
              <p className="text-2xl sm:text-3xl font-black">info@biosoftech.com</p>
            </div>
          </div>

          <div className="lg:w-7/12 p-10 sm:p-20 lg:p-24">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-8" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="owner_name"
                  value={formData.owner_name}
                  onChange={(e) => setFormData({ ...formData, owner_name: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium text-lg"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Restaurant Name</label>
                <input
                  type="text"
                  name="restaurant_name"
                  value={formData.restaurant_name}
                  onChange={(e) => setFormData({ ...formData, restaurant_name: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium text-lg"
                  placeholder="The Pizza Place"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  name="user_email"
                  value={formData.user_email}
                  onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium text-lg"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium text-lg"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-3 sm:col-span-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">How can we help?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium resize-none h-40 text-lg"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <div className="sm:col-span-2 pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-black py-6 rounded-[1.5rem] shadow-xl shadow-brand-600/20 transition-all text-xl"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;