import { useState } from "react";

type HeaderProps = {};

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
];

const Header = ({}: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 manga-bg border-b-2 manga-border">
      <div className="w-full px-6 flex items-center justify-between h-16">
        <a href="#" className="manga-title text-base md:text-lg font-semibold tracking-[0.1em] whitespace-nowrap manga-ink">
          Axel Paredes
        </a>

        <div className="flex items-center gap-4 ml-auto">
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] manga-ink">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
            <a href="/Resume.pdf" download="Axel_Paredes_Resume.pdf" className="flex items-center gap-2 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Resume
            </a>
          </nav>

          <a href="#contact" className="hidden lg:inline-flex manga-outline-button text-xs">
            Contact
          </a>

          <button
            className="md:hidden p-2 border-2 manga-border manga-ink"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t-2 manga-border manga-bg">
          <nav className="px-6 flex flex-col gap-4 py-6 text-xs font-semibold uppercase tracking-[0.18em] manga-ink">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline" onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
            <a href="/Resume.pdf" download="Axel_Paredes_Resume.pdf" className="flex items-center gap-2 hover:underline" onClick={handleNavClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Resume
            </a>
            <a href="#contact" className="manga-button text-xs" onClick={handleNavClick}>
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;