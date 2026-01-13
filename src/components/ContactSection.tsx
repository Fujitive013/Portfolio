import GitHubIcon from "../assets/GitHub.svg";
import LinkedInIcon from "../assets/LinkedIn.svg";

const contacts = [
  {
    title: "LinkedIn",
    subtitle: "linkedin.com/in/axel-paredes",
    href: "https://linkedin.com/in/axel-paredes-4b4679398",
    iconSrc: LinkedInIcon,
    accent: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-200",
    hex: "#2563eb",
  },
  {
    title: "GitHub",
    subtitle: "github.com/Fujitive013",
    href: "https://github.com/Fujitive013",
    iconSrc: GitHubIcon,
    accent: "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white",
    hex: "#111827",
    invertOnDark: true,
  },
  {
    title: "Email",
    subtitle: "paredes.axel456@gmail.com",
    href: "mailto:paredes.axel456@gmail.com",
    iconType: "email",
    accent: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",
    hex: "#10b981",
  },
  {
    title: "Phone",
    subtitle: "+63-926-460-5988",
    href: "tel:+639264605988",
    iconType: "phone",
    accent: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-200",
    hex: "#6366f1",
  },
];

type IconType = "email" | "phone";

const Icon = ({ type, src, invertOnDark }: { type?: IconType; src?: string; invertOnDark?: boolean }) => {
  // UNIFORM SIZE: All icons forced to h-6 w-6
  const iconClasses = `h-6 w-6 shrink-0 ${invertOnDark ? "dark:invert" : ""}`; 

  if (src) {
    return <img src={src} alt="icon" className={`${iconClasses} object-contain`} />;
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <rect x="4" y="5" width="16" height="14" rx="2.2" />
        <path d="m5 7 7 5 7-5" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}>
        <path d="M21 16.5v2a2 2 0 0 1-2.2 2 18.8 18.8 0 0 1-8.2-3.1 18.4 18.4 0 0 1-5.9-5.9A18.8 18.8 0 0 1 1.6 3.2 2 2 0 0 1 3.6 1h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.45 2L6.7 8.9a16.5 16.5 0 0 0 6.4 6.4l1.5-1.05a2 2 0 0 1 2-.45 13.2 13.2 0 0 0 2.7.6 2 2 0 0 1 1.6 1.95Z" />
      </svg>
    );
  }

  return null;
};

const ContactSection = () => {
  const marqueeStyles = { animation: "contactScroll 22s linear infinite" };

  return (
    <section id="contact" className="section-block max-w-6xl mx-auto px-6 py-16 text-gray-900 dark:text-gray-100">
      <style>{`
        @keyframes contactScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact</h2>
      <div className="relative overflow-hidden rounded-2xl bg-white/70 p-4 shadow-sm dark:bg-gray-900/60">
        <div className="flex items-center gap-3 mb-3 px-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
          <p className="text-sm text-gray-600 dark:text-gray-300">Always open to chat — hover/tap to pause and click to connect.</p>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex min-w-[200%] gap-3" style={marqueeStyles}>
            {[...contacts, ...contacts].map((item, idx) => (
              <a
                key={`${item.title}-${idx}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                  className="group flex min-w-[260px] items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800/90"
                onMouseEnter={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) parent.style.animationPlayState = "paused";
                }}
                onMouseLeave={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) parent.style.animationPlayState = "running";
                }}
              >
                {/* UNIFORM CONTAINER: Fixed h-12 w-12 and shrink-0 to prevent squishing */}
                <span
                  className={`h-12 w-12 shrink-0 flex items-center justify-center rounded-lg ${item.accent}`}
                  style={{ boxShadow: `0 0 0 1px ${item.hex}30, 0 8px 18px -10px ${item.hex}77` }}
                >
                  <Icon type={item.iconType as IconType} src={item.iconSrc} invertOnDark={(item as any).invertOnDark} />
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;