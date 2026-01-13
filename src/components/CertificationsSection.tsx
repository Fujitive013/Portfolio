import { motion } from "framer-motion";
import TopcitIcon from "../assets/TOPCIT-G.svg";
import SupportZebraIcon from "../assets/supportzebra.png";

const certs = [
  {
    title: "12th TOPCIT Philippines",
    issuer: "Institute for Information & Communications Technology Promotion (IITP)",
    details: "Level 3 Certification",
    year: "2025",
    icon: TopcitIcon,
  },
  {
    title: "SupportZebra AI Talk Workshop",
    issuer: "SupportZebra",
    details: "Certificate of Participation",
    year: "2025",
    icon: SupportZebraIcon,
  },
  // You can easily add more here, like your Coding Competition participation
];

const CertificationsSection = () => (
  <section id="certifications" className="section-block max-w-6xl mx-auto px-6 py-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
        Certifications & Awards
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
        Validated skills and industry participation.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certs.map((cert, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Hover Gradient Border Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 transition-colors pointer-events-none" />
          
          <div className="flex items-start gap-4 sm:gap-6">
             {/* Icon Container with Gradient Shadow */}
            <div className="shrink-0 relative">
               <div className={`absolute inset-0 bg-gradient-to-br ${cert.title.includes("TOPCIT") ? "from-rose-500 to-orange-500" : "from-blue-500 to-emerald-500"} blur-lg opacity-20 group-hover:opacity-40 transition-opacity`} />
               <div className="relative h-14 w-14 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2 shadow-inner">
                  {cert.icon ? (
                    <img 
                      src={cert.icon} 
                      alt={cert.title} 
                      className="w-full h-full object-contain" 
                      style={cert.title.includes("TOPCIT") ? { filter: "brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(4073%) hue-rotate(343deg) brightness(92%) contrast(93%)" } : undefined}
                    />
                  ) : (
                    <span className="text-2xl">🏆</span>
                  )}
               </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                {cert.issuer}
              </p>
              
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                    {cert.details}
                </span>
                <span className="text-gray-400 dark:text-gray-500">
                    {cert.year}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CertificationsSection;