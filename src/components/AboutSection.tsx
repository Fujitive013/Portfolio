import { motion } from "framer-motion";
import InteractiveStars from "./InteractiveStars";

const AboutSection = () => {
  const skills = ["Python", "Backend Dev", "FastAPI", "ExpressJS"];

  return (
    <section id="about" className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-32 text-gray-900 dark:text-gray-100 hidden-scrollbar">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" 
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300 uppercase tracking-wide">
             4th Year IT Student
            </span>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
              Axel L. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">Paredes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Backend Developer & Machine Learning Enthusiast
            </p>
          </div>

          {/* Bio */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            I specialize in building secure <strong>REST APIs</strong> and integrating <strong>Machine Learning</strong> models into real-time systems. 
            Currently focused on text processing and GPS data analysis using Python. Based in Misamis Oriental, Philippines.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition shadow-lg hover:shadow-xl"
            >
              Contact Me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm hover:shadow-md"
            >
              View Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              download="Axel_Paredes_Resume.pdf"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              <span>Resume</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md h-[26rem] md:h-[32rem] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800">
            {/* The Interactive Canvas */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
            <InteractiveStars />
            
            {/* Overlay Grid or decoration */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-125 pointer-events-none"></div>

            {/* Optional Text inside the cosmic box */}
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none z-20">
               <div className="text-white/80 text-sm font-mono border-l-2 border-emerald-500 pl-3">
                  &gt; Interactive Canvas<br/>
                  &gt; Move cursor to disrupt<br/>
                  &gt; Enjoy the view
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;