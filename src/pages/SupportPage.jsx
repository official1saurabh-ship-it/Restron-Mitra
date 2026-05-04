import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Book, 
  MessageCircle, 
  Mail, 
  Phone, 
  PlayCircle, 
  HelpCircle, 
  ChevronRight,
  Zap,
  Shield,
  LifeBuoy
} from 'lucide-react';

const SupportPage = () => {
  const categories = [
    { icon: <Book className="w-6 h-6" />, title: "User Manuals", count: "12 Articles", color: "bg-brand-50 text-brand-600" },
    { icon: <Zap className="w-6 h-6" />, title: "Getting Started", count: "5 Articles", color: "bg-brand-50 text-brand-700" },
    { icon: <Shield className="w-6 h-6" />, title: "Security & Privacy", count: "8 Articles", color: "bg-green-50 text-green-600" },
    { icon: <PlayCircle className="w-6 h-6" />, title: "Video Tutorials", count: "15 Videos", color: "bg-brand-50 text-brand-600" },
  ];

  const faqs = [
    { q: "How do I set up a new branch?", a: "Go to Branch Settings > Add New Branch and follow the wizard." },
    { q: "Can I manage inventory offline?", a: "Yes, our POS billing and core inventory tracking work offline and sync when you're back online." },
    { q: "How do I export sales reports?", a: "Navigate to Analytics > Reports > Export. You can choose PDF or Excel formats." },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/30 blur-[120px] rounded-full -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-100/30 blur-[150px] rounded-full -z-0" />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-50 text-brand-600 text-xs font-black uppercase tracking-[0.2em] mb-4"
          >
            <LifeBuoy className="w-4 h-4" />
            <span>Support Center</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1]"
          >
            How can we <br className="hidden sm:block" />
            <span className="text-brand-600">help you?</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl mx-auto group"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search for articles, guides, or tutorials..." 
              className="w-full bg-white border-2 border-slate-100 rounded-[2.5rem] pl-16 pr-8 py-6 text-base sm:text-lg focus:outline-none focus:border-brand-600/20 focus:ring-4 focus:ring-brand-600/5 transition-all shadow-xl shadow-slate-200/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(cat.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-500 font-bold text-sm mb-6">{cat.count}</p>
                <div className="flex items-center text-brand-600 font-black text-xs uppercase tracking-[0.15em]">
                  Browse Guides <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Contact Section */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 lg:px-12 relative z-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: FAQs */}
          <div className="lg:w-7/12 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900">Common Questions</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Quick answers to the most frequent inquiries.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 mb-4 flex gap-4">
                    <HelpCircle className="w-6 h-6 text-brand-600 flex-shrink-0" /> {faq.q}
                  </h4>
                  <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed pl-10">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Card */}
          <div className="lg:w-5/12">
            <div className="bg-slate-900 rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px] rounded-full" />
              
              <div className="relative z-10 space-y-10">
                <h3 className="text-3xl sm:text-4xl font-black leading-tight">Still need help? <br /><span className="text-brand-500 opacity-60">Talk to our team.</span></h3>
                
                <div className="space-y-8">
                  {[
                    { icon: MessageCircle, label: "Live Chat", val: "Average wait: 2 mins" },
                    { icon: Mail, label: "Email Support", val: "support@biosoftech.com" },
                    { icon: Phone, label: "Phone", val: "+91 98765 43210" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                        <item.icon className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg sm:text-xl font-black">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-6 rounded-[1.5rem] bg-brand-600 hover:bg-brand-500 text-white font-black text-lg transition-all shadow-xl shadow-brand-600/20 hover:scale-105 active:scale-95 mt-4">
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight">Experience our platform in action</h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed">Join thousands of restaurants who have optimized their business with Restron Mitra.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <button className="px-12 py-6 rounded-[1.5rem] bg-slate-900 text-white font-black text-lg sm:text-xl hover:scale-105 transition-all active:scale-95 shadow-xl">
              Get Started Free
            </button>
            <button className="px-12 py-6 rounded-[1.5rem] bg-white border-2 border-slate-100 text-slate-900 font-black text-lg sm:text-xl hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
