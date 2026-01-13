import TopcitIcon from "../assets/TOPCIT-G.svg";
import SupportZebraIcon from "../assets/supportzebra.png";

const certs = [
  {
    title: "12th TOPCIT Philippines",
    issuer: "Institute for Information & Communications Technology Promotion (IITP)",
    details: "Level 3 Certification",
    year: "2025",
    color: "text-rose-700 dark:text-rose-300",
    bgColor: "bg-rose-50 dark:bg-rose-900/30",
    icon: TopcitIcon,
  },
  {
    title: "SupportZebra AI Talk Workshop",
    issuer: "SupportZebra",
    details: "Certificate of Participation",
    year: "2025",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    icon: SupportZebraIcon,
  },
  // You can easily add more here, like your Coding Competition participation
];

const CertificationsSection = () => (
  <section id="certifications" className="section-block max-w-6xl mx-auto px-6 py-16">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications & Awards</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Validated skills and industry participation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certs.map((cert, index) => (
        <div 
          key={index}
          className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
        >
          {/* Icon Box */}
          {cert.icon ? (
            <img
              src={cert.icon}
              alt={cert.title}
              className="h-12 w-12 shrink-0 object-contain"
              style={cert.title.includes("TOPCIT") ? { filter: "brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(4073%) hue-rotate(343deg) brightness(92%) contrast(93%)" } : undefined}
            />
          ) : (
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${cert.bgColor} ${cert.color}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.612-3.125 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
              </svg>
            </div>
          )}

          {/* Text Content */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {cert.issuer}
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-700 dark:text-gray-200">{cert.details}</span>
              <span>•</span>
              <span>{cert.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CertificationsSection;