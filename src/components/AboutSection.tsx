import { useState } from "react";
import ProfilePic from "../assets/potato.png";

const AboutSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const skills = ["Python", "NLP", "Backend Dev", "FastAPI", "ExpressJS"];

  return (
    <section id="about" className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-32 text-gray-900 dark:text-gray-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          
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
              Backend Developer & NLP Enthusiast
            </p>
          </div>

          {/* Bio */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            I specialize in building secure <strong>REST APIs</strong> and integrating <strong>Machine Learning</strong> models into real-time systems. 
            Currently focused on text processing and GPS data analysis using Python. Based in Misamis Oriental, Philippines.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              View Projects
            </a>
            <a 
              href="/Resume.pdf"
              download="Axel_Paredes_Resume.pdf"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Image / Visual */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-[26rem] md:w-80 md:h-[32rem]">
            
            {/* 1. Decorative Ring */}
            <div className="absolute bottom-0 left-2 right-2 h-[80%] bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-2xl rotate-6 opacity-60 blur-2xl transform translate-y-4"></div>
            
            {/* 2. The Box/Frame */}
            <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gray-200 dark:bg-gray-800 rounded-2xl border-2 border-white dark:border-gray-700 shadow-2xl overflow-hidden">
               {/* 2.5 Loading Spinner (Centered in the box) */}
               {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-emerald-500"></div>
                  </div>
               )}
            </div>

            {/* 3. The Image (Top Layer) */}
            <img 
              src={ProfilePic}
              alt="Axel Paredes"
              onLoad={() => setIsLoaded(true)}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none object-contain z-10 drop-shadow-xl transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;