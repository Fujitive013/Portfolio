import ExpressIcon from "../assets/Express.svg";
import FastAPIIcon from "../assets/FastAPI.svg";
import FirebaseIcon from "../assets/Firebase.svg";
import GitIcon from "../assets/Git.svg";
import GitHubIcon from "../assets/GitHub.svg";
import JavaIcon from "../assets/Java.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import JupyterIcon from "../assets/Jupyter.svg";
import KaggleIcon from "../assets/Kaggle.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import NodeIcon from "../assets/Node.js.svg";
import NPMIcon from "../assets/NPM.svg";
import NextIcon from "../assets/nextjs.svg";
import PostmanIcon from "../assets/Postman.svg";
import PythonIcon from "../assets/Python.svg";
import ReactIcon from "../assets/react.svg";
import SQLIcon from "../assets/SQL Developer.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import VSCodeIcon from "../assets/Visual Studio Code (VS Code).svg";
import ViteIcon from "../assets/Vite.js.svg";
import DockerIcon from "../assets/Docker.svg";
import ExpoIcon from "../assets/expo-go-app-seeklogo.png";
import DrizzleIcon from "../assets/drizzle-orm.svg";
import { motion } from "framer-motion";

const brandPalette: Record<string, { className: string; hex: string; hexDark?: string }> = {
  JavaScript: { className: "text-amber-500", hex: "#f59e0b" },
  TypeScript: { className: "text-blue-500", hex: "#3b82f6" },
  Python: { className: "text-blue-500", hex: "#2563eb" },
  Java: { className: "text-orange-500", hex: "#f97316" },
  SQL: { className: "text-indigo-500", hex: "#6366f1" },
  "React.js": { className: "text-cyan-500", hex: "#22d3ee" },
  "Next.js": { className: "text-gray-900 dark:text-gray-100", hex: "#111827", hexDark: "#f3f4f6" },
  "React Native": { className: "text-sky-500", hex: "#0ea5e9" },
  Expo: { className: "text-slate-600 dark:text-slate-300", hex: "#94a3b8" },
  Vite: { className: "text-purple-500", hex: "#a855f7" },
  "Node.js": { className: "text-green-500", hex: "#22c55e" },
  "Express.js": { className: "text-slate-600 dark:text-slate-200", hex: "#94a3b8" },
  FastAPI: { className: "text-teal-500", hex: "#14b8a6" },
  DrizzleORM: { className: "text-amber-500", hex: "#f59e0b" },
  "RESTful API Design": { className: "text-blue-600 dark:text-blue-200", hex: "#2563eb", hexDark: "#bfdbfe" },
  MongoDB: { className: "text-emerald-500", hex: "#10b981" },
  "Firebase Realtime DB": { className: "text-orange-500", hex: "#f97316" },
  "Supabase (PostgreSQL)": { className: "text-emerald-600 dark:text-emerald-400", hex: "#059669" },
  "Git & GitHub": { className: "text-slate-700 dark:text-slate-200", hex: "#64748b" },
  Postman: { className: "text-orange-500", hex: "#f97316" },
  "VS Code": { className: "text-blue-500", hex: "#3b82f6" },
  npm: { className: "text-red-500", hex: "#ef4444" },
  Docker: { className: "text-sky-500", hex: "#0ea5e9" },
  Jupyter: { className: "text-amber-500", hex: "#f59e0b" },
  Kaggle: { className: "text-cyan-500", hex: "#22d3ee" },
};

const iconFor = (label: string, sizeClass: string) => {
  const assetMap: Record<string, string> = {
    JavaScript: JavaScriptIcon,
    TypeScript: TypeScriptIcon,
    Python: PythonIcon,
    Java: JavaIcon,
    SQL: SQLIcon,
    "React.js": ReactIcon,
    "Next.js": NextIcon,
    "React Native": ReactIcon,
    Expo: ExpoIcon,
    Vite: ViteIcon,
    "Node.js": NodeIcon,
    "Express.js": ExpressIcon,
    FastAPI: FastAPIIcon,
    DrizzleORM: DrizzleIcon,
    MongoDB: MongoDBIcon,
    "Firebase Realtime DB": FirebaseIcon,
    "Supabase (PostgreSQL)": "https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000",
    "RESTful API Design black": "https://img.icons8.com/?size=100&id=UR9WNLMA7zim&format=png&color=000000",
    "RESTful API Design white": "https://img.icons8.com/?size=100&id=UR9WNLMA7zim&format=png&color=ffffff",
    "Git & GitHub": GitHubIcon,
    Git: GitIcon,
    Postman: PostmanIcon,
    "VS Code": VSCodeIcon,
    npm: NPMIcon,
    Docker: DockerIcon,
    Jupyter: JupyterIcon,
    Kaggle: KaggleIcon,
  };

  if (label === "RESTful API Design") {
    const lightSrc = assetMap["RESTful API Design black"];
    const darkSrc = assetMap["RESTful API Design white"];

    return (
      <>
        {lightSrc && <img src={lightSrc} alt="RESTful API Design icon" className={`${sizeClass} shrink-0 dark:hidden`} />}
        {darkSrc && <img src={darkSrc} alt="RESTful API Design icon" className={`${sizeClass} shrink-0 hidden dark:block`} />}
      </>
    );
  }

  if (assetMap[label]) {
    const extra = label === "Git & GitHub" || label === "Express.js" ? "dark:invert" : "";
    return <img src={assetMap[label]} alt={`${label} icon`} className={`${sizeClass} shrink-0 ${extra}`} />;
  }

  return null;
};

const categories = [
  {
    title: "Languages",
    pillClass: "manga-skill",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    pillClass: "manga-skill",
    items: ["React.js", "Next.js", "React Native", "Expo", "Vite"],
  },
  {
    title: "Backend & APIs",
    pillClass: "manga-skill",
    items: ["Node.js", "Express.js", "FastAPI", "DrizzleORM", "RESTful API Design"],
  },
  {
    title: "Databases & Storage",
    pillClass: "manga-skill",
    items: ["MongoDB", "Firebase Realtime DB", "Supabase (PostgreSQL)"],
  },
  {
    title: "Tooling",
    pillClass: "manga-skill",
    items: ["Git & GitHub", "Docker", "Jupyter", "Kaggle", "Postman", "VS Code", "npm"],
  },
];

const Pill = ({ label, pillClass }: { label: string; pillClass: string }) => {
  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
  const accent = brandPalette[label]?.className ?? "text-current";
  const accentHex = isDark && brandPalette[label]?.hexDark ? brandPalette[label]?.hexDark : brandPalette[label]?.hex ?? "#94a3b8";
  const sizeClass = label.length > 18 ? "h-7 w-7" : label.length > 12 ? "h-6 w-6" : "h-5 w-5";
  const outerAlpha = isDark ? "55" : "25";
  const innerAlpha = isDark ? "99" : "40";

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
      whileTap={{ scale: 0.95, rotate: -2 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      className={`cursor-grab active:cursor-grabbing px-4 py-2 rounded-full border-2 shadow-sm inline-flex items-center gap-2 ${pillClass} user-select-none touch-none`}
      style={{ boxShadow: `0 0 0 1px ${accentHex}20, 0 6px 12px -6px ${accentHex}${outerAlpha}, 0 12px 28px -14px ${accentHex}${innerAlpha}` }}
    >
      <span className={`flex items-center justify-center ${sizeClass} pointer-events-none`}>
        <span className={accent}>{iconFor(label, sizeClass)}</span>
      </span>
      <span className={`font-semibold ${accent} pointer-events-none translate-y-[1px]`}>{label}</span>
    </motion.span>
  );
};

const SkillCategory = ({ category }: { category: typeof categories[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="manga-panel"
    >
      <h3 className="manga-title text-base font-semibold mb-4 flex items-center justify-between">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
           <Pill key={item} label={item} pillClass={category.pillClass} />
        ))}
      </div>
    </motion.div>
  );
};

const TechStackSection = () => (
  <section id="skills" className="section-block">
    <div className="manga-panel">
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="manga-title text-2xl font-semibold mb-6"
      >
        Skills & Tech
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
