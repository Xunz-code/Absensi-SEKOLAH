/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './components/DashboardHome';
import EmployeeAttendance from './components/EmployeeAttendance';

// Placeholder components for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
    <h2 className="text-2xl font-black text-slate-900 mb-4">{title}</h2>
    <p className="text-slate-500 font-medium">Halaman ini sedang dalam tahap pengembangan.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="absensi-karyawan" element={<EmployeeAttendance />} />
          <Route path="absensi-siswa" element={<Placeholder title="Absensi Siswa" />} />
          <Route path="rekap" element={<Placeholder title="Rekap Absensi" />} />
          <Route path="data-siswa" element={<Placeholder title="Data Siswa" />} />
          <Route path="users" element={<Placeholder title="User Management" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
