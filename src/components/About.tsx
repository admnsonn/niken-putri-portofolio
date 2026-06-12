import { educationList, profileData } from "../data";
import { GraduationCap, Award, BookOpen, Quote, Calendar, Star, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-education-600 uppercase tracking-widest bg-education-50 px-3.5 py-1.5 rounded-full border border-education-200">
            Profil & Visi Pendidik
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950 mt-4 tracking-tight">
            Mengenal Lebih Dekat Ibu Guru Niken
          </h2>
          <div className="w-16 h-1 bg-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block - Bio & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-sans text-2xl font-bold text-brand-900 leading-tight">
              Dedikasi untuk Dunia Pembelajaran Dasar yang Ceria
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              {profileData.bio}
            </p>

            {/* Custom Interactive Tagline Box */}
            <div className="p-6 bg-brand-50 rounded-2xl border-l-4 border-brand-400 relative overflow-hidden shadow-sm">
              <Quote className="w-10 h-10 text-brand-200 absolute -top-2 -right-2 opacity-50" />
              <p className="font-serif italic text-base sm:text-lg text-brand-800 leading-relaxed relative z-10">
                {profileData.tagline}
              </p>
            </div>

            {/* Key Pedagogical Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3">
                <div className="p-1 px-2 bg-education-50 text-education-600 rounded-lg shrink-0 h-fit mt-1">
                  <Star className="w-4 h-4 fill-education-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Pembelajaran Interaktif</h4>
                  <p className="text-xs text-slate-500 mt-1">Menjauhi sistem hafalan searah, mengedepankan praktek manipulatif dan umpan balik aktif anak.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-1 px-2 bg-education-50 text-education-600 rounded-lg shrink-0 h-fit mt-1">
                  <Star className="w-4 h-4 fill-education-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Teknologi Terintegrasi</h4>
                  <p className="text-xs text-slate-500 mt-1">Pemanfaatan gawai belajar (EdTech) seperti kuis digital di kelas secara bijak dan sehat.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-1 px-2 bg-education-50 text-education-600 rounded-lg shrink-0 h-fit mt-1">
                  <Star className="w-4 h-4 fill-education-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Surgawi Karakter Mandiri</h4>
                  <p className="text-xs text-slate-500 mt-1">Fokus pada budi pekerti Pancasila, pembentukan kepribadian santun, jujur, dan tekun.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-1 px-2 bg-education-50 text-education-600 rounded-lg shrink-0 h-fit mt-1">
                  <Star className="w-4 h-4 fill-education-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Sinergi Tiga Pilar</h4>
                  <p className="text-xs text-slate-500 mt-1">Kolaborasi aktif yang hangat antara guru di kelas, murid penugasan, dan orang tua murid.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Education Records */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-gradient-to-br from-brand-100 to-brand-50/10 p-6 sm:p-8 rounded-[28px] border border-brand-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-200/20 rounded-full filter blur-xl" />
              
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-brand-700" />
                <h3 className="font-sans text-lg font-bold text-brand-900">Riwayat Pendidikan</h3>
              </div>

              {educationList.map((edu, idx) => (
                <div key={idx} className="space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-800 uppercase tracking-widest bg-brand-200/70 px-2.5 py-1 rounded-md mb-2">
                      <Calendar className="w-3 h-3 text-brand-600" />
                      {edu.period}
                    </span>
                    <h4 className="font-sans text-base font-bold text-brand-950 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-sm font-semibold text-brand-700 mt-1 flex items-center gap-1.5">
                      {edu.institution}
                    </p>
                  </div>

                  {/* GPA Badge */}
                  <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-brand-200/60 inline-flex items-center gap-2">
                    <Award className="w-5 h-5 text-brand-500" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-none">Indeks Prestasi Kumulatif</span>
                      <span className="text-sm font-extrabold text-brand-900 mt-0.5">{edu.gpa}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold text-slate-700 block">Kompetensi Utama & Akademik:</span>
                    <ul className="space-y-2">
                      {edu.highlights.map((hlt, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-600 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-education-500 shrink-0 mt-0.5" />
                          <span>{hlt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
