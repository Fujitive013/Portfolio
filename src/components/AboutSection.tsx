import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = ["Python", "Backend Dev", "FastAPI", "ExpressJS"];

  return (
    <section id="about" className="section-block">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="manga-panel"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-end gap-4">
            <span className="manga-caption">Villanueva, Misamis Oriental</span>
          </div>

          <div>
            <h1 className="manga-title text-4xl md:text-5xl font-semibold tracking-[0.04em]">Axel L. Paredes</h1>
            <p className="text-base md:text-lg font-semibold tracking-[0.06em]">Information Technology | Full-Stack Developer</p>
            <div className="manga-divider" />
            <p className="text-base leading-relaxed">
              Innovative Full-Stack Developer with a BS in Information Technology, experienced across the software development lifecycle.
              I design relational databases and secure APIs, and craft state-driven front-end experiences with modern React and TypeScript.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.06 }}
                className="px-3 py-1 text-xs font-semibold border-2 manga-pill"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="manga-button text-sm">Contact Me</a>
            <a href="#projects" className="manga-outline-button text-sm">View Projects</a>
            <a href="/Resume.pdf" download="PAREDES_CV.pdf" className="manga-outline-button text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Resume
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;