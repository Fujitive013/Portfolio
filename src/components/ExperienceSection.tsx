import { motion } from "framer-motion";

const EXPERIENCE_DATA = {
  company: "Livro Systems Inc.",
  role: "R&D Intern Developer",
  location: "Cagayan de Oro, Philippines",
  years: "January 2026 - May 2026",
  highlights: [
    "Contributed to backend architecture and database design for a production platform.",
    "Supported payment workflow features and validation logic across internal tools.",
    "Delivered admin tooling and technical documentation to support secure operations."
  ]
};

const ExperienceSection = () => (
  <section id="experience" className="section-block">
    <div className="manga-panel flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="manga-title text-2xl font-bold">Experience</h2>
      </div>
      <ExperienceCard data={EXPERIENCE_DATA} />
    </div>
  </section>
);

const ExperienceCard = ({ data }: { data: typeof EXPERIENCE_DATA }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <div className="manga-panel">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="manga-caption">Livro Systems Inc.</span>
          <h3 className="text-2xl font-bold">{data.role}</h3>
          <p className="text-sm font-semibold manga-muted-text">{data.location} | {data.years}</p>
        </div>

        <ul className="grid gap-2 text-sm manga-ink">
          {data.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full manga-dot" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default ExperienceSection;
