import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, ShieldCheck, Mail, Lock, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      // Redirect to app
      navigate('/app');
    } catch (err: any) {
      setError(err.message || 'Gagal login. Periksa kembali email dan password Anda.');
      // For demo purposes, allow bypass if needed or just show error
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-100/50 blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-50/50 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-200 mx-auto mb-6">
            <ShieldCheck size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Selamat Datang</h1>
          <p className="text-slate-500 font-medium">Masuk ke Sistem E-Absensi SMK Prima Unggul</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Sekolah</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@smkprimaunggul.sch.id" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Kata Sandi</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-primary-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary-200 hover:bg-primary-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Memproses...' : (
                <>
                  Masuk Sekarang <LogIn size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/" className="text-sm font-bold text-slate-400 hover:text-primary-600 transition">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
