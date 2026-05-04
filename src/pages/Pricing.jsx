import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Zap, Shield, Rocket, ArrowRight } from 'lucide-react';

const Pricing = () => {
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
      icon: <Zap className="w-6 h-6 text-purple-600" />,
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
      icon: <Shield className="w-6 h-6 text-purple-600" />,
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
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 md:pt-16 pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Simple, Transparent <span className="text-saas-accent">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Choose the plan that fits your restaurant's needs. No hidden fees, ever.
          </p>
        </motion.div>

        {/* Billing Switch */}
        <div className="mt-8 md:mt-12 flex justify-center items-center gap-4">
          <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-14 h-7 bg-slate-200 rounded-full p-1 relative transition-colors duration-300 focus:outline-none"
          >
            <motion.div
              animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
              className="w-5 h-5 bg-saas-accent rounded-full shadow-sm"
            />
          </button>
          <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly <span className="ml-1 text-green-500 text-xs">(Save 20%)</span>
          </span>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border transition-all duration-500 flex flex-col h-full ${
                tier.highlight 
                ? 'bg-slate-900 border-slate-800 shadow-2xl shadow-purple-500/20 lg:scale-[1.02] z-10' 
                : 'bg-white border-slate-100 shadow-sm hover:shadow-xl'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-saas-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="flex-grow">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-8 ${tier.highlight ? 'bg-saas-accent' : 'bg-purple-50'}`}>
                  {tier.icon}
                </div>

                <h3 className={`text-xl md:text-2xl font-black mb-2 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-3xl md:text-4xl font-black ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className={`text-xs md:text-sm font-bold ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  )}
                </div>
                <p className={`text-xs md:text-sm leading-relaxed mb-8 font-medium ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {tier.description}
                </p>

                <div className="space-y-4 mb-10">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${tier.highlight ? 'bg-saas-accent/20' : 'bg-green-50'}`}>
                        <Check className={`w-3 h-3 ${tier.highlight ? 'text-saas-accent' : 'text-green-600'}`} />
                      </div>
                      <span className={`text-xs md:text-sm font-medium ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-4 rounded-2xl font-black transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base mt-auto ${
                tier.highlight 
                ? 'bg-saas-accent hover:bg-saas-accent/90 text-white shadow-lg shadow-saas-accent/20' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}>
                {tier.buttonText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-40">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 mb-4">Frequently Asked <span className="text-saas-accent">Questions</span></h2>
          <p className="text-sm md:text-base text-slate-500 font-medium">Everything you need to know about our pricing and plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <HelpCircle className="w-5 h-5 text-saas-accent" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-40">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-400/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Ready to supercharge your <br />
              restaurant operations?
            </h2>
            <p className="text-purple-100 text-base md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              Join 500+ restaurants that trust Restron Mitra for their growth. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-purple-600 px-8 py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:scale-105 transition-all">
                Get Started for Free
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-black text-base md:text-lg hover:bg-white/20 transition-all">
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
