import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ShieldCheck, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const majors = [
    { id: 'TKJ', name: 'Teknik Komputer & Jaringan', icon: '💻', image: 'https://picsum.photos/seed/smk-tkj-lab-students/400/300' },
    { id: 'DKV', name: 'Desain Komunikasi Visual', icon: '🎨', image: 'https://picsum.photos/seed/imac-design-studio-desk/400/300' },
    { id: 'AKL', name: 'Akuntansi & Keuangan Lembaga', icon: '📊', image: 'https://picsum.photos/seed/accounting-calculator-writing/400/300' },
    { id: 'BC', name: 'Broadcasting & Perfilman', icon: '🎥', image: 'https://picsum.photos/seed/broadcasting-video-camera/400/300' },
    { id: 'MPLB', name: 'Manajemen Perkantoran & Layanan Bisnis', icon: '🏢', image: 'https://picsum.photos/seed/office-admin-student-hijab/400/300' },
    { id: 'BD', name: 'Bisnis Digital', icon: '🛒', image: 'https://picsum.photos/seed/digital-business-laptop-icons/400/300' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-xl shadow-primary-200 border-2 border-white">
              <BookOpen size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight text-slate-900 leading-none">SMK PRIMA UNGGUL</span>
              <span className="text-[10px] font-bold text-primary-600 tracking-[0.2em] uppercase mt-1">Academic & Vocational</span>
            </div>
          </div>
          <Link to="/login" className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-100">
            Login Sistem
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-bold mb-6">
              Pendaftaran Tahun Ajaran 2026/2027 Telah Dibuka
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Unggul dalam <span className="text-primary-600">Prestasi</span>, Berkarakter & Mandiri.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              SMK Prima Unggul berkomitmen mencetak lulusan yang siap kerja, inovatif, dan memiliki integritas tinggi di era industri 4.0.
            </p>
            <div className="flex gap-4">
              <Link to="/login" className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-700 transition shadow-xl shadow-primary-200">
                Absensi <ChevronRight size={20} />
              </Link>
              <button className="bg-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition">
                Profil Sekolah
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-50 rounded-full blur-[100px]" />
            <img 
              src="https://picsum.photos/seed/vocational-school-classroom/800/600" 
              alt="SMK Prima Unggul" 
              className="rounded-[3rem] shadow-2xl border-8 border-white object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Siswa Aktif', value: '1500+' },
            { label: 'Guru Ahli', value: '100+' },
            { label: 'Mitra Industri', value: '500+' },
            { label: 'Lulusan Bekerja', value: '95%' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-black text-primary-600 mb-2">{stat.value}</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Majors Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Program Keahlian</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Kami menyediakan berbagai pilihan jurusan yang relevan dengan kebutuhan industri saat ini.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {majors.map((major, idx) => (
              <motion.div 
                key={major.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={major.image} 
                    alt={major.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {major.icon}
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{major.name}</h3>
                  <p className="text-primary-600 font-bold text-sm uppercase tracking-widest">{major.id}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Showcasing Majors */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Galeri Kegiatan Jurusan</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Dokumentasi aktivitas praktik dan pembelajaran di setiap program keahlian kami.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majors.map((major, idx) => (
              <motion.div 
                key={major.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-xl group"
              >
                <img 
                  src={major.image} 
                  alt={major.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent flex flex-col justify-end p-8">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl mb-4 border border-white/30">
                    {major.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">{major.name}</h3>
                  <p className="text-primary-100 text-sm font-bold uppercase tracking-widest">{major.id}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Hubungi Kami</h2>
              <p className="text-primary-100 mb-10 text-lg">Siap bergabung dengan keluarga besar SMK Prima Unggul? Kami menunggu kehadiran Anda.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"><MapPin size={24} /></div>
                  <p className="font-medium">Jl. Raden Patah No.98, Parung Serab, Ciledug, Tangerang</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"><Phone size={24} /></div>
                  <p className="font-medium">(021) 7320184</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"><Mail size={24} /></div>
                  <p className="font-medium">info@smkprimaunggul.sch.id</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
              <form className="space-y-4">
                <input type="text" placeholder="Nama Lengkap" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20" />
                <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20" />
                <textarea placeholder="Pesan Anda" rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20"></textarea>
                <button className="w-full bg-white text-primary-600 font-black py-4 rounded-xl hover:bg-primary-50 transition">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-slate-100">
        <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">&copy; 2024 SMK PRIMA UNGGUL • KOTA TANGERANG</p>
      </footer>
    </div>
  );
}
