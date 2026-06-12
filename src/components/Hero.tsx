import { profileData } from "../data";
import { Mail, Phone, MapPin, Linkedin, Sparkles, BookOpen, GraduationCap, Award } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-brand-50 via-warm-accent-50/20 to-education-50/40"
    >
      {/* Playful academic decorative shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-amber-100 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-education-100 rounded-full filter blur-3xl opacity-40 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Hero content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Soft Greeting Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 rounded-full bg-education-100 text-education-700 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm border border-education-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Halo! Saya Niken</span>
            </div>

            {/* Main Name & Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-950 font-bold tracking-tight leading-tight mb-4 animate-fade-in" id="hero-title">
              Mendidik dengan <span className="text-education-600 italic">Hati</span> & <span className="text-brand-500 relative inline-block">Kreativitas<span className="absolute left-0 bottom-0.5 w-full h-[6px] bg-warm-accent-300 -z-10 rounded-full" /></span>
            </h1>

            <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-brand-850 tracking-tight mb-4">
              {profileData.name}
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed mb-8">
              {profileData.subTitle}. Berkomitmen penuh dalam menciptakan pembelajaran interaktif, membangun karakter luhur anak, serta menyulap materi berhitung dan membaca menjadi petualangan belajar yang ceria.
            </p>

            {/* Quick Contact & Bio Details Icons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-slate-600 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-brand-200">
                <div className="p-2 bg-brand-100 text-brand-700 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold">{profileData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-brand-200">
                <div className="p-2 bg-brand-100 text-brand-700 rounded-lg">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold">S1 PGSD - UPI (IPK 3.81)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-brand-200">
                <div className="p-2 bg-brand-100 text-brand-700 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${profileData.email}`} className="text-xs font-semibold hover:text-education-600 transition-colors duration-200 select-all">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-brand-200">
                <div className="p-2 bg-brand-100 text-brand-700 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${profileData.phone}`} className="text-xs font-semibold hover:text-education-600 transition-colors duration-200 select-all">
                  {profileData.phone}
                </a>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#proyek"
                id="hero-view-works-btn"
                className="px-6 py-3.5 bg-education-600 text-white rounded-xl shadow-lg shadow-education-100 font-bold text-sm text-center tracking-wide hover:bg-education-700 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                Lihat Galeri Karya
              </a>
              <a
                href="#kontak"
                id="hero-contact-btn"
                className="px-6 py-3.5 bg-brand-100 text-brand-850 hover:bg-brand-200 rounded-xl font-bold text-sm text-center tracking-wide duration-200 border border-brand-200 cursor-pointer hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Hubungi Saya & Hubungkan
              </a>
            </div>

            {/* LinkedIn fast touch */}
            <div className="mt-6 flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Ikuti di LinkedIn:</span>
              <a
                href={profileData.linkedIn}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className="p-1 px-3 bg-brand-50 hover:bg-education-100 border border-brand-200 text-education-600 hover:text-education-700 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5"
              >
                <Linkedin className="w-3 h-3" />
                <span>Niken Putri Melani</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Profile Illustration / Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Children Scribble Frame Background */}
              <div className="absolute -inset-4 bg-amber-100 rounded-[36px] -rotate-3 border-2 border-dashed border-amber-300 -z-10" />
              <div className="absolute -inset-1 bg-education-100 rounded-[36px] rotate-2 -z-10 shadow-lg border border-education-200" />
              
              {/* Cute Badge 1 */}
              <div className="absolute -top-4 -right-2 bg-white px-3 py-2 rounded-xl shadow-md border border-brand-200 rotate-6 flex items-center gap-1.5 z-20">
                <div className="p-1 bg-amber-100 text-amber-500 rounded-full">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-extrabold text-brand-900 leading-none">Lulusan Terbaik UPI</span>
              </div>

              {/* Cute Badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-white px-3.5 py-2.5 rounded-xl shadow-md border border-brand-200 -rotate-6 flex items-center gap-1.5 z-20">
                <div className="p-1 bg-education-100 text-education-600 rounded-full">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold text-brand-900 leading-none">IPK 3.81</span>
                  <span className="text-[8px] font-bold text-slate-500 mt-0.5">Cum-Laude Honor</span>
                </div>
              </div>

              {/* Core Image Container */}
              <div className="overflow-hidden rounded-[30px] border-[6px] border-white shadow-xl relative aspect-square bg-[#ebdcc3]">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  id="hero-profile-avatar-img"
                  onError={(e) => {
                    // Fallback if the image doesn't load
                    e.currentTarget.src = "";
                  }}
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white rounded-full shadow-md border border-brand-200 flex items-center justify-center text-amber-500 rotate-12">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
