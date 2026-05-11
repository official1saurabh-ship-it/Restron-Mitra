import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Table as TableIcon
} from 'lucide-react';

import { useNavigate } from "react-router-dom";
import ContactPage from '../pages/ContactPage';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="py-12 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-4 gap-2 sm:gap-8 mb-20">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-saas-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-saas-accent/20 flex-shrink-0">
                <TableIcon className="text-white w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-xs sm:text-lg md:text-2xl font-black text-slate-900 tracking-tighter leading-tight sm:leading-none">Restron Mitra</span>
            </div>
            <p className="hidden sm:block text-slate-500 font-medium leading-relaxed max-w-xs text-sm md:text-base">
              Elevating hospitality intelligence worldwide.
            </p>
            <div className="flex gap-2 sm:gap-4">
              <a href='https://www.instagram.com/biosoftech/' className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/restronmitra/" className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4 sm:space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-[9px] sm:text-xs">Features</h5>
            <ul className="space-y-2 sm:space-y-4 text-slate-500 font-bold text-[10px] sm:text-sm">
              <li onClick={() => navigate("/table-management")} className="hover:text-saas-accent transition-colors cursor-pointer">Table</li>
              <li onClick={() => navigate("/online-ordering")} className="hover:text-saas-accent transition-colors cursor-pointer">Ordering</li>
              <li onClick={() => navigate("/pos-billing")} className="hover:text-saas-accent transition-colors cursor-pointer">Billing</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4 sm:space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-[9px] sm:text-xs">Support</h5>
            <ul className="space-y-2 sm:space-y-4 text-slate-500 font-bold text-[10px] sm:text-sm">
              <li onClick={() => navigate("/contact")} className="hover:text-saas-accent transition-colors cursor-pointer">Help</li>
              <li className="hover:text-saas-accent transition-colors cursor-pointer">Docs</li>
              <li className="hover:text-saas-accent transition-colors cursor-pointer">Status</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4 sm:space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-[9px] sm:text-xs">Company</h5>
            <ul className="space-y-2 sm:space-y-4 text-slate-500 font-bold text-[10px] sm:text-sm">
              <li onClick={() => navigate("/pricing")} className="hover:text-saas-accent transition-colors cursor-pointer">Pricing</li>
              <li onClick={() => navigate("/contact")} className="hover:text-saas-accent transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <p className="text-slate-400 text-sm font-bold">
            © {new Date().getFullYear()} Restron Mitra. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-8 text-sm font-bold text-slate-400">
            <span onClick={() => navigate("/privacy-policy")} className="hover:text-slate-900 cursor-pointer transition-colors">Privacy Policy</span>
            <span onClick={() => navigate("/termofservice")} className="hover:text-slate-900 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
