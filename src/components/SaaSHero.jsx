import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const SaaSHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-saas-bg">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-saas-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-saas-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saas-accent/10 border border-saas-accent/20 text-saas-accent text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Powering the next generation of restaurants</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            All-in-One <br />
            <span className="bg-gradient-to-r from-saas-accent to-brand-500 bg-clip-text text-transparent">
              Restaurant Management
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Everything you need to run and grow your restaurant. From POS billing to HR management, we've got you covered with a premium, integrated experience.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-saas-accent hover:bg-saas-accent/90 text-white rounded-2xl font-bold text-lg transition-all flex items-center gap-2 group shadow-lg shadow-saas-accent/25 active:scale-95">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-saas-border rounded-2xl font-bold text-lg transition-all active:scale-95">
              Book a Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaaSHero;
