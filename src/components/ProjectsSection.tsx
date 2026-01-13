import React, { useMemo, useState } from "react";

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

  const slide = useMemo(() => projects[index], [index]);

  const handleNext = () => setIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="section-block max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Real-world applications in ML, Backend, and Full Stack Development.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="group flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-all"
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="group flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-all"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all">
        {/* Main Card Content */}
        <div key={index} className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] animate-fadeIn">
          
          {/* Left Side: Details */}
          <div className="lg:col-span-8 p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  Project 0{index + 1}
                </span>
                <a 
                  href={slide.repoUrl}
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  View Repository ↗
                </a>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {slide.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {slide.description}
              </p>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {slide.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights List */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {slide.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Metrics Panel */}
          <div className="lg:col-span-4 bg-gray-50 dark:bg-gray-800/50 p-8 border-l border-gray-200 dark:border-gray-800 flex flex-col justify-center">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Project Metrics
            </h4>
            <div className="grid grid-cols-1 gap-6">
              {Object.entries(slide.metrics).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{key}</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white font-mono">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar Indicators */}
        <div className="bg-gray-50 dark:bg-gray-800/80 px-8 py-4 flex items-center justify-center gap-2 border-t border-gray-200 dark:border-gray-800">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-12 bg-emerald-500' : 'w-4 bg-gray-300 dark:bg-gray-600 hover:bg-emerald-300'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;