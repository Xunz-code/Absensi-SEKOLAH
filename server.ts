import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import cors from 'cors';
import db from './database.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get('/api/majors', (req, res) => {
    try {
      const majors = db.prepare('SELECT * FROM majors').all();
      res.json(majors);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch majors' });
    }
  });

  app.get('/api/users', (req, res) => {
    try {
      const users = db.prepare('SELECT id, username, full_name, role, major_id FROM users').all();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });

  app.post('/api/attendance', (req, res) => {
    const { user_id, status } = req.body;
    try {
      const stmt = db.prepare('INSERT INTO attendance (user_id, status) VALUES (?, ?)');
      stmt.run(user_id, status);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to record attendance' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
