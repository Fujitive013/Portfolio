import { motion } from "framer-motion";
import TopcitIcon from "../assets/TOPCIT-G.svg";
import SupportZebraIcon from "../assets/supportzebra.png";
import LivroLogo from "../assets/livro logo.png";

const certs = [
  {
    title: "Livro Systems Inc.",
    issuer: "Livro Systems Inc.",
    details: "Internship Completion (486 hours)",
    year: "2026",
    icon: LivroLogo,
  },
  {
    title: "12th TOPCIT Philippines",
    issuer: "Institute for Information & Communications Technology Promotion (IITP)",
    details: "Level 3 Certification",
    year: "2025",
    icon: TopcitIcon,
  },
  {
    title: "SupportZebra AI Talk Workshop",
    issuer: "SupportZebra",
    details: "Certificate of Participation",
    year: "2025",
    icon: SupportZebraIcon,
  },
  // You can easily add more here, like your Coding Competition participation
];

const CertificationsSection = () => (
  <section id="certifications" className="section-block">
    <div className="manga-panel">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="manga-title text-2xl font-bold mb-2">Certifications & Awards</h2>
        <p className="text-sm manga-muted-text">Validated skills and industry participation.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="manga-panel"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 border-2 manga-border manga-bg flex items-center justify-center">
                {cert.icon ? (
                  <img
                    src={cert.icon}
                    alt={cert.title}
                    className="w-10 h-10 object-contain"
                    style={cert.title.includes("TOPCIT") ? { filter: "brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(4073%) hue-rotate(343deg) brightness(92%) contrast(93%)" } : undefined}
                  />
                ) : (
                  <span className="text-2xl">*</span>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-sm manga-muted-text mb-3">{cert.issuer}</p>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <span className="px-2 py-1 border-2 manga-border manga-bg">{cert.details}</span>
                  <span className="manga-caption">{cert.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;