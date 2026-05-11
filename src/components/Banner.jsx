import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Button = ({ children, variant = 'primary', className = '' }) => {
    const variants = {
        primary: 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/20',
        secondary: 'border border-slate-700 hover:border-slate-500 text-slate-300 bg-slate-900/50'
    };
    return (
        <button className={`px-6 py-3.5 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="relative pt-16 overflow-hidden flex items-center bg-white">
            <main className="mx-auto px-2 sm:px-6 lg:px-12  w-full">
                <div className="flex flex-col items-center justify-center text-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-1 sm:gap-2 px-1.5 sm:px-4 py-0.5 sm:py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[6px] sm:text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-8">
                            <span className="relative flex h-1 w-1 sm:h-2 sm:w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1 w-1 sm:h-2 sm:w-2 bg-orange-500"></span>
                            </span>
                            Cloud Kitchen Management Platform
                        </div>

                        <h1 className="text-sm sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-black leading-tight sm:leading-[1.1] mb-3 sm:mb-8">
                            Run Your Restaurant,<br />
                            <span className="text-orange-500 italic">Smarter Than Ever</span>
                        </h1>

                        <p className="text-slate-400 text-[8px] sm:text-base md:text-lg lg:text-xl max-w-2xl mb-4 sm:mb-10 leading-relaxed font-medium">
                            Manage orders, inventory, kitchen operations and delivery — all from one powerful platform.
                        </p>

                        <div className="flex flex-row gap-1.5 sm:gap-4 w-full justify-center items-center">
                            <Button variant="primary" className="text-[7px] sm:text-lg px-2 sm:px-8 py-1.5 sm:py-4 h-auto min-h-0">
                                <a href="https://restaurants.biosoftech.in/register" > Get Started Free</a>
                                <ArrowRight className="w-2 h-2 sm:w-5 sm:h-5" />
                            </Button>
                            <Link to="/contact">
                                <Button variant="secondary" className="text-[7px] sm:text-lg px-2 sm:px-8 py-1.5 sm:py-4 h-auto min-h-0">
                                    <Play className="w-2 h-2 sm:w-4 sm:h-4 fill-current" />
                                    Book a Demo
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
};

export default Banner;