import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Zap, Shield, Rocket, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const tiers = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '₹1,499' : '₹14,990',
      description: 'Ideal for small cafes and food trucks starting their digital journey.',
      features: [
        'Single Outlet Management',
        'Basic POS & Billing',
        'Digital QR Menu',
        'Daily Sales Reports',
        'Email Support',
        'Standard Updates'
      ],
      icon: <Zap className="w-6 h-6 text-brand-600" />,
      buttonText: 'Start Free Trial',
      highlight: false
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? '₹3,999' : '₹39,990',
      description: 'Perfect for growing restaurants needing advanced inventory and ordering.',
      features: [
        'Up to 3 Outlets Management',
        'Advanced POS with Offline Mode',
        'Full Inventory & Stock Tracking',
        'Online Ordering Integration',
        'Priority Phone & Chat Support',
        'Monthly Business Analytics'
      ],
      icon: <Rocket className="w-6 h-6 text-white" />,
      buttonText: 'Upgrade to Pro',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Comprehensive solutions for large chains and franchises.',
      features: [
        'Unlimited Outlets',
        'Franchise Management Module',
        'Custom API Integrations',
        'Dedicated Account Manager',
        'White-label Solution',
        'Advanced AI-driven Insights'
      ],
      icon: <Shield className="w-6 h-6 text-brand-600" />,
      buttonText: 'Contact Sales',
      highlight: false
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the prorated difference will be charged. If you downgrade, you'll receive credit towards your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 14-day full-featured free trial for the Starter and Professional plans. No credit card is required to start."
    },
    {
      question: "What kind of hardware do I need?",
      answer: "Restron Mitra is cloud-based and works on any modern tablet, laptop, or desktop. We also support most standard thermal printers and barcode scanners."
    },
    {
      question: "Do you offer on-site training?",
      answer: "Yes, for our Professional and Enterprise customers, we offer both virtual and on-site training sessions to ensure your staff is fully comfortable with the system."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-8 sm:pt-16 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Simple, Transparent <br className="hidden md:block" />
            <span className="text-saas-accent">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Choose the plan that fits your restaurant's needs. No hidden fees, ever.
          </p>
        </motion.div>

        {/* Billing Switch */}
        <div className="mt-12 flex justify-center items-center gap-6">
          <span className={`text-base font-bold transition-colors ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-16 h-8 bg-slate-100 rounded-full p-1.5 relative transition-colors duration-300 focus:outline-none border border-slate-200"
          >
            <motion.div
              animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
              className="w-5 h-5 bg-saas-accent rounded-full shadow-lg shadow-saas-accent/20"
            />
          </button>
          <span className={`text-base font-bold transition-colors ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly <span className="ml-1 text-green-500 text-sm font-black">(Save 20%)</span>
          </span>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-14 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-[2.5rem] p-8 sm:p-10 xl:p-12 border transition-all duration-500 flex flex-col h-full ${tier.highlight
                ? 'bg-slate-900 border-slate-800 shadow-2xl shadow-brand-500/20 lg:scale-[1.05] z-10'
                : 'bg-white border-slate-100 shadow-sm hover:shadow-2xl'
                }`}
            >
              {tier.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-saas-accent text-white text-[11px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full whitespace-nowrap shadow-xl shadow-saas-accent/20">
                  Most Popular
                </div>
              )}

              <div className="flex-grow">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${tier.highlight ? 'bg-saas-accent' : 'bg-brand-50'}`}>
                  {React.cloneElement(tier.icon, { className: `w-7 h-7 ${tier.highlight ? 'text-white' : 'text-brand-600'}` })}
                </div>

                <h3 className={`text-2xl font-black mb-3 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl sm:text-5xl xl:text-6xl font-black ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className={`text-base xl:text-lg font-bold ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  )}
                </div>
                <p className={`text-sm xl:text-base leading-relaxed mb-10 font-medium ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {tier.description}
                </p>

                <div className="space-y-5 mb-12">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${tier.highlight ? 'bg-saas-accent/20' : 'bg-green-50'}`}>
                        <Check className={`w-3.5 h-3.5 ${tier.highlight ? 'text-saas-accent' : 'text-green-600'}`} />
                      </div>
                      <span className={`text-sm sm:text-base font-medium ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-5 rounded-[1.5rem] font-black transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg mt-auto ${tier.highlight
                ? 'bg-saas-accent hover:bg-saas-accent/90 text-white shadow-xl shadow-saas-accent/20 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900 hover:scale-[1.02] active:scale-[0.98]'
                }`}>
                {tier.buttonText}
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 mt-32 sm:mt-48">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">Frequently Asked <span className="text-saas-accent">Questions</span></h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium max-w-3xl mx-auto">Everything you need to know about our pricing and plans.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 xl:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                  <HelpCircle className="w-7 h-7 text-saas-accent" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">{faq.question}</h3>
                  <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 mt-32 sm:mt-48 pb-12 sm:pb-24">
        <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-[3rem] sm:rounded-[4rem] p-12 sm:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
              Ready to supercharge your <br className="hidden sm:block" />
              restaurant operations?
            </h2>
            <p className="text-brand-100 text-lg sm:text-2xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 500+ restaurants that trust Restron Mitra for their growth. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-white text-brand-600 px-10 py-5 rounded-[1.5rem] font-black text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all duration-300">
                <a href="https://restaurants.biosoftech.in/register" > Get Started Free</a>
              </button>
              <button onClick={() => navigate("/contact")} className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-[1.5rem] font-black text-lg sm:text-xl hover:bg-white/20 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
