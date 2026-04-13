-- Schema for SMK Prima Unggul Database

-- Majors Table
CREATE TABLE IF NOT EXISTS majors (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    icon TEXT,
    image_url TEXT
);

-- Users Table (Students & Teachers)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT CHECK(role IN ('student', 'teacher', 'admin')) NOT NULL,
    major_id TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (major_id) REFERENCES majors(id)
);

-- Attendance Table
CREATE TABLE IF NOT EXISTS attendance (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    status TEXT CHECK(status IN ('present', 'absent', 'late', 'sick')) NOT NULL,
    date DATE DEFAULT CURRENT_DATE,
    time TIME DEFAULT CURRENT_TIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Initial Data for Majors
INSERT INTO majors (id, name, icon, image_url) VALUES 
('TKJ', 'Teknik Komputer & Jaringan', '💻', 'https://picsum.photos/seed/smk-tkj-lab-students/400/300'),
('DKV', 'Desain Komunikasi Visual', '🎨', 'https://picsum.photos/seed/imac-design-studio-desk/400/300'),
('AKL', 'Akuntansi & Keuangan Lembaga', '📊', 'https://picsum.photos/seed/accounting-calculator-writing/400/300'),
('BC', 'Broadcasting & Perfilman', '🎥', 'https://picsum.photos/seed/broadcasting-video-camera/400/300'),
('MPLB', 'Manajemen Perkantoran & Layanan Bisnis', '🏢', 'https://picsum.photos/seed/office-admin-student-hijab/400/300'),
('BD', 'Bisnis Digital', '🛒', 'https://picsum.photos/seed/digital-business-laptop-icons/400/300')
ON CONFLICT (id) DO NOTHING;

-- Initial Admin User
INSERT INTO users (username, password, full_name, role) VALUES 
('admin', 'admin123', 'Administrator SMK', 'admin')
ON CONFLICT (username) DO NOTHING;
