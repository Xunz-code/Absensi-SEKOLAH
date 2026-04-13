import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserCheck, 
  Users, 
  FileText, 
  Database, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabase';
import { cn } from '../lib/utils';

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Mock user for demo if no supabase
        setUser({ email: 'admin@smkprimaunggul.sch.id', user_metadata: { full_name: 'Admin Sekolah', role: 'admin' } });
      } else {
        setUser(user);
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const role = user?.user_metadata?.role || 'admin';

  const menuItems = [
    { name: 'Dashboard', path: '/app', icon: LayoutDashboard, roles: ['admin', 'guru', 'staff'] },
    { name: 'Absensi Karyawan', path: '/app/absensi-karyawan', icon: UserCheck, roles: ['admin', 'guru', 'staff'] },
    { name: 'Absensi Siswa', path: '/app/absensi-siswa', icon: Users, roles: ['admin', 'guru'] },
    { name: 'Rekap Absensi', path: '/app/rekap', icon: FileText, roles: ['admin', 'guru'] },
    { name: 'Data Siswa', path: '/app/data-siswa', icon: Database, roles: ['admin'] },
    { name: 'User Management', path: '/app/users', icon: Settings, roles: ['admin'] },
  ];

  const filteredMenu = menuItems.filter(item => item.roles.includes(role));

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 bg-white border-r border-slate-100 transition-all duration-300 ease-in-out",
          isSidebarOpen ? "w-72" : "w-20"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary-100">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            {isSidebarOpen && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-black text-lg tracking-tight text-slate-900 truncate"
              >
                PRIMA UNGGUL
              </motion.span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {filteredMenu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all group",
                    isActive 
                      ? "bg-primary-600 text-white shadow-xl shadow-primary-200" 
                      : "text-slate-400 hover:text-primary-600 hover:bg-primary-50"
                  )}
                >
                  <item.icon size={22} className={cn("shrink-0", isActive ? "text-white" : "group-hover:text-primary-600")} />
                  {isSidebarOpen && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Footer Sidebar */}
          <div className="p-4 border-t border-slate-50">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="w-full flex items-center justify-center p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-primary-600 transition"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        isSidebarOpen ? "ml-72" : "ml-20"
      )}>
        {/* Top Header */}
        <header className="sticky top-0 z-40 glass px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-black text-slate-900">
              {filteredMenu.find(m => m.path === location.pathname)?.name || 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-primary-600 transition">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary-600 rounded-full border-2 border-white" />
            </button>
            
            <div className="flex items-center gap-4 pl-6 border-l border-slate-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900">{user?.user_metadata?.full_name || 'Admin User'}</p>
                <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">{role}</p>
              </div>
              <button 
                onClick={handleLogout}
                className="w-10 h-10 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
