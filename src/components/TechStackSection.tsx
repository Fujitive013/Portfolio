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
import PostmanIcon from "../assets/Postman.svg";
import PythonIcon from "../assets/Python.svg";
import ReactIcon from "../assets/react.svg";
import SQLIcon from "../assets/SQL Developer.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import VSCodeIcon from "../assets/Visual Studio Code (VS Code).svg";
import ViteIcon from "../assets/Vite.js.svg";
import DockerIcon from "../assets/Docker.svg";
import ExpoIcon from "../assets/expo-go-app-seeklogo.png";

const brandPalette: Record<string, { className: string; hex: string; hexDark?: string }> = {
  JavaScript: { className: "text-amber-500", hex: "#f59e0b" },
  TypeScript: { className: "text-blue-500", hex: "#3b82f6" },
  Python: { className: "text-blue-500", hex: "#2563eb" },
  Java: { className: "text-orange-500", hex: "#f97316" },
  SQL: { className: "text-indigo-500", hex: "#6366f1" },
  "React.js": { className: "text-cyan-500", hex: "#22d3ee" },
  "React Native": { className: "text-sky-500", hex: "#0ea5e9" },
  Expo: { className: "text-slate-600 dark:text-slate-300", hex: "#94a3b8" },
  Vite: { className: "text-purple-500", hex: "#a855f7" },
  "Node.js": { className: "text-green-500", hex: "#22c55e" },
  "Express.js": { className: "text-slate-600 dark:text-slate-200", hex: "#94a3b8" },
  FastAPI: { className: "text-teal-500", hex: "#14b8a6" },
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
    "React Native": ReactIcon,
    Expo: ExpoIcon,
    Vite: ViteIcon,
    "Node.js": NodeIcon,
    "Express.js": ExpressIcon,
    FastAPI: FastAPIIcon,
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
    pillClass:
      "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-700/70 dark:bg-blue-900/30 dark:text-blue-100",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    pillClass:
      "border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-700/70 dark:bg-purple-900/30 dark:text-purple-100",
    items: ["React.js", "React Native", "Expo", "Vite"],
  },
  {
    title: "Backend & APIs",
    pillClass:
      "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-700/70 dark:bg-amber-900/30 dark:text-amber-100",
    items: ["Node.js", "Express.js", "FastAPI", "RESTful API Design"],
  },
  {
    title: "Databases & Storage",
    pillClass:
      "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-700/70 dark:bg-emerald-900/30 dark:text-emerald-100",
    items: ["MongoDB", "Firebase Realtime DB", "Supabase (PostgreSQL)"],
  },
  {
    title: "Tooling",
    pillClass:
      "border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-700/70 dark:bg-slate-900/30 dark:text-slate-100",
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
    <span
      className={`px-4 py-2 rounded-full border shadow-sm inline-flex items-center gap-2 ${pillClass}`}
      style={{ boxShadow: `0 0 0 1px ${accentHex}20, 0 6px 12px -6px ${accentHex}${outerAlpha}, 0 12px 28px -14px ${accentHex}${innerAlpha}` }}
    >
      <span className={`flex items-center justify-center ${sizeClass}`}>
        <span className={accent}>{iconFor(label, sizeClass)}</span>
      </span>
      <span className={`font-semibold ${accent}`}>{label}</span>
    </span>
  );
};

const TechStackSection = () => (
  <section id="skills" className="section-block max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-semibold mb-6">Skills & Tech</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category) => (
        <div
          key={category.title}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800"
        >
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">{category.title}</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {category.items.map((item) => (
              <Pill key={item} label={item} pillClass={category.pillClass} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechStackSection;
