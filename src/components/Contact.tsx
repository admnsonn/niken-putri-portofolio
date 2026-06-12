import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Heart, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FeedbackMessage {
  name: string;
  email: string;
  school: string;
  message: string;
  date: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [message, setMessage] = useState("");
  
  const [messages, setMessages] = useState<FeedbackMessage[]>(() => {
    const saved = localStorage.getItem("niken_contact_msgs");
    return saved ? JSON.parse(saved) : [];
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newMsg: FeedbackMessage = {
      name,
      email,
      school: school || "Pribadi / Umum",
      message,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("niken_contact_msgs", JSON.stringify(updated));

    // Reset Form
    setName("");
    setEmail("");
    setSchool("");
    setMessage("");
    
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5600);
  };

  return (
    <section id="kontak" className="py-20 bg-brand-50 relative border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-education-600 uppercase tracking-widest bg-education-50 px-3.5 py-1.5 rounded-full border border-education-200">
            Hubungkan Sinergi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950 mt-4 tracking-tight" id="contact-heading">
            Hubungi Saya & Undang Mengajar
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Tertarik bekerja sama merancang kurikulum sekolah dasar kreatif, mengundang konsultasi program Kampus Merdeka, atau berkonsultasi mengenai media ajar inovatif?
          </p>
          <div className="w-16 h-1 bg-warm-accent-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Block - Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-brand-200 shadow-xs space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-education-600" />
              
              <h3 className="font-sans text-xl font-bold text-brand-950">
                Informasi Kontak Utama
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Mari diskusikan peluang kolaborasi untuk menciptakan masa depan anak Indonesia yang cerah, cerdas, dan bermartabat.
              </p>

              {/* Contact item 1 */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-education-50 text-education-600 rounded-xl border border-education-200/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lokasi Domisili</h4>
                  <p className="text-sm font-bold text-brand-900 mt-0.5">Sumedang, Jawa Barat, Indonesia</p>
                  <p className="text-xs text-slate-500 mt-0.5">Siap mendedikasikan diri untuk area Jawa Barat atau remote.</p>
                </div>
              </div>

              {/* Contact item 2 */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-education-50 text-education-600 rounded-xl border border-education-200/50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Surel Utama (Email)</h4>
                  <a href="mailto:nikenputri095@gmail.com" className="text-sm font-bold text-brand-900 mt-0.5 hover:text-education-600 block transition-colors duration-200 select-all">
                    nikenputri095@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Respon cepat dalam waktu 1x24 jam.</p>
                </div>
              </div>

              {/* Contact item 3 */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-education-50 text-education-600 rounded-xl border border-education-200/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telepon & WhatsApp</h4>
                  <a href="tel:+62895707230104" className="text-sm font-bold text-brand-900 mt-0.5 hover:text-education-600 block transition-colors duration-200 select-all">
                    +62 895-7072-30104
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Tersedia untuk panggilan wawancara langsung.</p>
                </div>
              </div>

              {/* Contact item 4 */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-education-50 text-education-600 rounded-xl border border-education-200/50">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Profil Profesional LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/nikenputrym/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-brand-900 mt-0.5 hover:text-education-600 block transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span>Niken Putri Melani</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Heartwarming educational quote footer badge */}
            <div className="p-6 bg-amber-50 rounded-3xl border border-amber-200 text-center relative overflow-hidden">
              <Heart className="w-8 h-8 text-amber-200 absolute -top-1 -right-1 opacity-60 fill-amber-300" />
              <p className="text-xs font-bold text-brand-900 leading-relaxed italic">
                \"Anak-anak bukanlah wadah yang siap diisi air, melainkan sebuah pelita cahaya yang siap dinyalakan.\"
              </p>
            </div>
          </div>

          {/* Right Block - Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-3xl border border-brand-200 shadow-sm relative">
              <h3 className="font-sans text-xl font-bold text-brand-950 mb-6">
                Kirim Pesan Langsung
              </h3>

              {/* Hearts Notification Alert Banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-education-50 border border-education-200 text-education-800 p-4 rounded-2xl mb-6 flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-education-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-sm block">Yippee! Pesan Anda Berhasil Terkirim!</span>
                      <p className="text-xs text-education-700 mt-1 leading-relaxed">
                        Terima kasih sudah memberikan pesan hangat Anda. Tim guru cilik kami telah menyusun pesan Anda di loker meja Ibu Guru Niken. Tanggapan segera dikirim ke alamat e-mail Anda!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5" id="direct-contact-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullname" className="text-xs font-bold text-slate-700 block mb-1.5">
                      Nama Lengkap Anda <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Ibu Sulastri, S.Pd."
                      className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-education-400 focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="useremail" className="text-xs font-bold text-slate-700 block mb-1.5">
                      Alamat E-mail Anda <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="useremail"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Contoh: principal@sekolah.sch.id"
                      className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-education-400 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="userschool" className="text-xs font-bold text-slate-700 block mb-1.5">
                    Instansi / Sekolah / Universitas (Opsional)
                  </label>
                  <input
                    type="text"
                    id="userschool"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="Contoh: Kepala Sekolah SD Negeri Sumedang 3"
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-education-400 focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="usermessage" className="text-xs font-bold text-slate-700 block mb-1.5">
                    Isi Undangan atau Pesan Anda <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="usermessage"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan detail undangan mengajar, tawaran kerja sama kurikulum, konsultasi media ajar, atau sekadar salam perkenalan hangat..."
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-education-400 focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button wrapper */}
                <button
                  type="submit"
                  id="submit-contact-btn"
                  className="w-full py-3.5 bg-education-600 hover:bg-education-700 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer shadow-md shadow-education-100"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan ke Ibu Guru Niken</span>
                </button>

              </form>

              {/* Logged submittal inbox block for review/persistence feedback */}
              {messages.length > 0 && (
                <div className="mt-10 border-t border-slate-100 pt-8">
                  <div className="flex items-center gap-1.5 mb-4 text-slate-700">
                    <MessageSquare className="w-4 h-4 text-education-600" />
                    <span className="text-xs font-bold uppercase tracking-wider">Loker Pesan Inbox Lokal ({messages.length})</span>
                  </div>
                  <div className="space-y-4 max-h-[240px] overflow-y-auto pr-2">
                    {messages.map((m, mIdx) => (
                      <div key={mIdx} className="p-4 bg-brand-50/70 border border-brand-200 rounded-2xl text-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-brand-900">{m.name}</span>
                          <span className="text-[10px] text-slate-400">{m.date}</span>
                        </div>
                        <div className="text-[10px] font-semibold text-education-600">{m.school} • {m.email}</div>
                        <p className="text-slate-600 leading-relaxed italic">{m.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
