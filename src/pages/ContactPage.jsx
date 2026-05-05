import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactCard = ({ icon: Icon, title, text, color }) => {
    return (
        <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl shadow-sm">
            <div className={`p-3 rounded-lg ${color}`}>
                <Icon className="text-white w-5 h-5" />
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{text}</p>
            </div>
        </div>
    );
};

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-12">

            {/* Top Section */}
            <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-1 bg-white rounded-full shadow text-blue-500 font-medium text-sm md:text-base">
                    ✨ Contact Us
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-gray-800 tracking-tight">
                    Get In Touch With Us
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                    Have questions or need assistance? Reach out to our team, and we'll get back to you as soon as possible.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-20">
                <ContactCard
                    icon={Mail}
                    title="Email"
                    text="connect@biosoftech.in"
                    color="bg-blue-500"
                />
                <ContactCard
                    icon={Phone}
                    title="Phone"
                    text="+91 62096 88930"
                    color="bg-indigo-500"
                />
                <ContactCard
                    icon={MapPin}
                    title="Office"
                    text="Lucknow, Uttar Pradesh"
                    color="bg-green-500"
                />
                <ContactCard
                    icon={Clock}
                    title="Days"
                    text="Mon - Sat"
                    color="bg-orange-500"
                />
                <ContactCard
                    icon={Mail}
                    title="Support"
                    text="info@biosoftech.in"
                    color="bg-cyan-500"
                />
            </div>

            {/* Bottom Section */}
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Image */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                        alt="support"
                        className="relative rounded-2xl shadow-lg w-full object-cover aspect-[4/3] lg:aspect-auto"
                    />
                </div>

                {/* Form */}
                <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                    <form className="space-y-6">

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">First Name</label>
                                <input type="text" placeholder="Enter your first name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50/50" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Last Name</label>
                                <input type="text" placeholder="Enter your last name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50/50" />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block ">Phone</label>
                                <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50/50" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
                                <input type="Email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50/50" />
                            </div>
                        </div>

                        {/* Dropdown */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Service Interested In</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent appearance-none">
                                    <option>Select Service</option>
                                    <option>Web Development</option>
                                    <option>App Development</option>
                                    <option>Consulting</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none transition-all"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider text-sm"
                        >
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}