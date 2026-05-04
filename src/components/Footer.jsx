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
    <footer className="py-12 md:py-20 bg-white border-t border-slate-100">
      <div className="min-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 mb-16">
          <div className="col-span-1 space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 md:gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-saas-accent rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-saas-accent/20 flex-shrink-0">
                <TableIcon className="text-white w-4 h-4 md:w-6 md:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs md:text-2xl font-black text-slate-900 tracking-tighter leading-none">Restron <br className="sm:hidden" /> Mitra</span>
            </div>
            <p className="hidden md:block text-slate-500 font-medium leading-relaxed max-w-xs text-sm">
              Elevating hospitality intelligence for modern dining venues worldwide.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4">
              <a href='https://www.instagram.com/biosoftech/'><div className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all cursor-pointer"><Facebook className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5" /></div></a>
              <a href='https://www.instagram.com/biosoftech/'><div className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all cursor-pointer"><Twitter className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5" /></div></a>
              <a href="https://www.instagram.com/restronmitra/" ><div className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-saas-accent hover:text-white transition-all cursor-pointer"><Instagram className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5" /></div></a>
            </div>
          </div>

          <div className="col-span-1 space-y-3 md:space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-[7px] sm:text-[8px] md:text-xs">Features</h5>
            <ul className="space-y-1.5 md:space-y-4 text-slate-500 font-bold text-[9px] sm:text-[10px] md:text-sm">
              <li  onClick={() => navigate("/table-management")} className="hover:text-saas-accent transition-colors cursor-pointer">  Table Management</li>
              <li  onClick={() => navigate("/online-ordering")} className="hover:text-saas-accent transition-colors cursor-pointer">Ordering</li>
              <li  onClick={() => navigate("/pos-billing")} className="hover:text-saas-accent transition-colors cursor-pointer">Billing</li>
              <li  onClick={() => navigate("/pos-billing")} className="hover:text-saas-accent transition-colors cursor-pointer">Kitchen</li>
            </ul>
          </div>

          <div className="col-span-1 space-y-3 md:space-y-6">
            <h5   className="font-black text-slate-900 uppercase tracking-widest text-[7px] sm:text-[8px] md:text-xs">Support</h5>
            <ul className="space-y-1.5 md:space-y-4 text-slate-500 font-bold text-[9px] sm:text-[10px] md:text-sm">
              <li onClick={() => navigate("/support")} className="hover:text-saas-accent transition-colors cursor-pointer">Help</li>
              <li className="hover:text-saas-accent transition-colors cursor-pointer">Docs</li>
              <li className="hover:text-saas-accent transition-colors cursor-pointer">Status</li>
              {/* <li className="hover:text-saas-accent transition-colors cursor-pointer">API</li> */}
            </ul>
          </div>

          <div className="col-span-1 space-y-3 md:space-y-6">
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-[7px] sm:text-[8px] md:text-xs">Company</h5>
            <ul className="space-y-1.5 md:space-y-4 text-slate-500 font-bold text-[9px] sm:text-[10px] md:text-sm">
              {/* <li className="hover:text-saas-accent transition-colors cursor-pointer">Story</li> */}
              {/* <li className="hover:text-saas-accent transition-colors cursor-pointer">Careers</li> */}
              <li onClick={() => navigate("/support")} className="hover:text-saas-accent transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-saas-accent transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm font-bold">
          © {new Date().getFullYear()} Restaurant Mitra. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm font-bold text-slate-400">
          <span className="hover:text-slate-900 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-slate-900 cursor-pointer">Terms of Service</span>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
