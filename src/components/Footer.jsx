import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Table as TableIcon
} from 'lucide-react';

import { useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="py-12 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-saas-accent rounded-2xl flex items-center justify-center shadow-xl shadow-saas-accent/20 flex-shrink-0">
                <TableIcon className="text-white w-7 h-7" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter leading-none">Restron Mitra</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed max-w-xs text-base">
              Elevating hospitality intelligence for modern dining venues worldwide.
            </p>
            <div className="flex gap-4">
              <a href='https://www.instagram.com/biosoftech/' className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href='https://www.instagram.com/biosoftech/' className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/restronmitra/" className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Features</h5>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li onClick={() => navigate("/table-management")} className="hover:text-saas-accent transition-colors cursor-pointer">Table Management</li>
              <li onClick={() => navigate("/online-ordering")} className="hover:text-saas-accent transition-colors cursor-pointer">Ordering</li>
              <li onClick={() => navigate("/pos-billing")} className="hover:text-saas-accent transition-colors cursor-pointer">Billing</li>
              <li onClick={() => navigate("/pos-billing")} className="hover:text-saas-accent transition-colors cursor-pointer">Kitchen</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li onClick={() => navigate("/support")} className="hover:text-saas-accent transition-colors cursor-pointer">Help</li>
              <li className="hover:text-saas-accent transition-colors cursor-pointer">Docs</li>
              <li className="hover:text-saas-accent transition-colors cursor-pointer">Status</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li onClick={() => navigate("/pricing")} className="hover:text-saas-accent transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-saas-accent transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-slate-400 text-sm font-bold">
            © {new Date().getFullYear()} Restaurant Mitra. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
