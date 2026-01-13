import ProfilePic from "../assets/potato.png";

const AboutSection = () => {
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
          </div>
        </div>

        {/* Right Column: Image / Visual */}
        <div className="flex justify-center md:justify-end">
          {/* Height updated to h-[26rem] (mobile) and md:h-[32rem] (desktop) 
             to accommodate the 1792x2400 aspect ratio without clipping the head.
          */}
          <div className="relative w-72 h-[26rem] md:w-80 md:h-[32rem]">
            
            {/* 1. Decorative Ring (Furthest Back) - ADJUSTED GLOW */}
            <div className="absolute bottom-0 left-2 right-2 h-[80%] bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-2xl rotate-6 opacity-60 blur-2xl transform translate-y-4"></div>
            
            {/* 2. The Box/Frame (Middle Layer) 
                Height set to 80% so the top 20% of the image sticks out.
            */}
            <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gray-200 dark:bg-gray-800 rounded-2xl border-2 border-white dark:border-gray-700 shadow-2xl"></div>

            {/* 3. The Image (Top Layer) 
                z-10 ensures it sits ON TOP of the box.
            */}
            <img 
              src={ProfilePic}
              alt="Axel Paredes" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none object-contain z-10 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;