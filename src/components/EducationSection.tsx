import { motion } from "framer-motion";
import ProfilePic from "../assets/potato.png";

// 1. Data Object (Easier to update later)
const EDUCATION_DATA = {
  university: "University of Science and Technology of Southern Philippines",
  degree: "Bachelor of Science in Information Technology",
  years: "2022 – 2026",
  description: "Focused on backend systems architecture, real-time application development, and applied machine learning. Actively seeking OJT / Internship. Focus: Backend systems, real-time apps, and ML. Passionate about scalable software design."
};

const EducationSection = () => {
  return (
    <section id="education" className="section-block w-full max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r text-white">
        Education
      </h2>
      
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <ProfileImage />
        <EducationCard data={EDUCATION_DATA} />
      </div>
    </section>
  );
};

// Sub-component: Handles the Image and Glow Effects
const ProfileImage = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="shrink-0 relative group z-10 cursor-pointer"
  >
     {/* Blurry Glowing Shapes (Background) */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
       <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute w-32 h-32 md:w-48 md:h-48 bg-blue-500/30 rounded-full blur-3xl mix-blend-screen group-hover:bg-blue-500/50 transition-colors duration-500" 
        />
        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute w-32 h-32 md:w-48 md:h-48 bg-emerald-500/30 rounded-full blur-3xl mix-blend-screen group-hover:bg-emerald-500/50 transition-colors duration-500" 
        />
    </div>

    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-transparent transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
      <img 
        src={ProfilePic} 
        alt="Profile" 
        className="w-full h-full object-contain rounded-full border-4 border-white/80 dark:border-gray-900/80 drop-shadow-2xl transition-all duration-300 group-hover:border-transparent"
      />
    </div>
  </motion.div>
);

// Sub-component: Handles the Text Card
const EducationCard = ({ data }: { data: typeof EDUCATION_DATA }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/60 dark:border-gray-700/50 dark:bg-gray-800/40 backdrop-blur-xl p-8 shadow-lg transition-all hover:shadow-emerald-500/10 hover:border-emerald-500/30">
      
      {/* Decorative gradient blob inside card */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            {data.university}
          </h3>
          <span className="shrink-0 inline-flex items-center justify-center px-4 py-1.5 text-sm font-bold text-blue-700 bg-blue-100 rounded-full dark:bg-blue-500/20 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
            {data.years}
          </span>
        </div>

        <h4 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 mb-4">
          {data.degree}
        </h4>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
          {data.description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default EducationSection;