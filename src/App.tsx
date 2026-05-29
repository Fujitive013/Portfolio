import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/CertificationsSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 7.07-1.41-1.41M8.34 6.34 6.93 4.93m0 14.14 1.41-1.41m9.32-9.32 1.41-1.41" />
  </svg>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 manga-page">
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <TechStackSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle color theme"
          className="fixed bottom-6 right-6 z-30 h-12 w-12 manga-fab flex items-center justify-center transition"
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </div>
  );
}

export default App;
