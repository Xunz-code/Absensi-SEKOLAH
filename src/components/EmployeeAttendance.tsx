import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function EmployeeAttendance() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLogging, setIsLogging] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAbsen = () => {
    setIsLogging(true);
    setTimeout(() => {
      setIsLogging(false);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter tabular-nums">
          {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
          {currentTime.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-primary-50 rounded-[2.5rem] flex items-center justify-center text-primary-600 shadow-inner">
            <Camera size={48} />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900">Absensi Mandiri</h2>
          <p className="text-slate-500 font-medium">Pastikan Anda berada di area sekolah untuk melakukan absensi.</p>
        </div>

        <div className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 py-2 px-4 rounded-full w-fit mx-auto">
          <MapPin size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">Lokasi Terverifikasi</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={handleAbsen}
            disabled={isLogging}
            className={cn(
              "p-6 rounded-[2rem] font-black flex flex-col items-center gap-2 transition-all",
              status === 'success' ? "bg-emerald-500 text-white" : "bg-primary-600 text-white hover:bg-primary-700 shadow-xl shadow-primary-100"
            )}
          >
            {isLogging ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : status === 'success' ? (
              <CheckCircle size={24} />
            ) : (
              <Clock size={24} />
            )}
            <span>Absen Masuk</span>
          </button>

          <button 
            className="p-6 rounded-[2rem] bg-slate-100 text-slate-400 font-black flex flex-col items-center gap-2 cursor-not-allowed"
          >
            <Clock size={24} />
            <span>Absen Pulang</span>
          </button>
        </div>

        <div className="pt-6 border-t border-slate-50 flex items-center justify-center gap-3 text-slate-400">
          <AlertCircle size={16} />
          <p className="text-[10px] font-bold uppercase tracking-widest">Absen pulang tersedia mulai pukul 15:00</p>
        </div>
      </div>
    </div>
  );
}
