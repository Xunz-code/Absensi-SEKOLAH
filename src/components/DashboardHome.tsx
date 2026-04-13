import React from 'react';
import { motion } from 'motion/react';
import { Users, UserCheck, FileText, TrendingUp, Clock, Calendar } from 'lucide-react';

export default function DashboardHome() {
  const stats = [
    { name: 'Total Siswa', value: '1,240', icon: Users, color: 'bg-blue-500', trend: '+12% dari bulan lalu' },
    { name: 'Hadir Hari Ini', value: '98%', icon: UserCheck, color: 'bg-emerald-500', trend: 'Stabil' },
    { name: 'Karyawan Aktif', value: '86', icon: UserCheck, color: 'bg-primary-600', trend: 'Lengkap' },
    { name: 'Laporan Masuk', value: '24', icon: FileText, color: 'bg-amber-500', trend: 'Perlu review' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-100"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="relative z-10">
          <h1 className="text-3xl font-black mb-2">Selamat Datang di Portal E-Absensi</h1>
          <p className="text-primary-100 font-medium max-w-md">Kelola kehadiran siswa dan karyawan SMK Prima Unggul dengan lebih mudah, cepat, dan transparan.</p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live</span>
            </div>
            <h3 className="text-slate-500 font-bold text-sm mb-1">{stat.name}</h3>
            <p className="text-2xl font-black text-slate-900 mb-2">{stat.value}</p>
            <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
              <TrendingUp size={12} className="text-emerald-500" /> {stat.trend}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity & Schedule */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black text-slate-900">Aktifitas Terbaru</h2>
              <button className="text-primary-600 font-bold text-sm">Lihat Semua</button>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                    <Clock size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">Absensi Siswa Kelas XII TKJ 1</p>
                    <p className="text-xs text-slate-400 font-medium">Oleh: Bpk. Ahmad Subarjo • 10 Menit yang lalu</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full uppercase">Selesai</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h2 className="text-xl font-black text-slate-900 mb-8">Kalender Akademik</h2>
            <div className="space-y-6">
              {[
                { date: '15 Apr', event: 'Ujian Tengah Semester' },
                { date: '22 Apr', event: 'Rapat Pleno Guru' },
                { date: '01 Mei', event: 'Hari Buruh Internasional' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-black leading-none">{item.date.split(' ')[0]}</span>
                    <span className="text-[10px] font-bold uppercase">{item.date.split(' ')[1]}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 leading-tight">{item.event}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-slate-50 text-slate-500 font-bold rounded-2xl hover:bg-primary-600 hover:text-white transition">
              Buka Kalender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
