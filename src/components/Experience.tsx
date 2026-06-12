import { experienceList } from "../data";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 bg-brand-50 relative border-t border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-education-600 uppercase tracking-widest bg-education-50 px-3.5 py-1.5 rounded-full border border-education-200">
            Jejak Karya & Pengabdian
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950 mt-4 tracking-tight">
            Pengalaman Profesional Pengajaran
          </h2>
          <div className="w-16 h-1 bg-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-brand-200/80 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experienceList.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start"
              >
                {/* Desktop timeline marker ball */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full bg-white border-4 border-education-500 shadow-md hidden sm:flex items-center justify-center z-10 transition-transform duration-300 hover:scale-125" />

                {/* Left side column (blank or description based on alignment) */}
                <div className="w-full sm:w-1/2 sm:pr-8 text-left sm:text-right hidden sm:block">
                  <div className="space-y-2 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-education-600 bg-education-50 border border-education-200 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <p className="text-sm font-semibold text-slate-500 mt-2 flex items-center justify-end gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-500" />
                      {exp.location}
                    </p>
                    <div className="mt-4 p-4 rounded-2xl bg-white border border-brand-200/50 inline-block text-left shadow-xs">
                      <p className="text-xs text-slate-500 font-medium max-w-xs">
                        Kontribusi aktif langsung di sekolah dasar penugasan guna mengakomodasi amanat Merdeka Belajar Kementerian RI.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side card */}
                <div className="w-full sm:w-1/2 sm:pl-8 pl-8 relative">
                  {/* Mobile timeline bullet indicator */}
                  <div className="absolute left-0 top-1.5 w-4.5 h-4.5 rounded-full bg-white border-4 border-education-500 shadow-sm sm:hidden" />

                  <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-education-500" />
                    
                    {/* Role Title */}
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-brand-950 leading-tight">
                      {exp.role}
                    </h3>

                    {/* School / Company Organization */}
                    <h4 className="font-sans text-sm font-bold text-brand-700 mt-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-brand-500" />
                      {exp.organization}
                    </h4>

                    {/* Mobile Period and Location info display */}
                    <div className="flex flex-col gap-2 mt-3 sm:hidden text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1.5 font-bold text-education-600 bg-education-50 border border-education-200 px-2.5 py-1 rounded-full w-fit">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-500" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Experience Highlights bullet items */}
                    <div className="mt-6 space-y-3">
                      <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">Hasil Kontribusi Utama:</span>
                      <ul className="space-y-3">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <CheckCircle2 className="w-4.5 h-4.5 text-education-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certified Banner */}
                    <div className="mt-6 p-3 bg-brand-50 rounded-xl border border-dashed border-brand-300 flex items-center gap-2">
                      <Award className="w-5 h-5 text-brand-500 shrink-0" />
                      <span className="text-[10px] font-bold text-brand-900 leading-tight">
                        Disertai surat tugas sertifikasi dari Kemendikbudristek RI sebagai Alumni Berkontribusi Baik.
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
