import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

// --- Data & Types ---
const CONTACTS = [
  {
    title: "LinkedIn",
    subtitle: "linkedin.com/in/axel-paredes",
    href: "https://linkedin.com/in/axel-paredes-4b4679398",
    icon: FaLinkedinIn,
    gradient: "from-blue-500 to-blue-600",
    textHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  {
    title: "GitHub",
    subtitle: "github.com/Fujitive013",
    href: "https://github.com/Fujitive013",
    icon: FaGithub,
    gradient: "from-gray-700 to-gray-900",
    textHover: "group-hover:text-gray-900 dark:group-hover:text-white",
  },
  {
    title: "Email",
    subtitle: "paredes.axel456@gmail.com",
    href: "mailto:paredes.axel456@gmail.com",
    icon: HiMail,
    gradient: "from-blue-600 to-emerald-500",
    textHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
  {
    title: "Phone",
    subtitle: "+63-926-460-5988",
    href: "tel:+639264605988",
    icon: HiPhone,
    gradient: "from-blue-600 to-emerald-500",
    textHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Oops! Something went wrong.");
      }
    } catch (error) {
       toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <Toaster position="bottom-right" toastOptions={{ style: { background: '#333', color: '#fff' } }} />
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
            Interested in working together or have a question? Feel free to reach out directly or send me a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Contact Cards */}
          <div className="space-y-6">
            {CONTACTS.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
                onClick={() => {
                  if (contact.title === "Email" || contact.title === "Phone") {
                    copyToClipboard(contact.subtitle);
                  } else {
                    window.open(contact.href, "_blank");
                  }
                }}
              >
                <div className="relative flex items-center gap-5 p-5 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/30 dark:hover:border-blue-400/30 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden">
                  
                  {/* Icon Box */}
                  <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      {contact.title}
                    </h3>
                    <p className={`text-base font-medium text-gray-900 dark:text-white truncate transition-colors duration-300 ${contact.textHover}`}>
                      {contact.subtitle}
                    </p>
                  </div>

                  {/* Arrow Indicator (Opacity 0 until hover) */}
                  <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 dark:border-gray-700 shadow-xl">
              <div className="space-y-6">
                
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white placeholder-gray-400"
                    placeholder="What should I call you?"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white placeholder-gray-400"
                    placeholder="Where can I reach you?"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none dark:text-white placeholder-gray-400"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;