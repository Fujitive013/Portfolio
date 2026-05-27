import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "RideAlert ML - High-Precision GPS Correction Pipeline",
    description: "Advanced machine learning pipeline for smartphone GPS correction using Gradient Boosting Regressor. Trained on the Smartphone Decimeter Challenge 2023 dataset to achieve sub-10 meter GPS accuracy through offset-based correction learning and multi-sensor fusion (GNSS + IMU).",
    technologies: ["Python", "Jupyter", "scikit-learn", "Gradient Boosting", "pandas", "Folium", "Matplotlib"],
    repoUrl: "https://github.com/Fujitive013/ML-code-RideAlert",
    highlights: [
      "Achieved sub-10m mean GPS accuracy (80%+ predictions under 10m).",
      "Engineered 15+ features from multi-sensor fusion: GNSS (SNR, Azimuth) + IMU (Accel/Gyro).",
      "Implemented offset-based correction learning: corrected_lat = wls_lat + Δlat_prediction.",
      "Created interactive Folium visualizations comparing raw vs. corrected GPS tracks.",
      "Applied domain filtering (Speed ≤15m/s) targeting city bus applications."
    ],
    metrics: {
      "Mean Accuracy": "<10m",
      "Predictions <10m": "80%+",
      "Features": "15+",
      "Model": "Gradient Boosting"
    }
  },
  {
    title: "RideAlert Backend - Real-Time Vehicle Tracking API",
    description: "FastAPI-based microservice architecture for real-time vehicle tracking. Integrates the ML-powered GPS correction model to process raw IoT data and broadcast corrected coordinates via WebSockets. Features comprehensive fleet management and persistent tracking logs.",
    technologies: ["Python", "FastAPI", "MongoDB", "WebSocket", "Docker", "Firebase FCM", "JWT", "scikit-learn"],
    repoUrl: "https://github.com/IvannEmmanuel/RideAlert-Backend",
    highlights: [
      "Architected WebSocket system for real-time location broadcasting to fleet channels.",
      "Integrated Gradient Boosting model achieving sub-10m accuracy in production.",
      "Designed memory-optimized ML pipeline reducing usage by ~50%.",
      "Built dual-coordinate logging (Raw vs. ML-Corrected) for validation.",
      "Implemented 500m proximity alerts using Haversine distance calculations."
    ],
    metrics: {
      "GPS Accuracy": "Sub-10m",
      "Endpoints": "30+",
      "Latency": "<50ms",
      "Mem Reduction": "50%"
    }
  },
  {
    title: "SmartVote - Secure Digital Voting Platform",
    description: "Secure, scalable RESTful API for digital election management. Features JWT-based authentication, real-time result broadcasting via Socket.io, and strict rate limiting to ensure election integrity and prevent vote manipulation.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Bcrypt", "Docker"],
    repoUrl: "https://github.com/Fujitive013/SmartVote-Backend",
    highlights: [
      "Implemented sliding window rate limiting (3 req/min) to prevent vote bot attacks.",
      "Built real-time election results broadcasting using Socket.io room architecture.",
      "Designed role-based access control (Admin/Voter) with secure session management."
    ],
    metrics: {
      "Rate Limit": "3 req/min",
      "Auth": "JWT + Bcrypt",
      "Real-time": "Socket.io",
      "API Categories": "5"
    }
  },
  {
    title: "Motodachi - Ride-Hailing Platform Backend",
    description: "Full-stack ride-hailing backend supporting dual-role users (Passenger/Driver). Engineered a complex booking state machine with atomic database operations to prevent race conditions and integrated Google Maps API for accurate fare calculation.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Google Maps API", "React Native", "JWT"],
    repoUrl: "https://github.com/Fujitive013/mobile-prog-DP",
    highlights: [
      "Engineered atomic booking state machine (Pending → Accepted → Active → Completed).",
      "Created real-time bidirectional geolocation tracking with 5-second updates.",
      "Integrated Google Maps for geocoding, polyline decoding, and fare calculation.",
      "Built hybrid schema allowing users to transition between Passenger and Driver roles."
    ],
    metrics: {
      "Booking States": "4",
      "Update Interval": "5 sec",
      "User Roles": "Dual (2)",
      "Rating": "Bidirectional"
    }
  }
];

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slide = useMemo(() => projects[index], [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-block">
      <div className="manga-panel">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="manga-title text-2xl font-bold">Featured Projects</h2>
              <p className="text-sm manga-muted-text">Real-world applications in ML, Backend, and Full Stack Development.</p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="manga-outline-button text-xs"
                aria-label="Previous project"
              >
                Prev
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="manga-outline-button text-xs"
                aria-label="Next project"
              >
                Next
              </motion.button>
            </div>
          </div>

          <div className="relative overflow-hidden border-2 manga-border">
            <div className="min-h-[520px] flex flex-col relative">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col gap-6 p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="manga-caption">Project 0{index + 1}</span>
                    <a
                      href={slide.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold uppercase tracking-[0.18em] hover:underline"
                    >
                      View Repository
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold">{slide.title}</h3>

                  <p className="text-base leading-relaxed manga-ink">{slide.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {slide.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold border-2 manga-border manga-bg">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h4 className="manga-caption">Key Highlights</h4>
                    <ul className="mt-3 grid gap-2">
                      {slide.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm manga-ink">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full manga-dot" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t-2 manga-border pt-4">
                    <h4 className="manga-caption">Project Metrics</h4>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                      {Object.entries(slide.metrics).map(([key, value]) => (
                        <div key={key} className="border-2 manga-border p-3">
                          <p className="text-xs uppercase tracking-[0.18em] manga-muted-text">{key}</p>
                          <p className="text-lg font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t-2 manga-border px-6 py-4 flex items-center justify-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-10 bg-[var(--manga-border)]" : "w-4 bg-[var(--manga-muted)]"}`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;