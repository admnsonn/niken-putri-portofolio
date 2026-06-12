import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsGallery from "./components/ProjectsGallery";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { GraduationCap, ArrowUp, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for active navigation highlighting & showing Back-To-Top button
  useEffect(() => {
    const sections = ["hero", "tentang", "pengalaman", "proyek", "kompetensi", "testimoni", "kontak"];
    
    const handleScroll = () => {
      // Back to top visible check
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current scroll position
      const scrollPosition = window.scrollY + 200; // Offset for section top detection
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] flex flex-col selection:bg-education-100 selection:text-education-900" id="app-root">
      
      {/* 1. Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* 2. Main Sections layout */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <ProjectsGallery />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      {/* 3. Aesthetic Educational Footer */}
      <footer className="bg-brand-900 text-white pt-16 pb-8 border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Left Box - Branding info */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2" id="footer-branding-label">
                <div className="p-2 bg-white/10 rounded-xl text-amber-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-serif text-lg font-bold tracking-tight">
                  Portofolio Niken Putri Melani, S.Pd.
                </span>
              </div>
              <p className="text-xs text-brand-200 max-w-md leading-relaxed">
                Pendidikan Guru Sekolah Dasar (PGSD) lulusan Universitas Pendidikan Indonesia. Berfokus pada pilar pendidikan interaktif, integrasi digital sehat, serta pembentukan akhlak mulia sejak tingkat dasar pembelajaran.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-brand-300">
                <Sparkles className="w-4.5 h-4.5 text-amber-300" />
                <span>NPSN / BNSP Certified Operator</span>
              </div>
            </div>

            {/* Middle Box - Easy Anchor Directory */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-300">
                Peta Navigasi
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-xs">
                <li>
                  <a href="#hero" className="text-brand-200 hover:text-white transition-colors duration-200">Mulai</a>
                </li>
                <li>
                  <a href="#tentang" className="text-brand-200 hover:text-white transition-colors duration-200">Bio Guru</a>
                </li>
                <li>
                  <a href="#pengalaman" className="text-brand-200 hover:text-white transition-colors duration-200">Pengalaman</a>
                </li>
                <li>
                  <a href="#proyek" className="text-brand-200 hover:text-white transition-colors duration-200">Galeri Karya</a>
                </li>
                <li>
                  <a href="#kompetensi" className="text-brand-200 hover:text-white transition-colors duration-200">Kompetensi</a>
                </li>
                <li>
                  <a href="#testimoni" className="text-brand-200 hover:text-white transition-colors duration-200">Apresiasi</a>
                </li>
                <li>
                  <a href="#kontak" className="text-brand-200 hover:text-white transition-colors duration-200">Hubungi</a>
                </li>
              </ul>
            </div>

            {/* Right Box - Support Signature */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-300">
                Hubungkan Sinergi
              </h4>
              <p className="text-xs text-brand-200 leading-relaxed">
                Niken Putri Melani siap berkontribusi meluaskan wawasan bernumerasi dan berliterasi di sekolah Anda.
              </p>
              <div className="pt-2 text-xs font-bold text-brand-100">
                Email: nikenputri095@gmail.com
              </div>
            </div>

          </div>

          <hr className="border-brand-800 my-6" />

          {/* Sub Footer rights */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-300">
            <p>© {new Date().getFullYear()} Niken Putri Melani. All rights reserved.</p>
            <p className="flex items-center gap-1.5 font-semibold">
              <span>Dibuat dengan penuh</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>untuk Pendidikan Anak Sekolah Dasar</span>
            </p>
          </div>

        </div>
      </footer>

      {/* Floating Scroll To Top interactive widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-education-600 hover:bg-education-700 text-white rounded-full shadow-lg cursor-pointer hover:-translate-y-1 duration-200 transition-all border border-white/20"
            aria-label="Kembali ke Atas"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
