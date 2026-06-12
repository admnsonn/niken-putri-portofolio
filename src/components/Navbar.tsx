import { useState, useEffect } from "react";
import { BookOpen, Menu, X, Landmark, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Mulai" },
    { id: "tentang", label: "Bio" },
    { id: "pengalaman", label: "Pengalaman" },
    { id: "proyek", label: "Galeri Karya" },
    { id: "kompetensi", label: "Kompetensi" },
    { id: "testimoni", label: "Apresiasi" },
    { id: "kontak", label: "Hubungi" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-50/90 backdrop-blur-md shadow-md border-b border-brand-200/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="p-2 bg-education-100 text-education-600 rounded-xl group-hover:bg-education-500 group-hover:text-white transition-colors duration-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-sm tracking-tight text-brand-900 group-hover:text-education-600 transition-colors duration-300">
                Niken Putri Melani
              </span>
              <span className="font-sans font-medium text-[10px] tracking-wide text-brand-500 uppercase">
                S.Pd. Guru Sekolah Dasar
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`nav-${item.id}`}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-education-500 text-white shadow-sm"
                    : "text-brand-800 hover:bg-brand-100 hover:text-brand-900"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              id="nav-consult-btn"
              className="ml-4 px-4 py-2 text-xs font-bold text-white bg-brand-800 hover:bg-brand-900 rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
            >
              Undang Mengajar
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-brand-800 hover:bg-brand-100 hover:text-brand-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-education-400"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer with framer-motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-brand-50 border-b border-brand-200 shadow-inner"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  id={`nav-mob-${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-education-500 text-white shadow-sm"
                      : "text-brand-800 hover:bg-brand-100 hover:text-brand-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#kontak"
                  id="nav-mob-consult-btn"
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full px-4 py-2.5 font-bold text-white bg-brand-800 hover:bg-brand-900 rounded-lg shadow-sm transition-all duration-200"
                >
                  Undang Mengajar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
