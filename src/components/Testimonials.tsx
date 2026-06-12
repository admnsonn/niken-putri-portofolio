import { testimonialList } from "../data";
import { Quote, Star, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-education-600 uppercase tracking-widest bg-education-50 px-3.5 py-1.5 rounded-full border border-education-200">
            Apresiasi & Rekomendasi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950 mt-4 tracking-tight" id="testi-heading">
            Kata Mereka Tentang Ibu Guru Niken
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Testimoni jujur dan hangat dari guru pendamping, wali murid, serta keceriaan anak-anak didiknya di sekolah dasar.
          </p>
          <div className="w-16 h-1 bg-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialList.map((testi, idx) => (
            <motion.div
              key={testi.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between bg-brand-50 p-6 sm:p-8 rounded-3xl border border-brand-200 relative shadow-2xs hover:shadow-sm hover:bg-white duration-300"
            >
              {/* Top Row: Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 text-brand-400 fill-brand-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-200 shrink-0" />
              </div>

              {/* Central Quote Text */}
              <p className="font-serif italic text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                “{testi.quote}”
              </p>

              {/* Divider bar */}
              <hr className="border-brand-200/50 my-4" />

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Author Avatar circle with initial */}
                <div className="w-10 h-10 rounded-full bg-education-100 text-education-700 flex items-center justify-center font-bold text-sm border border-education-200">
                  {testi.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs sm:text-sm font-bold text-brand-950">
                    {testi.author}
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs font-semibold text-slate-500">
                    {testi.role} • <span className="text-education-600 font-bold">{testi.relationOrSchool}</span>
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Additional Mini Statistics Overlay banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-4 bg-brand-50 rounded-2xl border border-brand-200 flex flex-wrap gap-6 items-center justify-center text-slate-500 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base text-education-600">30+</span>
            <span>Murid Terbantu Literasi</span>
          </div>
          <div className="h-4 w-[1px] bg-brand-200 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base text-education-600">5+</span>
            <span>Rencana Pokok Pembelajaran Inovatif</span>
          </div>
          <div className="h-4 w-[1px] bg-brand-200 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base text-education-600">100%</span>
            <span>Partisipasi Belajar Aktif</span>
          </div>
        </div>

      </div>
    </section>
  );
}
