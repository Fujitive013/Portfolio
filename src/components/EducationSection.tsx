import { motion } from "framer-motion";

// 1. Data Object (Easier to update later)
const EDUCATION_DATA = {
  university: "University of Science and Technology of Southern Philippines",
  degree: "Bachelor of Science in Information Technology",
  years: "2022 – 2026",
  description: "Focused on backend systems architecture, real-time application development, and applied machine learning. Actively seeking full-stack or backend employment. Passionate about scalable software design."
};

const EducationSection = () => {
  return (
    <section id="education" className="section-block">
      <div className="manga-panel flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="manga-title text-2xl font-bold">Education</h2>
        </div>
        <EducationCard data={EDUCATION_DATA} />
      </div>
    </section>
  );
};

// Sub-component: Handles the Text Card
const EducationCard = ({ data }: { data: typeof EDUCATION_DATA }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <div className="manga-panel">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="manga-caption">{data.years}</span>
          <h3 className="text-2xl font-bold">{data.university}</h3>
        </div>

        <h4 className="text-lg font-semibold">{data.degree}</h4>

        <p className="text-base leading-relaxed manga-ink">
          {data.description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default EducationSection;