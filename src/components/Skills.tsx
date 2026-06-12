import { skillCategories } from "../data";
import {
  GraduationCap,
  Laptop,
  Languages,
  Heart,
  Award,
  CheckSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  // Simple icon selector mapper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5" />;
      case "Laptop":
        return <Laptop className="w-5 h-5" />;
      case "Languages":
        return <Languages className="w-5 h-5" />;
      case "Heart":
        return <Heart className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return "bg-education-50 text-education-600 border-education-200/60";
      case "Laptop":
        return "bg-blue-50 text-blue-600 border-blue-200/60";
      case "Languages":
        return "bg-purple-50 text-purple-600 border-purple-200/60";
      case "Heart":
        return "bg-rose-50 text-rose-600 border-rose-200/60";
      default:
        return "bg-brand-50 text-brand-600 border-brand-200/60";
    }
  };

  return (
    <section
      id="kompetensi"
      className="py-20 bg-brand-50 relative border-t border-b border-brand-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-education-600 uppercase tracking-widest bg-education-50 px-3.5 py-1.5 rounded-full border border-education-200">
            Keahlian & Sertifikasi
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold text-brand-950 mt-4 tracking-tight"
            id="skills-heading"
          >
            Matriks Kompetensi Pendidik
          </h2>
          <div className="w-16 h-1 bg-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Responsive Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-200 shadow-xs hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Corner soft circle decal */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-50 rounded-full -z-1" />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2.5 rounded-xl border ${getCategoryColor(cat.iconName)}`}
                >
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="font-sans text-base sm:text-lg font-bold text-brand-950">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags layout */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-brand-50 hover:bg-education-50 hover:text-education-700 hover:border-education-200 border border-brand-200/50 transition-colors duration-200"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-education-500 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Certification Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-brand-800 via-brand-700 to-brand-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden ring-1 ring-brand-700/30"
        >
          {/* Decorative subtle background overlay */}
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-brand-900 rounded-full filter blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-600/25 text-white text-[11px] font-bold uppercase tracking-widest shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Sertifikasi Nasional Resmi</span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight">
                Junior Office Operator (BNSP)
              </h3>
              <p className="text-sm sm:text-base text-brand-100 max-w-xl leading-relaxed">
                Diakreditasi secara resmi oleh Badan Nasional Sertifikasi
                Profesi (BNSP), menandakan kompetensi teknis profesional dan
                andal dalam operasional perkantoran, manipulasi pengolah data,
                dan administrasi digital sekolah dasar.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 inline-flex items-center gap-4">
                <Award className="w-12 h-12 text-white shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white uppercase leading-none">
                    Penyelenggara
                  </span>
                  <span className="text-sm font-extrabold text-white mt-1">
                    LSP BNSP RI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
