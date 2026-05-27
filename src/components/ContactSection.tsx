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
    gradient: "from-black to-black",
    textHover: "group-hover:text-black",
  },
  {
    title: "GitHub",
    subtitle: "github.com/Fujitive013",
    href: "https://github.com/Fujitive013",
    icon: FaGithub,
    gradient: "from-black to-black",
    textHover: "group-hover:text-black",
  },
  {
    title: "Email",
    subtitle: "paredes.axel456@gmail.com",
    href: "mailto:paredes.axel456@gmail.com",
    icon: HiMail,
    gradient: "from-black to-black",
    textHover: "group-hover:text-black",
  },
  {
    title: "Phone",
    subtitle: "+63-926-460-5988",
    href: "tel:+639264605988",
    icon: HiPhone,
    gradient: "from-black to-black",
    textHover: "group-hover:text-black",
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
    <section id="contact" className="section-block">
      <Toaster position="bottom-right" toastOptions={{ style: { background: "#111", color: "#fff" } }} />

      <div className="manga-panel">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="manga-title text-2xl font-bold mb-2">Let's Connect</h2>
          <p className="text-sm manga-muted-text">
            Interested in working together or have a question? Reach out directly or send a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {CONTACTS.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
                onClick={() => {
                  if (contact.title === "Email" || contact.title === "Phone") {
                    copyToClipboard(contact.subtitle);
                  } else {
                    window.open(contact.href, "_blank");
                  }
                }}
              >
                <div className="manga-panel flex items-center gap-4 cursor-pointer">
                  <div className={`shrink-0 flex items-center justify-center w-12 h-12 border-2 manga-border bg-gradient-to-br ${contact.gradient}`}>
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="manga-caption mb-1">{contact.title}</h3>
                    <p className={`text-base font-semibold truncate transition-colors duration-300 ${contact.textHover}`}>
                      {contact.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="manga-panel">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="manga-caption block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 manga-border manga-bg outline-none"
                    placeholder="What should I call you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="manga-caption block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 manga-border manga-bg outline-none"
                    placeholder="Where can I reach you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="manga-caption block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 manga-border manga-bg outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" disabled={loading} className="manga-button w-full text-sm">
                  {loading ? "Sending..." : "Send Message"}
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