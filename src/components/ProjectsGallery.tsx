import { useState } from "react";
import { projectList } from "../data";
import { Project } from "../types";
import { Sparkles, ArrowRight, X, AlertCircle, Lightbulb, TrendingUp, Cpu, Calendar, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "Semua",
    "Alat Peraga",
    "Pembelajaran Digital",
    "Literasi & Numerasi",
    "Ekstrakurikuler",
  ];

  const filteredProjects = selectedCategory === "Semua"
    ? projectList
    : projectList.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyek" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-education-600 uppercase tracking-widest bg-education-50 px-3.5 py-1.5 rounded-full border border-education-200">
            Galeri Karya & Project Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950 mt-4 tracking-tight" id="gallery-heading">
            Proyek Pembelajaran Terbaru & Terpilih
          </h2>
          <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto">
            Kumpulan instrumen pedagogis, media interaktif, dan modul pembelajaran inovatif yang saya desain khusus untuk mengoptimalkan potensi siswa.
          </p>
          <div className="w-16 h-1 bg-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-education-600 text-white shadow-md shadow-education-100"
                  : "bg-brand-50 text-brand-800 hover:bg-brand-100 border border-brand-200/50"
              }`}
            >
              {cat === "Semua" ? "Semua Proyek" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with Staggered Elements */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col h-full bg-brand-50 hover:bg-white rounded-3xl border border-brand-200 shadow-xs hover:shadow-md hover:-translate-y-1 duration-300 overflow-hidden relative"
              >
                {/* Colored Top Theme bar */}
                <div className={`h-2 bg-gradient-to-r ${project.colorTheme}`} />

                {/* Cover Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-200">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 duration-500"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-brand-900 border border-brand-200/50 text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {project.category}
                  </span>

                  {/* Recognition/Achievement overlay badge */}
                  {project.achievementBadge && (
                    <span className="absolute bottom-4 right-4 bg-education-600 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-brand-200 fill-brand-200" />
                      {project.achievementBadge}
                    </span>
                  )}
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-brand-950 leading-snug group-hover:text-education-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* Tools snippet preview */}
                  <div className="flex flex-wrap gap-1 mt-4 mb-5">
                    {project.tools.slice(0, 3).map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold text-brand-800 bg-brand-100 border border-brand-200/40 px-2 py-0.5 rounded-full">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA Text button click */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    id={`view-details-${project.id}`}
                    className="w-full py-2.5 bg-white group-hover:bg-education-600 group-hover:text-white border border-brand-200 hover:border-education-600 rounded-xl text-xs font-bold text-brand-900 flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs"
                  >
                    <span>Pelajari Rincian Karya</span>
                    <ArrowRight className="w-3.5 h-3.5 duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Lightbox Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="project-detail-modal">
              {/* Backing Backdrop filter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              {/* Modal Container Positioning */}
              <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl relative overflow-hidden flex flex-col"
                >
                  
                  {/* Top color strap */}
                  <div className={`h-2.5 bg-gradient-to-r ${selectedProject.colorTheme}`} />

                  {/* Close button placement */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    id="close-modal-btn"
                    className="absolute top-4 right-4 z-20 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 rounded-full shadow-md transition-colors duration-200 cursor-pointer focus:outline-none"
                    aria-label="Tutup Rincian"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-y-auto max-h-[85vh]">
                    
                    {/* Left pane: Image & metadata badges */}
                    <div className="md:col-span-5 bg-slate-50 p-6 flex flex-col justify-between border-r border-slate-100">
                      <div className="space-y-4">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                          <img
                            src={selectedProject.imageUrl}
                            alt={selectedProject.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-extrabold uppercase bg-education-50 text-education-700 border border-education-200/50 px-3 py-1 rounded-full tracking-wide">
                            {selectedProject.category}
                          </span>
                        </div>

                        {selectedProject.achievementBadge && (
                          <div className="p-3 bg-brand-50 rounded-xl border border-brand-200 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-brand-500 shrink-0 fill-brand-500" />
                            <span className="text-xs font-bold text-brand-900 leading-tight">
                              Sertifikat Penghargaan: {selectedProject.achievementBadge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Tools & utilities footer block */}
                      <div className="mt-8">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2.5">
                          Metode & Media Digunakan
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tools.map((tool, idx) => (
                            <span key={idx} className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right pane: Core narrative descriptions (Problem, Solution, Impact) */}
                    <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-950">
                          {selectedProject.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <hr className="border-slate-100" />

                      {/* Grid for Problem / Solution / Impact blocks */}
                      <div className="space-y-4">
                        
                        {/* 1. Tantangan di Kelas (Problem) */}
                        <div className="flex gap-3">
                          <div className="p-2 bg-red-50 text-red-600 rounded-xl shrink-0 h-fit">
                            <AlertCircle className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider">Tantangan Lapangan</h4>
                            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                              {selectedProject.problem}
                            </p>
                          </div>
                        </div>

                        {/* 2. Solusi Kreatif (Solution) */}
                        <div className="flex gap-3">
                          <div className="p-2 bg-education-50 text-education-600 rounded-xl shrink-0 h-fit">
                            <Lightbulb className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-education-600 uppercase tracking-wider">Solusi Pedagogis</h4>
                            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                              {selectedProject.solution}
                            </p>
                          </div>
                        </div>

                        {/* 3. Dampak Terukur (Impact) */}
                        <div className="flex gap-3">
                          <div className="p-2 bg-brand-100 text-brand-500 rounded-xl shrink-0 h-fit">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-brand-500 uppercase tracking-wider">Dampak & Hasil Terukur</h4>
                            <p className="text-xs sm:text-sm font-bold text-brand-950 mt-1 leading-relaxed">
                              {selectedProject.impact}
                            </p>
                          </div>
                        </div>

                      </div>

                      {/* Modal Footer */}
                      <div className="pt-4 flex justify-end">
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="px-5 py-2.5 bg-brand-800 hover:bg-brand-900 text-white rounded-xl text-xs font-bold transition-all duration-200 shadow-sm cursor-pointer"
                        >
                          Tutup Rincian
                        </button>
                      </div>

                    </div>

                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
